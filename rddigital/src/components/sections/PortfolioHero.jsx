import { Link } from 'react-router-dom';
import Hero from './Hero';

export default function PortfolioHero() {
    return (
        <Hero
            containerClass="relative h-full pt-[7.5rem] lg:pt-[160px] lg:-mt-[120px] flex items-end lg:items-center justify-start overflow-hidden bg-primary"
            bgContent={
                <div className="absolute inset-0 w-full h-full overflow-hidden hidden lg:block">
                    <img loading="lazy" src="https://rd-cms.do.recognisedesign.com/uploads/portfolio_hero_9ce8d6b5c8.webp" alt="Professional businessman working on laptop" className="object-cover h-[85%] absolute top-0 right-0 lg:right-0 z-10 mt-[6.5rem]
    [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.0),rgba(0,0,0,1),rgba(0,0,0,0))]
    [mask-repeat:no-repeat] [mask-size:100%_100%]" title="" />
                </div>
            }
            innerContainerClass="relative w-full xl:container 3xl:max-w-[50%] mx-auto lg:top-0 z-20 text-left lg:text-left text-[#042537] lg:mt-24"
            gridClass=""
            leftContentClass="text-white text-center md:text-left items-center md:items-start flex flex-col gap-4 w-full landscape:max-w-full lg:landscape:max-w-[44rem] px-4 lg:px-14"
            pill={
                <h1 className="relative h-10 justify-center rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] text-white capitalize px-3 lg:px-4 py-2.5 lg:py-[0.9rem] gap-1.5 flex flex-row items-center font-medium group mx-auto w-full xxs:mx-0 xxs:w-fit hover:brightness-90 transition-all duration-300 text-xs md:text-sm lg:text-base">
                    We Have Uplifted Revenue By 10%. Your Business Is Next  !
                    <img src="/images/rocket-launch 2.svg" alt="" className="group-hover:rotate-45 duration-300 transition-transform" />
                </h1>
            }
            title={
                <>
                    Real Results In Regulated Industries
                </>
            }
            titleClass="block text-[2rem] lg:text-[4rem] leading-[120%] font-semibold capitalize"
            description="From healthcare and insurance to EV and sports, discover how we build digital products that reduce admin time, improve performance, and meet the highest compliance standards."
            descriptionClass="text-white w-full !leading-[175%] font-normal m-0 text-sm lg:text-lg tracking-normal"
            buttonsContainerClass="flex flex-row gap-4 items-center w-full lg:w-auto"
            buttons={
                <Link to="/contact" className="group relative h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-lg font-medium lg:flex w-1/2 lg:w-44 block overflow-hidden">
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
            }
            showGoogleRating={true}
            leftContentAppend={
                <section className="relative flex overflow-x-auto rounded-[6.65px] lg:rounded-[10.4px] md:overflow-x-hidden bg-[#F5F5f5] border-[#E9E9E9] mb-0 justify-around [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full lg:w-fit mt-10" >
                    <div className="flex whitespace-nowrap md:whitespace-normal w-full py-1 px-4 lg:py-[0.4375rem] bg-white justify-around lg:justify-normal lg:pr-7 lg:pl-0 h-[2.075rem] lg:h-[3.2rem] relative z-10">
                        <a target="_blank" href="https://www.columbusdirect.com/" className="flex-shrink-0 flex items-center -mr-1 h-full max-h-6 lg:max-h-[2.375rem]">
                            <img src="https://rd-cms.do.recognisedesign.com/uploads/Item_acba8cae11.webp" title="Item.webp" className="max-h-6 lg:max-h-[2.375rem] object-fill" loading="lazy" />
                        </a>
                        <a target="_blank" href="https://www.berkeleysquaremedical.com/" className="flex-shrink-0 flex items-center -mr-1 h-full max-h-6 lg:max-h-[2.375rem]">
                            <img src="https://rd-cms.do.recognisedesign.com/uploads/Item_1_2b2899a070.webp" title="Item-1.webp" className="max-h-6 lg:max-h-[2.375rem] object-fill" loading="lazy" />
                        </a>
                        <a target="_blank" href="https://electriccarchargersuk.co.uk/" className="flex-shrink-0 flex items-center -mr-1 h-full max-h-6 lg:max-h-[2.375rem]">
                            <img src="https://rd-cms.do.recognisedesign.com/uploads/Item_2_2de0810a0f.webp" title="Item-2.webp" className="max-h-6 lg:max-h-[2.375rem] object-fill" loading="lazy" />
                        </a>
                        <a target="_blank" href="https://www.collinsongroup.com/" className="flex-shrink-0 flex items-center -mr-1 h-full max-h-6 lg:max-h-[2.375rem]">
                            <img src="https://rd-cms.do.recognisedesign.com/uploads/Item_3_603231485b.webp" title="Item-3.webp" className="max-h-6 lg:max-h-[2.375rem] object-fill" loading="lazy" />
                        </a>
                        <a target="_blank" href="https://columbusassicurazioni.it/" className="flex-shrink-0 flex items-center -mr-1 h-full max-h-6 lg:max-h-[2.375rem]">
                            <img src="https://rd-cms.do.recognisedesign.com/uploads/Item_4_b090dd6d60.webp" title="Item-4.webp" className="max-h-6 lg:max-h-[2.375rem] object-fill" loading="lazy" />
                        </a>
                    </div>
                </section>
            }
            rightContent={null}
            bottomContent={null}
            mobileBottomContent={
                <>
                    <div className="h-24 hidden lg:block"></div>
                    <div className="relative">
                        <img loading="lazy" src="https://rd-cms.do.recognisedesign.com/uploads/mobile_hero_portfolio_8dd9436e8e.webp" alt="Professional businessman working on laptop" className="object-cover w-full block lg:hidden h-auto z-10 py-10" title="About Us Hero Image" />
                    </div>
                </>
            }
        />
    );
}
