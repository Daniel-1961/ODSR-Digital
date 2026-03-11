import Hero from "../components/sections/Hero";
import ServicesSection from "../components/sections/Services";
import PortfolioSection from "../components/sections/Portfolio";
import WhyRD from "../components/sections/WhyRD";
import Products from "../components/sections/Products";
import FAQ from "../components/sections/FAQ";
import Testimonials from "../components/sections/Testimonials";
import { services } from "../data/siteData";

export default function Home() {
  const serviceImages = {
    "web-app-development": "/assets/images/wordpress_5bebdedc02.webp",
    "umbraco-development": "/assets/images/Time_tracking_144a73f515.webp",
    azure: "/assets/images/Clean up space.svg",
    "customer-acquisition": "/assets/images/AI_Chat_3_a7a2465bfa.webp",
  };
  return (
    <>
      <Hero />
      <ServicesSection
        services={services}
        description={true}
        serviceImages={serviceImages}
      />
      <PortfolioSection />
      <WhyRD />
      <Products />
      <FAQ />
      <Testimonials />
    </>
  );
}
