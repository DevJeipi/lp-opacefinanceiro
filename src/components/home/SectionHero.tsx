import { BgImage } from '@/components/ui/BgImage'
import { Button } from '@/components/ui/button'
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog'
import { GridContainer } from '@/components/ui/GridContainer'

export function SectionHero() {
    const videoId = "v8atXPQTLxs";
    const embedUrl = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&controls=1&fs=1&playsinline=1&cc_load_policy=0&iv_load_policy=3`;

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-8">
            <BgImage />
            <GridContainer className="flex flex-col items-center justify-center gap-8 z-10">
                {/* Título no topo */}
                <div className="text-center text-primary-white px-4 w-full">
                    <h1 className="font-heading font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 leading-tight break-words">
                        98.9% das Pessoas Se Sabotam Financeiramente...
                    </h1>
                    <p className="font-body text-sm sm:text-lg md:text-xl lg:text-2xl break-words">
                        Veja como fazer parte dos 1.1% que realmente obtêm resultados
                    </p>
                </div>

                {/* Vídeo no meio */}
                <div className="flex items-center justify-center w-full max-w-md">
                    <HeroVideoDialog
                        className="block dark:hidden w-full"
                        animationStyle="from-center"
                        videoSrc={embedUrl}
                        thumbnailSrc="/banner-aula-gratis-otavio.webp"
                        thumbnailAlt="Hero Video"
                    />
                    <HeroVideoDialog
                        className="hidden dark:block w-full"
                        animationStyle="from-center"
                        videoSrc={embedUrl}
                        thumbnailSrc="/banner-aula-gratis-otavio.webp"
                        thumbnailAlt="Hero Video"
                    />
                </div>

                {/* Botão abaixo */}
                <div className="flex w-full items-center justify-center">
                    <Button link="curso" color="secondaryorange">
                        SIM, EU QUERO O CURSO
                    </Button>
                </div>
            </GridContainer>
        </section>
    )
}
