import { Link } from 'react-router-dom';

export default function ServiceOurProcess() {
    return (
        <section className="mt-16 relative xl:container 3xl:max-w-[50%] mx-auto px-4 lg:px-10" id="our-process-section">
            <div className="bg-[#f5f5f5] rounded-[2rem] px-4 py-6 lg:pl-10 lg:pr-0">
                <div className="flex flex-col-reverse items-center lg:flex-row-reverse lg:justify-between gap-3 w-full">
                    <img loading="lazy" src="https://rd-cms.do.recognisedesign.com/uploads/Project_timeline_db1ab8a5d8.webp" alt="Want to reduce time spent chasing fixes?" className="rounded-xl w-[120%] lg:w-[50%] xl:w-[60%] 2xl:w-[70%] object-cover" />
                    <div className="my-auto w-full px-4 lg:max-w-sm text-center lg:text-start pt-8 lg:py-10 xl:py-0">
                        <h2 className="text-3xl sm:text-3xl lg:text-4xl mb-2 font-semibold text-[#081F2D]">
                            Our Process
                        </h2>
                        <p className="text-base text-gray-900 leading-relaxed">
                            At the core of our process lies the client: understanding their needs, desires, pain points, architecture, and feedback. Throughout every stage of the project, we engage our experts for your success.
                        </p>
                        <Link to="/about" className="group relative w-44 h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-lg font-medium lg:flex block mt-6 mx-auto lg:mx-0 overflow-hidden">
                            <span className="relative flex-1 flex items-center justify-center overflow-hidden h-full">
                                <span className="transition-transform flex flex-row whitespace-nowrap items-center gap-2.5 duration-300 transform group-hover:-translate-y-full">
                                    Learn More
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
