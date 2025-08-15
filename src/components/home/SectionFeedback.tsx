import { Star, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { GridContainer } from '../ui/GridContainer'

const feedbacks = [
    {
        id: 1,
        name: 'Maria Luiza dos Santos Oliveira',
        role: 'CEO, TechStart',
        content:
            'Otávio, penso e acredito que a "famosa planilha" é fundamental. Vejo amigos me dizendo que não anotam absolutamente nada do que gastam. A triste conclusão é que não sabem nada sobre sua vida financeira e, como dizes, estão num caminho preocupante. Obrigada por todas estas aulas até aqui. Tua capacidade didática e o conhecimento sobre o que falas são muito válidos, acredito, para todos nós. E vamos adiante. Abraço.',
        rating: 5,
        //avatar: '/bussiness-woman-avatar.png',
    },
    {
        id: 2,
        name: 'Alice Alvares Ramos',
        role: 'Diretor de Marketing',
        content:
            'Já vi e revi o curso e ainda irei rever outras vezes. Bom saber que nunca é tarde para se educar ou reeducar financeiramente (ou em qualquer outra área). Esse curso é para todos: quem nunca teve qualquer tipo de conhecimento na área ou para os que já investem. Dinâmico e objetivo, não tem quem não saia enriquecido com o conteúdo! Parabéns, Otávio, por explicar o óbvio ao desconhecido. Certeza que mudou minha visão e conhecimento em relação à educação financeira e investimentos.',
        rating: 5,
        //*avatar: '/bussiness-woman-avatar.png',
    },
    {
        id: 3,
        name: 'Flavio de Oliveira',
        role: 'Fundadora, InovaCorp',
        content:
            'Acredito firmemente que o caminho para uma existência feliz (entre outros aspectos) seja uma vida financeira equilibrada, com os impulsos de consumir que uma economia capitalista gera sob controle.\n' +
            'Somos diariamente bombardeados com os apelos ao consumo do sistema e tendemos a gastar mais do que ganhamos. Assim, achei o curso muito útil, esclarecedor e, sobretudo, simples, de modo a realmente induzir mudanças na vida financeira das pessoas. Obrigado por compartilhar o conhecimento e a experiência demonstrada.',
        rating: 5,
        //avatar: '/bussiness-woman-avatar.png',
    },
]

export function SectionFeedback() {
    return (
        <section className="font-body bg-primary-white">
            <GridContainer>
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="bg-primary-orange/10 text-primary-orange mb-2 inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium">
                        <Star size={32} color="var(--color-primary-orange)" />
                        Depoimentos
                    </div>
                    <h1 className="text-primary-black xs:text-xl font-heading mb-6 text-4xl font-bold md:text-3xl">
                        O que nossos clientes <br />
                        <span className="text-gradient-animated">
                            estão dizendo
                        </span>
                    </h1>
                    <p className="font-body mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
                        Descubra como ajudamos pessoas excepcionais a alcancar
                        seus objetivos através dos depoimentos de quem confia em
                        nosso trabalho.
                    </p>
                </div>

                {/* Feedback Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {feedbacks.map((feedback, index) => (
                        <Card
                            key={feedback.id}
                            className={`font-body border-0 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                                index === 1
                                    ? 'bg-primary-blue text-white'
                                    : 'bg-white'
                            }`}
                        >
                            {/* Quote Icon */}
                            <div className="text-primary-orange mb-6">
                                <Quote className="h-8 w-8" />
                            </div>

                            {/* Rating */}
                            <div className="mb-6 flex gap-1">
                                {[...Array(feedback.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="text-primary-orange h-5 w-5 fill-current"
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <p
                                className={`mb-8 text-lg leading-relaxed ${index === 1 ? 'text-gray-100' : 'text-gray-700'}`}
                            >
                                {feedback.content}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                {/*<img
                                    src={feedback.avatar || '/placeholder.svg'}
                                    alt={feedback.name}
                                    className="border-primary-orange h-12 w-12 rounded-full border-2 object-cover"
                                />*/}
                                <div>
                                    <h4
                                        className={`font-heading font-semibold ${index === 1 ? 'text-white' : 'text-primary-blue'}`}
                                    >
                                        {feedback.name}
                                    </h4>
                                    <p
                                        className={`text-sm ${index === 1 ? 'text-gray-300' : 'text-gray-500'}`}
                                    >
                                        {feedback.role}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </GridContainer>
        </section>
    )
}
