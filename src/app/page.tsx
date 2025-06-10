import dynamic from 'next/dynamic'

const SectionHero = dynamic(
    async () => (await import('@/components/home/SectionHero')).SectionHero
)
const SectionPersuasive = dynamic(
    async () =>
        (await import('@/components/home/SectionPersuasive')).SectionPersuasive
)
const SectionBenefits = dynamic(
    async () =>
        (await import('@/components/home/SectionBenefits')).SectionBenefits
)
const SectionMini = dynamic(
    async () => (await import('@/components/home/SectionMini')).SectionMini
)
const SectionWhoami = dynamic(
    async () => (await import('@/components/home/SectionWhoami')).SectionWhoami
)
const SectionList = dynamic(
    async () => (await import('@/components/home/SectionList')).SectionList
)
const SectionPricing = dynamic(
    async () =>
        (await import('@/components/home/SectionPricing')).SectionPricing
)
const SectionModules = dynamic(
    async () =>
        (await import('@/components/home/SectionModules')).SectionModules
)
const SectionGuarantee = dynamic(
    async () =>
        (await import('@/components/home/SectionGuarantee')).SectionGuarantee
)
const SectionFAQ = dynamic(
    async () => (await import('@/components/home/SectionFAQ')).SectionFAQ
)
const Footer = dynamic(async () => (await import('@/components/footer')).Footer)

import { GoogleTagManager } from '@next/third-parties/google'

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
            <GoogleTagManager gtmId="GTM-WT4GLWFJ" />
        </div>
    )
}
