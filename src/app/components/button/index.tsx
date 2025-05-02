'use client'

import { cn } from "./../../helpers/cn"

export function Button({ children, color = "orange", }: { children: React.ReactNode; color?: "orange" | "blue"; }) {

    const defaultButtonClasses = "flex items-center justify-center gap-2 px-4 py-2 sm:text-sm md:text-md text-xs font-bold font-heading rounded-tl-3xl rounded-br-3xl font-bold focus:outline-none cursor-pointer transition-all duration-400 shadow-md hover:scale-102"

    const colors = {
        orange: "bg-gradient-orange text-primary-white",
        blue: "bg-primary-blue text-primary-white hover:bg-secondary-blue"
    }

    return (
        <button className={cn(defaultButtonClasses, colors[color])}>
            {children}
        </button>
    )
}