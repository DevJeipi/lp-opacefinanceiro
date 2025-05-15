import Image from 'next/image'
import fotoOtavio2 from '../../../public/foto-otavio-9.webp'
import { GridContainer } from '@/components/ui/GridContainer'
import { Quote } from '@/components/ui/quote'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import iconCheck from '../../../public/icon-pacefinanceiro.webp'

export function SectionWhoami() {
    return (
        <section className="bg-primary-white rounded-tl-4xl">
            <GridContainer className="flex flex-col items-center justify-center gap-8 text-center md:flex-row">
                <div className="h-80 w-80 overflow-hidden rounded-tl-4xl rounded-br-4xl md:h-[480px]">
                    <Image
                        src={fotoOtavio2}
                        width={320}
                        height={480}
                        alt="Foto de Otávio Daudt, criador do Pace Financeiro"
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                        placeholder="blur"
                        sizes="(max-width: 767px) 320px"
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 md:items-start">
                    <Badge>Otávio Daudt</Badge>
                    <Quote>
                        "Não sou guru. Sou planejador financeiro com 25 anos de
                        mercado. Já atendi desde famílias endividadas até
                        empresários. E vi que todos têm algo em comum: a falta
                        de um plano simples, aplicável, e honesto."
                    </Quote>
                    <ul className="flex w-full flex-col gap-2">
                        {[
                            'Educador financeiro, consultor e mentor.',
                            'Mais de 20 anos de experiência no mercado.',
                            'Investidor autônomo, sem ligações com corretoras ou bancos.',
                            'Apaixonado por corridas e maratonas.',
                        ].map((text, i) => (
                            <li
                                key={i}
                                className="font-body flex w-full items-center justify-start gap-3 text-left"
                            >
                                <Image
                                    src={iconCheck}
                                    alt="Icone decorativo da logo do Pace Financeiro"
                                    width={20}
                                    height={20}
                                    className="mt-1 h-5 w-5 shrink-0"
                                />
                                <p>{text}</p>
                            </li>
                        ))}
                    </ul>
                    <Button>Aprender com quem sabe</Button>
                </div>
            </GridContainer>
        </section>
    )
}
