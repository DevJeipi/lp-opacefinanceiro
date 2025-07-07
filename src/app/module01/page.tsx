import { GridContainer } from '@/components/ui/GridContainer'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, ArrowDown } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Curso Do Cheque Especial à Independência Financeira | Módulo 01',
    description:
        'Conheça mais a fundo as aulas que serão oferecidas no módulo 03 do curso.',
    alternates: {
        canonical: 'https://opacefinanceiro.com.br/modulo01',
    },

    openGraph: {
        title: 'Sobre o módulo 01 do Curso Do Cheque Especial à Independência Financeira',
        description:
            'Conheça mais a fundo as aulas que serão oferecidas no módulo 01 do curso.',
        url: 'https://opacefinanceiro.com.br/modulo01',
    },

    robots: {
        index: false,
        follow: true,
    },
}

const aulas = [
    {
        title: 'Aula 01 - Introdução ao curso',
        description:
            'Descubra o que te espera nesta jornada transformadora e conheça a inspiradora história de quem saiu do fundo do poço financeiro rumo à independência total.',
    },
    {
        title: 'Aula 02 - O Ciclo da Vida e a Verdade Sobre a Independência Financeira',
        description:
            'A fórmula tradicional de vida está te prendendo! Conheça o caminho alternativo para viver com propósito e entenda por que montar sua própria fonte de renda passiva é questão de sobrevivência.',
    },
    {
        title: 'Aula 03 - A Fórmula da Liberdade',
        description:
            'Você está a três passos da liberdade financeira - descubra quais são! Aprenda o segredo das pessoas felizes com dinheiro e por que mais renda nem sempre significa mais felicidade (spoiler: o Paradoxo de Easterling vai te surpreender).',
    },
    {
        title: 'Aula 04 - A Experiência do Marshmallow',
        description:
            'O que doces infantis dos anos 70 podem ensinar sobre seu dinheiro hoje? Descubra por que dominar seus impulsos é o primeiro passo para quebrar velhos hábitos e construir um novo estilo de vida.',
    },
    {
        title: 'Aula 05 - A Regra de Ouro da Poupança',
        description:
            'Guardar 10%? Esqueça! Descubra por que os verdadeiros mestres das finanças poupam 30%, 40%, até 50% - e como você também pode fazer isso, mesmo com uma renda apertada.',
    },
    {
        title: 'Aula 06 - Ganhe Mais! O Mapa do Tesouro Está na Sua Profissão',
        description:
            'Quer enriquecer? Então aprenda a se tornar um solucionador de problemas - quem faz isso no seu trabalho ganha mais, cresce mais e chega mais rápido à liberdade.',
    },
    {
        title: 'Aula 07 - O Superpoder dos Juros Compostos',
        description:
            'O tempo pode ser seu melhor amigo ou seu maior inimigo. Veja como o dinheiro cresce de forma quase mágica quando você começa hoje - com os exemplos reais de Rosa e Maria.',
    },
    {
        title: 'Aula 08 - DÍVIDA ZERO: A Regra dos Ricos',
        description:
            'Você está sendo punido ou recompensado pelo sistema financeiro? Aprenda a sair das dívidas de forma definitiva e vire o jogo a seu favor.',
    },
    {
        title: 'Aula 09 - O Estilo de Vida Que Liberta',
        description:
            'Você pode viver bem gastando menos! Descubra as 3 áreas onde o seu dinheiro escorre pelo ralo e como fazer ajustes que te deixam mais leve e realizado – e ainda ajudam o planeta.',
    },
    {
        title: 'Aula 10 - Durma Tranquilo com o Fundo de Emergência',
        description:
            'Ansiedade financeira? Nunca mais. Aprenda como criar um colchão de segurança que vai blindar sua paz e te deixar pronto para qualquer imprevisto.',
    },
    {
        title: 'Aula 11 - Sua Vida em Números: A Planilha Que Muda Tudo',
        description:
            'Você não melhora o que não mede. Aprenda a dominar sua renda e seus gastos com ferramentas simples e práticas que te colocam no controle total da sua vida financeira.',
    },
    {
        title: 'Aula 12 - O Mapa dos 5 Passos Para o Controle Financeiro',
        description:
            'Fechamos o módulo com chave de ouro: conheça os 5 movimentos estratégicos que vão tirar você do caos e te levar direto para uma vida financeiramente equilibrada.',
    },
]

export default function Modulo01() {
    return (
        <>
            <section className="bg-primary-blue">
                <GridContainer className="flex flex-col items-center justify-center gap-8">
                    <div className="flex w-full items-center gap-4 text-left">
                        <Link
                            href={'/'}
                            className="hover:bg-primary-white/30 cursor-pointer rounded-full p-2 transition-all duration-300"
                        >
                            <ArrowLeft
                                size={32}
                                color="var(--color-primary-white)"
                            />
                        </Link>
                        <h1 className="text-primary-white font-body text-xl font-bold">
                            Módulo 01 - Em Busca do Equilíbrio Financeiro
                        </h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <h2 className="text-primary-white font-body text-center text-3xl font-bold">
                            Receba um pequeno SPOILER de alguma das aulas...
                        </h2>
                        <video
                            width="600"
                            height="450"
                            controls
                            preload="metadata"
                        >
                            <source
                                src="/modulo01-corte-lp-opacefinanceiro.mp4"
                                type="video/mp4"
                            />
                            Seu navegador não suporta o elemento de vídeo.
                        </video>
                    </div>
                    <ul className="mt-8 flex flex-col gap-4">
                        {aulas.map((aula, index) => (
                            <li
                                key={index}
                                className="bg-primary-white/10 text-primary-white font-body border-primary-white rounded-xl border-1 p-8"
                            >
                                <h2 className="text-primary-white text-xl font-bold">
                                    {aula.title}
                                </h2>
                                <p>{aula.description}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 flex flex-col items-center justify-center gap-2">
                        <p className="text-primary-white font-body text-center text-xl font-bold">
                            Expanda seu conhecimento e torne-se uma pessoa amiga
                            das finanças
                        </p>
                        <ArrowDown
                            size={32}
                            color="var(--color-primary-white)"
                        />
                        <Button color="secondaryorange">
                            Aproveitar a Oportunidade
                        </Button>
                    </div>
                </GridContainer>
            </section>
            <Footer />
        </>
    )
}
