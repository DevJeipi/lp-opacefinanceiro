import { Button } from '@/components/ui/button'
import { GridContainer } from '@/components/ui/GridContainer'
import { Pin, Target, Landmark, Brain, Rocket } from 'lucide-react'

export function SectionPersuasive() {
    return (
        <section className="bg-primary-white">
            <GridContainer>
                <div className="mb-8 flex w-full flex-col items-center justify-center gap-8">
                    <div className="flex flex-col items-center justify-center text-center">
                        <Pin size={32} color="var(--color-primary-orange)" />
                        <h1 className="font-heading text-primary-black xs:text-xl mb-2 font-bold md:text-3xl">
                            Este curso é <br />
                            <span className="text-gradient-animated">
                                um compromisso pessoal
                            </span>
                        </h1>
                        <p className="font-body text-primary-black font-bold">
                            Do cheque especial à independência financeira é o
                            reflexo de uma jornada real. Aqui, você aprende com
                            quem vive o que ensina — sem atalhos, sem promessas
                            vazias.
                        </p>
                    </div>

                    <div className="bg-primary-orange h-0.5 w-full rounded-full"></div>
                    <ul className="font-body flex w-full flex-col items-center justify-center gap-6 sm:w-3/4 md:w-2/3 lg:w-1/2">
                        {/* Vivências */}
                        <li className="flex flex-col items-center justify-center gap-2 text-center">
                            <div className="flex flex-col items-center gap-2">
                                <Target color="var(--color-primary-orange)" />
                                <h2 className="text-xl font-bold">Vivências</h2>
                            </div>
                            <p className="px-8">
                                Todas as estratégias ensinadas aqui são as que
                                <b> apliquei na minha própria vida,</b> saindo
                                do cheque especial até alcançar a independência
                                financeira.
                            </p>
                        </li>
                        <div className="via-primary-orange h-0.5 w-full bg-gradient-to-r from-transparent to-transparent"></div>

                        {/* Sem amarras */}
                        <li className="flex flex-col items-center justify-center gap-4 text-center">
                            <div className="flex flex-col items-center gap-2">
                                <Landmark color="var(--color-primary-orange)" />
                                <h2 className="text-xl font-bold">
                                    Sem amarras, sem comissões
                                </h2>
                            </div>
                            <p className="px-8">
                                Não sou afiliado a bancos, corretoras ou
                                influenciado por nenhuma instituição.
                                <b> O único compromisso é com você.</b>
                            </p>
                        </li>
                        <div className="via-primary-orange h-0.5 w-full bg-gradient-to-r from-transparent to-transparent"></div>

                        {/* Conhecimento como retribuição */}
                        <li className="flex flex-col items-center justify-center gap-4 text-center">
                            <div className="flex flex-col items-center gap-2">
                                <Brain color="var(--color-primary-orange)" />
                                <h2 className="text-xl font-bold">
                                    Conhecimento como retribuição
                                </h2>
                            </div>
                            <p className="px-8">
                                O valor acessível do curso é parte da minha
                                forma de
                                <b> retribuir à sociedade.</b> Quero influenciar
                                positivamente a sua vida como um dia fizeram com
                                a minha.
                            </p>
                        </li>
                        <div className="via-primary-orange h-0.5 w-full bg-gradient-to-r from-transparent to-transparent"></div>

                        {/* Liberdade */}
                        <li className="flex flex-col items-center justify-center gap-4 text-center">
                            <div className="flex flex-col items-center gap-2">
                                <Rocket color="var(--color-primary-orange)" />
                                <h2 className="text-xl font-bold">
                                    Independência é liberdade
                                </h2>
                            </div>
                            <p className="px-8">
                                Levo a sério minha saúde, minha liberdade e meu
                                tempo. A independência financeira
                                <b> vai além do dinheiro.</b> É sobre viver com
                                propósito.
                            </p>
                        </li>
                    </ul>
                    <div className="bg-primary-orange h-0.5 w-full rounded-full"></div>
                </div>
                <Button>Me tornar independente</Button>
            </GridContainer>
        </section>
    )
}
