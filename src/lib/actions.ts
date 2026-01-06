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
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/a5abec79-40b3-429f-bf03-6a6603abed0c', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'actions.ts:96', message: 'submitQuizData entry', data: { name, phone, phoneDigits: phone.replace(/\D/g, ''), phoneDigitsLength: phone.replace(/\D/g, '').length }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'A' }) }).catch(() => { });
    // #endregion
    // Validação básica
    if (!name || name.trim().length < 2) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5abec79-40b3-429f-bf03-6a6603abed0c', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'actions.ts:102', message: 'name validation failed', data: { name, nameTrimLength: name.trim().length }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'A' }) }).catch(() => { });
        // #endregion
        return {
            success: false,
            message: 'Nome inválido',
        }
    }

    const phoneDigits = phone.replace(/\D/g, '')
    const phoneDigitsLength = phoneDigits.length
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/a5abec79-40b3-429f-bf03-6a6603abed0c', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'actions.ts:110', message: 'phone validation check', data: { phone, phoneDigits, phoneDigitsLength, isValid: phoneDigitsLength >= 10 }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'A' }) }).catch(() => { });
    // #endregion
    if (!phone || phoneDigitsLength < 10) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5abec79-40b3-429f-bf03-6a6603abed0c', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'actions.ts:112', message: 'phone validation failed', data: { phone, phoneDigits, phoneDigitsLength }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'A' }) }).catch(() => { });
        // #endregion
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

        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5abec79-40b3-429f-bf03-6a6603abed0c', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'actions.ts:125', message: 'webhook check', data: { hasWebhookUrl: !!webhookUrl, webhookUrlLength: webhookUrl?.length, hasQuizWebhook: !!process.env.N8N_QUIZ_WEBHOOK_URL, hasDefaultWebhook: !!process.env.N8N_WEBHOOK_URL, webhookUrl: webhookUrl || 'NOT_SET' }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => { });
        // #endregion
        if (!webhookUrl) {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/a5abec79-40b3-429f-bf03-6a6603abed0c', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'actions.ts:143', message: 'webhook URL missing', data: { hasQuizWebhook: !!process.env.N8N_QUIZ_WEBHOOK_URL, hasDefaultWebhook: !!process.env.N8N_WEBHOOK_URL }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => { });
            // #endregion
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
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5abec79-40b3-429f-bf03-6a6603abed0c', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'actions.ts:139', message: 'before fetch', data: { requestBody, phoneDigits: requestBody.phone.replace(/\D/g, '') }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => { });
        // #endregion
        // Envia dados para o n8n webhook
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5abec79-40b3-429f-bf03-6a6603abed0c', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'actions.ts:161', message: 'fetch start', data: { webhookUrl, requestBody }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => { });
        // #endregion
        let response
        try {
            response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            })
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/a5abec79-40b3-429f-bf03-6a6603abed0c', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'actions.ts:171', message: 'fetch response received', data: { ok: response.ok, status: response.status, statusText: response.statusText, headers: Object.fromEntries(response.headers.entries()) }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => { });
            // #endregion
        } catch (fetchError) {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/a5abec79-40b3-429f-bf03-6a6603abed0c', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'actions.ts:175', message: 'fetch error caught', data: { error: String(fetchError), errorName: fetchError instanceof Error ? fetchError.name : undefined, errorMessage: fetchError instanceof Error ? fetchError.message : undefined }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => { });
            // #endregion
            throw fetchError
        }

        if (!response.ok) {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/a5abec79-40b3-429f-bf03-6a6603abed0c', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'actions.ts:153', message: 'response not ok', data: { status: response.status, statusText: response.statusText }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => { });
            // #endregion
            throw new Error(`Erro no webhook: ${response.status}`)
        }

        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5abec79-40b3-429f-bf03-6a6603abed0c', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'actions.ts:157', message: 'submitQuizData success', data: {}, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'A' }) }).catch(() => { });
        // #endregion
        return {
            success: true,
            message: 'Dados enviados com sucesso',
        }
    } catch (error) {
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/a5abec79-40b3-429f-bf03-6a6603abed0c', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'actions.ts:164', message: 'submitQuizData catch error', data: { error: String(error), errorStack: error instanceof Error ? error.stack : undefined }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'B' }) }).catch(() => { });
        // #endregion
        console.error('Erro ao enviar dados do quiz para o n8n:', error)
        return {
            success: false,
            message: 'Erro ao enviar dados. Tente novamente mais tarde.',
        }
    }
}
