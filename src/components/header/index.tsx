import Image from 'next/image'
import fotoLogo from '../../../public/logomark-pacefinanceiro-removebg.webp'
import { GridContainer } from '../ui/GridContainer'

export function Header() {
    return (
        <header>
            <GridContainer>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Image
                        src={fotoLogo}
                        width={70}
                        height={37}
                        alt="Logo do Pace Financeiro"
                        placeholder="blur"
                        priority
                    />
                    <p className="font-heading text-primary-white text-center text-xs font-bold sm:mt-1.5 sm:text-left">
                        Do cheque especial <br /> à independência financeira
                    </p>
                </div>
            </GridContainer>
        </header>
    )
}
