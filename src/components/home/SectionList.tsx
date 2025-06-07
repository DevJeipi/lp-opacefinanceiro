import { GridContainer } from '@/components/ui/GridContainer'
import { Button } from '@/components/ui/buttonCarousel'
import {
    CalendarCheck,
    ChartLine,
    ShieldCheck,
    Users,
    LibraryBig,
} from 'lucide-react'

export function SectionList() {
    return (
        <section className="bg-blue-low-op">
            <div className="bg-primary-white rounded-br-4xl">
                <GridContainer className="flex flex-col items-center justify-center gap-6">
                    <div className="flex flex-col items-center justify-center text-center">
                        <LibraryBig
                            color="var(--color-primary-orange)"
                            size={32}
                        />
                        <span className="font-body font-bold text-slate-500">
                            É agora que a jornada começa
                        </span>
                        <h1 className="font-heading text-primary-black font-bold md:text-2xl">
                            Ao final do curso <br />
                            <span className="text-gradient-animated">
                                voce será capaz de
                            </span>
                        </h1>
                    </div>

                    {/* Mobile */}
                    <div className="flex flex-col items-center justify-center md:hidden">
                        <ul className="flex flex-col gap-4 text-left">
                            <li className="bg-primary-blue text-primary-white flex items-center justify-start gap-6 rounded-tl-3xl rounded-br-3xl px-9 py-6">
                                <CalendarCheck
                                    className="text-primary-blue min-h-9 min-w-9"
                                    strokeWidth={1.5}
                                    fill="var(--color-primary-orange)"
                                    size={36}
                                />
                                <p>Planejar seu mês com clareza.</p>
                            </li>
                            <li className="bg-blue-low-op text-primary-black flex items-center justify-start gap-6 rounded-tl-3xl rounded-br-3xl px-9 py-6">
                                <ChartLine
                                    className="min-h-9 min-w-9"
                                    color="var(--color-primary-blue)"
                                    size={36}
                                />
                                <p>
                                    Escolher e aplicar seu dinheiro com
                                    segurança.
                                </p>
                            </li>
                            <li className="bg-primary-blue text-primary-white flex items-center justify-start gap-6 rounded-tl-3xl rounded-br-3xl px-9 py-6">
                                <ShieldCheck
                                    className="text-primary-blue min-h-9 min-w-9"
                                    strokeWidth={1.5}
                                    fill="var(--color-primary-orange)"
                                    size={36}
                                />
                                <p>
                                    Blindar seu patrimônio de golpes e decisões
                                    ruins.
                                </p>
                            </li>
                            <li className="bg-blue-low-op text-primary-black flex items-center justify-start gap-6 rounded-tl-3xl rounded-br-3xl px-9 py-6">
                                <Users
                                    className="min-h-9 min-w-9"
                                    color="var(--color-primary-blue)"
                                    size={36}
                                />
                                <p>
                                    Ser referência entre seus amigos e família.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Desktop */}
                    <div className="relative hidden md:block">
                        <div className="from-primary-blue/0 via-primary-blue to-primary-blue/0 absolute top-0 left-1/2 z-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-t"></div>
                        <div>
                            <ul className="relative z-10 grid grid-cols-2 grid-rows-4">
                                <li className="flex items-center justify-end">
                                    <div className="bg-primary-blue flex w-95 flex-col items-center justify-center gap-2 rounded-tr-2xl rounded-bl-2xl px-4 py-6">
                                        <CalendarCheck
                                            className="text-primary-blue min-h-9 min-w-9"
                                            strokeWidth={1.5}
                                            fill="var(--color-primary-orange)"
                                            size={36}
                                        />
                                        <p className="font-body text-primary-white text-center font-bold">
                                            Planejar seu mês com clareza
                                        </p>
                                    </div>
                                    <div className="bg-primary-blue h-0.5 w-12"></div>
                                    <div className="bg-gradient-animated mr-[-12px] h-6 w-6 rounded-full"></div>
                                </li>
                                <li></li>
                                <li></li>
                                <li className="flex items-center justify-start">
                                    <div className="bg-gradient-animated ml-[-12px] h-6 w-6 rounded-full"></div>
                                    <div className="bg-primary-blue h-0.5 w-12"></div>
                                    <div className="bg-primary-blue flex w-95 flex-col items-center justify-center gap-2 rounded rounded-tr-2xl rounded-bl-2xl px-4 py-6">
                                        <ChartLine
                                            className="min-h-9 min-w-9"
                                            color="var(--color-primary-orange)"
                                            size={36}
                                        />
                                        <p className="font-body text-primary-white text-center font-bold">
                                            Escolher e aplicar seu dinheiro com
                                            segurança
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center justify-end">
                                    <div className="bg-primary-blue flex w-95 flex-col items-center justify-center gap-2 rounded rounded-tr-2xl rounded-bl-2xl px-4 py-6">
                                        <ShieldCheck
                                            className="text-primary-blue min-h-9 min-w-9"
                                            strokeWidth={1.5}
                                            fill="var(--color-primary-orange)"
                                            size={36}
                                        />
                                        <p className="font-body text-primary-white text-center font-bold">
                                            Blindar seu patrimônio de golpes e
                                            decisões ruins
                                        </p>
                                    </div>
                                    <div className="bg-primary-blue h-0.5 w-12"></div>
                                    <div className="bg-gradient-animated mr-[-12px] h-6 w-6 rounded-full"></div>
                                </li>
                                <li></li>
                                <li></li>
                                <li className="flex items-center justify-start">
                                    <div className="bg-gradient-animated ml-[-12px] h-6 w-6 rounded-full"></div>
                                    <div className="bg-primary-blue h-0.5 w-12"></div>
                                    <div className="bg-primary-blue flex w-95 flex-col items-center justify-center gap-2 rounded rounded-tr-2xl rounded-bl-2xl px-4 py-6">
                                        <Users
                                            className="min-h-9 min-w-9"
                                            color="var(--color-primary-orange)"
                                            size={36}
                                        />
                                        <p className="font-body text-primary-white text-center font-bold">
                                            Ser referência entre seus amigos e
                                            família
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Button>Comece sua jornada agora</Button>
                </GridContainer>
            </div>
        </section>
    )
}
