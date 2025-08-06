'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    TrendingUp,
    Clock,
    CheckCircle,
    Shield,
    Zap,
    Target,
    Award,
    Timer,
} from 'lucide-react'
import HotmartWidget from '@/components/HotmartWidget'

export default function ETFUpsellPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <header className="border-b bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#f05824] to-[#142c43]">
                                <TrendingUp className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-[#142c43]">
                                    Curso Pocket ETF
                                </h1>
                                <p className="text-sm text-gray-600">
                                    Oferta Especial
                                </p>
                            </div>
                        </div>
                        <Badge
                            variant="destructive"
                            className="bg-[#f05824] hover:bg-[#f05824]/90"
                        >
                            <Timer className="mr-1 h-4 w-4" />
                            Oferta Limitada
                        </Badge>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative overflow-hidden py-16 lg:py-24">
                <div className="absolute inset-0 bg-gradient-to-r from-[#142c43] to-[#142c43]/90"></div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="text-white">
                            <Badge className="mb-6 border-none bg-[#f05824] text-white hover:bg-[#f05824]/90">
                                <Zap className="mr-2 h-4 w-4" />
                                Curso Pocket Exclusivo
                            </Badge>

                            <h1 className="mb-6 text-4xl leading-tight font-bold lg:text-6xl">
                                Domine os{' '}
                                <span className="text-[#f05824]">ETFs</span> em
                                Apenas
                                <span className="block text-[#f05824]">
                                    22 minutos
                                </span>
                            </h1>

                            <p className="mb-8 text-xl leading-relaxed text-gray-300 lg:text-2xl">
                                O método mais rápido e prático para começar a
                                investir em ETFs com segurança e rentabilidade
                                comprovada.
                            </p>

                            <div className="flex items-center space-x-6 text-sm">
                                <div className="flex items-center">
                                    <Shield className="mr-2 h-5 w-5 text-green-400" />
                                    <span>Garantia 7 dias</span>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="mr-2 h-5 w-5 text-yellow-400" />
                                    <span>Acesso vitalício</span>
                                </div>
                            </div>
                        </div>

                        <HotmartWidget />
                    </div>
                </div>
            </section>

            {/* Benefícios Section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-[#142c43] lg:text-4xl">
                            Por que escolher nosso Curso Pocket?
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl text-gray-600">
                            Desenvolvido por um especialista, conhecimento
                            testado na prática.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                icon: Target,
                                title: 'Foco no Essencial',
                                description:
                                    'Apenas o que você precisa saber para começar a investir em ETFs com segurança.',
                            },
                            {
                                icon: Clock,
                                title: 'Rápido e Prático',
                                description:
                                    'Conteúdo direto ao ponto, sem enrolação ou teoria desnecessária.',
                            },
                            {
                                icon: Shield,
                                title: 'Risco Zero',
                                description:
                                    'Garantia incondicional de 7 dias. Não gostou? Devolvemos seu dinheiro.',
                            },
                        ].map((benefit, index) => (
                            <Card
                                key={index}
                                className="border-none shadow-lg transition-shadow duration-300 hover:shadow-xl"
                            >
                                <CardContent className="p-8 text-center">
                                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#f05824] to-[#142c43]">
                                        <benefit.icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold text-[#142c43]">
                                        {benefit.title}
                                    </h3>
                                    <p className="leading-relaxed text-gray-600">
                                        {benefit.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detalhes do Curso */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="mb-8 text-3xl font-bold text-[#142c43] lg:text-4xl">
                                Conteúdo Programático
                            </h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        module: 'Aula 1',
                                        title: 'Introdução aos ETFs',
                                        duration: '12 min',
                                        topics: [
                                            'O que são ETFs',
                                            'Tipos de ETFs disponíveis',
                                        ],
                                    },
                                    {
                                        module: 'Aula 2',
                                        title: 'Investimentos via fundos ETFs',
                                        duration: '10 min',
                                        topics: [
                                            'Vantagens e desvantagens',
                                            'Diferenças e semelhanças das demais formas de investimento',
                                        ],
                                    },
                                ].map((module, index) => (
                                    <Card
                                        key={index}
                                        className="border-l-4 border-l-[#f05824]"
                                    >
                                        <CardContent className="p-6">
                                            <div className="mb-3 flex items-center justify-between">
                                                <Badge
                                                    variant="outline"
                                                    className="border-[#142c43] text-[#142c43]"
                                                >
                                                    {module.module}
                                                </Badge>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <Clock className="mr-1 h-4 w-4" />
                                                    {module.duration}
                                                </div>
                                            </div>
                                            <h3 className="mb-3 text-xl font-bold text-[#142c43]">
                                                {module.title}
                                            </h3>
                                            <ul className="space-y-2">
                                                {module.topics.map(
                                                    (topic, topicIndex) => (
                                                        <li
                                                            key={topicIndex}
                                                            className="flex items-center text-gray-700"
                                                        >
                                                            <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
                                                            {topic}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div className="lg:pl-8">
                            <Card className="border-2 border-[#f05824] shadow-2xl">
                                <CardContent className="p-8 text-center">
                                    <div className="mb-6">
                                        <div className="mb-2 text-4xl font-bold text-[#142c43]">
                                            R$ 47
                                        </div>
                                        <div className="mb-2 text-lg text-gray-600 line-through">
                                            De R$ 67
                                        </div>
                                        <Badge className="bg-[#f05824] text-white hover:bg-[#f05824]/90">
                                            30% de desconto
                                        </Badge>
                                    </div>

                                    <div className="mb-8 space-y-4">
                                        <div className="flex items-center justify-center">
                                            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                            <span>
                                                Acesso vitalício ao curso
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                            <span>Comunidade Aberta</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                            <span>Garantia de 7 dias</span>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                                            <span>Pagamento com 1-clique</span>
                                        </div>
                                    </div>

                                    <button
                                        className="bg-primary-orange text-primary-white mb-4 cursor-pointer rounded-lg px-8 py-4"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        Ir à compra
                                    </button>

                                    <div className="mb-4 text-xs text-gray-600">
                                        <Shield className="mr-1 inline h-4 w-4" />
                                        Pagamento 100% seguro e criptografado
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="bg-gradient-to-r from-[#142c43] to-[#142c43]/90 py-16">
                <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
                        Não perca esta oportunidade única!
                    </h2>

                    <button
                        className="bg-primary-orange text-primary-white mb-4 cursor-pointer rounded-lg px-8 py-4"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        Ir à compra
                    </button>

                    <div className="flex items-center justify-center space-x-8 text-sm text-gray-300">
                        <div className="flex items-center">
                            <Shield className="mr-2 h-5 w-5 text-green-400" />
                            <span>Garantia 7 dias</span>
                        </div>
                        <div className="flex items-center">
                            <Award className="mr-2 h-5 w-5 text-yellow-400" />
                            <span>Conteúdo Vitalício</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-white py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div className="md:col-span-2">
                            <div className="mb-4 flex items-center space-x-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#f05824] to-[#142c43]">
                                    <TrendingUp className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#142c43]">
                                        Curso Pocket ETF
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Educação financeira de qualidade
                                    </p>
                                </div>
                            </div>
                            <p className="mb-4 max-w-md text-gray-600">
                                Transformamos pessoas comuns em investidores
                                inteligentes através de educação prática e
                                resultados comprovados.
                            </p>
                        </div>

                        <div>
                            <h4 className="mb-4 font-semibold text-[#142c43]">
                                Redes
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>
                                    <a
                                        href="https://instagram.com/opacefinanceiro"
                                        className="hover:text-[#f05824]"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
                        <p>
                            &copy; {new Date().getFullYear()} O Pace Financeiro.
                            Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
