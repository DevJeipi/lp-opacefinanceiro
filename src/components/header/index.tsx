import Image from 'next/image'
import { GridContainer } from '../ui/GridContainer'

export function Header() {
    return (
        <header>
            <GridContainer className="py-0">
                <div className="flex items-center justify-center">
                    <Image
                        src={'/logomark-pacefinanceiro-removebg.png'}
                        width={130}
                        height={130}
                        alt="Logo do Pace Financeiro"
                        priority
                    />
                </div>
            </GridContainer>
        </header>
    )
}
