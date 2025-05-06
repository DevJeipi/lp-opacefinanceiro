import Image from 'next/image'
{
    /*import fotoCard from '../../../public/'*/
}
import { GridContainer } from '@/components/ui/GridContainer'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { BadgeCheck } from 'lucide-react'

export function SectionBenefits() {
    return (
        <section className="bg-primary-white font-body rounded-br-4xl">
            <GridContainer className="flex flex-col items-center justify-center p-0 pt-32 md:flex-row md:px-8 lg:py-6">
                {/*<div>
                            <Image
                                src={fotoCard}
                                width={480}
                                height={480}
                                alt="Foto de decoração da seção de beneficios"
                                className=""
                                loading="lazy"
                                placeholder="blur"
                                sizes=""
                            />
                        </div>*/}
                <Card className="bg-primary-blue w-full max-w-3xl rounded-tl-4xl rounded-tr-none rounded-br-4xl rounded-bl-none border-0 pt-32 text-center lg:pt-6 lg:pr-8 lg:pl-64 lg:text-left">
                    <CardHeader>
                        <CardTitle className="text-primary-white text-2xl font-bold">
                            Mas eu não entendo nada de finanças…
                            <span className="bg-primary-white text-primary-black rounded-lg px-1 whitespace-nowrap">
                                Isso é mesmo pra mim?
                            </span>
                        </CardTitle>
                        <CardDescription className="text-primary-white text-xl">
                            <div className="flex w-full items-center justify-center font-bold">
                                <span className="bg-primary-white h-0.5 w-full lg:hidden"></span>
                                <span className="px-4 whitespace-nowrap lg:pl-0">
                                    Fique tranquilo
                                </span>
                                <span className="bg-primary-white h-0.5 w-full"></span>
                            </div>
                            Conteúdo para iniciantes não falta
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-4 text-left font-bold">
                            <li className="bg-primary-white flex items-center justify-start gap-3 rounded-full px-3 py-2">
                                <BadgeCheck color="var(--color-primary-orange)" />
                                <p>+3 E-books sobre finanças</p>
                            </li>
                            <li className="bg-primary-white flex items-center justify-start gap-3 rounded-full px-3 py-2">
                                <BadgeCheck color="var(--color-primary-orange)" />
                                <p>+2 Planilhas Financeiras</p>
                            </li>
                            <li className="bg-primary-white flex items-center justify-start gap-3 rounded-full px-3 py-2">
                                <BadgeCheck color="var(--color-primary-orange)" />
                                <p>Diversos Conteúdos Gravados</p>
                            </li>
                            <li className="bg-primary-white flex items-center justify-start gap-3 rounded-full px-3 py-2">
                                <BadgeCheck color="var(--color-primary-orange)" />
                                <p>Insights especiais</p>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </GridContainer>
        </section>
    )
}
