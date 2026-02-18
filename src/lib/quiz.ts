/**
 * Utilitários para gerenciar o estado do quiz usando cookies
 */

import Cookies from 'js-cookie'

export interface QuizData {
    name: string
    phone: string
    completedAt: string
}

const QUIZ_COOKIE_KEY = 'pace_quiz_completed'
const COOKIE_EXPIRES_DAYS = 365 // 1 ano

/**
 * Verifica se o usuário já completou o quiz
 * Funciona no cliente (o middleware cuida da verificação no servidor)
 */
export function hasCompletedQuiz(): boolean {
    if (typeof window === 'undefined') {
        // Server-side: retorna false por padrão
        // O middleware já cuida da verificação no servidor
        return false
    }

    // Client-side: usar js-cookie
    try {
        const data = Cookies.get(QUIZ_COOKIE_KEY)
        return !!data
    } catch {
        return false
    }
}

/**
 * Obtém os dados do quiz completado
 * Funciona no cliente (para uso em Server Components, use cookies() diretamente)
 */
export function getQuizData(): QuizData | null {
    if (typeof window === 'undefined') {
        // Server-side: retorna null por padrão
        // Para uso em Server Components, use cookies() diretamente do next/headers
        return null
    }

    // Client-side
    try {
        const data = Cookies.get(QUIZ_COOKIE_KEY)
        if (!data) return null
        return JSON.parse(data) as QuizData
    } catch {
        return null
    }
}

/**
 * Salva os dados do quiz em um cookie
 */
export function saveQuizData(data: QuizData): void {
    if (typeof window === 'undefined') return

    try {
        // Verifica se está em produção usando window.location
        // Evita usar process.env que pode causar problemas no bundle do cliente
        const isProduction =
            window.location.hostname !== 'localhost' &&
            window.location.hostname !== '127.0.0.1' &&
            !window.location.hostname.startsWith('192.168.')

        Cookies.set(QUIZ_COOKIE_KEY, JSON.stringify(data), {
            expires: COOKIE_EXPIRES_DAYS,
            sameSite: 'lax',
            secure: isProduction,
        })
    } catch (error) {
        console.error('Erro ao salvar cookie:', error)
    }
}

/**
 * Limpa os dados do quiz (útil para testes ou logout)
 */
export function clearQuizData(): void {
    if (typeof window === 'undefined') return

    try {
        Cookies.remove(QUIZ_COOKIE_KEY)
    } catch {
        // Ignora erros
    }
}

