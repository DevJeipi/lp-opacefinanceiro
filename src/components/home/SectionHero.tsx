import Image from 'next/image'
import fotoOtavio from '../../../public/foto-otavio-17-removebg.webp'
import { Button } from '@/components/ui/buttonCarousel'
import { GridContainer } from '@/components/ui/GridContainer'
import { BgImage } from '@/components/ui/BgImage'
import { Header } from '@/components/header'

export function SectionHero() {
    return (
        <section className="relative">
            <Header />
            <BgImage />
            <div className="relative flex h-80 w-full items-center justify-center md:h-120">
                <Image
                    src={fotoOtavio}
                    width={320}
                    height={480}
                    alt="Foto do Otávio Daudt, criador do Pace Financeiro"
                    className="xs:w-64 absolute -z-10 h-full w-48 object-cover md:w-80"
                    priority
                    placeholder="blur"
                    sizes="(max-width: 383px) 192px, (max-width: 767px) 256px, 320px"
                />
                <div className="bg-primary-white absolute top-20 -z-20 h-32 w-32 blur-xl md:top-35"></div>
            </div>
            <div className="text-primary-white bg-gradient-hero mt-[-8rem] flex w-full flex-col items-center justify-center text-center">
                <GridContainer className="pt-12">
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
