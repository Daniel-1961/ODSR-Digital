import UmbracoHero from "../components/sections/UmbracoHero";
import UmbracoWhatWeBuild from "../components/sections/UmbracoWhatWeBuild";
import ServiceOurProcess from "../components/sections/ServiceOurProcess";
import OurWorkInAction from "../components/sections/OurWorkInAction";
import PortfolioWhyRD from "../components/sections/PortfolioWhyRD";
import OtherServices from "../components/sections/OtherServices";
import PortfolioFAQ from "../components/sections/PortfolioFAQ";
import PortfolioTestimonials from "../components/sections/PortfolioTestimonials";
import { useEffect } from "react";

export default function UmbracoDevelopment() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <UmbracoHero />
            <UmbracoWhatWeBuild />
            <ServiceOurProcess />
            <OurWorkInAction />
            <PortfolioWhyRD />
            <OtherServices />
            <PortfolioFAQ />
            <PortfolioTestimonials />
        </div>
    );
}
