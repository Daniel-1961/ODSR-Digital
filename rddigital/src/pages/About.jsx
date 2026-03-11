import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqsLeft = [
    {
      question: "What services does your app development company offer?",
      answer: "We provide mobile and web app development, website optimisation, analytics, SEO, and UI/UX design in Hertfordshire.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, we ensure apps stay updated, secure, and fully optimised for the best performance.",
    },
    {
      question: "What do web designers near me offer?",
      answer: "Local web designers enhance communication, ensure quick turnaround, and optimise for local SEO.",
    },
    {
      question: "What elements can be A/B tested?",
      answer: "Common elements include website layout, copy, pricing, emails, user experience, and targeting.",
    },
    {
      question: "What technologies do you specialise in?",
      answer: "We specialise in .NET, Umbraco CMS, and Azure for scalable, secure, and efficient solutions.",
    },
  ];

  const faqsRight = [
    {
      question: "How long does it take to create an app?",
      answer: "Timelines vary by project complexity, but we aim to deliver high-quality apps efficiently.",
    },
    {
      question: "Can you develop apps for both iOS and Android?",
      answer: "Yes, we build high-performing apps for both platforms using the latest technologies.",
    },
    {
      question: "What are the benefits of A/B testing?",
      answer: "A/B testing helps make data-driven decisions by comparing versions to see which performs better.",
    },
    {
      question: "How many visitors do I need, and how long should I run an A/B test?",
      answer: "It depends on traffic and significance, but at least a week is recommended for accurate insights.",
    },
    {
      question: "What industries do you specialise in for web design?",
      answer: "With 15 years of experience and 40+ projects, we’ve worked across travel insurance, EV, healthcare, beauty, and e-commerce.",
    },
  ];

  return (
    <div className="app-container bg-white h-full w-full m-0 p-0 overflow-x-hidden scroll-smooth">
      <main>
        {/* HERO SECTION */}
        <section
          className="relative h-[20rem] lg:h-[25rem] 2xl:h-[50vh] 3xl:h-[50vh] 4xl:h-[50vh] lg:-mt-32 flex items-center justify-start"
          style={{ zIndex: 1 }}
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              loading="lazy"
              src="https://rd-cms.do.recognisedesign.com/uploads/aboutus_hero_mobile_2_caec21da94.webp"
              alt="Professional businessman working on laptop"
              className="object-cover w-full h-full absolute top-0 left-0 object-top"
              title="About Us Hero Image"
            />
          </div>
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(90deg, RGB(17, 50, 70) 0%, rgba(23, 80, 112, 0.73) 40%, rgba(23, 80, 112, 0) 100%)",
            }}
          ></div>
          <div className="relative top-10 lg:top-0 xl:container 3xl:max-w-[50%] xl:mx-auto z-10 text-left pt-20 text-white px-8 max-w-2xl 3xl:max-w-5xl">
            <h1 className="text-4xl 3xl:text-8xl font-semibold leading-tight">
              About RD Digital
            </h1>
          </div>
        </section>

        {/* STORY SECTION */}
        <div className="bg-[#f5f5f5]">
          <section className="py-10 lg:py-14 xl:container 3xl:max-w-[50%] xl:mx-auto container mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-32 items-center">
              <div className="lg:col-span-2 px-6 lg:px-10 space-y-6 order-1 lg:order-2">
                <p>
                  We’re RD Digital, previously known as Recognise Design, and
                  we’ve been building things that work and last since 2013. It
                  all started with two developers, Abel and Jordan, freelancing
                  after hours while working full time at Hobbs London. Abel was
                  the technical lead, the guy teaching clean code and
                  frameworks. Jordan soaked it all in, and together they started
                  building sites for small businesses, learning fast and
                  figuring it out as they went.From the beginning, it was less
                  about flashy design and more about function, performance, and
                  people.
                </p>
                <p>
                  Their paths eventually took different turns. Abel went on to
                  lead dev teams at Debenhams and worked with top agencies like
                  Publicis Sapient. Jordan moved into contracting, working
                  across brands like eBay, M&amp;C Saatchi, and Collinson Group.
                  Along the way, they stayed close and brought a third person
                  into the mix: Hiruy, Abel’s brother and a sharp mind in
                  automated testing and IT. The three would hang out after work,
                  not knowing they were laying the foundation for something
                  bigger.
                  <br />
                  In 2022, RD Digital officially came to life. Offices opened in
                  Addis Ababa and Ware, Hertfordshire. A team grew. Clients
                  came, including Columbus UK and Columbus Italy. And here we
                  are today.
                  <br />
                  &nbsp;
                </p>
              </div>
              <div className="flex justify-center lg:justify-start order-2 lg:order-1 w-full">
                <div className="relative flex !w-[80rem] items-center justify-center">
                  <img
                    loading="lazy"
                    src="https://rd-cms.do.recognisedesign.com/uploads/aboutus_full_logo_1_1_99bc39207e.webp"
                    alt="Professional businessman working on laptop"
                    className="object-cover w-full"
                    title="About Us Hero Image"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* WHAT WE DO SECTION */}
        <section className="bg-white px-4 pt-8 pb-12 lg:p-16 lg:px-10 mx-auto xl:container 3xl:max-w-[50%]">
          <div className="relative mx-auto lg:top-0 z-10 text-left lg:text-left">
            <div className="flex max-sm:flex-col max-sm:gap-5 gap-2 justify-between items-end mb-8">
              <div className="flex flex-row justify-between items-center text-center lg:text-start w-full lg:py-2">
                <div>
                  <h2 className="font-semibold text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D]">
                    What we do
                  </h2>
                </div>
                <Link
                  to="/contact"
                  className="group relative w-44 h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-lg font-medium menu-item-wrapper hidden lg:flex border-0"
                >
                  <span className="relative flex-1 flex items-center justify-center overflow-hidden h-full">
                    <span className="transition-transform flex flex-row whitespace-nowrap items-center gap-2.5 duration-300 transform">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="stroke-white"
                          d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="flex flex-row justify-center items-center whitespace-nowrap gap-2 absolute top-0 left-1.5 max-[375px]:left-0 w-full h-full transition-transform duration-300 transform translate-y-full text-white">
                      Scale Faster
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="stroke-white"
                          d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 gap-5">
              {/* Card 1 */}
              <div className="rounded-3xl border border-black/10 flex flex-col p-4 bg-white">
                <img
                  loading="lazy"
                  src="https://rd-cms.do.recognisedesign.com/uploads/Frame_1000002961_7e2a22be63.webp"
                  alt="Websites using Umbraco CMS"
                  className="h-full w-full max-h-56 object-cover object-top rounded-[1.25rem]"
                />
                <span className="flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-xl text-[#2b3c45] leading-[120%] pt-4">
                      Websites using Umbraco CMS
                    </h3>
                  </div>
                  <Link
                    to="/services/Umbraco-Website-Development"
                    className="group relative h-10 items-center justify-center gap-2.5 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 text-white transition-all text-lg font-medium flex capitalize hover:brightness-110"
                  >
                    Read more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="stroke-white"
                        stroke="#175070"
                        d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </span>
              </div>

              {/* Card 2 */}
              <div className="rounded-3xl border border-black/10 flex flex-col p-4 bg-white">
                <img
                  loading="lazy"
                  src="https://rd-cms.do.recognisedesign.com/uploads/Frame_1000002961_1_32dba48e55.webp"
                  alt="Marketing analytics setups using GA4 and Google Tag Manager"
                  className="h-full w-full max-h-56 object-cover object-top rounded-[1.25rem]"
                />
                <span className="flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-xl text-[#2b3c45] leading-[120%] pt-4">
                      Marketing analytics setups using GA4 and Google Tag
                      Manager
                    </h3>
                  </div>
                  <Link
                    to="/services/marketing-analytics"
                    className="group relative h-10 items-center justify-center gap-2.5 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 text-white transition-all text-lg font-medium flex capitalize hover:brightness-110"
                  >
                    Read more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="stroke-white"
                        stroke="#175070"
                        d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </span>
              </div>

              {/* Card 3 */}
              <div className="rounded-3xl border border-black/10 flex flex-col p-4 bg-white">
                <img
                  loading="lazy"
                  src="https://rd-cms.do.recognisedesign.com/uploads/AI_web_design_46b8921782.webp"
                  alt="Secure hosting and architecture with Microsoft Azure"
                  className="h-full w-full max-h-56 object-cover object-top rounded-[1.25rem]"
                />
                <span className="flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-xl text-[#2b3c45] leading-[120%] pt-4">
                      Secure hosting and architecture with Microsoft Azure
                    </h3>
                  </div>
                  <Link
                    to="/services/azure"
                    className="group relative h-10 items-center justify-center gap-2.5 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 text-white transition-all text-lg font-medium flex capitalize hover:brightness-110"
                  >
                    Read more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="stroke-white"
                        stroke="#175070"
                        d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </span>
              </div>

              {/* Card 4 */}
              <div className="rounded-3xl border border-black/10 flex flex-col p-4 bg-white">
                <img
                  loading="lazy"
                  src="https://rd-cms.do.recognisedesign.com/uploads/Frame_1000002961_2_1ce51bc4d9.webp"
                  alt="High-conversion journeys for customer acquisition"
                  className="h-full w-full max-h-56 object-cover object-top rounded-[1.25rem]"
                />
                <span className="flex flex-col justify-between flex-1 gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-xl text-[#2b3c45] leading-[120%] pt-4">
                      High-conversion journeys for customer acquisition
                    </h3>
                  </div>
                  <Link
                    to="/services/customer-acquisition-journeys"
                    className="group relative h-10 items-center justify-center gap-2.5 rounded-[10px] border-[1.4px] border-solid [border-image-source:linear-gradient(135.41deg,#175070_0%,#22075E_106.82%)] [border-image-slice:0] [border-image-repeat:stretch] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 text-white transition-all text-lg font-medium flex capitalize hover:brightness-110"
                  >
                    Read more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="stroke-white"
                        stroke="#175070"
                        d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* BELIEFS SECTION */}
        <section className="bg-white w-full">
          <div className="xl:container lg:mx-auto 3xl:max-w-[50%] px-5 lg:px-10 sm:py-10">
            <div className="flex flex-col lg:flex-row gap-5 md:gap-16 items-center">
              <div className="flex flex-col gap-5 w-full lg:pl-5 lg:pr-5 md:pr-10 lg:container order-1">
                <h2 className="text-3xl sm:text-[40px] text-center lg:text-start font-semibold text-[#175070] leading-none">
                  What We Believe
                </h2>
                <h3 className="leading-none text-xl text-center lg:text-start font-semibold mb-1">
                  Trust matters more than tech.
                </h3>
                <p className="leading-2 mb-1">
                  We believe in relationships first. That means being kind,
                  communicating clearly, and building partnerships that last.
                  When the relationship is strong, the work is better. Simple as
                  that.
                </p>
              </div>
              <div className="relative w-full md:w-auto order-2">
                <img
                  loading="lazy"
                  src="https://rd-cms.do.recognisedesign.com/uploads/41653587edf3b6345c184603e05a583010b02d03_1_1_1_2581b2875c.webp"
                  alt="Want to reduce time spent chasing fixes?"
                  className="rounded-2xl lg:max-w-[32rem] object-cover"
                />
                <div
                  className="absolute inset-0 rounded-xl w-full h-full pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, RGB(17, 50, 70) -10%, rgba(23, 80, 112, 0) 100%)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* WHERE WE'RE GOING SECTION */}
        <section className="bg-[#f5f5f5] w-full pt-10 lg:pt-0">
          <div className="xl:container 3xl:max-w-[50%] pt-4 xl:mx-auto mx-auto px-5 lg:px-10 sm:py-10">
            <div className="flex flex-col lg:flex-row gap-5 md:gap-16 items-center">
              <div className="flex flex-col gap-5 w-full order-1 md:order-2">
                <h2 className="text-3xl sm:text-[40px] text-center lg:text-start font-semibold text-[#175070] leading-none">
                  Where We’re Going
                </h2>
                <p className="leading-2 mb-1 pr-0 md:pr-10">
                  RD Digital is just getting started. We’ve got global clients,
                  a tight-knit team, and a shared vision to build digital
                  products that work beautifully and make a difference.
                </p>
              </div>
              <div className="relative w-full md:w-auto order-2 md:order-1">
                <img
                  loading="lazy"
                  src="https://rd-cms.do.recognisedesign.com/uploads/4fe16cb760cb0fe3bf1451e966445446e97b908e_1_1_036d2f720b.webp"
                  alt="Want to reduce time spent chasing fixes?"
                  className="rounded-xl lg:w-[60rem] object-cover"
                />
                <div
                  className="absolute inset-0 rounded-xl w-full h-full pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, RGB(17, 50, 70) 0%, rgba(23, 80, 112, 0) 100%)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <div className="py-5">
          <section className="bg-primary w-full">
            <div className="mx-auto 3xl:max-w-[50%] xl:mx-auto bg-primary py-10 sm:py-20 flex max-sm:gap-5 max-sm:flex-col justify-between items-center gap-3 px-5 md:px-10 max-sm:text-center lg:w-[95vw]">
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl sm:text-[40px] uppercase font-normal text-white leading-[1.4] sm:leading-none">
                  Want to reduce time spent chasing fixes?
                </h2>
                <p className="text-white font-light leading-none mb-1">
                  Need a partner that works across tech and compliance?
                </p>
                <Link
                  to="/contact"
                  className="group items-center gap-2 bg-white text-primary py-2 font-medium max-md:mx-auto px-10 sm:px-5 rounded-md flex w-fit hover:shadow-[inset_0_0_0_2px_rgba(23,80,112,1)] duration-150 transition-all"
                >
                  Let’s talk
                  <svg
                    className="group-hover:translate-x-1 duration-150 transition-transform"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="stroke-primary"
                      stroke="#175070"
                      d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Link>
              </div>
              <img
                src="https://rd-cms.do.recognisedesign.com/uploads/Background_1_afb0a8dfd1.webp"
                alt="Want to reduce time spent chasing fixes?"
                className="rounded-xl h-[150px] max-w-[300px] object-cover"
                loading="lazy"
              />
            </div>
          </section>
        </div>

        {/* FAQ SECTION */}
        <div className="pb-10 bg-[#f5f5f5]">
          <section className="bg-white w-full">
            <div className="px-4 pt-8 pb-12 lg:p-16 lg:px-10 mx-auto xl:container 3xl:max-w-[50%]">
              <div className="flex gap-5 md:gap-16 flex-col-reverse md:flex-row">
                <div className="flex-1">
                  <div className="mx-auto flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 mb-8">
                    <h2 className="font-semibold text-center text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D]">
                      Got Questions? Answered
                    </h2>
                    <p className="text-[#3C3C5E] text-center text-sm leading-[150%] tracking-[-1%] lg:text-[0.9375rem] font-normal max-w-sm">
                      Find quick answers to common queries about Websoft
                      features, pricing, and support.
                    </p>
                  </div>
                  <div className="w-full flex flex-col md:flex-row gap-y-2 gap-x-6 p-3 lg:pt-8 lg:pb-12 border border-[#DFE0EC] rounded-xl">
                    {/* Left Column FAQ */}
                    <div className="flex flex-col gap-2 flex-1">
                      {faqsLeft.map((faq, index) => {
                        const id = `left-${index}`;
                        const isOpen = openFaq === id;
                        return (
                          <div
                            key={id}
                            className="w-full mx-auto px-3 py-5 bg-white rounded-b-lg border-b border-[#DFE0EC] transition-colors duration-300"
                          >
                            <div className="w-full">
                              <div
                                onClick={() => toggleFaq(id)}
                                className="flex justify-between px-2 items-center flex-row gap-6 w-full cursor-pointer group"
                              >
                                <div>
                                  <p className="flex justify-center text-[#1F1F2B] items-center font-medium text-lg group-hover:translate-y-0 transition-all duration-300 ease-out">
                                    {faq.question}
                                  </p>
                                </div>
                                <button
                                  aria-label="toggler"
                                  className="h-8 shrink-0 w-8 flex items-center justify-center rounded-full"
                                >
                                  {isOpen ? (
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon stroke-inherit transition-transform duration-300"
                                    >
                                      <path
                                        d="M19 15L12 9L5 15"
                                        stroke="#1C274C"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  ) : (
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon stroke-inherit transition-transform duration-300"
                                    >
                                      <path
                                        d="M19 9L12 15L5 9"
                                        stroke="#1C274C"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  )}
                                </button>
                              </div>
                              <div
                                className={`mt-1 w-full overflow-hidden px-2 transition-[max-height] duration-300 ease-in-out ${
                                  isOpen ? "max-h-40" : "max-h-0"
                                }`}
                              >
                                <p className="text-sm md:text-base leading-6 text-[#3C3C5E] w-11/12 mt-2">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Right Column FAQ */}
                    <div className="flex flex-col gap-2 flex-1">
                      {faqsRight.map((faq, index) => {
                        const id = `right-${index}`;
                        const isOpen = openFaq === id;
                        return (
                          <div
                            key={id}
                            className="w-full mx-auto px-3 py-5 bg-white rounded-b-lg border-b border-[#DFE0EC] transition-colors duration-300"
                          >
                            <div className="w-full">
                              <div
                                onClick={() => toggleFaq(id)}
                                className="flex justify-between px-2 items-center flex-row gap-6 w-full cursor-pointer group"
                              >
                                <div>
                                  <p className="flex justify-center text-[#1F1F2B] items-center font-medium text-lg group-hover:translate-y-0 transition-all duration-300 ease-out">
                                    {faq.question}
                                  </p>
                                </div>
                                <button
                                  aria-label="toggler"
                                  className="h-8 shrink-0 w-8 flex items-center justify-center rounded-full"
                                >
                                  {isOpen ? (
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon stroke-inherit transition-transform duration-300"
                                    >
                                      <path
                                        d="M19 15L12 9L5 15"
                                        stroke="#1C274C"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  ) : (
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="icon stroke-inherit transition-transform duration-300"
                                    >
                                      <path
                                        d="M19 9L12 15L5 9"
                                        stroke="#1C274C"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      ></path>
                                    </svg>
                                  )}
                                </button>
                              </div>
                              <div
                                className={`mt-1 w-full overflow-hidden px-2 transition-[max-height] duration-300 ease-in-out ${
                                  isOpen ? "max-h-40" : "max-h-0"
                                }`}
                              >
                                <p className="text-sm md:text-base leading-6 text-[#3C3C5E] w-11/12 mt-2">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
