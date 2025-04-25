import Hero from '@/components/sections/Hero';
import ThreeSteps from '@/components/sections/ThreeSteps';
import Benefits from '@/components/sections/Benefits';
import UseCases from '@/components/sections/UseCases';
import CaseStudies from '@/components/sections/CaseStudies';
import Pricing from '@/components/sections/Pricing';
import Faq from '@/components/sections/Faq';
import CtaSection from '@/components/sections/CtaSection';
import Footer from '@/components/sections/Footer';
import { AnimatedBackground } from '@/components/shared/AnimatedBackground';
import Header from '@/components/sections/Header';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <ThreeSteps />
        <Benefits />
        <UseCases />
        <CaseStudies />
        <Pricing />
        <Faq />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}