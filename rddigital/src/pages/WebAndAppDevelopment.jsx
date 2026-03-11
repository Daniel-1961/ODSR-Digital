import React, { useEffect } from 'react';
import WebAndAppHero from '../components/sections/WebAndAppHero';
import WhatWeBuild from '../components/sections/WhatWeBuild';
import ServiceOurProcess from '../components/sections/ServiceOurProcess';
import OurWorkInAction from '../components/sections/OurWorkInAction';
import PortfolioWhyRD from '../components/sections/PortfolioWhyRD';
import OtherServices from '../components/sections/OtherServices';
import PortfolioFAQ from '../components/sections/PortfolioFAQ';
import PortfolioTestimonials from '../components/sections/PortfolioTestimonials';

export default function WebAndAppDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Web & App Development - RD Digital";
    }, []);

    return (
        <main className="bg-white scroll-smooth w-full">
            <WebAndAppHero />
            
            {/* What We Build Grid */}
            <WhatWeBuild />
            
            {/* Our Process section */}
            <ServiceOurProcess />
            
            {/* Our Work In Action Swiper/Grid */}
            <OurWorkInAction />
            
            {/* Reusing Why Choose RD */}
            <PortfolioWhyRD />
            
            {/* Other Services Grid */}
            <OtherServices />
            
            {/* Reusing FAQs */}
            <PortfolioFAQ />
            
            {/* Testimonials */}
            <PortfolioTestimonials />
        </main>
    );
}
