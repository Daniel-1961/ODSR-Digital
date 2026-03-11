import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 'columbus-assicurazioni',
        industry: 'Insurance',
        logo: 'https://rd-cms.do.recognisedesign.com/uploads/image_53_8e9ee46437.webp',
        image: 'https://rd-cms.do.recognisedesign.com/uploads/columbus_img_94f83b379a.webp',
        features: [
            'Adapted the platform for the Italian market.',
            'Full Umbraco build with Azure hosting.',
            'Supports thousands of users daily.'
        ],
        link: 'https://columbusassicurazioni.it'
    },
    {
        id: 'ecc',
        industry: 'EV',
        logo: 'https://rd-cms.do.recognisedesign.com/uploads/image_52_1_cea5ad58f1.webp',
        image: 'https://rd-cms.do.recognisedesign.com/uploads/ecc_image_fadf009002.webp',
        features: [
            'Designed and developed a web and mobile app.',
            'Helped their teams handle installations, customer data, and scheduling.',
            'Cut time spent on admin.'
        ],
        link: 'https://electriccarchargersuk.co.uk/'
    },
    {
        id: 'berkeley-square-medical',
        industry: 'Health',
        logo: 'https://rd-cms.do.recognisedesign.com/uploads/Berkeley_Square_Medical_1_5a5e4d48e5.webp',
        image: 'https://rd-cms.do.recognisedesign.com/uploads/berkely_square_medical_e0182599fe.webp',
        features: [
            'Upgraded the site for private surgery in Harley Street.',
            'Improved booking experience.',
            'Met strict design and compliance standards.'
        ],
        link: 'https://www.berkeleysquaremedical.com/'
    },
    {
        id: 'columbus-direct',
        industry: 'Insurance',
        logo: 'https://rd-cms.do.recognisedesign.com/uploads/Item_83fd5800fc.png',
        image: 'https://rd-cms.do.recognisedesign.com/uploads/columbus_direct_a5b453083d.webp',
        features: [
            'We rebuilt the insurance site.',
            'Improved performance and conversion.',
            'Connected marketing, compliance, and customer service.'
        ],
        link: '/portfolio/columbus-direct'
    }
];

export default function OurWorkInAction() {
    const swiperRef = useRef(null);

    useEffect(() => {
        // Initialize swiper dynamically
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
                    spaceBetween: 20,
                    slidesPerView: 1.1,
                    effect: 'slide',
                    speed: 800,
                    mousewheel: {
                        forceToAxis: true,
                        sensitivity: 1,
                        releaseOnEdges: true,
                    },
                    breakpoints: {
                        1280: { slidesPerView: 3.4 },
                        1024: { slidesPerView: 2.5 },
                        768: { slidesPerView: 1.5 },
                    },
                });
            }
        };

        loadSwiper();
    }, []);

    return (
        <div className="bg-white p-14 px-4 lg:px-14 lg:pr-0">
            <div className="lg:w-full mb-4 lg:mb-10 xl:container px-4 lg:px-0 lg:pr-10 mx-auto 3xl:max-w-[50%]">
                <div className="flex justify-center lg:justify-between sm:justify-start items-center gap-3 lg:pr-10">
                    <h2 className="font-semibold mr-auto text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D]">
                        Our Work In Action
                    </h2>
                    <Link to="/portfolio" className="group relative w-44 h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-lg font-medium lg:flex hidden xxs:block">
                        <span className="relative flex-1 flex items-center justify-center overflow-hidden h-full">
                            <span className="transition-transform flex flex-row whitespace-nowrap items-center gap-2.5 duration-300 transform group-hover:-translate-y-full">
                                View All
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="stroke-white" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </span>
                            <span className="flex flex-row justify-center items-center whitespace-nowrap gap-2 absolute top-0 left-0 w-full h-full transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 text-white">
                                Scale Faster
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="stroke-white" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </span>
                        </span>
                    </Link>
                </div>
            </div>

            {/* Desktop Swiper View */}
            <div className="hidden xl:block xl:container xl:mx-auto relative px-4 overflow-visible">
                <div ref={swiperRef} className="swiper relative pb-16 w-[calc(100vw-calc(100vw-100%)/2)]">
                    <div className="absolute inset-y-0 right-0 lg:w-20 xl:w-32 2xl:w-80 bg-gradient-to-l from-[#ffffff] to-transparent z-20 pointer-events-none"></div>
                    <div className="swiper-wrapper items-stretch">
                        {projects.map((project) => (
                            <div key={project.id} className="swiper-slide h-auto">
                                <div className="h-full rounded-2xl border border-black/10 flex flex-col top-0 gap-2 p-2 bg-[#F5F5F5] hover:bg-[#127EBA] transition-colors duration-300 w-full">
                                    <img loading="lazy" src={project.image} alt={project.industry} className="h-[17.0625rem] bg-center object-cover bg-white rounded-lg" />
                                    <span className="flex flex-col justify-between flex-1 gap-2 bg-white rounded-lg p-2">
                                        <img loading="lazy" src={project.logo} alt={project.industry} className="h-[2rem] object-contain mr-auto mb-2" />
                                        <div className="text-[#041925] leading-[150%] text-sm">
                                            <ul className="list-disc pl-5">
                                                {project.features.map((feature, i) => (
                                                    <li key={i}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <a href={project.link} target="_blank" rel="noreferrer" className="group relative h-10 items-center justify-center gap-2.5 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 text-white transition-all text-lg font-medium flex capitalize hover:brightness-110 mt-4">
                                            View Project
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 group-hover:translate-x-1 duration-150 transition-transform">
                                                <path d="M1 7h12m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        ))}
                        {/* Empty spacing slide for alignment */}
                        <div className="swiper-slide h-auto lg:!w-20 xl:!w-32 2xl:!w-80 !mr-0"></div>
                    </div>
                </div>
            </div>

            {/* Mobile Grid View */}
            <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 lg:pr-10 mt-8 gap-5">
                {projects.map((project) => (
                    <div key={`mobile-${project.id}`} className="rounded-2xl border border-black/10 flex flex-col gap-2 p-2 bg-[#F5F5F5] hover:bg-[#127EBA] transition-colors duration-300">
                        <img loading="lazy" src={project.image} alt={project.industry} className="h-[17.0625rem] object-cover bg-white rounded-lg" />
                        <span className="flex flex-col justify-between flex-1 gap-2 bg-white rounded-lg p-2">
                            <img loading="lazy" src={project.logo} alt={project.industry} className="h-[2rem] object-contain mr-auto mb-2" />
                            <div className="text-[#041925] leading-[150%] text-sm">
                                <ul className="list-disc pl-5">
                                    {project.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <a href={project.link} target="_blank" rel="noreferrer" className="group relative h-10 items-center justify-center gap-2.5 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 text-white transition-all text-lg font-medium flex capitalize hover:brightness-110 mt-a">
                                View Project
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 group-hover:translate-x-1 duration-150 transition-transform">
                                    <path className="stroke-white" stroke="#175070" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </a>
                        </span>
                    </div>
                ))}
            </div>

            <Link to="/portfolio" className="group relative h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-lg font-medium block lg:hidden w-full mx-auto mt-5 overflow-hidden">
                <span className="relative flex-1 flex items-center justify-center overflow-hidden h-full">
                    <span className="transition-transform flex flex-row whitespace-nowrap items-center gap-2.5 duration-300 transform group-hover:-translate-y-full">
                        View All
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="stroke-white" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                    <span className="flex flex-row justify-center items-center whitespace-nowrap gap-2 absolute top-0 left-0 w-full h-full transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 text-white">
                        Scale Faster
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="stroke-white" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                </span>
            </Link>
        </div>
    );
}
