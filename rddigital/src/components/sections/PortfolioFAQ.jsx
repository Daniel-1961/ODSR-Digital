import { useState } from 'react';

const leftFaqs = [
  {
    q: "What services does your app development company offer?",
    a: "We provide mobile and web app development, website optimisation, analytics, SEO, and UI/UX design in Hertfordshire."
  },
  {
    q: "Do you offer ongoing support and maintenance?",
    a: "Yes, we ensure apps stay updated, secure, and fully optimised for the best performance."
  },
  {
    q: "What do web designers near me offer?",
    a: "Local web designers enhance communication, ensure quick turnaround, and optimise for local SEO."
  },
  {
    q: "What elements can be A/B tested?",
    a: "Common elements include website layout, copy, pricing, emails, user experience, and targeting."
  },
  {
    q: "What technologies do you specialise in?",
    a: "We specialise in .NET, Umbraco CMS, and Azure for scalable, secure, and efficient solutions."
  }
];

const rightFaqs = [
  {
    q: "How long does it take to create an app?",
    a: "Timelines vary by project complexity, but we aim to deliver high-quality apps efficiently."
  },
  {
    q: "Can you develop apps for both iOS and Android?",
    a: "Yes, we build high-performing apps for both platforms using the latest technologies."
  },
  {
    q: "What are the benefits of A/B testing?",
    a: "A/B testing helps make data-driven decisions by comparing versions to see which performs better."
  },
  {
    q: "How many visitors do I need, and how long should I run an A/B test?",
    a: "It depends on traffic and significance, but at least a week is recommended for accurate insights"
  },
  {
    q: "What industries do you specialise in for web design?",
    a: "With 15 years of experience and 40+ projects, we’ve worked across travel insurance, EV, healthcare, beauty, and e-commerce."
  }
];

export default function PortfolioFAQ() {
  const [openLeftIndex, setOpenLeftIndex] = useState(null);
  const [openRightIndex, setOpenRightIndex] = useState(null);

  return (
    <section className="bg-white w-full">
      <div className="px-4 pt-8 pb-12 lg:p-16 lg:px-10 mx-auto xl:container 3xl:max-w-[50%]">
        <div className="flex gap-5 md:gap-16 flex-col-reverse md:flex-row">
          <div className="flex-1">
            <div className="mx-auto flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 mb-8">
              <h2 className="font-semibold text-center text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D]">
                Got Questions? Answered
              </h2>
              <p className="text-[#3C3C5E] text-center text-sm leading-[150%] tracking-[-1%] lg:text-[0.9375rem] font-normal max-w-sm">
                Find quick answers to common queries about RD Digital features, pricing, and support.
              </p>
            </div>
            
            <div className="w-full flex flex-col md:flex-row gap-y-2 gap-x-6 p-3 lg:pt-8 lg:pb-12 border border-[#DFE0EC] rounded-xl">
              {/* Left Column */}
              <div className="flex flex-col gap-2 flex-1">
                {leftFaqs.map((faq, i) => (
                  <div key={i} className="w-full mx-auto px-3 py-5 bg-white rounded-b-lg border-b border-[#DFE0EC] transition-colors duration-300">
                    <div className="w-full">
                      <div className="flex justify-between px-2 items-center flex-row gap-6 w-full cursor-pointer group" onClick={() => setOpenLeftIndex(openLeftIndex === i ? null : i)}>
                        <div>
                          <p className="flex justify-center text-[#1F1F2B] items-center font-medium text-lg group-hover:translate-y-0 transition-all duration-300 ease-out text-left">
                            {faq.q}
                          </p>
                        </div>
                        <button aria-label="toggler" className="h-8 shrink-0 w-8 flex items-center justify-center rounded-full">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`icon stroke-inherit transition-transform duration-300 ${openLeftIndex === i ? 'rotate-180 hidden' : ''}`}>
                            <path d="M19 9L12 15L5 9" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`icon stroke-inherit rotate-180 transition-transform duration-300 ${openLeftIndex === i ? '' : 'hidden'}`}>
                            <path d="M19 9L12 15L5 9" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </button>
                      </div>
                      <div className={`mt-1 w-full overflow-hidden px-2 transition-[max-height] duration-300 ease-in-out ${openLeftIndex === i ? 'max-h-48' : 'max-h-0'}`}>
                        <p className="text-sm md:text-base leading-6 text-[#3C3C5E] w-11/12 mt-2">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-2 flex-1">
                {rightFaqs.map((faq, i) => (
                  <div key={i} className="h-fit">
                    <div className="w-full mx-auto px-3 py-5 bg-white rounded-b-lg border-b border-[#DFE0EC] transition-colors duration-300">
                      <div className="w-full">
                        <div className="flex justify-between px-2 items-center flex-row gap-6 w-full cursor-pointer group" onClick={() => setOpenRightIndex(openRightIndex === i ? null : i)}>
                          <div>
                            <p className="flex justify-center text-[#1F1F2B] items-center font-medium text-lg group-hover:translate-y-0 transition-all duration-300 ease-out text-left">
                              {faq.q}
                            </p>
                          </div>
                          <button aria-label="toggler" className="h-8 shrink-0 w-8 flex items-center justify-center rounded-full">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`icon stroke-inherit transition-transform duration-300 ${openRightIndex === i ? 'rotate-180 hidden' : ''}`}>
                              <path d="M19 9L12 15L5 9" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`icon stroke-inherit rotate-180 transition-transform duration-300 ${openRightIndex === i ? '' : 'hidden'}`}>
                              <path d="M19 9L12 15L5 9" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                          </button>
                        </div>
                        <div className={`mt-1 w-full overflow-hidden px-2 transition-[max-height] duration-300 ease-in-out ${openRightIndex === i ? 'max-h-48' : 'max-h-0'}`}>
                          <p className="text-sm md:text-base leading-6 text-[#3C3C5E] w-11/12 mt-2">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
