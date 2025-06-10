import Image from 'next/image'
import fotoOtavio2 from '../../../public/foto-otavio-9-optimized.webp'

export default function OptimizedProfileImage() {
    return (
        <div className="h-80 w-80 overflow-hidden rounded-tl-4xl rounded-br-4xl md:h-[480px]">
            <Image
                src={fotoOtavio2}
                width={320}
                height={480}
                alt="Foto de Otávio Daudt, criador do Pace Financeiro"
                className="h-full w-full object-cover object-top"
                loading="lazy"
                placeholder="blur"
                sizes="(max-width: 767px) 320px, 480px"
                quality={85}
                priority={false}
            />
        </div>
    )
}
