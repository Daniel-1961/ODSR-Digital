import { Link } from 'react-router-dom';

export default function PortfolioWhyRD() {
    return (
        <section className="w-full">
            <div className="mx-auto py-10 lg:py-[4.5rem] flex max-sm:gap-5 max-sm:flex-col justify-between items-center gap-3 px-5 md:px-10 max-sm:text-center xl:px-0 w-full bg-[#F5F5F5]">
                <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between gap-3 w-full mx-auto xl:container 3xl:max-w-[50%] lg:px-10">
                    <img loading="lazy" src="https://rd-cms.do.recognisedesign.com/uploads/why_rd_2_1c7bf0a4ec.webp" alt="Want to reduce time spent chasing fixes?" className="rounded-xl w-80 lg:w-[26rem] object-cover" />
                    <div>
                        <h2 className="font-semibold text-start text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D] mb-4 lg:mb-10">
                            Why RD Digital?
                        </h2>
                        <p className="text-[#1F1F2B] text-start leading-none mb-1 lg:text-[2rem] text-lg font-normal h-10">
                            Trusted by digital leaders
                        </p>
                        <div className="why-section-content space-y-2 max-w-3xl text-start inline-block text-[#5D5D79]">
                            <p>Based in Hertfordshire, serving London and beyond. We work with CTOs, CMOs, and Directors who need reliable delivery. They come to us when internal teams are stretched or tools are falling short.</p>
                            <ul className="list-disc pl-5">
                                <li>Fast onboarding and planning</li>
                                <li>Clear updates, outcomes, and data</li>
                                <li>Direct access to technical leads </li>
                                <li>Long-term support and improvements</li>
                            </ul>
                        </div>
                        <Link to="/about" className="group relative h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-lg font-medium lg:flex block mt-6 w-full md:w-44 overflow-hidden">
                            <span className="relative flex-1 flex items-center justify-center overflow-hidden h-full">
                                <span className="transition-transform flex flex-row whitespace-nowrap items-center gap-2.5 duration-300 transform group-hover:-translate-y-full">
                                    About Us
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
            </div>
        </section>
    );
}
