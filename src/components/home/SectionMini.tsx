import { CircleHelp } from 'lucide-react'
import { GridContainer } from '@/components/ui/GridContainer'

export function SectionMini() {
    return (
        <section>
            <GridContainer>
                <div className="font-body text-primary-white flex flex-col items-center justify-center gap-2 text-center text-2xl font-bold">
                    <CircleHelp color="var(--color-primary-white)" size={48} />
                    <p>E quem seria experiente assim para me ajudar?</p>
                </div>
            </GridContainer>
        </section>
    )
}
