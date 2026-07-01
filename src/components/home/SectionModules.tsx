import { Badge } from '@/components/ui/badge'
import { GridContainer } from '@/components/ui/GridContainer'
import { ArrowRight, CirclePlay, Lock, LockOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import module1 from '../../../public/modulo01-img.webp'
import module2 from '../../../public/modulo02-img.webp'
import module3 from '../../../public/modulo03-img.webp'
import velas from '../../../public/velas.webp'
import { Button } from '@/components/ui/button'

export function SectionModules() {
    return (
        <section className="bg-primary-white">
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
                <h1 className="text-primary-black z-10 text-center font-bold md:text-xl">
                    E se você tivesse todas as ferramentas certas...
                    <br />
                    <span className="font-heading md:text-2xl">
                        Nas suas mãos
                    </span>
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
                                vida financeira sob o seu controle novamente.
                            </p>
                            <div className="group relative cursor-pointer overflow-hidden rounded-3xl">
                                <Image
                                    src={module1}
                                    alt="Foto decorativa do Módulo 01"
                                    loading="lazy"
                                    placeholder="blur"
                                    className="h-full w-full rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                <div className="bg-primary-black/80 absolute inset-0 flex flex-row items-end justify-start rounded-3xl px-6 py-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="flex flex-col items-start justify-end">
                                        <p className="font-body text-primary-white text-left">
                                            Aprenda as ferramentas que vão
                                            colocar a sua vida financeira sob o
                                            seu controle novamente.
                                        </p>
                                    </div>
                                    <Link
                                        href={'/module01'}
                                        className="hover:bg-primary-white/30 rounded-full p-2 transition-all duration-300"
                                        aria-label="Acessar descrição do módulo 01"
                                    >
                                        <ArrowRight
                                            size={32}
                                            color="var(--color-primary-white)"
                                        />
                                    </Link>
                                </div>
                                <Link
                                    href={'/module01'}
                                    className="bg-primary-white/30 absolute top-4 right-4 block -rotate-z-45 rounded-full p-2 transition-all duration-300 lg:hidden"
                                    aria-label="Acessar descrição do módulo 01"
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
                                Se você alguma vez já se sentiu confuso com a
                                sopa de letrinhas do mercado financeiro em
                                relação a investimentos, este módulo é para
                                você!
                            </p>
                            <div className="group relative cursor-pointer overflow-hidden rounded-3xl">
                                <Image
                                    src={module2}
                                    alt="Foto decorativa do Módulo 02"
                                    loading="lazy"
                                    placeholder="blur"
                                    className="h-full w-full rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                <div className="bg-primary-black/80 absolute inset-0 flex flex-row items-end justify-start rounded-3xl px-6 py-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="flex flex-col items-start justify-end">
                                        <p className="font-body text-primary-white text-left">
                                            Se você alguma vez já se sentiu
                                            confuso com a sopa de letrinhas do
                                            mercado financeiro em relação a
                                            investimentos, este módulo é pra
                                            você!
                                        </p>
                                    </div>
                                    <Link
                                        href={'/module02'}
                                        className="hover:bg-primary-white/30 rounded-full p-2 transition-all duration-300"
                                        aria-label="Acessar descrição do módulo 02"
                                    >
                                        <ArrowRight
                                            size={32}
                                            color="var(--color-primary-white)"
                                        />
                                    </Link>
                                </div>
                                <Link
                                    href={'/module02'}
                                    className="bg-primary-white/30 absolute top-4 right-4 block -rotate-z-45 rounded-full p-2 transition-all duration-300 lg:hidden"
                                    aria-label="Acessar descrição do módulo 02"
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
                                Monte sua estratégia de investimentos e descubra
                                quando poderá declarar, com base matemática, sua
                                Independência Financeira — e como será viver
                                essa nova realidade.
                            </p>
                            <div className="group relative cursor-pointer overflow-hidden rounded-3xl">
                                <Image
                                    src={module3}
                                    alt="Foto decorativa do Módulo 03"
                                    loading="lazy"
                                    placeholder="blur"
                                    className="h-full w-full rounded-3xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                <div className="bg-primary-black/80 absolute inset-0 flex flex-row items-end justify-start rounded-3xl px-6 py-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                    <div className="flex flex-col items-start justify-end">
                                        <p className="font-body text-primary-white text-left">
                                            Monte sua estratégia de
                                            investimentos e descubra quando
                                            poderá declarar, com base
                                            matemática, sua Independência
                                            Financeira — e como será viver essa
                                            nova realidade.
                                        </p>
                                    </div>
                                    <Link
                                        href={'/module03'}
                                        className="hover:bg-primary-white/30 rounded-full p-2 transition-all duration-300"
                                        aria-label="Acessar descrição do módulo 02"
                                    >
                                        <ArrowRight
                                            size={32}
                                            color="var(--color-primary-white)"
                                        />
                                    </Link>
                                </div>
                                <Link
                                    href={'/module03'}
                                    className="bg-primary-white/30 absolute top-4 right-4 block -rotate-z-45 rounded-full p-2 transition-all duration-300 lg:hidden"
                                    aria-label="Acessar descrição do módulo 02"
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
                <div className="flex w-full flex-col items-center justify-center gap-4">
                    <div className="flex w-full flex-col items-center justify-center">
                        <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-200 py-4 text-2xl">
                            <LockOpen />
                            <span>Módulo 01 - 12 aulas</span>
                        </div>
                        <div className="text-primary-white mt-4 flex w-full flex-col items-center justify-center gap-2 text-xl md:flex-row">
                            <div className="flex w-full flex-1 flex-col items-center justify-center rounded-xl bg-gray-700 px-6 py-12">
                                <CirclePlay size={32} />
                                <Link
                                    className="underline"
                                    href={'https://youtu.be/UqBFTd6mp1s'}
                                >
                                    Clique Aula 01
                                </Link>
                            </div>
                            <div className="flex w-full flex-1 flex-col items-center justify-center rounded-xl bg-gray-700 px-6 py-12">
                                <Lock size={32} />
                                Aula 02
                            </div>
                            <div className="flex w-full flex-1 flex-col items-center justify-center rounded-xl bg-gray-700 px-6 py-12">
                                <Lock size={32} />
                                Aula 03
                            </div>
                            <div className="flex w-full flex-1 flex-col items-center justify-center rounded-xl bg-gray-700 px-6 py-12">
                                <Lock size={32} />
                                Aula 04
                            </div>
                            <div className="flex w-full flex-1 flex-col items-center justify-center rounded-xl bg-gray-700 px-6 py-12">
                                <Lock size={32} />
                                +8 aulas
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-200 py-4 text-2xl">
                        <Lock />
                        <span>Módulo 02 - 18 aulas</span>
                    </div>
                    <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-200 py-4 text-2xl">
                        <Lock />
                        <span>Módulo 03 - 8 aulas</span>
                    </div>
                </div>
                <Button link="curso" color="orange">
                    QUERO SAIR DO VERMELHO POR R$ 197
                </Button>
            </GridContainer>
        </section>
    )
}
