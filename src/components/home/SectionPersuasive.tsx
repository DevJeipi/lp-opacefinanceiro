import Image from 'next/image'
import fotoDireita from '../../../public/compose-otavio-2.png'
import { Button } from '@/components/ui/button'
import { GridContainer } from '@/components/ui/GridContainer'
import { Pin, Target, Landmark, Brain, Rocket } from 'lucide-react'

export function SectionPersuasive() {
    return (
        <section className="bg-primary-white">
            <GridContainer>
                <div className="mb-8 flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-20">
                    {/* Texto à esquerda */}
                    <div className="flex w-full flex-col gap-8 lg:w-1/2">
                        <div>
                            <Pin
                                size={32}
                                color="var(--color-primary-orange)"
                            />
                            <h1 className="font-heading text-primary-black mb-2 text-2xl font-bold md:text-3xl">
                                Este curso é <br />
                                <span className="text-gradient-animated">
                                    um compromisso pessoal
                                </span>
                            </h1>
                            <p className="font-body text-primary-black font-bold">
                                Do cheque especial à independência financeira é
                                o reflexo de uma jornada real. Aqui, você
                                aprende com quem vive o que ensina — sem
                                atalhos, sem promessas vazias.
                            </p>
                        </div>

                        <ul className="font-body flex flex-col gap-6">
                            {/* Vivências */}
                            <li className="flex flex-col gap-4 pl-2">
                                <div className="flex items-center gap-2">
                                    <Target color="var(--color-primary-orange)" />
                                    <h2 className="text-xl font-bold">
                                        Vivências
                                    </h2>
                                </div>
                                <p>
                                    Todas as estratégias ensinadas aqui são as
                                    que
                                    <b> apliquei na minha própria vida,</b>{' '}
                                    saindo do cheque especial até alcançar a
                                    independência financeira.
                                </p>
                            </li>
                            <div className="from-primary-orange h-0.5 w-full bg-gradient-to-r to-transparent"></div>

                            {/* Sem amarras */}
                            <li className="flex flex-col gap-4 pl-2">
                                <div className="flex items-center gap-2">
                                    <Landmark color="var(--color-primary-orange)" />
                                    <h2 className="text-xl font-bold">
                                        Sem amarras, sem comissões
                                    </h2>
                                </div>
                                <p>
                                    Não sou afiliado a bancos, corretoras ou
                                    influenciado por nenhuma instituição.
                                    <b> O único compromisso é com você.</b>
                                </p>
                            </li>
                            <div className="from-primary-orange h-0.5 w-full bg-gradient-to-r to-transparent"></div>

                            {/* Conhecimento como retribuição */}
                            <li className="flex flex-col gap-4 pl-2">
                                <div className="flex items-center gap-2">
                                    <Brain color="var(--color-primary-orange)" />
                                    <h2 className="text-xl font-bold">
                                        Conhecimento como retribuição
                                    </h2>
                                </div>
                                <p>
                                    O valor acessível do curso é parte da minha
                                    forma de
                                    <b> retribuir à sociedade.</b> Quero
                                    influenciar positivamente a sua vida como um
                                    dia fizeram com a minha.
                                </p>
                            </li>
                            <div className="from-primary-orange h-0.5 w-full bg-gradient-to-r to-transparent"></div>

                            {/* Liberdade */}
                            <li className="flex flex-col gap-4 pl-2">
                                <div className="flex items-center gap-2">
                                    <Rocket color="var(--color-primary-orange)" />
                                    <h2 className="text-xl font-bold">
                                        Independência é liberdade
                                    </h2>
                                </div>
                                <p>
                                    Levo a sério minha saúde, minha liberdade e
                                    meu tempo. A independência financeira
                                    <b> vai além do dinheiro.</b> É sobre viver
                                    com propósito.
                                </p>
                            </li>
                            <div className="from-primary-orange h-0.5 w-full bg-gradient-to-r to-transparent"></div>
                        </ul>
                    </div>

                    {/* Imagem à direita */}
                    <div className="hidden w-full justify-center lg:block lg:w-1/2">
                        <Image
                            src={fotoDireita}
                            width={650}
                            height={680}
                            alt="Fotos da vida de Otávio Daudt"
                            loading="lazy"
                            placeholder="blur"
                            className="mt-8 w-full max-w-md object-cover lg:max-w-xl"
                        />
                    </div>
                </div>
                <Button>Me tornar independente</Button>
            </GridContainer>
        </section>
    )
}
