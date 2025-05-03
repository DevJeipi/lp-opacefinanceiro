import { GridContainer } from '@/components/ui/GridContainer'
import { Highlight } from '@/components/ui/highlight'
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faCheck, faBullhorn } from "@fortawesome/free-solid-svg-icons";

export function SectionHistory() {
    return (
        <>
            <section className="w-full py-8 flex items-center justify-center text-center overflow-hidden bg-primary-white">
                <GridContainer className="flex items-center justify-center flex-col gap-8">
                    <h2 className="font-bold font-heading md:text-2xl">
                        E se você pudesse <br />
                        <Highlight>virar a chave</Highlight>
                        da sua vida financeira?
                    </h2>

                    <div className="w-full font-body">
                        <span className="text-gray-600">Conheça a história da Jéssica</span>
                        <p className="font-bold md:text-xl">
                            A Jéssica,
                            <span className="bg-[linear-gradient(to_top,#F05824_0%,#CB3233_100%)] bg-clip-text text-transparent"> antes de entrar no curso, </span>
                            era aquela pessoa que vivia no limite do cheque especial. <br />
                            <span className="bg-[linear-gradient(to_top,#F05824_0%,#CB3233_100%)] bg-clip-text text-transparent">Todo mês era um sufoco.</span>
                        </p>
                    </div>

                    <div className="w-full flex items-center justify-center relative font-body md:text-xl">
                        <FontAwesomeIcon icon={faQuoteLeft} className="w-14 h-14  text-slate-400 absolute top-[-30px]" />
                        <div className="md:w-1/2 p-4 rounded-bl-3xl rounded-tr-3xl bg-primary-blue text-primary-white">
                            Eu comprava por impulso, fazia um monte de parcelinhas e depois fingia que estava tudo certo… Sendo que não estava.
                        </div>
                    </div>

                    <div className="font-heading font-bold bg-[linear-gradient(to_top,#F05824_0%,#CB3233_100%)] bg-clip-text text-transparent text-4xl">
                        MAS...
                    </div>

                    <div className="w-full font-body md:text-xl">
                        <p className="font-bold">
                            <span className="text-primary-blue">Jéssica descobriu um caminho </span>
                            quando viu a amiga comentar sobre o curso e decidiu tentar.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 px-8 py-4 gap-4 flex items-center justify-center flex-col font-body font-bold text-xl border border-slate-400 rounded-3xl">
                        <span className="bg-[linear-gradient(to_top,#F05824_0%,#CB3233_100%)] bg-clip-text text-transparent text-center">Hoje, Jéssica</span>
                        <ul className="flex flex-col items-start justify-center gap-2">
                            <li className="flex items-center justify-center gap-4 text-left">
                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-primary-orange" />
                                <p className="text-primary-blue">Quitou suas dívidas.</p>
                            </li>
                            <li className="flex items-center justify-center gap-4 text-left">
                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-primary-orange" />
                                <p className="text-primary-blue">Organizou sua vida financeira inteira.</p>
                            </li>
                            <li className="flex items-center justify-center gap-4 text-left">
                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-primary-orange" />
                                <p className="text-primary-blue">Começou a investir com segurança.</p>
                            </li>
                            <li className="flex items-center justify-center gap-4 text-left">
                                <FontAwesomeIcon icon={faCheck} className="w-6 h-6 text-primary-orange" />
                                <p className="text-primary-blue">E virou até “consultora” dos amigos.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="font-body font-bold text-2xl text-primary-blue">
                        ... o conhecimento transformou
                    </div>

                    <div className="w-full flex items-center justify-center flex-col gap-2">
                        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[linear-gradient(to_top,#F05824_0%,#CB3233_100%)]">
                            <FontAwesomeIcon icon={faBullhorn} className="w-12 h-12 text-primary-white" />
                        </div>
                        <p className="font-body font-bold text-xl">
                            Mais de
                            <span className="text-primary-orange"> 40 mil alunos </span>
                            já passaram por esse curso e mudaram completamente sua relação com o dinheiro.
                        </p>
                    </div>


                    <Button>Ser o próximo</Button>
                </GridContainer>
            </section>
        </>
    )
}