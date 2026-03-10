import React from "react";

const Footer = () => {
  return (
    <footer className="bg-footer text-white pt-20 pb-10">
      <div className="container mx-auto px-[5%] max-w-[1200px] flex flex-col lg:flex-row gap-12 lg:justify-between mb-[60px]">
        <div className="max-w-[300px] flex flex-col justify-between">
          <div className="text-[28px] font-bold mb-8 tracking-wide">
            RD DIGITAL
          </div>
          <div className="flex items-center gap-3 mt-auto">
            <span className="w-10 h-10 bg-white text-[#4285F4] flex items-center justify-center rounded-full text-2xl font-bold">
              G
            </span>
            <div className="flex flex-col">
              <span className="text-[12px] font-semibold">Google Rating</span>
              <div className="text-[14px] flex items-center gap-2">
                <span className="font-bold text-[#FBBC04]">5.0</span>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <span className="text-[10px] underline opacity-80 cursor-pointer">
                See all our reviews
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 flex-grow">
          <div>
            <h4 className="text-[16px] font-semibold mb-6 tracking-wide">
              SERVICES
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Web and App Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Marketing Analytics with GA4 and Tag Manager
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Hosting and Infrastructure with Azure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Automated Testing with Cypress
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  AI-Powered Workflows
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Customer Acquisition Journeys
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Umbraco Website Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] font-semibold mb-6 tracking-wide">
              COMPANY
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Insights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[16px] font-semibold mb-6 tracking-wide">
              CONTACT
            </h4>
            <div className="text-white/80 text-[14px] leading-[1.6]">
              <p>7 Peerglow Centre, Marsh Lane Ware, Hertfordshire, SG12 9QL</p>
            </div>
          </div>

          <div>
            <h4 className="text-[16px] font-semibold mb-6 tracking-wide">
              POLICY
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Information Security Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Equal Opportunities Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  IT DRP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Modern Slavery & Human Trafficking Statement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Health and Safety Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Anti-Bribery Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 text-[14px] transition-colors hover:text-white"
                >
                  Environmental Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-[5%] max-w-[1200px] text-center md:text-left border-t border-white/10 pt-8 text-[12px] text-white/60 flex flex-col md:flex-row gap-4 md:justify-between">
        <p>
          © 2026 RD Digital is a trading name of Recognise Design Ltd.
          Registered in England & Wales. Reg 08633423. Address: unit 7,
          peerglow, marsh lane, ware sg12 9ql
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-white/80 hover:text-white">
            Sitemap
          </a>
          <a href="#" className="text-white/80 hover:text-white">
            Privacy
          </a>
          <a href="#" className="text-white/80 hover:text-white">
            GDPR
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
