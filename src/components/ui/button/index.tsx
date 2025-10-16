'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'

type LinkType = 'curso' | 'ebook'

type ButtonProps = {
    children: React.ReactNode
    color?: 'orange' | 'secondaryorange' | 'blue'
    className?: string
    link?: LinkType
    onClick?: () => void // A prop que faz toda a mágica acontecer!
}

export function Button({
    children,
    color = 'orange',
    className,
    link = 'curso',
    onClick,
}: ButtonProps) {
    const defaultButtonClasses =
        'flex items-center justify-center gap-2 px-6 py-2 sm:text-sm md:text-md text-xs font-bold font-heading rounded-tl-3xl rounded-br-3xl font-bold focus:outline-none cursor-pointer transition-all duration-400 shadow-md hover:scale-102'

    const colors = {
        orange: 'bg-gradient-animated text-primary-white hover:opacity-70',
        secondaryorange:
            'bg-gradient-animated text-primary-white hover:opacity-70',
        blue: 'bg-primary-blue text-primary-white hover:bg-secondary-blue',
    }

    const spanColors = {
        orange: 'text-primary-black',
        secondaryorange: 'text-primary-white',
        blue: 'text-primary-white',
    }

    const links: Record<LinkType, string> = {
        curso: 'https://www.udemy.com/course/curso-do-cheque-especial-a-independencia-financeira/', // https://pay.hotmart.com/E101190894V?checkoutMode=10
        ebook: '/ebook/recompensa',
    }

    if (onClick) {
        return (
            <button
                type="button" // Garante que ele não envie um formulário por acidente
                onClick={onClick}
                className={cn(defaultButtonClasses, colors[color], className)}
            >
                {children}
            </button>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <Link
                href={links[link]}
                aria-label="Acessar checkout de compra do curso"
                className={cn(defaultButtonClasses, colors[color], className)}
            >
                {children}
            </Link>
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
