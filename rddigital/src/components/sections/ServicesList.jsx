import { Link } from 'react-router-dom';

export default function ServicesList() {
  return (
    <section className="pt-12 bg-white sm:pt-16 lg:pt-24 pb-8">
      <div className="xl:container 3xl:max-w-[50%] mx-auto px-4 sm:px-6 lg:px-14">
        
        {/* Umbraco Section */}
        <div className="grid lg:grid-cols-5 lg:gap-44 text-center lg:text-left mb-16 lg:mb-24">
          <div className="space-y-5 lg:col-span-3 lg:my-auto">
            <h2 className="text-2xl lg:text-[2.5rem] font-semibold text-[#1F1F2B] mt-6 lg:mt-0 leading-tight">
              Website Development with Umbraco
            </h2>
            <p className="text-[#5D5D79] text-base sm:text-lg leading-relaxed">
              You need a website that runs fast, looks sharp, and is easy to manage. We build sites using Umbraco CMS — ideal for teams who want control without the complexity. Our approach includes custom themes and templates, clean SEO-friendly code, intuitive content editing for your team, and scalable architecture to support your growth.
            </p>
            <div className="pb-8 flex-wrap gap-2 sm:gap-3 mb-6 why-section-content text-center lg:text-left">
              <ul className="w-full !py-0 !flex !flex-wrap !gap-2 justify-center lg:justify-start">
                <li className="inline-flex items-center rounded-lg text-sm xxs:text-base px-2.5 font-medium text-[#2E2F30] bg-[#F5F5F5]">Umbraco</li>
                <li className="inline-flex items-center rounded-lg text-sm xxs:text-base px-2.5 font-medium text-[#2E2F30] bg-[#F5F5F5]">Web Design</li>
                <li className="inline-flex items-center rounded-lg text-sm xxs:text-base px-2.5 font-medium text-[#2E2F30] bg-[#F5F5F5]">Guidelines</li>
                <li className="inline-flex items-center rounded-lg text-sm xxs:text-base px-2.5 font-medium text-[#2E2F30] bg-[#F5F5F5]">Visual identity</li>
              </ul>
            </div>
            <Link
              to="/services/Umbraco-Website-Development"
              className="group relative w-44 h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-[1.05rem] font-medium menu-item-wrapper lg:flex hidden !mt-0 mx-auto lg:mx-0 overflow-hidden"
            >
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
          <div className="relative order-first lg:order-last lg:col-span-2 flex flex-col">
            <div className="bg-[#f5f5f5] lg:bg-white lg:p-4 rounded-3xl pb-8 lg:pb-0">
              <img
                loading="lazy"
                src="https://rd-cms.do.recognisedesign.com/uploads/AI_Chat_4x_f8115187b3.webp"
                alt="Website Development with Umbraco"
                className="h-auto lg:h-full object-contain lg:max-h-[27rem] mx-auto mix-blend-multiply"
              />
            </div>
            
            <Link
              to="/services/Umbraco-Website-Development"
              className="group relative w-[200px] h-12 items-center justify-center gap-2 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 px-4 text-white transition-all text-base font-medium menu-item-wrapper flex lg:hidden mt-6 mx-auto overflow-hidden"
            >
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

        {/* Web and Mobile App Development Section */}
        <div className="grid lg:grid-cols-5 lg:gap-44 text-center lg:text-left">
          <div className="relative order-first lg:order-first lg:col-span-2 flex flex-col mt-0 lg:mt-14">
            <div className="bg-[#f5f5f5] lg:bg-white lg:p-4 rounded-3xl mt-6 lg:m-0 pb-8 lg:pb-0">
              <img
                loading="lazy"
                src="https://rd-cms.do.recognisedesign.com/uploads/Invite_members_2c3a951f6e.webp"
                alt="Web and Mobile App Development"
                className="h-auto lg:h-full object-contain lg:max-h-[27rem] mx-auto mix-blend-multiply"
              />
            </div>
            
            <Link
              to="/services/web-app-development"
              className="group relative w-[200px] h-12 items-center justify-center gap-2 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 px-4 text-white transition-all text-base font-medium menu-item-wrapper flex lg:hidden mt-6 mx-auto overflow-hidden"
            >
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
          <div className="space-y-6 lg:col-span-3 lg:my-auto">
            <h2 className="text-2xl lg:text-[2.5rem] mt-6 lg:mt-0 font-semibold text-[#1F1F2B] leading-tight">
              Web and Mobile App Development
            </h2>
            <p className="text-[#5D5D79] text-base sm:text-lg leading-relaxed">
              You need tools that save time and reduce stress — that's why we build apps designed to support your daily operations, from staff tools to internal dashboards. They work seamlessly across desktop and mobile, connect with your existing systems, and are custom-built to fit your workflow. Easy for your team to learn and built to scale as you grow.
            </p>
            <div className="flex lg:pb-8 flex-wrap flex-row gap-2 sm:gap-3 lg:mb-6 why-section-content justify-center lg:justify-start">
              <ul className="w-full !py-0 !flex !flex-wrap !gap-2 justify-center lg:justify-start">
                <li className="inline-flex items-center rounded-lg text-sm xxs:text-base px-2.5 font-medium text-[#2E2F30] bg-[#F5F5F5]">Mobile App</li>
                <li className="inline-flex items-center rounded-lg text-sm xxs:text-base px-2.5 font-medium text-[#2E2F30] bg-[#F5F5F5]">UI/UX Design</li>
                <li className="inline-flex items-center rounded-lg text-sm xxs:text-base px-2.5 font-medium text-[#2E2F30] bg-[#F5F5F5]">iOS Development</li>
                <li className="inline-flex items-center rounded-lg text-sm xxs:text-base px-2.5 font-medium text-[#2E2F30] bg-[#F5F5F5]">Web Design</li>
                <li className="inline-flex items-center rounded-lg text-sm xxs:text-base px-2.5 font-medium text-[#2E2F30] bg-[#F5F5F5]">Native Apps</li>
                <li className="inline-flex items-center rounded-lg text-sm xxs:text-base px-2.5 font-medium text-[#2E2F30] bg-[#F5F5F5]">API Integration</li>
              </ul>
            </div>
            <Link
              to="/services/web-app-development"
              className="group relative w-44 h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-[1.05rem] font-medium menu-item-wrapper hidden lg:flex !mt-0 lg:mx-0 overflow-hidden"
            >
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
