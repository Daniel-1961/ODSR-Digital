import { Link } from 'react-router-dom';
import Hero from './Hero';

export default function UmbracoHero() {
    return (
        <Hero
            containerClass="relative h-full pt-[7.5rem] lg:pt-[10rem] flex items-end lg:items-center justify-start overflow-hidden bg-white"
            bgContent={
                <div className="absolute inset-0 w-full h-full">
                    <div className="block absolute inset-0 w-full h-full bg-[#F5F5F5] bg-[url(/images/hex-background-networking.jpg)] opacity-[45%] bg-cover pb-16 bg-center"></div>
                </div>
            }
            innerContainerClass="w-full xl:container 3xl:max-w-[50%] mx-auto lg:top-0 z-20 text-left lg:text-left text-[#042537]"
            gridClass="grid grid-cols-1 xl:grid-cols-[1fr_1.175fr] px-4 lg:px-14 w-full xl:gap-12 2xl:gap-20 mx-auto pb-16"
            leftContentClass="relative lg:top-0 text-left md:text-left text-[#042537]"
            pill={null}
            title={
                <>
                    Umbraco Website Development
                </>
            }
            titleClass="text-[2rem] md:text-[4rem] leading-[120%] text-center md:text-start lg:leading-[1.3] font-semibold text-[#081F2D]"
            description="We build websites using Umbraco CMS. It's fast, secure, and easy to manage. If you want more control over your content and a setup that scales with your business, Umbraco is a smart choice."
            descriptionClass="text-sm text-center md:text-start md:text-lg md:mt-6 md:leading-[1.5] font-normal mt-4 !leading-[175%] tracking-normal capitalize text-[#081F2D]"
            buttonsContainerClass="flex flex-row flex-wrap lg:flex-nowrap gap-4 lg:gap-6 items-center w-full lg:w-auto my-6"
            buttons={
                <>
                    <Link to="/contact" className="group relative h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-[1.05rem] font-medium lg:flex w-1/2 md:w-44 block overflow-hidden">
                        <span className="relative flex-1 flex items-center justify-center overflow-hidden h-full">
                            <span className="transition-transform flex flex-row whitespace-nowrap items-center gap-2.5 duration-300 transform group-hover:-translate-y-full">
                                Book a Call
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
                    <Link to="/portfolio" className="group items-center relative gap-2 bg-[#F2F2F8] hover:bg-[#e2e2e9] border border-[#E9E9E9] text-[#0A283A] text-[1.05rem] leading-6 font-medium justify-center rounded-[10px] flex transition-colors whitespace-nowrap h-12 lg:h-14 px-6 w-1/2 md:w-auto">
                        Case Studies
                    </Link>
                    <div className="flex items-center sm:justify-center gap-2 text-black/90 hidden lg:flex ml-2">
                        <img loading="lazy" src="/assets/images/google.webp" alt="Google icon" className="h-[2.5rem] w-auto" />
                        <span className="flex flex-col items-start gap-[1px]">
                            <span className="font-bold text-[10px] lg:text-[11px] text-current/90 leading-none">Google Rating</span>
                            <span className="flex text-dark-orange items-center gap-0 font-bold text-base lg:text-lg text-[#F59E0B] leading-none">
                                <span className="font-extrabold text-xs lg:text-[15px] leading-none mr-1.5">5.0 </span>
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="10 2 3 20" className="size-[0.875rem] lg:size-[1.125rem]">
                                        <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path>
                                    </svg>
                                ))}
                            </span>
                            <span className="text-[10px] lg:text-[11px] text-current/90 leading-none">See all our reviews</span>
                        </span>
                    </div>
                </>
            }
            showGoogleRating={false}
            leftContentAppend={
                <section className="relative flex overflow-x-auto rounded-[6.65px] lg:rounded-[10.4px] md:overflow-x-hidden bg-white shadow-[0px_2px_15px_-3px_rgba(0,0,0,0.07)] border border-black/5 mb-0 justify-around [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full lg:w-fit mt-8 lg:mt-6">
                    <div className="flex whitespace-nowrap md:whitespace-normal w-full py-2 px-4 lg:py-[0.85rem] bg-white justify-between items-center lg:px-6 h-auto lg:h-[4.5rem] relative z-10 gap-4 lg:gap-8">
                        <a target="_blank" href="https://www.columbusdirect.com/" className="flex-shrink-0 flex items-center h-full max-h-6 lg:max-h-[2.5rem]">
                            <img src="https://rd-cms.do.recognisedesign.com/uploads/Item_acba8cae11.webp" title="Columbus" className="max-h-5 lg:max-h-[2rem] object-contain" loading="lazy" />
                        </a>
                        <a target="_blank" href="https://www.berkeleysquaremedical.com/" className="flex-shrink-0 flex items-center h-full max-h-6 lg:max-h-[2.5rem]">
                            <img src="https://rd-cms.do.recognisedesign.com/uploads/Item_1_2b2899a070.webp" title="Berkeley" className="max-h-5 lg:max-h-[2.25rem] object-contain" loading="lazy" />
                        </a>
                        <a target="_blank" href="https://electriccarchargersuk.co.uk/" className="flex-shrink-0 flex items-center h-full max-h-6 lg:max-h-[2.5rem]">
                            <img src="https://rd-cms.do.recognisedesign.com/uploads/Item_2_2de0810a0f.webp" title="ECC" className="max-h-5 lg:max-h-[2.25rem] object-contain" loading="lazy" />
                        </a>
                        <a target="_blank" href="https://www.collinsongroup.com/" className="flex-shrink-0 flex items-center h-full max-h-6 lg:max-h-[2.5rem]">
                            <img src="https://rd-cms.do.recognisedesign.com/uploads/Item_3_603231485b.webp" title="Collinson" className="max-h-3 lg:max-h-[1.25rem] object-contain opacity-80" loading="lazy" />
                        </a>
                        <a target="_blank" href="https://columbusassicurazioni.it/" className="flex-shrink-0 flex items-center h-full max-h-6 lg:max-h-[2.5rem]">
                            <img src="https://rd-cms.do.recognisedesign.com/uploads/Item_4_b090dd6d60.webp" title="Columbus 2" className="max-h-5 lg:max-h-[2.5rem] object-contain opacity-80" loading="lazy" />
                        </a>
                    </div>
                </section>
            }
            rightContent={
                <div className="relative h-[30rem] mt-8 lg:mt-0 max-h-72 lg:max-h-full xl:h-full w-full flex items-center overflow-hidden rounded-2xl">
                    <img loading="lazy" src="https://rd-cms.do.recognisedesign.com/uploads/AI_Chat_4x_f8115187b3.webp" alt="Professional businessman working on laptop" className="absolute top-0 left-0 right-0 object-cover h-full w-full z-10 rounded-2xl" title="Umbraco Hero Image" />
                    <div className="absolute top-0 left-0 right-0 w-full h-full z-20"></div>
                </div>
            }
            bottomContent={null}
            mobileBottomContent={null}
        />
    );
}
