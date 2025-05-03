import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface HighlightProps {
    children: ReactNode
    className?: string
}

export function Highlight({ children, className }: HighlightProps) {
    return (
        <div className="flex items-center justify-center flex-row">
            <div className="w-0.5 h-8 bg-primary-black animate-[pulse_1s_ease-in-out_infinite]"></div>
            <div className={twMerge("flex items-center justify-center text-center px-4 bg-primary-orange/30", className)}>
                {children}
            </div>
            <div className="w-0.5 h-8 bg-primary-black animate-[pulse_1s_ease-in-out_infinite]"></div>
        </div>
    )
}