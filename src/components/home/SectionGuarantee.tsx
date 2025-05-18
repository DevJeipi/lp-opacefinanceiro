import { Badge } from '@/components/ui/badge'
import { GridContainer } from '@/components/ui/GridContainer'
import { ShieldQuestion } from 'lucide-react'

export function SectionGuarantee() {
    return (
        <section className="bg-primary-white">
            <GridContainer className="flex flex-col items-center justify-center gap-4">
                <div className="flex flex-col items-center justify-center text-center">
                    <ShieldQuestion
                        size={32}
                        color="var(--color-primary-orange)"
                    />
                    <h1 className="font-heading font-bold md:text-2xl">
                        "E se eu não tiver resultado?"
                    </h1>
                </div>
                <div className="bg-primary-blue flex flex-col items-center justify-center gap-8 rounded-tr-4xl rounded-bl-4xl px-4 py-8">
                    <Badge variant={'secondary'}>
                        <div className="bg-gradient-animated h-2 w-2 rounded-full"></div>
                        Garantia
                    </Badge>
                    <div className="text-primary-white flex flex-col gap-4 text-center">
                        <span className="font-heading text-4xl font-bold">
                            7 <br /> Dias
                        </span>
                        <p>
                            Sem risco: você tem 7 dias para testar. <br />
                            Se não sentir diferença real nos primeiros dias, seu
                            dinheiro é devolvido.
                            <br /> <b>Simples assim.</b>
                        </p>
                    </div>
                </div>
            </GridContainer>
        </section>
    )
}
