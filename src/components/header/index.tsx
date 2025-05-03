import Image from "next/image";
import { GridContainer } from "../ui/GridContainer";

export function Header() {
    return (
        <header>
            <GridContainer>
                <div className="flex items-center justify-center">
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