'use client'

import { X, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Announcement() {
    const [isOpen, setIsOpen] = useState(true)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!isOpen) return null

    return (
        <div
            className={`animate-in fade-in slide-in-from-top-2 fixed top-0 z-50 w-full transition-all duration-500 ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        >
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-4 py-3 shadow-lg sm:px-6 sm:py-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex flex-1 items-center gap-2">
                        <Zap className="h-5 w-5 flex-shrink-0 animate-pulse text-white" />
                        <p className="text-sm font-bold text-white sm:text-base">
                            Oportunidade exclusiva!
                        </p>
                    </div>

                    <a
                        href="#pricing"
                        className="inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold whitespace-nowrap text-amber-600 shadow-md transition-all hover:scale-105 hover:shadow-lg active:scale-95"
                    >
                        BLACK 50% OFF
                    </a>

                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Fechar"
                        className="ml-auto flex-shrink-0 rounded-lg p-1.5 text-white transition-colors hover:bg-white/20 active:bg-white/30"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}
