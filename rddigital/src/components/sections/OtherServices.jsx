import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
    {
        title: "Automated Testing with Cypress",
        image: "https://rd-cms.do.recognisedesign.com/uploads/AI_Chat_1_2a7f43f5b4.webp",
        description: "We set up automated end-to-end tests with Cypress so your team can ship updates faster. Catch bugs before your users do and maintain quality across every release.",
        link: "/services/automated-testing-with-cypress"
    },
    {
        title: "Azure Hosting and Infrastructure",
        image: "https://rd-cms.do.recognisedesign.com/uploads/AI_Chat_2_48ae73f30a.webp",
        description: "We design, deploy, and manage cloud infrastructure on Microsoft Azure. From hosting to CI/CD pipelines, we ensure your applications are scalable, secure, and high-performing.",
        link: "/services/azure"
    },
    {
        title: "Umbraco Website Development",
        image: "https://rd-cms.do.recognisedesign.com/uploads/AI_Chat_3_a7a2465bfa.webp",
        description: "We build flexible, scalable websites on Umbraco CMS. Whether you need a multi-site setup or a content-rich platform, we tailor Umbraco to fit your team's workflow and business goals.",
        link: "/services/Umbraco-Website-Development"
    },
    {
        title: "Marketing Analytics with GA4 and Tag Manager",
        image: "https://rd-cms.do.recognisedesign.com/uploads/marketing_analytics_1_dd537e4cd6.webp",
        description: "We help you track what matters and ignore what doesn't. If you want clear insights on how people use your site, we'll set up a clean analytics system using GA4 and Google Tag Manager.",
        link: "/services/marketing-analytics"
    },
    {
        title: "Customer Acquisition Journeys",
        image: "https://rd-cms.do.recognisedesign.com/uploads/Time_tracking_144a73f515.webp",
        description: "We help you turn website visitors into customers. It's not just about traffic. It's about action. We design flows that guide users from first click to conversion without confusion or delay",
        link: "/services"
    }
];

export default function OtherServices() {
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const loadSwiper = async () => {
            if (!window.Swiper) {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
                document.head.appendChild(script);

                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
                document.head.appendChild(link);

                await new Promise(resolve => {
                    script.onload = resolve;
                });
            }

            if (swiperRef.current) {
                new window.Swiper(swiperRef.current, {
                    slidesPerView: 1,
                    centeredSlides: true,
                    initialSlide: 0,
                    spaceBetween: 20,
                    speed: 300,
                    loop: false,
                    navigation: {
                        nextEl: nextRef.current,
                        prevEl: prevRef.current,
                    },
                    breakpoints: {
                        1440: { slidesPerView: 4, centeredSlides: false },
                        1280: { slidesPerView: 3.75, centeredSlides: false },
                        768: { slidesPerView: 1, centeredSlides: true },
                    },
                });
            }
        };

        loadSwiper();
        
        // Ensure active index resets if Swiper resets
        return () => {
             setActiveIndex(0);
        }
    }, []);

    return (
        <section className="relative py-5 lg:py-10 w-full px-4 lg:px-10 xl:container 3xl:max-w-[50%] mx-auto">
            <div className="relative lg:mx-auto top-10 lg:top-0 z-10 text-left text-white">
                <div className="flex max-sm:flex-col max-sm:gap-5 gap-2 justify-between items-end mb-8">
                    <div className="flex flex-row justify-between items-center text-center lg:text-start w-full lg:py-2">
                        <div>
                            <h2 className="font-semibold text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D]">
                                Other Services
                            </h2>
                        </div>
                        <div className="hidden xl:flex flex-col md:flex-row justify-between items-center w-fit z-10 pr-4 max-md:px-4 lg:px-0 gap-4 mt-8 md:mt-0">
                            <div className="flex gap-4 justify-end md:justify-start w-full md:w-auto px-0">
                                <div ref={prevRef} className="rounded-full rotate-180 bg-[#CEB97C] w-12 h-12 flex items-center justify-center hover:bg-[#D6C287] transition-colors duration-300 cursor-pointer text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 transition-transform duration-300 hover:scale-110">
                                        <path d="M15 18l-6-6 6-6"></path>
                                    </svg>
                                </div>
                                <div ref={nextRef} className="min-w-12 min-h-12 rounded-full bg-[#CEB97C] flex items-center justify-center hover:bg-[#D6C287] transition-colors duration-300 cursor-pointer text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 transition-transform duration-300 hover:scale-110">
                                        <path d="M15 18l-6-6 6-6"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Swiper */}
            <div className="px-0 mr-0 pr-0 hidden xl:block">
                <div ref={swiperRef} className="swiper h-fit relative pb-24 md:pb-16 overflow-visible">
                    <div className="swiper-wrapper items-stretch">
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                className="swiper-slide h-auto transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(-1)}
                                style={{ zIndex: activeIndex === index ? 2 : 1 }}
                            >
                                <div className="bg-white rounded-3xl border border-[#E9E9E9] h-full flex flex-col overflow-hidden w-full relative group">
                                    <div className="flex justify-center items-start p-4">
                                        <img loading="lazy" src={service.image} alt={service.title} className="w-auto max-h-56 transition-transform duration-300" />
                                    </div>
                                    <div className="flex flex-col p-4 pt-0 lg:py-4 flex-1">
                                        <div className="flex-1 flex flex-col justify-end items-start h-full">
                                            <div className="flex flex-col gap-2 w-full h-full relative transition-all duration-300 mt-auto">
                                                <h2 className={`text-xl font-medium transition-colors duration-300 ${activeIndex === index ? 'text-[#175070]' : 'text-[#041925]'}`}>
                                                    {service.title}
                                                </h2>
                                                
                                                <div 
                                                    className={`transition-all duration-300 ease-in-out flex flex-col justify-between overflow-hidden
                                                        ${activeIndex === index ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
                                                    `}
                                                >
                                                    <p className="text-[#041925] text-sm leading-relaxed pb-5">
                                                        {service.description}
                                                    </p>
                                                    <Link to={service.link} className="group/btn relative h-10 items-center justify-center gap-2.5 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 text-white transition-all text-sm font-medium flex capitalize hover:brightness-110 mt-auto">
                                                        <span>Learn More</span>
                                                        <svg className="group-hover/btn:translate-x-1 transition-transform duration-200" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path className="stroke-white" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:hidden mt-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-3xl border border-[#E9E9E9] h-full flex flex-col overflow-hidden w-full relative">
                        <div className="flex justify-center items-start p-4 bg-white z-10 relative">
                            <img loading="lazy" src={service.image} alt={service.title} className="w-auto max-h-56 object-contain" />
                        </div>
                        <div className="flex flex-col p-4 pt-0 lg:py-4 flex-1">
                            <h2 className="text-[#041925] text-xl font-medium mb-4">{service.title}</h2>
                            <p className="text-[#041925] text-sm leading-relaxed pb-5 flex-1">
                                {service.description}
                            </p>
                            <Link to={service.link} className="group relative h-10 mt-auto items-center justify-center gap-2.5 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 text-white transition-all text-sm font-medium flex capitalize hover:brightness-110">
                                <span>Learn More</span>
                                <svg className="group-hover:translate-x-1 transition-transform duration-200" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="stroke-white" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
