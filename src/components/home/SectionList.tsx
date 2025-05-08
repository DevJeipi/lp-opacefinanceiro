import { GridContainer } from '@/components/ui/GridContainer'
import { Button } from '@/components/ui/button'
import {
    CalendarCheck,
    ChartLine,
    ShieldCheck,
    Users,
    LibraryBig,
} from 'lucide-react'

export function SectionList() {
    return (
        <section className="bg-primary-blue/10">
            <div className="bg-primary-white rounded-br-4xl">
                <GridContainer className="flex flex-col items-center justify-center gap-6">
                    <div className="flex flex-col items-center justify-center text-center">
                        <LibraryBig
                            color="var(--color-primary-orange)"
                            size={32}
                        />
                        <span className="font-body text-slate-500">
                            É agora que a jornada começa
                        </span>
                        <h4 className="font-heading text-primary-black font-bold md:text-2xl">
                            Ao final do curso <br />
                            <span className="text-gradient-animated">
                                voce será capaz de
                            </span>
                        </h4>
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
                            <li className="bg-primary-blue/10 text-primary-black flex items-center justify-start gap-6 rounded-tl-3xl rounded-br-3xl px-9 py-6">
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
                            <li className="bg-primary-blue/10 text-primary-black flex items-center justify-start gap-6 rounded-tl-3xl rounded-br-3xl px-9 py-6">
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
                    <div className="hidden md:block"></div>

                    <Button>Comece sua jornada agora</Button>
                </GridContainer>
            </div>
        </section>
    )
}
