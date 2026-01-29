import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { Pricing } from '@/components/pricing';
import { Fields } from '@/components/fields';
import { Portfolio } from '@/components/portfolio';
import { Considerations } from '@/components/considerations';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Pricing />
      <Fields />
      <Portfolio />
      <Considerations />
      <Contact />
      <Footer />
    </main>
  );
}
