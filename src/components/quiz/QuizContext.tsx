'use client'

import { createContext, useContext, ReactNode } from 'react'

const CHECKOUT_URL = 'https://pay.hotmart.com/E101190894V?checkoutMode=10'

interface QuizContextType {
    openQuiz: () => void
    closeQuiz: () => void
    isOpen: boolean
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: ReactNode }) {
    const openQuiz = () => {
        if (typeof window !== 'undefined') {
            window.location.href = CHECKOUT_URL
        }
    }

    const closeQuiz = () => {}

    return (
        <QuizContext.Provider value={{ openQuiz, closeQuiz, isOpen: false }}>
            {children}
        </QuizContext.Provider>
    )
}

export function useQuiz() {
    const context = useContext(QuizContext)
    if (context === undefined) {
        return {
            openQuiz: () => {
                if (typeof window !== 'undefined') {
                    window.location.href = CHECKOUT_URL
                }
            },
            closeQuiz: () => {},
            isOpen: false,
        }
    }
    return context
}

