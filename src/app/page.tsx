import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PromptSection from '@/components/PromptSection';
import FeatureGrid from '@/components/FeatureGrid';
import TemplateGrid from '@/components/TemplateGrid';
import TechStack from '@/components/TechStack';
import Testimonials from '@/components/Testimonials';
import PricingSection from '@/components/PricingSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <PromptSection />
        
        <section id="features" className="py-16 px-6 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Features
            </h2>
            <FeatureGrid />
          </div>
        </section>
        
        <section id="templates" className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Popular Templates
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Get started quickly with our pre-built templates for common applications.
            </p>
            <TemplateGrid />
          </div>
        </section>
        
        <TechStack />
        
        <section id="testimonials" className="py-16 px-6 bg-secondary/30">
          <Testimonials />
        </section>
        
        <section id="pricing" className="py-16 px-6">
          <PricingSection />
        </section>
        
        <section id="faq" className="py-16 px-6 bg-secondary/30">
          <FAQ />
        </section>
        
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <CTA />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
