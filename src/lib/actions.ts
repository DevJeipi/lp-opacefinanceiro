// lib/actions.ts
'use server'

import { z } from 'zod'

export type QuizSubmissionResult = {
    success: boolean
    message?: string
}
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
