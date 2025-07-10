import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GridContainer } from '@/components/ui/GridContainer'
import { Flame } from 'lucide-react'
import Image from 'next/image'

// Exemplo de feedbacks (substitua pelos reais ou integre com backend futuramente)
const feedbacks = [
    {
        name: 'Rugardo Wentz',
        text: '"Sou uma pessoa extremamente exigente, minha régua de demanda em relação a qualidade é muito alta. Assistindo ao teu curso, a forma eficiente e prática (em videos curtos) como as aulas foram organizadas, perfeita para os ansiosos como eu, não tenho críticas ou sugestões de melhoria, está perfeito, o que pra mim é raro de dizer. O curso está bom demais!"',
        image: null,
    },
    {
        name: 'Rosana Pereira',
        text: '"Estou assistindo ao teu curso. Tenho observações válidas. A didática e a clareza, são nota 10. Além disto, fico pensando quanto você levou para transformar tudo isto numa aprendizagem para ti e quanto tempo mais, para transformar estas ideias e pensamentos em algo tão consistente, a ponto de poder transmitir aos outros, com tanta convicção. Uma aprendizagem tanto para mim quanto para todos que estão te assistindo. Parabéns!"',
        image: null,
    },
    {
        name: 'Maria Luiza',
        text: null,
        image: '/feedback-otavio-1.webp',
    },
    {
        name: 'Alice Alvarez',
        text: null,
        image: '/feedback-otavio-2.webp',
    },
    {
        name: 'Flavio Daudt',
        text: null,
        image: '/feedback-otavio-3.webp',
    },
]

export function SectionFeedback() {
    // Separar os dois primeiros de texto e os demais de print
    const textFeedbacks = feedbacks.filter((fb) => fb.text).slice(0, 2)
    const printFeedbacks = feedbacks.filter((fb) => fb.image)

    return (
        <section className="bg-primary-white rounded-br-4xl">
            <GridContainer>
                <h1 className="font-heading text-primary-black mb-10 flex flex-col items-center justify-center text-center font-bold md:text-2xl">
                    <Flame size={32} color="var(--color-primary-orange)" />
                    O que os alunos <br />{' '}
                    <span className="text-gradient-animated">tem a dizer</span>
                </h1>
                {/* Grid dos dois primeiros cards de texto */}
                <div className="flex flex-col gap-8 md:mb-8 md:flex-row md:gap-8">
                    {textFeedbacks.map((fb, i) => (
                        <Card
                            key={i}
                            className="bg-primary-white border-primary-orange/10 w-full shadow-md transition-transform duration-200 hover:scale-[1.03] md:w-1/2"
                        >
                            <CardHeader>
                                <CardTitle className="text-primary-orange font-heading font-bold">
                                    {fb.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                <p className="text-primary-black text-base leading-relaxed whitespace-pre-line">
                                    {fb.text}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                {/* Grid dos prints, um embaixo do outro */}
                <div className="mt-8 flex flex-col gap-8">
                    {printFeedbacks.map((fb, i) => (
                        <Card
                            key={i}
                            className="bg-primary-white border-primary-orange/10 w-full shadow-md transition-transform duration-200 hover:scale-[1.01]"
                        >
                            <CardHeader>
                                <CardTitle className="text-primary-orange font-heading font-bold">
                                    {fb.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-4">
                                {fb.text && (
                                    <p className="text-primary-black text-base leading-relaxed whitespace-pre-line">
                                        {fb.text}
                                    </p>
                                )}
                                {fb.image && (
                                    <div className="border-primary-orange/20 overflow-hidden rounded-lg border">
                                        <Image
                                            src={fb.image}
                                            alt={`Print de feedback de ${fb.name}`}
                                            width={600}
                                            height={400}
                                            className="h-auto w-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </GridContainer>
        </section>
    )
}
