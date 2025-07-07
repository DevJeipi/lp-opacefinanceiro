'use client'

import { Suspense } from 'react'
import {
    HeroSectionSkeleton,
    PersuasiveSectionSkeleton,
    BenefitsSectionSkeleton,
    WhoamiSectionSkeleton,
    ListSectionSkeleton,
    PricingSectionSkeleton,
    GuaranteeSectionSkeleton,
} from '@/components/ui/skeleton-loader'

import { SectionHero } from '@/components/home/SectionHero'
import { SectionPersuasive } from '@/components/home/SectionPersuasive'
import { SectionBenefits } from '@/components/home/SectionBenefits'
import { SectionMini } from '@/components/home/SectionMini'
import { SectionWhoami } from '@/components/home/SectionWhoami'
import { SectionList } from '@/components/home/SectionList'
import { SectionPricing } from '@/components/home/SectionPricing'
import { SectionModules } from '@/components/home/SectionModules'
import { SectionGuarantee } from '@/components/home/SectionGuarantee'
import { SectionFAQ } from '@/components/home/SectionFAQ'
import { Footer } from '@/components/footer'

import { GoogleTagManager } from '@next/third-parties/google'

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col overflow-hidden">
            <main className="flex-1">
                <Suspense fallback={<HeroSectionSkeleton />}>
                    <SectionHero />
                </Suspense>
                <Suspense fallback={<PersuasiveSectionSkeleton />}>
                    <SectionPersuasive />
                </Suspense>
                <div className="bg-gradient-animated">
                    <Suspense fallback={<BenefitsSectionSkeleton />}>
                        <SectionBenefits />
                    </Suspense>
                    <SectionMini />
                    <Suspense fallback={<WhoamiSectionSkeleton />}>
                        <SectionWhoami />
                    </Suspense>
                </div>
                <Suspense fallback={<ListSectionSkeleton />}>
                    <SectionList />
                </Suspense>
                <Suspense fallback={<PricingSectionSkeleton />}>
                    <SectionPricing />
                </Suspense>
                <SectionModules />
                <Suspense fallback={<GuaranteeSectionSkeleton />}>
                    <SectionGuarantee />
                </Suspense>
                <SectionFAQ />
            </main>
            <Footer />
            <GoogleTagManager gtmId="GTM-WT4GLWFJ" />
        </div>
    )
}
