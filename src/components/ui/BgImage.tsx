import Image from 'next/image'

export function BgImage() {
    return (
        <>
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/imagemdefundologin.webp"
                    alt="Gráfico de fundo"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
            </div>
            <div className="bg-primary-blue/40 absolute inset-0 -z-10" />
        </>
    )
}
