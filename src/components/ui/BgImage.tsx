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
                    style={{ objectFit: 'cover' }}
                    placeholder="blur"
                    className="bg-cover bg-center bg-no-repeat opacity-60"
                    priority
                />
            </div>
        </>
    )
}
