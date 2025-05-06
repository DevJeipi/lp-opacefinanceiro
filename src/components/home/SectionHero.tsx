import Image from 'next/image'
import fotoOtavio from '../../../public/foto-otavio-17-removebg.webp'
import { Button } from '@/components/ui/button'
import { GridContainer } from '@/components/ui/GridContainer'
import { BgImage } from '@/components/ui/BgImage'

export function SectionHero() {
    return (
        <section>
            <BgImage />
            <GridContainer className="py-0">
                <div className="relative flex h-80 w-full items-center justify-center md:h-120">
                    <h2 className="font-heading text-center font-bold text-white">
                        <div className="xs:text-3xl flex items-center justify-between text-2xl md:text-5xl">
                            <span>PA</span>
                            <span>CE</span>
                        </div>
                        <div className="xs:text-3xl mt-2 text-2xl md:text-5xl">
                            FINANCEIRO
                        </div>
                    </h2>
                    <Image
                        src={fotoOtavio}
                        width={320}
                        height={480}
                        alt="Foto do Otávio Daudt, criador do Pace Financeiro"
                        className="xs:w-64 absolute -z-10 h-full w-48 object-cover md:w-80"
                        priority
                        placeholder="blur"
                        sizes="(max-width: 767px) 256px, (max-width: 383px) 192px"
                    />
                </div>
            </GridContainer>
            <div className="text-primary-white bg-gradient-hero mt-[-4rem] flex w-full flex-col items-center justify-center pt-12 text-center">
                <GridContainer>
                    <div className="mb-4">
                        <h1 className="font-heading font-bold md:text-2xl">
                            Independência Financeira Sem Ilusões
                        </h1>
                        <p className="font-body font-bold">
                            Aprenda sem atalhos, sem riscos desnecessários e com
                            método testado na vida real.
                        </p>
                    </div>
                    <div className="flex w-full items-center justify-center">
                        <Button color="blue">Começar com segurança</Button>
                    </div>
                </GridContainer>
                <div className="bg-primary-white h-8 w-full rounded-t-full" />
            </div>
        </section>
    )
}
