import { SectionHero } from '@/components/home/SectionHero'
import { SectionPersuasive } from '@/components/home/SectionPersuasive'
import { SectionBenefits } from '@/components/home/SectionBenefits'
import { SectionMini } from '@/components/home/SectionMini'
import { SectionWhoami } from '@/components/home/SectionWhoami'
import { SectionList } from '@/components/home/SectionList'
import { SectionModules } from '@/components/home/SectionModules'
import { SectionPricing } from '@/components/home/SectionPricing'
import { SectionGuarantee } from '@/components/home/SectionGuarantee'
import { SectionFAQ } from '@/components/home/SectionFAQ'
import { Footer } from '@/components/footer'

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col overflow-hidden">
            <main className="flex-1">
                <SectionHero />
                <SectionPersuasive />
                <div className="bg-gradient-animated">
                    <SectionBenefits />
                    <SectionMini />
                    <SectionWhoami />
                </div>
                <SectionList />
                <SectionPricing />
                <SectionModules />
                <SectionGuarantee />
                <SectionFAQ />
            </main>
            <Footer />
        </div>
    )
}
