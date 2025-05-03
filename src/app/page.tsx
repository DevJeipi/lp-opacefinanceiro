import { Header } from '@/components/header'
import { SectionHero } from '@/components/home/SectionHero'
import { SectionHistory } from '@/components/home/SectionHistory'
import { SectionBenefits } from '@/components/home/SectionBenefits'

export default function Home() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionHistory />
      <SectionBenefits />
    </>

  );
}