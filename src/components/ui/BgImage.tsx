import Image from 'next/image'

export function BgImage() {
    return (
        <>
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/bg-graphic-2.webp"
                    alt="Background Graphic"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="bg-cover bg-no-repeat md:bg-center"
                    priority
                />
            </div>

            <div className="bg-primary-blue/30 absolute inset-0 -z-10 backdrop-blur-sm" />
        </>
    )
}
