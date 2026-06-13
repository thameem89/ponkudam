import { AboutSection } from "@/components/AboutSection";
import { BackToTop } from "@/components/BackToTop";
import { CollectionsSection } from "@/components/CollectionsSection";
import { CraftsmanshipSection } from "@/components/CraftsmanshipSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { InstagramSection } from "@/components/InstagramSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ShowroomCTA } from "@/components/ShowroomCTA";
import { structuredData } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CollectionsSection />
        <CraftsmanshipSection />
        <ServicesSection />
        <InstagramSection />
        <ShowroomCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
