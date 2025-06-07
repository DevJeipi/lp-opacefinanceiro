'use client'

import { BgImageEbook } from '@/components/ui/BgImageEbook'
import { Button } from '@/components/ui/button'
import { GridContainer } from '@/components/ui/GridContainer'
import { Line } from '@/components/ui/line'
import { Badge } from '@/components/ui/badge'
import Pattern from '@/components/ui/Pattern'
import fotoLogo from '../../../public/logomark-pacefinanceiro-removebg.webp'
import Image from 'next/image'
import Link from 'next/link'
import {
    Activity,
    ArrowDown,
    Ban,
    BookOpenCheck,
    ChevronDown,
    Layers,
    LineChart,
    Rocket,
    ShieldCheck,
    Table,
    TrendingUp,
} from 'lucide-react'

export default function Ebook02() {
    const cards = [
        {
            title: 'Sonhadores presos no vermelho',
            description:
                'Que querem quebrar as correntes das dívidas e conquistar uma vida livre com um plano que funciona de verdade!',
        },
        {
            title: 'Construtores de um futuro seguro',
            description:
                'Que desejam erguer uma muralha financeira imbatível e dormir tranquilos como nunca!',
        },
        {
            title: 'Aventureiros da liberdade financeira',
            description:
                'Que querem viver seus sonhos sem estresse e com estratégias que te levarão ao topo!',
        },
        {
            title: 'Aprendizes corajosos do dinheiro',
            description:
                'Iniciantes que anseiam transformar cada real em uma futuro promissor com o melhor e-book de finanças!',
        },
    ]

    return (
        <>
            <section className="relative h-[95vh] border-b-1 border-gray-600">
                <BgImageEbook />
                <GridContainer className="relative flex h-full flex-col items-center">
                    <Image
                        src={fotoLogo}
                        width={70}
                        height={37}
                        alt="Logo do Pace Financeiro"
                        placeholder="blur"
                        priority
                    />
                    <div className="flex h-full items-center justify-center">
                        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
                            <h1 className="font-heading text-primary-white text-xl font-bold sm:text-3xl">
                                Conquiste Sua Independência Financeira <br />
                                <span className="text-gradient-animated">
                                    por apenas R$ 27!
                                </span>
                            </h1>
                            <p className="font-body text-primary-white font-bold sm:text-xl">
                                Não compre apenas uma pizza no final de semana,
                                e verá você mudar de vida.
                            </p>
                            <Button color="secondaryorange">
                                Renascer financeiramente
                            </Button>
                        </div>
                    </div>
                    <Link
                        href="#benefits"
                        className="border-primary-white/50 absolute -bottom-10 animate-bounce rounded-full border-1 px-1 py-4"
                    >
                        <ArrowDown color="var(--color-primary-white)" />
                    </Link>
                </GridContainer>
            </section>
            <section id="benefits" className="bg-primary-black overflow-hidden">
                <Pattern>
                    <GridContainer className="flex flex-col items-center justify-center pt-32 text-center">
                        <Badge>Método</Badge>
                        <h1 className="font-heading text-primary-white mt-4 text-2xl font-bold sm:text-3xl">
                            O que aprenderei <br /> no e-book?
                        </h1>
                        <div className="mt-8 flex max-w-207 flex-col gap-12">
                            <Line />
                            <div className="font-body flex flex-col sm:flex-row sm:pl-14">
                                <div className="bg-primary-orange flex h-full items-center justify-center rounded-xl py-8 sm:px-8 sm:py-16">
                                    <Table
                                        size={64}
                                        color="var(--color-primary-white)"
                                    />
                                </div>
                                <div className="mt-2 flex flex-col items-start justify-center gap-2 pl-4 text-left sm:mt-0 sm:px-8">
                                    <span className="text-primary-orange font-bold">
                                        Passo 1
                                    </span>
                                    <h2 className="text-primary-white text-xl font-bold">
                                        Controle de gastos
                                    </h2>
                                    <p className="text-primary-white/80">
                                        Diga adeus ao caos financeiro! Aprenda a
                                        dominar seus gastos com um sistema
                                        simples que te dá controle total sobre
                                        seu dinheiro - o primeiro passo para
                                        nunca mais viver no aperto!
                                    </p>
                                </div>
                            </div>

                            <Line />

                            <div className="font-body flex flex-col sm:flex-row sm:pl-14">
                                <div className="bg-primary-orange flex h-full items-center justify-center rounded-xl py-8 sm:px-8 sm:py-16">
                                    <TrendingUp
                                        size={64}
                                        color="var(--color-primary-white)"
                                    />
                                </div>
                                <div className="mt-2 flex flex-col items-start justify-center gap-2 pl-4 text-left sm:mt-0 sm:px-8">
                                    <span className="text-primary-orange font-bold">
                                        Passo 2
                                    </span>
                                    <h2 className="text-primary-white text-xl font-bold">
                                        Gaste menos e ganhe mais
                                    </h2>
                                    <p className="text-primary-white/80">
                                        Libere mais dinheiro para o que importa!
                                        Descubra estratégias poderosas para
                                        cortar gastos desnecessários e aumentar
                                        sua renda - sem sacrificar o que você
                                        ama!
                                    </p>
                                </div>
                            </div>

                            <Line />

                            <div className="font-body flex flex-col sm:flex-row sm:pl-14">
                                <div className="bg-primary-orange flex h-full items-center justify-center rounded-xl py-8 sm:px-8 sm:py-16">
                                    <ShieldCheck
                                        size={64}
                                        color="var(--color-primary-white)"
                                    />
                                </div>
                                <div className="mt-2 flex flex-col items-start justify-center gap-2 pl-4 text-left sm:mt-0 sm:px-8">
                                    <span className="text-primary-orange font-bold">
                                        Passo 3
                                    </span>
                                    <h2 className="text-primary-white text-xl font-bold">
                                        Fundo Emergencial
                                    </h2>
                                    <p className="text-primary-white/80">
                                        Durma tranquilo sabendo que você está
                                        protegido! Crie uma reserva poderosa que
                                        te salva de qualquer imprevisto - a base
                                        para sua paz financeira!
                                    </p>
                                </div>
                            </div>

                            <Line />

                            <div className="font-body flex flex-col sm:flex-row sm:pl-14">
                                <div className="bg-primary-orange flex h-full items-center justify-center rounded-xl py-8 sm:px-8 sm:py-16">
                                    <Ban
                                        size={64}
                                        color="var(--color-primary-white)"
                                    />
                                </div>
                                <div className="mt-2 flex flex-col items-start justify-center gap-2 pl-4 text-left sm:mt-0 sm:px-8">
                                    <span className="text-primary-orange font-bold">
                                        Passo 4
                                    </span>
                                    <h2 className="text-primary-white text-xl font-bold">
                                        Dívida Zero
                                    </h2>
                                    <p className="text-primary-white/80">
                                        Livre-se das correntes das dívidas de
                                        uma vez por todas! Conheça o plano
                                        infalível para eliminar juros altos e
                                        recuperar sua liberdade financeira -
                                        rápido!
                                    </p>
                                </div>
                            </div>

                            <Line />

                            <div className="font-body flex flex-col sm:flex-row sm:pl-14">
                                <div className="bg-primary-orange flex h-full items-center justify-center rounded-xl py-8 sm:px-8 sm:py-16">
                                    <Layers
                                        size={64}
                                        color="var(--color-primary-white)"
                                    />
                                </div>
                                <div className="mt-2 flex flex-col items-start justify-center gap-2 pl-4 text-left sm:mt-0 sm:px-8">
                                    <span className="text-primary-orange font-bold">
                                        Passo 5
                                    </span>
                                    <h2 className="text-primary-white text-xl font-bold">
                                        Amplie as reservas
                                    </h2>
                                    <p className="text-primary-white/80">
                                        Fortaleça sua segurança financeira como
                                        nunca! Aprenda a expandir sua proteção
                                        para enfrentar qualquer desafio - e
                                        viver sem medo do futuro!
                                    </p>
                                </div>
                            </div>
                            <Line />
                            <div className="font-body flex flex-col sm:flex-row sm:pl-14">
                                <div className="bg-primary-orange flex h-full items-center justify-center rounded-xl py-8 sm:px-8 sm:py-16">
                                    <LineChart
                                        size={64}
                                        color="var(--color-primary-white)"
                                    />
                                </div>
                                <div className="mt-2 flex flex-col items-start justify-center gap-2 pl-4 text-left sm:mt-0 sm:px-8">
                                    <span className="text-primary-orange font-bold">
                                        Passo 6
                                    </span>
                                    <h2 className="text-primary-white text-xl font-bold">
                                        Comece a investir
                                    </h2>
                                    <p className="text-primary-white/80">
                                        Faça seu dinheiro trabalhar por você!
                                        Desvende os segredos para investir com
                                        confiança e construir um futuro de
                                        riqueza - mesmo começando pequeno!
                                    </p>
                                </div>
                            </div>

                            <Line />

                            <div className="font-body flex flex-col sm:flex-row sm:pl-14">
                                <div className="bg-primary-orange flex h-full items-center justify-center rounded-xl py-8 sm:px-8 sm:py-16">
                                    <BookOpenCheck
                                        size={64}
                                        color="var(--color-primary-white)"
                                    />
                                </div>
                                <div className="mt-2 flex flex-col items-start justify-center gap-2 pl-4 text-left sm:mt-0 sm:px-8">
                                    <span className="text-primary-orange font-bold">
                                        Passo 7
                                    </span>
                                    <h2 className="text-primary-white text-xl font-bold">
                                        Nunca pare de estudar
                                    </h2>
                                    <p className="text-primary-white/80">
                                        Tome as rédeas do seu futuro financeiro!
                                        Domine o conhecimento que te protege de
                                        erros caros e te leva ao sucesso nos
                                        investimentos - para sempre!
                                    </p>
                                </div>
                            </div>

                            <Line />

                            <div className="font-body flex flex-col sm:flex-row sm:pl-14">
                                <div className="bg-primary-orange flex h-full items-center justify-center rounded-xl py-8 sm:px-8 sm:py-16">
                                    <Activity
                                        size={64}
                                        color="var(--color-primary-white)"
                                    />
                                </div>
                                <div className="mt-2 flex flex-col items-start justify-center gap-2 pl-4 text-left sm:mt-0 sm:px-8">
                                    <span className="text-primary-orange font-bold">
                                        Passo 8
                                    </span>
                                    <h2 className="text-primary-white text-xl font-bold">
                                        Monitore
                                    </h2>
                                    <p className="text-primary-white/80">
                                        Mantenha seu dinheiro crescendo sem
                                        esforço! Aprenda a ajustar seus
                                        investimentos com facilidade e garanta
                                        que seu plano esteja sempre no caminho
                                        certo!
                                    </p>
                                </div>
                            </div>

                            <Line />

                            <div className="font-body flex flex-col sm:flex-row sm:pl-14">
                                <div className="bg-primary-orange flex h-full items-center justify-center rounded-xl py-8 sm:px-8 sm:py-16">
                                    <Rocket
                                        size={64}
                                        color="var(--color-primary-white)"
                                    />
                                </div>
                                <div className="mt-2 flex flex-col items-start justify-center gap-2 pl-4 text-left sm:mt-0 sm:px-8">
                                    <span className="text-primary-orange font-bold">
                                        Passo 9
                                    </span>
                                    <h2 className="text-primary-white text-xl font-bold">
                                        Independência Financeira
                                    </h2>
                                    <p className="text-primary-white/80">
                                        Viva a vida dos seus sonhos! Descubra
                                        como alcançar a liberdade financeira e
                                        trabalhar apenas por prazer - o destino
                                        final da sua jornada está aqui!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </GridContainer>
                </Pattern>
            </section>
            <section className="bg-primary-orange overflow-hidden">
                <GridContainer className="flex flex-wrap items-center justify-center gap-6 text-center lg:flex-nowrap lg:justify-between lg:text-left">
                    <div className="text-primary-white font-body">
                        <h1 className="text-3xl font-bold">
                            Não Espere Mais - Sua Independência Financeira Está
                            a Um Clique!
                        </h1>
                        <p className="text-xl">
                            Obtenha O Renascimento Financeiro agora e comece a
                            transformar sua vida -
                            <span className="pl-1 font-bold">
                                este e-book não ficará por muito tempo a venda,
                                garanta o seu por apenas R$ 27!
                            </span>
                        </p>
                    </div>
                    <Button color="blue" className="whitespace-nowrap">
                        Adquirir Independência
                    </Button>
                </GridContainer>
            </section>
            <section className="bg-primary-black relative flex items-center justify-center overflow-hidden">
                <div className="bg-primary-orange absolute top-0 flex w-48 items-center justify-center rounded-b-xl">
                    <ChevronDown color="var(--color-primary-white)" size={32} />
                </div>
                <Pattern>
                    <GridContainer className="flex flex-col items-center justify-center gap-8 pt-20 text-center">
                        <h1 className="font-heading text-primary-white mt-4 text-2xl font-bold sm:text-3xl">
                            Para quem é
                        </h1>
                        <div className="ml-16 hidden items-center justify-center lg:flex">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className={
                                        'bg-primary-white text-primary-blue border-primary-blue/50 -ml-16 flex h-72 w-64 flex-col items-center justify-center gap-4 rounded-xl border p-6 shadow-2xl transition-all duration-300 hover:mr-16 hover:-translate-y-1 hover:rotate-5 hover:border-white'
                                    }
                                >
                                    <h2 className="mb-2 text-2xl font-bold">
                                        {card.title}
                                    </h2>
                                    <p className="text--primary-blue/80">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </GridContainer>
                </Pattern>
            </section>
            <footer></footer>
        </>
    )
}
