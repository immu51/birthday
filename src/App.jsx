import HeroSection from './components/HeroSection'
import QuoteSection from './components/QuoteSection'
import LoverSection from './components/LoverSection'
import MomentSection from './components/MomentSection'
import ClosingSection from './components/ClosingSection'
import ScrollProgress from './components/ScrollProgress'
import SectionDivider from './components/SectionDivider'

export default function App() {
  return (
    <main>
      <ScrollProgress />
      <HeroSection />
      <SectionDivider />
      <QuoteSection />
      <SectionDivider />
      <LoverSection />
      <SectionDivider />
      <MomentSection />
      <SectionDivider />
      <ClosingSection />
    </main>
  )
}
