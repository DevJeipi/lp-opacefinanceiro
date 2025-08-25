// app/components/LeadCaptureTrigger.tsx
'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import FormPopup from './FormPopup'

// Adicionamos 'color' e 'spanText' como props opcionais
interface LeadCaptureTriggerProps {
    source: 'curso' | 'ebook'
    buttonText: string
    color?: 'orange' | 'secondaryorange' | 'blue' // Prop de cor
    spanText?: string // Prop para o texto do span
}

export function LeadCaptureTrigger({
    source,
    buttonText,
    color = 'orange', // Valor padrão 'orange'
    spanText = 'Clique no botão acima', // Valor padrão para o texto
}: LeadCaptureTriggerProps) {
    const [isModalOpen, setModalOpen] = useState(false)

    return (
        <div className="flex flex-col items-center justify-center gap-1">
            {/* Passamos a prop 'color' para o componente Button */}
            <Button onClick={() => setModalOpen(true)} color={color}>
                {buttonText}
            </Button>

            {/* Renderizamos o span com o texto recebido via prop */}
            {spanText && (
                <span className="font-body text-primary-black text-center text-sm">
                    {spanText}
                </span>
            )}

            <FormPopup
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                source={source}
            />
        </div>
    )
}
