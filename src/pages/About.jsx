import AboutStrip from '../components/about/AboutStrip';
import Team from '../components/about/Team';
import Testimonials from '../components/Testimonials';

export default function About() {
  return (
    <main className="pt-20">
      <AboutStrip />
      <Team />
      <Testimonials />
    </main>
  );
}
