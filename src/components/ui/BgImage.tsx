import Image from 'next/image'
import fotoBg from '../../../public/imagemdefundologin.webp'

export function BgImage() {
    return (
        <>
            <div className="absolute inset-0 -z-20">
                <Image
                    src={fotoBg}
                    alt="Gráfico de fundo"
                    fill
                    placeholder="blur"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
            <div className="bg-primary-blue/40 absolute inset-0 -z-10" />
        </>
    )
}
