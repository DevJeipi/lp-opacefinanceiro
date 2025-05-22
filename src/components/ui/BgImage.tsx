import Image from 'next/image'
import fotoBg from '../../../public/velas2.webp'

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
                    className="bg-cover bg-center bg-no-repeat"
                    priority
                />
            </div>

            <div className="bg-primary-blue/60 absolute inset-0 -z-10 backdrop-blur-xs" />
        </>
    )
}
