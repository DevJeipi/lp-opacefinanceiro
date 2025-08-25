// lib/actions.ts
'use server'

import { z } from 'zod'
import { google } from 'googleapis'

export type State = {
    message: string | null
    errors?: {
        name?: string[]
        email?: string[]
        number?: string[]
    }
    redirectUrl?: string | null
}

const FormSchema = z.object({
    name: z.string().min(2, { message: 'O nome é obrigatório.' }),
    email: z.string().email({ message: 'Por favor, insira um email válido.' }),
    number: z
        .string()
        .min(10, { message: 'O número de Whatsapp parece curto demais.' }),
    source: z.enum(['curso', 'ebook']), // Validação da origem
})

export async function submitForm(
    prevState: State,
    formData: FormData
): Promise<State> {
    const validatedFields = FormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        number: formData.get('number'),
        source: formData.get('source'),
    })

    if (!validatedFields.success) {
        return {
            message: 'Falha no envio. Verifique os campos.',
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, number, source } = validatedFields.data
    const submissionDate = new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
    })

    // --- LÓGICA CONDICIONAL ---
    let sheetName = ''
    let redirectUrl = null

    if (source === 'curso') {
        sheetName = 'Leads Curso'
        redirectUrl = 'https://pay.hotmart.com/E101190894V?checkoutMode=10'
    } else if (source === 'ebook') {
        sheetName = 'Leads Ebook'
        redirectUrl = '/ORenascimentoFinanceiro.pdf'
    }
    // -------------------------

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(
                    /\\n/g,
                    '\n'
                ),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        })

        const sheets = google.sheets({
            auth,
            version: 'v4',
        })

        // NOVO: O 'range' agora usa a variável 'sheetName' para ser dinâmico
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: `${sheetName}!A:D`, // Usamos o nome da aba dinamicamente
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    // A ordem aqui deve ser a mesma das colunas na planilha
                    [name, email, number, submissionDate],
                ],
            },
        })

        return {
            message: 'Inscrição realizada! Você será redirecionado em breve.',
            errors: {},
            redirectUrl: redirectUrl, // Retorna a URL de redirecionamento correta
        }
    } catch (error) {
        console.error('Erro ao enviar para o Google Sheets:', error)
        return {
            message: 'Ocorreu um erro no servidor. Tente novamente mais tarde.',
            errors: {},
        }
    }
}
