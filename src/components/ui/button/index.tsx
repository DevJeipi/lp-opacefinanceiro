'use client'

import { cn } from '@/lib/utils'

export function Button({
    children,
    color = 'orange',
}: {
    children: React.ReactNode
    color?: 'orange' | 'blue'
}) {
    const defaultButtonClasses =
        'flex items-center justify-center gap-2 px-6 py-2 sm:text-sm md:text-md text-xs font-bold font-heading rounded-tl-3xl rounded-br-3xl font-bold focus:outline-none cursor-pointer transition-all duration-400 shadow-md hover:scale-102'

    const colors = {
        orange: 'bg-gradient-animated text-primary-white hover:opacity-70',
        blue: 'bg-primary-blue text-primary-white hover:bg-secondary-blue',
    }

    const spanColors = {
        orange: 'text-primary-black',
        blue: 'text-primary-white',
    }

    return (
        <div className="flex flex-col">
            <button className={cn(defaultButtonClasses, colors[color])}>
                {children}
            </button>
            <span
                className={cn(
                    'font-body text-center text-sm',
                    spanColors[color]
                )}
            >
                Clique no botão acima
            </span>
        </div>
    )
}
