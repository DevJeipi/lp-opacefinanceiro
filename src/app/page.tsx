'use client'

import { SectionHero } from '@/components/home/SectionHero'
import { SectionPersuasive } from '@/components/home/SectionPersuasive'
import { SectionBenefits } from '@/components/home/SectionBenefits'
import { SectionFeedback } from '@/components/home/SectionFeedback'
import { SectionMini } from '@/components/home/SectionMini'
import { SectionWhoami } from '@/components/home/SectionWhoami'
import { SectionList } from '@/components/home/SectionList'
import { SectionPricing } from '@/components/home/SectionPricing'
import { SectionModules } from '@/components/home/SectionModules'
import { SectionGuarantee } from '@/components/home/SectionGuarantee'
import { SectionFAQ } from '@/components/home/SectionFAQ'
import { Footer } from '@/components/footer'

import { GoogleTagManager } from '@next/third-parties/google'
import { Announcement } from '@/components/ui/announcement'
import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

const projectId = 'vjadoi2y2v'

export default function Home() {
    useEffect(() => {
        Clarity.init(projectId)
    }, [])

    return (
        <div className="flex min-h-screen flex-col overflow-hidden">
            <main className="flex-1">
                <Announcement />
                <SectionHero />

                <SectionPersuasive />

                <div className="bg-gradient-animated">
                    <SectionBenefits />

                    <SectionFeedback />

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
