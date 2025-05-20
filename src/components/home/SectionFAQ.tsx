import { GridContainer } from '@/components/ui/GridContainer'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { MessageCircleQuestion } from 'lucide-react'

export function SectionFAQ() {
    return (
        <section className="bg-primary-white">
            <div className="bg-blue-low-op rounded-t-4xl">
                <GridContainer className="flex flex-col items-center justify-center gap-8 text-center">
                    <div className="flex flex-col items-center justify-center">
                        <MessageCircleQuestion
                            size={32}
                            color="var(--color-primary-black)"
                        />
                        <h1 className="font-heading text-primary-black text-xl font-bold md:text-3xl">
                            Perguntas Frequentes
                        </h1>
                    </div>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full lg:w-3/4"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Para quem é esse curso?
                            </AccordionTrigger>
                            <AccordionContent>
                                Este curso é para qualquer pessoa que esteja
                                cansada de viver no vermelho, que quer sair do
                                cheque especial, eliminar dívidas e começar uma
                                trajetória sólida rumo à independência
                                financeira — mesmo começando do zero. Se você
                                busca um passo a passo claro e realista, este é
                                o seu lugar.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                Em quanto tempo verei resultados?
                            </AccordionTrigger>
                            <AccordionContent>
                                Os primeiros resultados podem vir em poucas
                                semanas, especialmente na organização do
                                orçamento e controle das dívidas. Já os
                                resultados mais profundos — como aumento da taxa
                                de poupança e investimentos consistentes —
                                dependem do seu ritmo, mas com o Do Cheque
                                Especial à Independência Financeira, o progresso
                                é garantido.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                O que é o Pace Financeiro?
                            </AccordionTrigger>
                            <AccordionContent>
                                É a nossa metodologia exclusiva que te ajuda a
                                encontrar o ritmo ideal para conquistar sua
                                liberdade financeira, de forma constante,
                                inteligente e sem extremos. Assim como em uma
                                corrida, não importa quão rápido você começa,
                                mas sim que você siga com consistência até a
                                linha de chegada.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                Preciso entender de investimentos ou finanças
                                para acompanhar o curso?
                            </AccordionTrigger>
                            <AccordionContent>
                                De forma alguma! O curso foi criado para quem
                                não tem nenhuma base financeira, usando uma
                                linguagem simples e direta, com exemplos do dia
                                a dia. Vamos do básico ao avançado com clareza e
                                sem enrolação.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </GridContainer>
            </div>
        </section>
    )
}
