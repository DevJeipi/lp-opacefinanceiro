'use client'

import { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { submitForm } from '@/lib/actions'
import { X } from 'lucide-react'
import Image from 'next/image'
import logo from '../../public/logomark-pacefinanceiro-removebg.webp'

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending} // Desabilita o botão durante o envio
            className="bg-primary-blue focus:border-primary-blue border-primary-blue w-full rounded-sm border p-6 text-2xl font-bold transition-all duration-300 hover:scale-102 focus:bg-transparent disabled:cursor-not-allowed disabled:bg-gray-500"
        >
            {pending ? 'Enviando...' : 'Fazer inscrição'}
        </button>
    )
}

interface FormPopupProps {
    isOpen: boolean
    onClose: () => void
    source: 'curso' | 'ebook' // <-- Contexto obrigatório
}

export default function FormPopup({ isOpen, onClose, source }: FormPopupProps) {
    const [state, formAction] = useFormState(submitForm, {
        message: null,
        errors: {},
        redirectUrl: null,
    })

    // LÓGICA DE REDIRECIONAMENTO
    useEffect(() => {
        if (state?.redirectUrl) {
            // Quando a URL de redirecionamento chegar do servidor, navega o usuário
            window.location.href = state.redirectUrl
        }
    }, [state?.redirectUrl]) // O gatilho é a chegada da URL

    if (!isOpen) return null

    return (
        <div className="text-primary-white fixed inset-0 z-50">
            {' '}
            {/* Overlay */}
            <div
                className="flex h-full w-full flex-col items-center justify-center bg-black/80 p-8"
                onClick={(e) => e.stopPropagation()}
            >
                {' '}
                <X
                    className="absolute top-0 right-0 m-8 cursor-pointer"
                    size={48}
                    onClick={onClose}
                />
                <Image
                    src={logo}
                    alt="Logo do O Pace Financeiro"
                    width={70}
                    height={37}
                    className="mb-4"
                />
                <h1 className="text-2xl font-bold">
                    Preencha os campos abaixo para entrar no link:
                </h1>
                <form
                    action={formAction}
                    className="flex w-full max-w-md flex-col gap-4 py-8"
                >
                    <div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Seu nome completo*"
                            className="focus:ring-primary-orange bg-primary-blue/40 w-full rounded-sm border border-gray-300 p-4 text-xl focus:ring-2 focus:outline-none"
                            required
                        />
                        {state.errors?.name && (
                            <p className="mt-1 text-sm text-red-500">
                                {state.errors.name[0]}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Seu melhor email*"
                            className="focus:ring-primary-orange bg-primary-blue/40 w-full rounded-sm border border-gray-300 p-4 text-xl focus:ring-2 focus:outline-none"
                            required
                        />
                        {state.errors?.email && (
                            <p className="mt-1 text-sm text-red-500">
                                {state.errors.email[0]}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="number"
                            id="number"
                            placeholder="Whatsapp com DDD*"
                            className="focus:ring-primary-orange bg-primary-blue/40 w-full rounded-sm border border-gray-300 p-4 text-xl focus:ring-2 focus:outline-none"
                            required
                        />
                        {state.errors?.number && (
                            <p className="mt-1 text-sm text-red-500">
                                {state.errors.number[0]}
                            </p>
                        )}
                    </div>
                    {/*  CAMPO OCULTO  */}
                    <input type="hidden" name="source" value={source} />
                    <SubmitButton />

                    {/* Mensagem de sucesso/redirecionando */}
                    {state?.message && !state.redirectUrl && (
                        <p className="mt-4 rounded-md bg-blue-100 p-3 text-center text-blue-800">
                            Processando...
                        </p>
                    )}
                    {state?.redirectUrl && (
                        <p className="mt-4 rounded-md bg-green-100 p-3 text-center text-green-800">
                            {state.message}
                        </p>
                    )}
                </form>
                <div className="bg-primary-white mb-8 h-0.25 w-full"></div>
                <span className="font-bold">
                    Ao enviar seus dados você confirma que está de acordo em
                    receber comunicações do O Pace Financeiro.
                </span>
            </div>
        </div>
    )
}
