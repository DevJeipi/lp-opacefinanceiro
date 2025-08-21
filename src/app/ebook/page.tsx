import { Button } from '@/components/ui/button'
import { GridContainer } from '@/components/ui/GridContainer'
import { Line } from '@/components/ui/line'
import { Badge } from '@/components/ui/badge'
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
    MessageCircleQuestion,
    Rocket,
    ShieldCheck,
    Table,
    TrendingUp,
} from 'lucide-react'
import { BgImage } from '@/components/ui/BgImage'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion'
import { Footer } from '@/components/footer'

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
                <BgImage />
                <GridContainer className="relative flex h-full flex-col items-center">
                    <div className="flex items-center justify-center">
                        <Image
                            src={fotoLogo}
                            width={70}
                            height={37}
                            alt="Logo do Pace Financeiro"
                            placeholder="blur"
                            priority
                        />
                    </div>
                    <div className="grid h-full grid-cols-1 grid-rows-2 items-center justify-center lg:grid-cols-2 lg:grid-rows-1">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/ebooks2.webp"
                                width={250}
                                height={415}
                                alt="E-book O Renascimento Financeiro"
                                priority
                                className="mb-[-120px] lg:mb-0"
                            />
                        </div>
                        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
                            <h1 className="font-heading text-primary-white text-xl font-bold sm:text-3xl">
                                Conquiste Sua Independência Financeira <br />
                                <span className="text-gradient-animated">
                                    de forma gratuita!
                                </span>
                            </h1>
                            <p className="font-body text-primary-white font-bold sm:text-xl">
                                Para adquirir o melhor e-book introdutório de
                                finanças basta clicar no botão abaixo e
                                preencher o formulário. Você receberá o e-book
                                em PDF diretamente no seu navegador.
                            </p>
                            <Button link="ebook" color="secondaryorange">
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
            <section id="benefits" className="overflow-hidden">
                <div className="container">
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
                </div>
            </section>
            <section className="bg-primary-orange overflow-hidden">
                <GridContainer className="flex flex-wrap items-center justify-center gap-6 text-center lg:flex-nowrap lg:justify-between lg:text-left">
                    <div className="text-primary-white font-body">
                        <h1 className="text-3xl font-bold">
                            Não Espere Mais, Sua Independência Financeira Está a
                            Um Clique!
                        </h1>
                        <p className="text-xl">
                            Obtenha O Ebook de Investimentos agora e comece a
                            transformar sua vida,
                            <span className="pl-1 font-bold">
                                este e-book não ficará por muito tempo gratuito!
                            </span>
                        </p>
                    </div>
                    <Button
                        link="ebook"
                        color="blue"
                        className="whitespace-nowrap"
                    >
                        Adquirir Independência
                    </Button>
                </GridContainer>
            </section>
            <section className="bg-primary-black flex items-center justify-center overflow-hidden">
                <div className="container">
                    <GridContainer className="flex flex-col items-center justify-center gap-8 pt-20 text-center">
                        <h1 className="font-heading text-primary-white mt-4 text-2xl font-bold sm:text-3xl">
                            Para quem é
                        </h1>
{/* Mobile: cards empilhados; Desktop: cards sobrepostos */}
                        <div className="flex w-full flex-col items-center justify-center gap-2 lg:hidden">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-primary-white text-primary-blue border-primary-blue/50 flex h-72 w-11/12 max-w-xs flex-col items-center justify-center rounded-xl border p-6 shadow-2xl"
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
                </div>
            </section>
            <section className="bg-primary-white">
                <div className="bg-blue-low-op rounded-t-4xl">
                    <GridContainer className="flex flex-col items-center justify-center gap-8 text-center">
                        <div className="flex flex-col items-center justify-center">
                            <MessageCircleQuestion
                                size={32}
                                color="var(--color-primary-black)"
                            />
                            <h1 className="font-heading text-primary-black text-xl font-bold md:text-3xl">
                                Perguntas Frequentes
                            </h1>
                        </div>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full lg:w-3/4"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    Para quem é esse curso?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Este curso é para qualquer pessoa que esteja
                                    cansada de viver no vermelho, que quer sair
                                    do cheque especial, eliminar dívidas e
                                    começar uma trajetória sólida rumo à
                                    independência financeira — mesmo começando
                                    do zero. Se você busca um passo a passo
                                    claro e realista, este é o seu lugar.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger>
                                    Em quanto tempo verei resultados?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Os primeiros resultados podem vir em poucas
                                    semanas, especialmente na organização do
                                    orçamento e controle das dívidas. Já os
                                    resultados mais profundos — como aumento da
                                    taxa de poupança e investimentos
                                    consistentes — dependem do seu ritmo, mas
                                    com o Do Cheque Especial à Independência
                                    Financeira, o progresso é garantido.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger>
                                    O que é o Pace Financeiro?
                                </AccordionTrigger>
                                <AccordionContent>
                                    É a nossa metodologia exclusiva que te ajuda
                                    a encontrar o ritmo ideal para conquistar
                                    sua liberdade financeira, de forma
                                    constante, inteligente e sem extremos. Assim
                                    como em uma corrida, não importa quão rápido
                                    você começa, mas sim que você siga com
                                    consistência até a linha de chegada.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger>
                                    Preciso entender de investimentos ou
                                    finanças para acompanhar o curso?
                                </AccordionTrigger>
                                <AccordionContent>
                                    De forma alguma! O curso foi criado para
                                    quem não tem nenhuma base financeira, usando
                                    uma linguagem simples e direta, com exemplos
                                    do dia a dia. Vamos do básico ao avançado
                                    com clareza e sem enrolação.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger>
                                    As aulas são gravadas ou ao vivo?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Todas as aulas são gravadas! Permitindo você
                                    a assisti-las quando quiser e no seu ritmo.
                                    Além de que você terá acesso vitalício ao
                                    curso, podendo revisitar o conteúdo sempre
                                    que precisar.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </GridContainer>
                </div>
            </section>
            <Footer />
        </>
    )
}
