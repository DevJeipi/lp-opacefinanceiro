import { BgImage } from '@/components/ui/BgImage'
import { Button } from '@/components/ui/button'
import { GridContainer } from '@/components/ui/GridContainer'
import { HeroVideo } from '@/components/ui/HeroVideo'
import { Shield } from 'lucide-react'

export function SectionHero() {
    return (
        <section className="relative flex min-h-screen flex-col justify-start pb-12">
            <BgImage />
            <GridContainer className="z-10 flex flex-col items-center justify-start gap-8">
                {/* Título no topo */}
                <div className="text-primary-white w-full px-4 text-center">
                    <h1 className="font-body text-xl leading-tight font-bold break-words sm:text-3xl md:text-4xl lg:text-5xl">
                        ASSISTA AGORA: A aula de 10 minutos que vai te ensinar a
                        sair do cheque especial.
                    </h1>
                </div>

                {/* Vídeo no meio */}
                <div className="w-full max-w-md">
                    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border-2 border-white shadow-lg">
                        <HeroVideo
                            src="/videos/video-hero.mp4"
                            poster="/videos/poster.jpg"
                        />
                    </div>
                    <div className="text-primary-white bg-primary-orange/40 -mt-3 rounded-b-xl pt-7 pb-4 text-center">
                        <p className="font-body text-base sm:text-xl">
                            <span className="text-2xl font-bold sm:text-3xl">
                                R$ 97,00
                            </span>{' '}
                            ou 4x de R$ 26,40
                        </p>
                    </div>
                </div>

                <div className="flex w-full max-w-md flex-col items-center gap-4 text-center">
                    <Button
                        link="curso"
                        color="secondaryorange"
                        className="w-full"
                    >
                        QUERO SAIR DO VERMELHO POR R$ 97
                    </Button>
                    <div className="bg-primary-white/10 border-primary-white/20 rounded-lg border p-4 backdrop-blur-sm">
                        <div className="flex items-start gap-3">
                            <Shield
                                className="mt-0.5 flex-shrink-0 text-green-400"
                                size={20}
                            />
                            <div className="text-left">
                                <p className="font-body text-primary-white mb-1 text-sm font-semibold sm:text-base">
                                    Garantia Incondicional de 7 Dias
                                </p>
                                <p className="font-body text-primary-white/90 text-xs leading-relaxed sm:text-sm">
                                    Se em uma semana você não sentir que o
                                    método vai mudar sua vida financeira, eu
                                    devolvo{' '}
                                    <span className="font-bold text-green-300">
                                        100% do seu dinheiro
                                    </span>
                                    . Sem perguntas. O risco é todo meu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </GridContainer>
        </section>
    )
}
