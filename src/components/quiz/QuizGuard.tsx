'use client'

import { useEffect, useState } from 'react'
import { hasCompletedQuiz } from '@/lib/quiz'

export function QuizGuard({ children }: { children: React.ReactNode }) {
    const [isAuthorized, setIsAuthorized] = useState(false)

    useEffect(() => {
        // Verificação adicional no cliente (backup)
        // O middleware já redireciona no servidor, mas mantemos o guard como backup
        const completed = hasCompletedQuiz()
        setIsAuthorized(completed)
    }, [])

    // O middleware já redireciona, mas mantemos o guard como backup
    if (!isAuthorized) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-primary-black">
                <div className="text-center">
                    <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-primary-orange border-t-transparent mx-auto" />
                    <p className="font-body text-primary-white">Carregando...</p>
                </div>
            </div>
        )
    }

    return <>{children}</>
}

