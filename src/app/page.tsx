import { Header } from './components/header'
import { SectionHero } from './components/SectionHero'
import { SectionHistory } from './components/SectionHistory'
import { SectionBenefits } from './components/SectionBenefits'  

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