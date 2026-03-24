'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { saveQuizData } from '@/lib/quiz'
import { submitQuizData } from '@/lib/actions'
import fotoLogo from '../../../public/logomark-pacefinanceiro-removebg.webp'
import { ChevronDown } from 'lucide-react'

type QuizStep = 'name' | 'phone'

interface QuizFormProps {
    onComplete?: () => void
}

export function QuizForm({ onComplete }: QuizFormProps = {}) {
    const router = useRouter()
    const [step, setStep] = useState<QuizStep>('name')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const currentStep = step === 'name' ? 1 : 2
    const totalSteps = 2
    const progress = step === 'name' ? 50 : 100

    const validateName = (value: string): string | undefined => {
        if (!value.trim()) {
            return 'O nome é obrigatório'
        }
        if (value.trim().length < 2) {
            return 'O nome deve ter pelo menos 2 caracteres'
        }
        return undefined
    }

    const validatePhone = (value: string): string | undefined => {
        if (!value.trim()) {
            return 'O número é obrigatório'
        }
        const phoneDigits = value.replace(/\D/g, '')
        if (phoneDigits.length < 10) {
            return 'O número deve ter pelo menos 10 dígitos'
        }
        return undefined
    }

    const handleNameContinue = () => {
        const error = validateName(name)
        if (error) {
            setErrors({ name: error })
            return
        }
        setErrors({})
        setStep('phone')
    }

    const handlePhoneContinue = async () => {
        const error = validatePhone(phone)
        if (error) {
            setErrors({ phone: error })
            return
        }

        setIsSubmitting(true)
        setErrors({})

        try {
            const quizData = {
                name: name.trim(),
                phone: phone.trim(),
                completedAt: new Date().toISOString(),
            }

            // Salva no cookie localmente
            try {
                saveQuizData(quizData)
            } catch (saveError) {
                throw saveError
            }

            // Envia para o webhook do n8n
            const result = await submitQuizData(quizData.name, quizData.phone)

            if (!result.success) {
                // Se falhar o envio, ainda permite continuar (dados já estão no cookie)
                console.warn(
                    'Aviso: Falha ao enviar dados para o servidor, mas dados salvos localmente'
                )
            }

            // Pequeno delay para feedback visual antes de redirecionar
            await new Promise((resolve) => setTimeout(resolve, 500))

            // Se tem callback, chama ele (para fechar modal e redirecionar)
            if (onComplete) {
                onComplete()
            } else {
                // Fallback: redireciona para a home se não tiver callback
                router.push('/')
            }
        } catch (error) {
            console.error('Erro ao salvar dados:', error)
            // Mesmo com erro, tenta redirecionar se o cookie foi salvo
            setErrors({ phone: 'Erro ao salvar dados. Tente novamente.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    const formatPhone = (value: string) => {
        const numbers = value.replace(/\D/g, '')

        // Se começar com 55 e tiver 11 ou mais dígitos, trata como número internacional
        if (numbers.startsWith('55') && numbers.length >= 11) {
            // Formato: +55 (DDD) Número
            const ddd = numbers.substring(2, 4)
            const numero = numbers.substring(4)
            if (numero.length <= 8) {
                return `+55 (${ddd}) ${numero.replace(/(\d{4})(\d{0,4})/, '$1-$2')}`
            } else {
                return `+55 (${ddd}) ${numero.replace(/(\d{5})(\d{0,4})/, '$1-$2')}`
            }
        }

        // Formato brasileiro padrão (DDD + número)
        if (numbers.length <= 10) {
            return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3')
        } else {
            // Para números com 11 dígitos (formato brasileiro sem código de país)
            return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3')
        }
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhone(e.target.value)
        setPhone(formatted)
        if (errors.phone) {
            setErrors({ ...errors, phone: undefined })
        }
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        if (errors.name) {
            setErrors({ ...errors, name: undefined })
        }
    }

    return (
        <div className="from-primary-blue via-primary-blue to-secondary-blue w-full max-w-lg overflow-hidden rounded-lg bg-gradient-to-br p-6 shadow-2xl md:p-8">
            {/* Header com Logo e Texto */}
            <div className="mb-6 flex flex-col items-center gap-4">
                <Image
                    src={fotoLogo}
                    width={120}
                    height={64}
                    alt="Logo do Pace Financeiro"
                    className="h-auto w-auto"
                    priority
                />
                <div className="flex items-center gap-2">
                    <ChevronDown className="text-primary-white" size={18} />
                    <p className="font-body text-primary-white text-lg">
                        Preencha o formulário abaixo
                    </p>
                </div>
            </div>

            {/* Card do Formulário */}
            <div className="bg-primary-white flex flex-col rounded-lg p-6 md:p-8">
                {/* Título e Label */}
                <div className="mb-4">
                    <label className="font-body text-primary-black mb-2 block text-sm font-medium">
                        {step === 'name' ? 'Nome Completo*' : 'Telefone*'}
                    </label>
                    <Input
                        type={step === 'name' ? 'text' : 'tel'}
                        value={step === 'name' ? name : phone}
                        onChange={
                            step === 'name'
                                ? handleNameChange
                                : handlePhoneChange
                        }
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                if (step === 'name' && !errors.name) {
                                    handleNameContinue()
                                } else if (
                                    step === 'phone' &&
                                    !isSubmitting &&
                                    !errors.phone
                                ) {
                                    handlePhoneContinue()
                                }
                            }
                        }}
                        placeholder={
                            step === 'name'
                                ? 'Digite seu nome completo'
                                : '(00) 00000-0000'
                        }
                        className={cn(
                            'border-primary-blue/30 bg-primary-white font-body text-primary-black placeholder:text-primary-blue/40 focus:border-primary-orange focus:ring-primary-orange/20 w-full rounded-md border px-4 py-3 text-base transition-colors focus:ring-2 focus:outline-none',
                            errors.name || errors.phone
                                ? 'border-secondary-orange focus:ring-secondary-orange/20'
                                : ''
                        )}
                        autoFocus
                    />
                    {(errors.name || errors.phone) && (
                        <p className="font-body text-secondary-orange mt-2 text-sm">
                            {errors.name || errors.phone}
                        </p>
                    )}
                </div>

                {/* Aviso de Privacidade - Apenas na primeira etapa */}
                {step === 'name' && (
                    <div className="bg-primary-blue/5 mb-4 rounded-md p-4">
                        <p className="font-body text-primary-black/80 text-sm leading-relaxed">
                            Utilizaremos seus dados para enviar conteúdos
                            personalizados, ofertas e informações relevantes
                            alinhadas aos seus interesses. Seguindo, você
                            concorda com os termos e autoriza a comunicação de
                            qualidade, incluindo avisos e marketing.
                        </p>
                    </div>
                )}

                {/* Barra de Progresso e Botão */}
                <div className="mt-4 flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                        <span className="font-body text-primary-black/70 text-sm font-medium">
                            {currentStep}/{totalSteps}
                        </span>
                        <Progress
                            value={progress}
                            className="bg-primary-blue/20 h-2 flex-1 sm:w-32"
                        >
                            <div className="bg-gradient-animated h-full w-full" />
                        </Progress>
                    </div>
                    <Button
                        onClick={
                            step === 'name'
                                ? handleNameContinue
                                : handlePhoneContinue
                        }
                        color="orange"
                        className="w-full sm:w-auto sm:min-w-[120px]"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Salvando...' : 'Próximo'}
                    </Button>
                </div>

                {/* Botão Voltar - Apenas na segunda etapa */}
                {step === 'phone' && (
                    <div className="mt-3 text-center">
                        <button
                            type="button"
                            onClick={() => setStep('name')}
                            className="font-body text-primary-blue hover:text-primary-orange text-sm underline transition-colors"
                        >
                            Voltar
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
