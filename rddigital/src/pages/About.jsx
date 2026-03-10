import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import AboutStory from "../components/layout/AboutStory";
import ServicesSection from "../components/sections/Services";
export default function About() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <AboutStory />
        <ServicesSection />
      </main>
    </div>
  );
}
