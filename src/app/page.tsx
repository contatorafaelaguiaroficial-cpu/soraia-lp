import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustTicker } from "@/components/TrustTicker";
import { ProductMockup } from "@/components/ProductMockup";
import { AssistantDemo } from "@/components/AssistantDemo";
import { HowItWorks } from "@/components/HowItWorks";
import { PainSection } from "@/components/PainSection";
import { TrustSection } from "@/components/TrustSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AudioSection } from "@/components/AudioSection";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
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
        <TrustTicker />
        <ProductMockup />
        <AssistantDemo />
        <HowItWorks />
        <PainSection />
        <TrustSection />
        <FeaturesSection />
        <AudioSection />
        <PricingSection />
        <GuaranteeSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  );
}
