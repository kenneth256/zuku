import Navbar        from '@/components/Navbar';
import HeroSection   from '@/components/HeroSection';
import Features      from '@/components/Features';
import Plans         from '@/components/Plans';
import TVLineup      from '@/components/TVLineup';
import PaymentOptions from '@/components/PaymentOptions';
import Testimonials  from '@/components/Testimonials';
import FAQ           from '@/components/FAQ';
import CTA           from '@/components/CTA';
import Footer        from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <Plans />
        <TVLineup />
        <PaymentOptions />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
