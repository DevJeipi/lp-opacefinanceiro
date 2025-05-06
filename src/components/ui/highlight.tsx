import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface HighlightProps {
    children: ReactNode
    className?: string
}

export function Highlight({ children, className }: HighlightProps) {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="bg-primary-black h-8 w-0.5 animate-[pulse_1s_ease-in-out_infinite]"></div>
            <div
                className={twMerge(
                    'bg-primary-orange/30 flex items-center justify-center px-4 text-center',
                    className
                )}
            >
                {children}
            </div>
            <div className="bg-primary-black h-8 w-0.5 animate-[pulse_1s_ease-in-out_infinite]"></div>
        </div>
    )
}
