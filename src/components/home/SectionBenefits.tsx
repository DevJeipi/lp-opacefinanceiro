import Image from 'next/image'
import fotoCard from '../../../public/img-icon.webp'
import { GridContainer } from '@/components/ui/GridContainer'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { BadgeCheck } from 'lucide-react'

export function SectionBenefits() {
    return (
        <section className="bg-primary-white font-body rounded-br-4xl">
            <GridContainer className="relative flex flex-col items-center justify-center p-0 pt-48 md:flex-row md:px-8 lg:py-6">
                <div className="absolute z-20 -translate-y-11/12 lg:-translate-x-3/4 lg:-translate-y-0">
                    <Image
                        src={fotoCard}
                        width={448}
                        height={448}
                        alt="Foto de decoração da seção de beneficios"
                        className="max-w-80 lg:max-w-md"
                        loading="lazy"
                        placeholder="blur"
                        sizes="(max-width: 1023px) 320px, 448px"
                    />
                </div>
                <Card className="bg-primary-blue relative z-10 w-full max-w-2xl rounded-tl-4xl rounded-tr-none rounded-br-4xl rounded-bl-none border-0 pt-32 text-center lg:pt-6 lg:pr-8 lg:pl-48 lg:text-left">
                    <CardHeader>
                        <CardTitle className="text-primary-white text-2xl font-bold">
                            Mas eu não entendo nada de finanças…
                            <span className="bg-primary-white text-primary-black rounded-lg px-1 whitespace-nowrap">
                                Isso é mesmo pra mim?
                            </span>
                        </CardTitle>
                        <CardDescription className="text-primary-white text-xl">
                            <div className="flex w-full items-center justify-center gap-2 font-bold">
                                <span className="bg-primary-white h-0.5 w-full lg:hidden"></span>
                                <span className="whitespace-nowrap">
                                    Fique tranquilo
                                </span>
                                <span className="bg-primary-white h-0.5 w-full"></span>
                            </div>
                            É conteúdo que não falta
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="flex flex-col gap-4 text-left font-bold">
                            <li className="bg-primary-white flex items-center justify-start gap-3 rounded-full px-3 py-2">
                                <BadgeCheck color="var(--color-primary-orange)" />
                                <p>+20 horas de conteúdo</p>
                            </li>
                            <li className="bg-primary-white flex items-center justify-start gap-3 rounded-full px-3 py-2">
                                <BadgeCheck color="var(--color-primary-orange)" />
                                <p>Metologia simples e didática</p>
                            </li>
                            <li className="bg-primary-white flex items-center justify-start gap-3 rounded-full px-3 py-2">
                                <BadgeCheck color="var(--color-primary-orange)" />
                                <p>38 aulas em vídeo</p>
                            </li>
                            <li className="bg-primary-white flex items-center justify-start gap-3 rounded-full px-3 py-2">
                                <BadgeCheck color="var(--color-primary-orange)" />
                                <p>Acesso vitalício</p>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </GridContainer>
        </section>
    )
}
