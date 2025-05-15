import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { GridContainer } from '@/components/ui/GridContainer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { CheckCircle2, XCircle } from 'lucide-react'

export function SectionPricing() {
    return (
        <section className="bg-primary-white">
            <GridContainer className="flex flex-col items-center justify-center gap-8 text-center">
                <h1 className="font-heading text-primary-blue flex flex-col text-2xl font-bold">
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
                <Card className="bg-primary-blue text-primary-white font-bold">
                    <CardHeader>
                        <CardTitle className="font-body text-xl">
                            Método comprovado para investir
                        </CardTitle>
                        <CardDescription className="font-heading text-xl">
                            2497
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <hr />
                        <ul>
                            <li className="flex w-full items-center justify-center text-left">
                                <CheckCircle2
                                    fill="var(--color-primary-white)"
                                    stroke="var(--color-primary-blue)"
                                />
                                <p>Acesso Vitalício</p>
                            </li>
                            <li>
                                <CheckCircle2 />
                                <p>+20 horas de conteúdo</p>
                            </li>
                            <li>
                                <CheckCircle2 />
                                <p>Conteúdo estruturado</p>
                            </li>
                            <li>
                                <CheckCircle2 />
                                <p>Exemplos reais</p>
                            </li>
                        </ul>
                        <Button color="secondaryorange">
                            Aprender com Segurança
                        </Button>
                    </CardContent>
                </Card>
            </GridContainer>
        </section>
    )
}
