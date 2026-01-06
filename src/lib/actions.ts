// lib/actions.ts
'use server'

import { z } from 'zod'

export type State = {
    message: string | null
    errors?: {
        name?: string[]
        email?: string[]
        phone?: string[]
    }
    redirectUrl?: string | null
}

export type QuizSubmissionResult = {
    success: boolean
    message?: string
}

const FormSchema = z.object({
    name: z.string().min(2, { message: 'O nome é obrigatório.' }),
    email: z.string().email({ message: 'Por favor, insira um email válido.' }),
    phone: z
        .string()
        .min(10, { message: 'O número de Whatsapp parece curto demais.' }),
    source: z.enum(['curso', 'ebook']),
})

export async function submitForm(
    prevState: State,
    formData: FormData
): Promise<State> {
    const validatedFields = FormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        source: formData.get('source'),
    })

    if (!validatedFields.success) {
        return {
            message: 'Falha no envio. Verifique os campos.',
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, phone, source } = validatedFields.data
    const submissionDate = new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
    })

    try {
        // Envia dados para o n8n webhook
        const response = await fetch(process.env.N8N_WEBHOOK_URL!, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                source,
                submissionDate,
            }),
        })

        if (!response.ok) {
            throw new Error(`Erro no webhook: ${response.status}`)
        }

        // Define a URL de redirecionamento baseada na source
        const redirectUrl =
            source === 'curso'
                ? 'https://www.udemy.com/course/curso-do-cheque-especial-a-independencia-financeira/' // https://pay.hotmart.com/E101190894V?checkoutMode=10
                : '/ebook/recompensa'

        return {
            message: 'Inscrição realizada! Você será redirecionado em breve.',
            errors: {},
            redirectUrl,
        }
    } catch (error) {
        console.error('Erro ao enviar para o n8n:', error)
        return {
            message: 'Ocorreu um erro no servidor. Tente novamente mais tarde.',
            errors: {},
        }
    }
}

/**
 * Envia os dados do quiz para o webhook do n8n
 */
export async function submitQuizData(
    name: string,
    phone: string
): Promise<QuizSubmissionResult> {
    // Validação básica
    if (!name || name.trim().length < 2) {
        return {
            success: false,
            message: 'Nome inválido',
        }
    }

    const phoneDigits = phone.replace(/\D/g, '')
    const phoneDigitsLength = phoneDigits.length
    if (!phone || phoneDigitsLength < 10) {
        return {
            success: false,
            message: 'Telefone inválido',
        }
    }

    const submissionDate = new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
    })

    try {
        // Usa a mesma variável de ambiente ou uma específica para quiz
        // Se quiser usar um webhook diferente para quiz, crie N8N_QUIZ_WEBHOOK_URL
        const webhookUrl =
            process.env.N8N_QUIZ_WEBHOOK_URL || process.env.N8N_WEBHOOK_URL

        if (!webhookUrl) {
            console.error('N8N_WEBHOOK_URL não configurada')
            return {
                success: false,
                message: 'Configuração do servidor não encontrada',
            }
        }

        const requestBody = {
            name: name.trim(),
            phone: phone.trim(),
            source: 'quiz',
            submissionDate,
            completedAt: new Date().toISOString(),
        }

        // Envia dados para o n8n webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })

        if (!response.ok) {
            throw new Error(`Erro no webhook: ${response.status}`)
        }

        return {
            success: true,
            message: 'Dados enviados com sucesso',
        }
    } catch (error) {
        console.error('Erro ao enviar dados do quiz para o n8n:', error)
        return {
            success: false,
            message: 'Erro ao enviar dados. Tente novamente mais tarde.',
        }
    }
}
