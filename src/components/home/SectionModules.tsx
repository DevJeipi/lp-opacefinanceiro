import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import module1 from '../../../public/modulo01-img.webp'
import module2 from '../../../public/modulo02-img.webp'
import module3 from '../../../public/modulo03-img.webp'
import velas from '../../../public/velas.webp'
import { GridContainer } from '@/components/ui/GridContainer'

export function SectionModules() {
    return (
        <section className="bg-primary-blue/10">
            <GridContainer>
                <h1 className="font-heading text-primary-black text-center font-bold md:text-2xl">
                    <span className="font-body font-normal md:text-xl">
                        E se você tivesse todas as ferramentas certas...
                    </span>
                    <br />
                    Nas suas mãos
                </h1>
                <Badge variant={'outline'}>Veja os módulos</Badge>
                <ul>
                    <li>
                        <span>01.</span>
                        <Image
                            src={module1}
                            alt="Foto decorativa do Módulo 01"
                            loading="lazy"
                            placeholder="blur"
                        />
                    </li>
                    <li>
                        <span>02.</span>
                        <Image
                            src={module2}
                            alt="Foto decorativa do Módulo 02"
                            loading="lazy"
                            placeholder="blur"
                        />
                    </li>
                    <li>
                        <span>03.</span>
                        <Image
                            src={module3}
                            alt="Foto decorativa do Módulo 03"
                            loading="lazy"
                            placeholder="blur"
                        />
                    </li>
                </ul>
            </GridContainer>
        </section>
    )
}
