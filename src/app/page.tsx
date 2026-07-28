import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductMockup } from "@/components/ProductMockup";
import { PainSection } from "@/components/PainSection";
import { TrustSection } from "@/components/TrustSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AudioSection } from "@/components/AudioSection";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductMockup />
        <PainSection />
        <TrustSection />
        <FeaturesSection />
        <AudioSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
