import { GridContainer } from '@/components/ui/GridContainer'
import { Highlight } from '@/components/ui/highlight'
import { Button } from '@/components/ui/button'
import {
    ChartNoAxesColumnIncreasing,
    Check,
    Quote,
    KeyRound,
} from 'lucide-react'

export function SectionHistory() {
    return (
        <section className="bg-primary-white flex w-full items-center justify-center overflow-hidden text-center">
            <GridContainer className="flex flex-col items-center justify-center gap-8">
                <div className="flex flex-col items-center justify-center gap-2">
                    <KeyRound color="var(--color-primary-orange)" size={32} />
                    <h3 className="font-heading text-primary-black font-bold md:text-2xl">
                        E se você pudesse <br />
                        <Highlight>virar a chave</Highlight>
                        da sua vida financeira?
                    </h3>
                </div>

                <div className="font-body w-full">
                    <span className="text-gray-600 md:text-xl">
                        Conheça a história da Jéssica
                    </span>
                    <p className="text-primary-black font-bold md:text-xl">
                        A Jéssica,
                        <span className="text-gradient-animated">
                            {' '}
                            antes de entrar no curso,{' '}
                        </span>
                        era aquela pessoa que vivia no limite do cheque
                        especial. <br />
                        <span className="text-gradient-animated">
                            Todo mês era um sufoco.
                        </span>
                    </p>
                </div>

                <div className="font-body relative flex w-full items-center justify-center md:text-xl">
                    <Quote
                        size={56}
                        color="var(--color-secondary-blue)"
                        fill="var(--color-secondary-blue)"
                        strokeWidth={0}
                        className="absolute top-[-30px]"
                    />
                    <div className="bg-primary-blue text-primary-white rounded-tr-3xl rounded-bl-3xl p-4 md:w-1/2">
                        Eu comprava por impulso, fazia um monte de parcelinhas e
                        depois fingia que estava tudo certo… Sendo que não
                        estava.
                    </div>
                </div>

                <div className="font-heading text-gradient-animated text-4xl font-bold">
                    MAS...
                </div>

                <div className="font-body w-full md:text-xl">
                    <p className="text-primary-black font-bold">
                        <span className="text-primary-blue">
                            Jéssica descobriu um caminho{' '}
                        </span>
                        quando viu a amiga comentar sobre o curso e decidiu
                        tentar.
                    </p>
                </div>

                <div className="font-body flex w-full flex-col items-center justify-center gap-4 rounded-3xl border border-slate-400 px-8 py-4 text-xl font-bold md:w-1/2">
                    <span className="text-gradient-animated text-center">
                        Hoje, Jéssica
                    </span>
                    <ul className="flex flex-col items-start justify-center gap-2">
                        <li className="flex items-center justify-center gap-4 text-left">
                            <Check
                                size={32}
                                color="var(--color-primary-orange)"
                            />
                            <p className="text-primary-blue">
                                Quitou suas dívidas.
                            </p>
                        </li>
                        <li className="flex items-center justify-center gap-4 text-left">
                            <Check
                                size={32}
                                color="var(--color-primary-orange)"
                            />
                            <p className="text-primary-blue">
                                Organizou sua vida financeira inteira.
                            </p>
                        </li>
                        <li className="flex items-center justify-center gap-4 text-left">
                            <Check
                                size={32}
                                color="var(--color-primary-orange)"
                            />
                            <p className="text-primary-blue">
                                Começou a investir com segurança.
                            </p>
                        </li>
                        <li className="flex items-center justify-center gap-4 text-left">
                            <Check
                                size={32}
                                color="var(--color-primary-orange)"
                            />
                            <p className="text-primary-blue">
                                E virou até “consultora” dos amigos.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="font-body text-primary-blue text-2xl font-bold">
                    ... o conhecimento transformou
                </div>

                <div className="flex w-full flex-col items-center justify-center gap-2">
                    <div className="bg-gradient-animated flex items-center justify-center rounded-full p-5">
                        <ChartNoAxesColumnIncreasing
                            size={48}
                            color="var(--color-primary-white)"
                        />
                    </div>
                    <p className="font-body text-primary-black text-xl font-bold">
                        Mais de
                        <span className="text-gradient-animated">
                            {' '}
                            40 mil alunos{' '}
                        </span>
                        já passaram por esse curso e mudaram completamente sua
                        relação com o dinheiro.
                    </p>
                </div>

                <Button>Ser o próximo</Button>
            </GridContainer>
        </section>
    )
}
