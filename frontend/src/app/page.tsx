import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSection } from "@/components/AboutSection";
export default function Home() {
  return (
    <div className="flex flex-col items-center h-full gap-24">
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
    </div>
  );
}
