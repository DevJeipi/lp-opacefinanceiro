import { GridContainer } from '@/components/ui/GridContainer'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, ArrowDown } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Curso Do Cheque Especial à Independência Financeira | Módulo 02',
    description:
        'Conheça mais a fundo as aulas que serão oferecidas no módulo 02 do curso.',
    alternates: {
        canonical: 'https://opacefinanceiro.com.br/modulo02',
    },

    openGraph: {
        title: 'Sobre o módulo 02 do Curso Do Cheque Especial à Independência Financeira',
        description:
            'Conheça mais a fundo as aulas que serão oferecidas no módulo 02 do curso.',
        url: 'https://opacefinanceiro.com.br/modulo02',
    },

    robots: {
        index: false,
        follow: true,
    },
}

const aulas = [
    {
        title: 'Aula 13 - Princípios Básicos do Investimento + Método DIY',
        description:
            'Você não precisa mais depender do gerente do banco. Descubra por que investir é vital, o que realmente importa para proteger seu dinheiro e como aplicar o método DIY (faça você mesmo) com total confiança.',
    },
    {
        title: 'Aula 14 - A Magia de Pequenas Diferenças',
        description:
            'Um pequeno ajuste no seu retorno pode gerar milhares de reais a mais no longo prazo. Entenda como maximizar sua taxa líquida e por que isso é um divisor de águas no seu patrimônio.',
    },
    {
        title: 'Aula 15 - Os 5 Fatores-Chave Antes de Investir',
        description:
            'Antes de aplicar qualquer centavo, você precisa conhecer esses 5 pilares. Eles vão evitar erros comuns e acelerar seu crescimento financeiro com segurança.',
    },
    {
        title: 'Aula 16 - Risco, Retorno e Volatilidade: o Trio Que Você Precisa Dominar',
        description:
            'Aprenda a equilibrar riscos e ganhos com inteligência. Investir não é apostar — é saber calcular e decidir com estratégia.',
    },
    {
        title: 'Aula 17 - Liquidez, Taxas, Impostos e Moeda',
        description:
            'Você sabia que o investimento certo pode virar um pesadelo se esses fatores forem ignorados? Aqui você aprende a blindar suas decisões contra armadilhas invisíveis.',
    },
    {
        title: 'Aula 18 - Decifrando a Sopa de Letrinhas (SELIC, CDI, S&P500...)',
        description:
            'Acabe com a confusão! Finalmente entenda o que significam os termos e siglas que parecem te excluir do jogo financeiro — e passe a dominá-los com naturalidade.',
    },
    {
        title: 'Aula 19 - Classes de Ativos: a Base do Portfólio Inteligente',
        description:
            'Você vai entender como dividir seus investimentos entre Caixa, Renda Fixa e Renda Variável — e como essa distribuição pode mudar completamente seu resultado.',
    },
    {
        title: 'Aula 20 - Tesouro Direto: o Investimento Mais Seguro do Brasil',
        description:
            'Aprenda como emprestar dinheiro ao governo e por que essa é a porta de entrada ideal para quem busca segurança e previsibilidade.',
    },
    {
        title: 'Aula 21 - CDB, LCI, LCA e Outros Títulos Bancários',
        description:
            'Descubra como funciona o empréstimo aos bancos, quais são os riscos e quando vale a pena usar essas ferramentas a seu favor.',
    },
    {
        title: 'Aula 22 - Crédito Privado e o Meu Portfólio Pessoal',
        description:
            'Quer retorno maior? Conheça as vantagens (e os perigos) de investir em debêntures, CRIs e CRAs — além de ter acesso direto à composição real da minha carteira de renda fixa.',
    },
    {
        title: 'Aula 23 - Por Que NÃO Uso Fundos de Renda Fixa',
        description:
            'Nem tudo que parece prático é vantajoso. Entenda por que delegar sua renda fixa a fundos pode estar te fazendo perder dinheiro.',
    },
    {
        title: 'Aula 24 - A Verdade Sobre Investir em Ações',
        description:
            'A Bolsa não é um cassino! Aqui você aprende o básico para entrar na renda variável com visão de longo prazo, evitando os erros que tiram milhares de investidores do jogo todos os anos.',
    },
    {
        title: 'Aula 25 - A Realidade do Stock Picking',
        description:
            'Vale a pena escolher ações individualmente? Descubra o que a maioria ignora e por que essa estratégia não é tão brilhante quanto parece.',
    },
    {
        title: 'Aula 26 - Fundos Multimercado e Mútuos: o que ninguém te conta',
        description:
            'Você vai entender por que muitos desses fundos têm mais marketing do que resultado — e como analisar se realmente valem a pena.',
    },
    {
        title: 'Aula 27 - Fundos ETF: o Favorito de Warren Buffett (e o Meu Também)',
        description:
            'Conheça o tipo de investimento mais eficiente, barato e inteligente para o longo prazo — e veja como montar sua carteira com ETFs da forma certa.',
    },
    {
        title: 'Aula 28 - Imóveis: Físicos ou FIIs?',
        description:
            'Você vai aprender a diferença entre investir diretamente em imóveis ou via fundos imobiliários, e qual dos dois pode trazer mais retorno com menos dor de cabeça.',
    },
    {
        title: 'Aula 29 - Moedas, Ouro e Criptomoedas',
        description:
            'Está curioso sobre Bitcoin ou quer proteger seu patrimônio com ouro? Aqui você aprende a se expor a esses ativos com clareza, sem entrar em modinhas perigosas.',
    },
    {
        title: 'Aula 30 - Previdência, Poupança e Consórcio: Alerta Vermelho!',
        description:
            'Será que esses três queridinhos do brasileiro são investimentos... ou armadilhas? Descubra o que fazer (e o que evitar) para não cair em ciladas travestidas de segurança.',
    },
]

export default function Modulo02() {
    return (
        <>
            <section className="bg-primary-blue">
                <GridContainer>
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
                            Módulo 02 - Descomplicando o Mercado Financeiro
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
