import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { GridContainer } from '@/components/ui/GridContainer'
import { Button } from '@/components/ui/button'
import { CheckCircle2, XCircle } from 'lucide-react'

// Lista de produtos
const produtos = [
    {
        nome: 'Curso Do Cheque Especial à Independência Financeira',
        preco: 'R$ 1187',
    },
    {
        nome: 'E-book Renascimento Financeiro',
        preco: 'R$ 77',
    },
    {
        nome: 'E-book Como Começar com Segurança',
        preco: 'R$ 77',
    },
    {
        nome: 'Planilha de controle de gastos',
        preco: 'R$ 57',
    },
    {
        nome: 'Planilha de portfólio de investimentos',
        preco: 'R$ 57',
    },
    {
        nome: '4 artigos exclusivos',
        preco: 'R$ 87',
    },
]

export function SectionPricing() {
    return (
        <section className="bg-primary-white">
            <GridContainer className="flex flex-col items-center justify-center gap-12 text-center">
                <h1 className="font-heading text-primary-blue flex flex-col font-bold md:text-2xl">
                    <span className="font-body">Por que este curso é</span>
                    Diferente de tudo
                    <span className="font-body">que você já viu?</span>
                </h1>
                <Card className="border-destructive/40 md:max-w- w-full max-w-md shadow-sm">
                    <CardHeader className="text-center">
                        <CardTitle className="font-body text-primary-black text-lg font-bold md:text-xl">
                            Preços e “Benefícios” dos Gurus
                        </CardTitle>
                        <CardDescription className="text-primary-black font-body mt-1 text-2xl font-bold line-through">
                            2497 BRL
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="bg-destructive/20 mb-6 h-0.5 w-full rounded" />

                        <ul className="text-primary-black font-body flex flex-col gap-4 text-left text-sm md:text-base">
                            {/*Conteúdo Desorganizado de propósito*/}
                            <li className="flex items-center justify-end gap-2">
                                <XCircle className="text-destructive" />
                                <span>Conteúdo desorganizado</span>
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <XCircle className="text-destructive" />
                                <span>Promessas enganosas</span>
                            </li>
                            <li className="flex items-center justify-end gap-2 pr-12">
                                <XCircle className="text-destructive" />
                                <span>Fórmulas Mágicas</span>
                            </li>
                            <li className="flex items-center gap-2 pl-12">
                                <XCircle className="text-destructive" />
                                <span>Acesso por 6 meses</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
                <div className="flex flex-col items-center justify-center gap-2 md:px-56">
                    <h2 className="font-heading text-gradient-animated font-bold md:text-xl">
                        O verdadeiro curso...
                    </h2>
                    <p className="font-body text-primary-black md:text-xl">
                        Que vai te fazer conquistar
                        <span className="px-1 font-bold">resultados reais</span>
                        com consciência. Em vez de “ganhe 1 milhão”, aqui é
                        <span className="text-primary-blue px-1 font-bold">
                            “aprenda a guardar seus primeiros R$1.000 e
                            transforme sua relação com o dinheiro.”
                        </span>
                    </p>
                </div>
                <Card className="bg-primary-black text-primary-white font-body w-full font-bold md:w-2/3">
                    <CardHeader>
                        <CardTitle className="text-2xl sm:text-3xl">
                            São
                            <span className="text-gradient-animated px-2">
                                6 produtos
                            </span>
                            do
                            <br /> Pace Financeiro pelo
                            <span className="text-gradient-animated px-2">
                                preço de 1
                            </span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-primary-white mb-6 h-0.5 w-full rounded-full"></div>
                        <ul className="mb-6 flex flex-col gap-4">
                            {produtos.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex w-full flex-col lg:flex-row"
                                >
                                    <div className="flex flex-1 items-center justify-between gap-4 text-left lg:text-xl">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2
                                                fill="var(--color-primary-orange)"
                                                stroke="var(--color-primary-black)"
                                            />
                                            <p className="flex-1">
                                                {item.nome}
                                            </p>
                                        </div>
                                        <div className="to-primary-orange hidden h-2 flex-1 bg-gradient-to-r from-transparent lg:block" />
                                        <span className="text-primary-white rounded-sm p-1 whitespace-nowrap">
                                            {item.preco}
                                        </span>
                                    </div>
                                    <div className="to-primary-orange h-1 w-full bg-gradient-to-r from-transparent lg:hidden" />
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter className="flex flex-col items-center justify-center">
                        <div className="font-body text-secondary-orange flex items-end gap-1 font-normal">
                            <p className="md:text-xl">De:</p>
                            <span className="text-2xl line-through md:text-4xl">
                                R$ 1.542
                            </span>
                        </div>
                        <div className="font-body mb-4 flex items-end gap-1">
                            <p className="text-2xl md:text-3xl">Por:</p>
                            <span className="text-4xl md:text-6xl">R$ 197</span>
                        </div>
                        <Button color="secondaryorange">
                            Aprender com Segurança
                        </Button>
                    </CardFooter>
                </Card>
            </GridContainer>
        </section>
    )
}
