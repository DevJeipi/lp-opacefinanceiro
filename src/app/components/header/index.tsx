import Image from "next/image";
import { GridContainer } from "../GridContainer";

export function Header() {
    return (
        <header>
            <GridContainer>
                <div>
                    <Image
                        src={"/logopacefinanceiro-var4.svg"}
                        width={160}
                        height={160}
                        alt="Logo do Pace Financeiro"
                    />
                </div>
            </GridContainer>
        </header>
    )
}