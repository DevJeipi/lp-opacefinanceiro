'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { QuizDialog } from './QuizDialog'
import { hasCompletedQuiz } from '@/lib/quiz'

const CHECKOUT_URL = 'https://pay.hotmart.com/E101190894V?checkoutMode=10'

interface QuizContextType {
    openQuiz: () => void
    closeQuiz: () => void
    isOpen: boolean
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)

    const openQuiz = () => {
        // Verifica se o usuário já completou o quiz (tem cookie)
        if (hasCompletedQuiz()) {
            // Se já tem cookie, redireciona diretamente para o checkout
            window.location.href = CHECKOUT_URL
            return
        }
        // Se não tem cookie, abre o modal do formulário
        setIsOpen(true)
    }

    const closeQuiz = () => setIsOpen(false)

    const handleComplete = () => {
        // Redireciona para o link do curso após completar
        window.location.href = CHECKOUT_URL
    }

    return (
        <QuizContext.Provider value={{ openQuiz, closeQuiz, isOpen }}>
            {children}
            <QuizDialog
                isOpen={isOpen}
                onClose={closeQuiz}
                onComplete={handleComplete}
            />
        </QuizContext.Provider>
    )
}

export function useQuiz() {
    const context = useContext(QuizContext)
    // Retorna um objeto com funções vazias se não estiver no provider
    // Isso permite que o Button funcione mesmo sem o provider
    if (context === undefined) {
        return {
            openQuiz: () => {
                // Fallback: verifica cookie mesmo sem provider
                if (typeof window !== 'undefined') {
                    if (hasCompletedQuiz()) {
                        window.location.href = CHECKOUT_URL
                    } else {
                        console.warn('QuizProvider não encontrado. Redirecionando diretamente.')
                        window.location.href = CHECKOUT_URL
                    }
                }
            },
            closeQuiz: () => { },
            isOpen: false,
        }
    }
    return context
}

