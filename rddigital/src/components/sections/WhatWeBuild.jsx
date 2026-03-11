const features = [
    {
        icon: "https://rd-cms.do.recognisedesign.com/uploads/layout_1_2_704ce29dc4.webp",
        title: "Custom Web Applications",
        description: "Tailor-made applications designed for your workflows, offering flexibility, scalability, and performance."
    },
    {
        icon: "https://rd-cms.do.recognisedesign.com/uploads/layout_1_2_704ce29dc4.webp",
        title: "Mobile App Solutions",
        description: "Native and cross-platform apps with intuitive interfaces that enhance user engagement and customer experience."
    },
    {
        icon: "https://rd-cms.do.recognisedesign.com/uploads/layout_1_2_704ce29dc4.webp",
        title: "API & System Integration",
        description: "Seamlessly connect your app with third-party services, APIs, and internal tools for a more powerful digital ecosystem."
    },
    {
        icon: "https://rd-cms.do.recognisedesign.com/uploads/layout_1_2_704ce29dc4.webp",
        title: "Secure & Scalable Architecture",
        description: "Enterprise-level infrastructure with best practices in security and cloud deployment, ensuring your app is future-proof."
    }
];

export default function WhatWeBuild() {
    return (
        <section className="bg-white px-4 pt-8 pb-12 lg:p-16 lg:px-10 mx-auto xl:container 3xl:max-w-[50%]">
            <div className="relative mx-auto lg:top-0 z-10 text-left lg:text-left">
                <div className="flex max-sm:flex-col max-sm:gap-5 gap-2 justify-between items-end mb-8">
                    <div className="flex flex-row justify-between items-center text-center lg:text-start w-full lg:py-2">
                        <div>
                            <h2 className="font-semibold text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D]">
                                What We Build
                            </h2>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 gap-5">
                    {features.map((feature, index) => (
                        <div key={index} className="rounded-2xl flex flex-col justify-start p-6 py-4 bg-[#175070] border-t border-white/5 backdrop-blur-[3px] relative hover:brightness-110 transition-all duration-300">
                            <div className="absolute top-0 left-0 w-full h-full bg-[url(/images/Card.png)] bg-repeat bg-[length:1.5%] opacity-[0.05]"></div>
                            <img loading="lazy" src={feature.icon} alt={feature.title} className="size-10" />
                            <h3 className="font-medium text-white leading-[140%] text-2xl capitalize mt-2.5">
                                {feature.title}
                            </h3>
                            <span className="flex flex-col flex-1 gap-2 mb-auto mt-1.5">
                                <div className="text-[#DADADD] leading-[150%] text-sm">
                                    {feature.description}
                                </div>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
