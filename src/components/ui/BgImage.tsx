import Image from 'next/image'
import fotoBg from '../../../public/bg-graphic-2.webp'

export function BgImage() {
    return (
        <>
            <div className="absolute inset-0 -z-20">
                <Image
                    src={fotoBg}
                    alt="Gráfico de fundo"
                    fill
                    style={{ objectFit: 'cover' }}
                    placeholder="blur"
                    className="bg-cover bg-no-repeat md:bg-center"
                    priority
                />
            </div>

            <div className="bg-primary-blue/30 absolute inset-0 -z-10 backdrop-blur-sm" />
        </>
    )
}
