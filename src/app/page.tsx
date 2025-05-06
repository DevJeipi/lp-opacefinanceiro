import { Header } from '@/components/header'
import { SectionHero } from '@/components/home/SectionHero'
import { SectionHistory } from '@/components/home/SectionHistory'
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
            <Header />
            <main className="flex-1">
                <SectionHero />
                <SectionHistory />
                <section className="bg-gradient-animated">
                    <SectionBenefits />
                    <SectionMini />
                    <SectionWhoami />
                </section>
                <SectionList />
                <SectionModules />
                <SectionPricing />
                <SectionGuarantee />
                <SectionFAQ />
            </main>
            <Footer />
        </div>
    )
}
