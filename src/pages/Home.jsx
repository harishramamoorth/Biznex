import Hero from '../components/home/Hero';
import ClientLogos from '../components/home/ClientLogos';
import SocialProof from '../components/home/SocialProof';
import WhyBizNex from '../components/home/WhyBizNex';
import ScaleTrain from '../components/home/ScaleTrain';
import ProblemSolutions from '../components/home/ProblemSolutions';
import HowWeWork from '../components/process/HowWeWork';
import Services from '../components/Services';
import AboutStrip from '../components/about/AboutStrip';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/cta/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientLogos />
      <SocialProof />
      <WhyBizNex />
      <ScaleTrain />
      <ProblemSolutions />
      <HowWeWork />
      <Services />
      <AboutStrip />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}