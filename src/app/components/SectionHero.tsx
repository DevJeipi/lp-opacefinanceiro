import { Button } from './button'
import { GridContainer } from './GridContainer'
import { BgImage } from './BgImage'

export function SectionHero() {
    return (
        <>
            <BgImage />
            <GridContainer>
                <div className="w-full flex items-center justify-center relative h-96">
                    <h2 className="mt-16 text-center font-bold font-heading text-white">
                        <div className="grid grid-cols-4 text-3xl md:text-5xl">
                            <span>PA</span>
                            <span></span>
                            <span></span>
                            <span>CE</span>
                        </div>
                        <div className="mt-2 text-3xl md:text-5xl">FINANCEIRO</div>
                    </h2>
                    <img
                        src="/foto-otavio-17-removebg.webp"
                        alt="Foto do Otávio Daudt, criador do Pace Financeiro"
                        className="w-64 mt-24 md:mt-12 absolute -z-10 md:w-80"
                    />
                </div>
            </GridContainer>
            <div className="w-full pt-16 gap-8 flex flex-col items-center justify-center text-center text-primary-white bg-[linear-gradient(to_top,_#CB3233_0%,_#F05824_75%,_#F0582400_100%)]">
                <GridContainer>
                    <div className="mb-4">
                        <h1 className="md:text-2xl font-heading font-bold">Independência Financeira Sem Ilusões</h1>
                        <p className="font-body font-bold">Aprenda sem atalhos, sem riscos desnecessários e com método testado na vida real.</p>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <Button color="blue">Começar com segurança</Button>
                    </div>
                </GridContainer>
                <div className="w-full h-8 rounded-t-full bg-primary-white" />
            </div>
        </>
    )
}