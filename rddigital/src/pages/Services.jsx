import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ServicesHero from '../components/sections/ServicesHero';
import ServicesList from '../components/sections/ServicesList';
import OtherServices from '../components/sections/OtherServices';
import ServiceOurProcess from '../components/sections/ServiceOurProcess';
import OurWorkInAction from '../components/sections/OurWorkInAction';
import PortfolioWhyRD from '../components/sections/PortfolioWhyRD';
import PortfolioFAQ from '../components/sections/PortfolioFAQ';
import PortfolioTestimonials from '../components/sections/PortfolioTestimonials';

export default function Services() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Services - RD Digital";
  }, [slug]);

  // If slug is provided and not specifically routed, redirect to main services or 404
  if (slug) {
      return <Navigate to="/services" replace />;
  }

  return (
    <main className="bg-white scroll-smooth w-full overflow-x-hidden">
      <ServicesHero />
      <ServicesList />
      <OtherServices />
      <ServiceOurProcess />
      <OurWorkInAction />
      <PortfolioWhyRD />
      <PortfolioFAQ />
      <PortfolioTestimonials />
    </main>
  );
}
