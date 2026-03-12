import Button from '../common/Button';
import { Link } from 'react-router-dom';

export const GoogleRating = () => (
    <div className="flex items-center sm:justify-center gap-2 text-white lg:flex">
        <img loading="lazy" src="/assets/images/google.webp" alt="Google icon" className="h-[2rem] w-auto lg:h-full lg:w-auto" />
        <span className="flex flex-col items-start gap-[1px]">
            <span className="font-bold text-[10px] lg:text-xs text-current/90 leading-none lg:leading-normal">Google Rating</span>
            <span className="flex text-dark-orange items-center gap-0 font-bold text-base lg:text-lg text-[#F59E0B] leading-none">
                <span className="font-extrabold text-xs lg:text-sm leading-none lg:leading-7 mr-1.5">5.0 </span>
                {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="10 2 3 20" className="size-[0.875rem] lg:size-[1.125rem]">
                        <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path>
                    </svg>
                ))}
            </span>
            <span className="text-[10px] lg:text-xs text-current/90 leading-none lg:leading-normal">See all our reviews</span>
        </span>
    </div>
);




const homePartnerLogos = [
    { name: 'Columbus Direct', src: 'https://rd-cms.do.recognisedesign.com/uploads/Item_acba8cae11.webp' },
    { name: 'Berkeley Square Medical', src: 'https://rd-cms.do.recognisedesign.com/uploads/Item_1_2b2899a070.webp' },
    { name: 'Electric Car Chargers', src: 'https://rd-cms.do.recognisedesign.com/uploads/Item_2_2de0810a0f.webp' },
    { name: 'Collinson Group', src: 'https://rd-cms.do.recognisedesign.com/uploads/Item_3_603231485b.webp' },
    { name: 'Columbus Assicurazioni', src: 'https://rd-cms.do.recognisedesign.com/uploads/Item_4_b090dd6d60.webp' },
];

export default function Hero({
    containerClass = "relative h-fit flex items-center justify-center overflow-hidden bg-primary",
    innerContainerClass = "relative px-4 mt-[5.25rem] lg:mt-24 py-[4.5rem] xl:p-14 mx-auto lg:top-0 lg:px-10 xl:container 3xl:max-w-[50%] text-left lg:text-left text-white w-full",
    gridClass = "text-center items-center flex justify-between max-lg:flex-col lg:w-full gap-4 lg:gap-0 xl:gap-20",
    leftContentClass = "text-white text-center md:text-left flex flex-col gap-4 w-full landscape:max-w-full lg:landscape:max-w-screen-sm lg:w-1/2",
    bgContent = null,
    pill = (
        <h1 className="relative h-10 justify-center rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] text-white capitalize px-3 lg:px-4 py-2.5 lg:py-[0.9rem] gap-1.5 flex flex-row items-center font-medium group mx-auto w-full xxs:mx-0 xxs:w-fit hover:brightness-90 transition-all duration-300 text-xs md:text-sm lg:text-base">
            We have uplifted revenue by 10%. Your Business is next !
            <img src="/images/rocket-launch 2.svg" alt="" className="group-hover:rotate-45 duration-300 transition-transform" />
        </h1>
    ),
    title = (
        <>
            High-Performance Web Platforms for Regulated Businesses
        </>
    ),
    titleClass = "block text-[2rem] lg:text-[4rem] leading-[120%] font-semibold capitalize",
    description = (
        <>
            We build secure digital products for companies where compliance, speed, and results matter.<br />
            Our clients include leading insurance providers, medical brands, and technical teams across the UK and Europe.
        </>
    ),
    descriptionClass = "text-white w-full !leading-[175%] font-normal m-0 text-sm lg:text-lg tracking-normal capitalize",
    buttons = (
        <>
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
            <Button to="/portfolio" size="md" className="px-8 flex-1 h-12 lg:h-14 lg:w-44 text-lg bg-[#F1F7FA] text-heading-dark hover:bg-white border-[#e2e8f0] shadow whitespace-nowrap !rounded-[10px]">
                Case Studies
            </Button>
        </>
    ),
    buttonsContainerClass = "flex flex-row gap-4 items-center w-full lg:w-auto",
    showGoogleRating = true,
    leftContentAppend = (
        <section className="relative flex overflow-x-auto rounded-[6.65px] lg:rounded-[10.4px] md:overflow-x-hidden bg-[#F5F5f5] border-[#E9E9E9] mb-0 justify-around [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full lg:w-fit" >
            <div className="flex whitespace-nowrap md:whitespace-normal w-full py-1 px-4 lg:py-[0.4375rem] bg-white justify-around lg:justify-normal lg:pr-7 lg:pl-0 h-[2.075rem] lg:h-[3.2rem] relative z-10">
                {homePartnerLogos.map((logo) => (
                    <a key={logo.name} target="_blank" href="#" className="flex-shrink-0 flex items-center -mr-1 h-full max-h-6 lg:max-h-[2.375rem]">
                        <img src={logo.src} title={logo.name} className="max-h-6 lg:max-h-[2.375rem] object-fill" loading="lazy" />
                    </a>
                ))}
            </div>
        </section>
    ),
    rightContent = (
        <div className="w-full lg:w-1/2">
            <img src="/assets/images/side visual for hero.svg" alt="High Performance Web Platforms Visual" className="hidden lg:block min-w-[55vw]" />
            <img src="/images/Clean up space.svg" alt="Clean up space" className="block lg:hidden mx-auto" />
        </div>
    ),
    mobileBottomContent = (
        <>
            <div className="h-24 hidden lg:block"></div>
            <div className="relative">
                <img loading="lazy" src="https://rd-cms.do.recognisedesign.com/uploads/mobile_hero_portfolio_8dd9436e8e.webp" alt="Professional businessman working on laptop" className="object-cover w-full block lg:hidden h-auto z-10 py-10" title="About Us Hero Image" />
            </div>
        </>
    )
}) {
    return (
        <section className={containerClass}>
            {/* Background elements */}
            {bgContent}

            {/* Main Hero Content */}
            <div className={innerContainerClass}>
                <div className={gridClass}>
                    {/* Left Content */}
                    <div className={leftContentClass}>
                        {pill && pill}

                        <h1 className={titleClass}>
                            {title}
                        </h1>

                        <div className="flex flex-col items-center md:items-start gap-5 w-full">
                            <p className={descriptionClass}>
                                {description}
                            </p>

                            <div className={buttonsContainerClass}>
                                {buttons}
                                {showGoogleRating && <GoogleRating />}
                            </div>

                            {leftContentAppend}
                        </div>
                    </div>

                    {/* Right Visual */}
                    {rightContent}
                </div>

                {mobileBottomContent}
            </div>
        </section>
    );
}
