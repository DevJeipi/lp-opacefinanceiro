import { GridContainer } from '@/components/ui/GridContainer'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, ArrowDown } from 'lucide-react'

const aulas = [
    {
        title: 'Aula 31 - Perfil do Investidor: Seu Ritmo, Sua Jornada',
        description:
            'Descubra em que fase da vida você está financeiramente — e por que respeitar o seu ritmo (o seu pace) é a chave para investir com segurança e evolução constante.',
    },
    {
        title: 'Aula 32 - Os 3 Potes: Estratégia de Distribuição Inteligente',
        description:
            'Você não precisa escolher um único caminho. Aprenda a dividir seus investimentos entre segurança, crescimento e liberdade — como um verdadeiro estrategista.',
    },
    {
        title: 'Aula 33 - Portfólio de Investimentos: Seu Mapa Pessoal',
        description:
            'Pare de atirar no escuro! Crie sua estratégia completa de investimentos com base em objetivos claros e ajustados ao seu momento de vida.',
    },
    {
        title: 'Aula 34 - Renda Fixa x Renda Variável x Caixa',
        description:
            'Qual a proporção ideal para você? Veja como equilibrar estabilidade e crescimento com base em exemplos reais e situações do dia a dia.',
    },
    {
        title: 'Aula 35 - Diversificação, Investimento no Exterior e o Meu Portfólio Atual',
        description:
            'Você precisa investir fora do Brasil? Acertar o “timing” do mercado é possível? Descubra tudo isso — e veja como eu distribuo meus próprios investimentos hoje.',
    },
    {
        title: 'Aula 36 - A Fórmula da Liberdade: Método da Taxa de Retirada',
        description:
            'Calcule o momento exato em que você poderá declarar sua independência financeira com base no Estudo de Trinity. Matemática simples, impacto gigante.',
    },
    {
        title: 'Aula 37 - A Vida Pós-Independência Financeira',
        description:
            'Dinheiro não traz felicidade? Descubra como a vida muda quando o dinheiro deixa de ser um problema. Um relato direto, sem filtros, sobre liberdade de verdade.',
    },
    {
        title: 'Aula 38 - Considerações Finais & Despedida',
        description:
            'Antes de fechar o ciclo, um último aprendizado fundamental. Você não será mais a mesma pessoa depois desta jornada — e isso é só o começo.',
    },
]

export default function Modulo03() {
    return (
        <>
            <section className="bg-primary-blue">
                <GridContainer>
                    <div className="flex w-full items-center gap-4 text-left">
                        <Link
                            href={'https://pacefinanceiro.com.br'}
                            className="hover:bg-primary-white/30 cursor-pointer rounded-full p-2 transition-all duration-300"
                        >
                            <ArrowLeft
                                size={32}
                                color="var(--color-primary-white)"
                            />
                        </Link>
                        <h1 className="text-primary-white font-body text-xl font-bold">
                            Módulo 03 - Como Montar um Portfólio de
                            Investimentos Vencedor
                        </h1>
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
