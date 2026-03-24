import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { GridContainer } from '@/components/ui/GridContainer'
import { CheckCircle2, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Benefícios do curso
const beneficios = [
    'Conteúdo completo e organizado',
    'Acesso vitalício',
    'Método comprovado e prático',
    'Transformação real da sua relação com o dinheiro',
]

export function SectionPricing() {
    return (
        <section className="bg-primary-white">
            <div className="bg-blue-low-op rounded-tl-4xl rounded-br-4xl">
                <GridContainer className="flex flex-col items-center justify-center gap-12 text-center">
                    <h1 className="text-primary-blue flex flex-col font-bold md:text-2xl">
                        Por que este curso é
                        <span className="font-heading">Diferente de tudo</span>
                        que você já viu?
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
                            Que vai fazer você conquistar
                            <span className="px-1 font-bold">
                                resultados reais
                            </span>
                            com consciência. Em vez de “ganhe 1 milhão”, aqui é
                            <span className="text-primary-blue px-1 font-bold">
                                “aprenda a guardar seus primeiros R$1.000 e
                                transforme sua relação com o dinheiro.”
                            </span>
                        </p>
                    </div>
                    <Card
                        id="pricing"
                        className="bg-primary-black text-primary-white font-body w-full font-bold md:w-2/3"
                    >
                        <CardHeader>
                            <CardTitle className="text-2xl sm:text-3xl">
                                Curso Completo
                                <br />
                                <span className="text-gradient-animated px-2">
                                    Do Cheque Especial à Independência
                                    Financeira
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="bg-primary-white mb-6 h-0.5 w-full rounded-full"></div>
                            <ul className="mb-6 flex flex-col gap-4">
                                {beneficios.map((beneficio, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-left lg:text-xl"
                                    >
                                        <CheckCircle2
                                            fill="var(--color-primary-orange)"
                                            stroke="var(--color-primary-black)"
                                            className="flex-shrink-0"
                                        />
                                        <p className="flex-1">{beneficio}</p>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="flex flex-col items-center justify-center">
                            <div className="font-body text-secondary-orange flex items-end gap-1 font-normal">
                                <p className="md:text-xl">De:</p>
                                <span className="text-2xl line-through md:text-4xl">
                                    R$ 197,00
                                </span>
                            </div>
                            <div className="font-body mb-4 flex items-end gap-1">
                                <p className="text-2xl md:text-3xl">Por:</p>
                                <span className="text-4xl md:text-6xl">
                                    R$ 97,00
                                </span>
                            </div>
                            <Button link="curso" color="secondaryorange">
                                QUERO SAIR DO VERMELHO POR R$ 97
                            </Button>
                        </CardFooter>
                    </Card>
                </GridContainer>
            </div>
        </section>
    )
}
