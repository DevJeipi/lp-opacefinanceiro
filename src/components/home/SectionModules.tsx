import { Badge } from '@/components/ui/badge'
import { GridContainer } from '@/components/ui/GridContainer'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import module1 from '../../../public/modulo01-img.webp'
import module2 from '../../../public/modulo02-img.webp'
import module3 from '../../../public/modulo03-img.webp'
import velas from '../../../public/velas.webp'

export function SectionModules() {
    return (
        <section className="bg-primary-white">
            <div className="bg-primary-blue/10 rounded-tl-4xl rounded-br-4xl">
                <GridContainer className="relative flex flex-col items-center justify-center gap-12">
                    <Image
                        src={velas}
                        width={320}
                        height={103}
                        alt="Foto decorativa de velas de investimento"
                        loading="lazy"
                        placeholder="blur"
                        className="xs:block absolute top-0 z-0 mt-6 hidden w-80 blur-xs md:w-96"
                        sizes="(max-width: 767px) 320px, 384px"
                    />
                    <h1 className="font-heading text-primary-black z-10 text-center font-bold md:text-2xl">
                        <span className="font-body md:text-xl">
                            E se você tivesse todas as ferramentas certas...
                        </span>
                        <br />
                        Nas suas mãos
                    </h1>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <Badge variant={'outline'}>Veja os módulos</Badge>
                        <ul className="flex flex-1 flex-col gap-8 lg:flex-row">
                            <li className="flex flex-col items-center justify-center text-left md:px-16 lg:px-0">
                                <span className="font-heading text-primary-blue w-full font-bold lg:pl-4 lg:text-xl">
                                    01
                                </span>
                                <p className="font-body mb-2 block w-full lg:hidden">
                                    Aprenda as ferramentas que vão colocar a sua
                                    vida financeira sob o seu controle
                                    novamente.
                                </p>
                                <div className="group relative cursor-pointer overflow-hidden rounded-3xl">
                                    <Image
                                        src={module1}
                                        alt="Foto decorativa do Módulo 01"
                                        loading="lazy"
                                        placeholder="blur"
                                        className="rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    />
                                    <div className="bg-primary-black/80 absolute inset-0 flex flex-row items-end justify-start rounded-3xl px-6 py-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        <div className="flex flex-col items-start justify-end">
                                            <p className="font-body text-primary-white text-left">
                                                Aprenda as ferramentas que vão
                                                colocar a sua vida financeira
                                                sob o seu controle novamente.
                                            </p>
                                        </div>
                                        <Link
                                            href={'/modulo01'}
                                            className="hover:bg-primary-white/30 rounded-full p-2 transition-all duration-300"
                                        >
                                            <ArrowRight
                                                size={32}
                                                color="var(--color-primary-white)"
                                            />
                                        </Link>
                                    </div>
                                    <Link
                                        href={'/modulo01'}
                                        className="bg-primary-white/30 absolute top-4 right-4 block -rotate-z-45 rounded-full p-2 transition-all duration-300 lg:hidden"
                                    >
                                        <ArrowRight
                                            size={32}
                                            color="var(--color-primary-white)"
                                        />
                                    </Link>
                                </div>
                            </li>
                            <li className="flex flex-col items-center justify-center text-left md:px-16 lg:px-0">
                                <span className="font-heading text-primary-blue w-full font-bold lg:pl-4 lg:text-xl">
                                    02
                                </span>
                                <p className="font-body mb-2 block w-full lg:hidden">
                                    Se você alguma vez já se sentiu confuso com
                                    a sopa de letrinhas do mercado financeiro em
                                    relação a investimentos, este módulo é para
                                    você!
                                </p>
                                <div className="group relative cursor-pointer overflow-hidden rounded-3xl">
                                    <Image
                                        src={module2}
                                        alt="Foto decorativa do Módulo 01"
                                        loading="lazy"
                                        placeholder="blur"
                                        className="rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    />
                                    <div className="bg-primary-black/80 absolute inset-0 flex flex-row items-end justify-start rounded-3xl px-6 py-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        <div className="flex flex-col items-start justify-end">
                                            <p className="font-body text-primary-white text-left">
                                                Se você alguma vez já se sentiu
                                                confuso com a sopa de letrinhas
                                                do mercado financeiro em relação
                                                a investimentos, este módulo é
                                                pra você!
                                            </p>
                                        </div>
                                        <Link
                                            href={'/modulo02'}
                                            className="hover:bg-primary-white/30 rounded-full p-2 transition-all duration-300"
                                        >
                                            <ArrowRight
                                                size={32}
                                                color="var(--color-primary-white)"
                                            />
                                        </Link>
                                    </div>
                                    <Link
                                        href={'/modulo02'}
                                        className="bg-primary-white/30 absolute top-4 right-4 block -rotate-z-45 rounded-full p-2 transition-all duration-300 lg:hidden"
                                    >
                                        <ArrowRight
                                            size={32}
                                            color="var(--color-primary-white)"
                                        />
                                    </Link>
                                </div>
                            </li>
                            <li className="flex flex-col items-center justify-center text-left md:px-16 lg:px-0">
                                <span className="font-heading text-primary-blue w-full font-bold lg:pl-4 lg:text-xl">
                                    03
                                </span>
                                <p className="font-body mb-2 block w-full lg:hidden">
                                    Monte sua estratégia de investimentos e
                                    descubra quando poderá declarar, com base
                                    matemática, sua Independência Financeira — e
                                    como será viver essa nova realidade.
                                </p>
                                <div className="group relative cursor-pointer overflow-hidden rounded-3xl">
                                    <Image
                                        src={module3}
                                        alt="Foto decorativa do Módulo 01"
                                        loading="lazy"
                                        placeholder="blur"
                                        className="rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    />
                                    <div className="bg-primary-black/80 absolute inset-0 flex flex-row items-end justify-start rounded-3xl px-6 py-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                        <div className="flex flex-col items-start justify-end">
                                            <p className="font-body text-primary-white text-left">
                                                Monte sua estratégia de
                                                investimentos e descubra quando
                                                poderá declarar, com base
                                                matemática, sua Independência
                                                Financeira — e como será viver
                                                essa nova realidade.
                                            </p>
                                        </div>
                                        <Link
                                            href={'/modulo03'}
                                            className="hover:bg-primary-white/30 rounded-full p-2 transition-all duration-300"
                                        >
                                            <ArrowRight
                                                size={32}
                                                color="var(--color-primary-white)"
                                            />
                                        </Link>
                                    </div>
                                    <Link
                                        href={'/modulo03'}
                                        className="bg-primary-white/30 absolute top-4 right-4 block -rotate-z-45 rounded-full p-2 transition-all duration-300 lg:hidden"
                                    >
                                        <ArrowRight
                                            size={32}
                                            color="var(--color-primary-white)"
                                        />
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <Button>Investir em meu futuro</Button>
                </GridContainer>
            </div>
        </section>
    )
}
