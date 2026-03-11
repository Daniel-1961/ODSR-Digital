import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CheckIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.621216" width="24" height="24" rx="12" fill="#175070" fillOpacity="0.1" />
    <path d="M7.83398 14.2878C7.83398 14.2878 8.83398 14.2878 10.1673 16.6212C10.1673 16.6212 13.8732 10.5101 17.1673 9.28784" stroke="#175070" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = ({ white = false }) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0"
      stroke={white ? "#fff" : "#175070"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarIcon = ({ filled = true }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 2 3 20" className="size-[1.125rem]">
    <path
      className={filled ? "fill-[#FF8C00]" : "fill-gray-300"}
      d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"
    />
  </svg>
);

const GoogleRating = () => (
  <div className="flex items-center gap-2 text-black">
    <img loading="lazy" src="/images/google.webp" alt="Google icon" className="h-8 w-auto" />
    <span className="flex flex-col items-start gap-[1px]">
      <span className="font-bold text-xs text-black/90">Google Rating</span>
      <span className="flex text-[#FF8C00] items-center gap-0 font-bold text-lg">
        <span className="font-extrabold text-sm leading-7 mr-1.5">5.0 </span>
        {[...Array(5)].map((_, i) => <StarIcon key={i} filled />)}
      </span>
      <span className="text-xs text-black/90">See all our reviews</span>
    </span>
  </div>
);

const whatWeBuild = [
  {
    icon: "https://rd-cms.do.recognisedesign.com/uploads/layout_1_2_704ce29dc4.webp",
    title: "Email generation and routing",
    desc: "Automate personalized emails and route them to the right inbox—ensuring timely, accurate communication with no manual effort.",
  },
  {
    icon: "https://rd-cms.do.recognisedesign.com/uploads/layout_1_2_704ce29dc4.webp",
    title: "Report creation and formatting",
    desc: "Streamline data management with automated record creation and standardized formatting, keeping your databases clean and reliable.",
  },
  {
    icon: "https://rd-cms.do.recognisedesign.com/uploads/layout_1_2_704ce29dc4.webp",
    title: "Form Validation & Autofill",
    desc: "Reduce errors and improve user experience with intelligent validation and autofill features that make forms quick and hassle-free.",
  },
  {
    icon: "https://rd-cms.do.recognisedesign.com/uploads/layout_1_2_704ce29dc4.webp",
    title: "Internal Notifications & Follow Up",
    desc: "Keep teams aligned with instant notifications and automated follow-up tasks, so nothing slips through the cracks.",
  },
];

const portfolio = [
  {
    img: "https://rd-cms.do.recognisedesign.com/uploads/columbus_img_94f83b379a.webp",
    logo: "https://rd-cms.do.recognisedesign.com/uploads/image_53_8e9ee46437.webp",
    name: "Columbus Italy",
    points: ["Adapted the platform for the Italian market.", "Full Umbraco build with Azure hosting.", "Supports thousands of users daily."],
    href: "https://columbusassicurazioni.it",
  },
  {
    img: "https://rd-cms.do.recognisedesign.com/uploads/ecc_image_fadf009002.webp",
    logo: "https://rd-cms.do.recognisedesign.com/uploads/image_52_1_cea5ad58f1.webp",
    name: "ECC",
    points: ["Designed and developed a web and mobile app.", "Helped their teams handle installations, customer data, and scheduling.", "Cut time spent on admin."],
    href: "https://electriccarchargersuk.co.uk/",
  },
  {
    img: "https://rd-cms.do.recognisedesign.com/uploads/berkely_square_medical_e0182599fe.webp",
    logo: "https://rd-cms.do.recognisedesign.com/uploads/Berkeley_Square_Medical_1_5a5e4d48e5.webp",
    name: "Berkeley Square Medical",
    points: ["Upgraded the site for private surgery in Harley Street.", "Improved booking experience.", "Met strict design and compliance standards."],
    href: "https://www.berkeleysquaremedical.com/",
  },
  {
    img: "https://rd-cms.do.recognisedesign.com/uploads/columbus_direct_a5b453083d.webp",
    logo: "https://rd-cms.do.recognisedesign.com/uploads/Item_83fd5800fc.png",
    name: "Columbus Direct",
    points: ["We rebuilt the insurance site.", "Improved performance and conversion.", "Connected marketing, compliance, and customer service."],
    href: "#",
  },
];

const otherServices = [
  {
    img: "https://rd-cms.do.recognisedesign.com/uploads/AI_Chat_1_2a7f43f5b4.webp",
    title: "Automated Testing with Cypress",
    desc: "Engage your audience with professionally coded, mobile-friendly HTML email templates. We create high-performing emails compatible across all major platforms.",
    href: "/services/automated-testing-with-cypress",
  },
  {
    img: "https://rd-cms.do.recognisedesign.com/uploads/AI_Chat_2_48ae73f30a.webp",
    title: "Azure Hosting and Infrastructure",
    desc: "Engage your audience with professionally coded, mobile-friendly HTML email templates. We create high-performing emails compatible across all major platforms.",
    href: "/services/azure",
  },
  {
    img: "https://rd-cms.do.recognisedesign.com/uploads/AI_Chat_3_a7a2465bfa.webp",
    title: "Umbraco Website Development",
    desc: "We build custom apps that support your day-to-day operations. If you need tools for your team, we'll design and develop apps that are easy to use, fast to load, and built around your process.",
    href: "/services/Umbraco-Website-Development",
  },
  {
    img: "https://rd-cms.do.recognisedesign.com/uploads/marketing_analytics_1_dd537e4cd6.webp",
    title: "Marketing Analytics with GA4 and Tag Manager",
    desc: "We help you track what matters and ignore what doesn't. If you want clear insights on how people use your site, we'll set up a clean analytics system using GA4 and Google Tag Manager.",
    href: "/services/marketing-analytics",
  },
  {
    img: "https://rd-cms.do.recognisedesign.com/uploads/Time_tracking_144a73f515.webp",
    title: "Customer Acquisition Journeys",
    desc: "We help you turn website visitors into customers. It's not just about traffic. It's about action. We design flows that guide users from first click to conversion without confusion or delay.",
    href: "/services/customer-acquisition-journeys",
  },
];

const faqs = [
  { q: "What services does your app development company offer?", a: "We provide mobile and web app development, website optimisation, analytics, SEO, and UI/UX design in Hertfordshire." },
  { q: "Do you offer ongoing support and maintenance?", a: "Yes, we ensure apps stay updated, secure, and fully optimised for the best performance." },
  { q: "What do web designers near me offer?", a: "Local web designers enhance communication, ensure quick turnaround, and optimise for local SEO." },
  { q: "What elements can be A/B tested?", a: "Common elements include website layout, copy, pricing, emails, user experience, and targeting." },
  { q: "What technologies do you specialise in?", a: "We specialise in .NET, Umbraco CMS, and Azure for scalable, secure, and efficient solutions." },
];

const faqsRight = [
  { q: "How long does it take to create an app?", a: "Timelines vary by project complexity, but we aim to deliver high-quality apps efficiently." },
  { q: "Can you develop apps for both iOS and Android?", a: "Yes, we build high-performing apps for both platforms using the latest technologies." },
  { q: "What are the benefits of A/B testing?", a: "A/B testing helps make data-driven decisions by comparing versions to see which performs better." },
  { q: "How many visitors do I need, and how long should I run an A/B test?", a: "It depends on traffic and significance, but at least a week is recommended for accurate insights." },
  { q: "What industries do you specialise in for web design?", a: "With 15 years of experience and 40+ projects, we've worked across travel insurance, EV, healthcare, beauty, and e-commerce." },
];

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = React.useState(null);
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => (
        <div key={i} className="w-full mx-auto px-3 py-5 bg-white rounded-b-lg border-b border-[#DFE0EC] transition-colors duration-300">
          <div
            className="flex justify-between px-2 items-center flex-row gap-6 w-full cursor-pointer group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <p className="text-[#1F1F2B] font-medium text-lg">{item.q}</p>
            <button aria-label="toggler" className="h-8 shrink-0 w-8 flex items-center justify-center rounded-full">
              <svg
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
              >
                <path d="M19 9L12 15L5 9" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div
            className="mt-1 w-full overflow-hidden px-2 transition-all duration-300 ease-in-out"
            style={{ maxHeight: openIndex === i ? "200px" : "0" }}
          >
            <p className="text-sm md:text-base leading-6 text-[#3C3C5E] w-11/12 pt-2">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const clientLogos = [
  { href: "https://www.columbusdirect.com/", src: "https://rd-cms.do.recognisedesign.com/uploads/Item_acba8cae11.webp" },
  { href: "https://www.berkeleysquaremedical.com/", src: "https://rd-cms.do.recognisedesign.com/uploads/Item_1_2b2899a070.webp" },
  { href: "https://electriccarchargersuk.co.uk/", src: "https://rd-cms.do.recognisedesign.com/uploads/Item_2_2de0810a0f.webp" },
  { href: "https://www.collinsongroup.com/", src: "https://rd-cms.do.recognisedesign.com/uploads/Item_3_603231485b.webp" },
  { href: "https://columbusassicurazioni.it/", src: "https://rd-cms.do.recognisedesign.com/uploads/Item_4_b090dd6d60.webp" },
];

const googleReviewsMock = [
  {
    name: "Berkeley Square Medical",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVsHn1BdEOUT8sf6q7XgfefEfKBKd6t84gi24rT0UYSh6s4stc=s128-c0x00000000-cc-rp-mo",
    text: "Fantastic Group of designers that work at Recognise design. They have been working on our branding and website design for the past two years and continue to do an amazing job. Special thanks to Jay, Abel Who ensure the design work is done meticulously and always timely! Highly recommend this company 👌",
    rating: 5,
  },
  {
    name: "Michael Bekele",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJmFYvB_Q5MoKMYuYQycBQdTfhrmBgE3RLHi_GVF-wfyegVaw=s128-c0x00000000-cc-rp-mo",
    text: "We had an excellent experience working with Recognise. Their team was timely and professional throughout the project, delivering high-quality solutions that exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Owen Ellis",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIhAMi7NMBrxJc7MiJNFWMXy39VqLstpPRriNnYdUnk5i2SgA=s128-c0x00000000-cc-rp-mo",
    text: "The team at Recognise Design have been excellent throughout the whole process of designing and building web pages for us.",
    rating: 5,
  },
  {
    name: "Yolande Integral Yoga",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjU2U2MhSIoHVe8wCm5mS49F9RYJJZrogH_qMZZXl2YBA2e0WZVB=s128-c0x00000000-cc-rp-mo",
    text: "A lovely Team very professional and efficient. I got what I wanted in good time. With no hesitation I would recommend this local company Recognise Design.",
    rating: 5,
  },
];

export default function AIPoweredWorkflows() {
  const swiperRef = useRef(null);
  const portfolioSwiperRef = useRef(null);

  useEffect(() => {
    let portfolioSwiper = null;
    let otherServicesSwiper = null;
    let testimonialsSwiper = null;

    const initSwipers = () => {
      if (!window.Swiper) return;

      portfolioSwiper = new window.Swiper(".portfolio-swiper", {
        spaceBetween: 20,
        slidesPerView: 1.1,
        effect: "slide",
        speed: 800,
        mousewheel: { forceToAxis: true, sensitivity: 1, releaseOnEdges: true },
        breakpoints: {
          1280: { slidesPerView: 3.4 },
          1024: { slidesPerView: 2.5 },
          768: { slidesPerView: 1.5 },
        },
      });

      otherServicesSwiper = new window.Swiper(".other-services-swiper", {
        slidesPerView: 1,
        centeredSlides: true,
        initialSlide: 0,
        spaceBetween: 20,
        speed: 300,
        navigation: {
          nextEl: ".other-services-swiper-button-next",
          prevEl: ".other-services-swiper-button-prev",
        },
        breakpoints: {
          1440: { slidesPerView: 4, centeredSlides: false },
          1280: { slidesPerView: 3.75, centeredSlides: false },
          768: { slidesPerView: 1, centeredSlides: true },
        },
      });

      testimonialsSwiper = new window.Swiper(".testimonials-swiper", {
        slidesPerView: "auto",
        spaceBetween: 16,
        breakpoints: {
          1024: { slidesPerView: 4, spaceBetween: 20 },
        },
      });

      const slides = document.querySelectorAll(".other-services-swiper .swiper-slide");
      let activeTimeout;
      let isHovering = false;

      const setActiveSlide = (slide) => {
        clearTimeout(activeTimeout);
        slides.forEach((s) => {
          s.setAttribute("data-active", "false");
          s.style.zIndex = "1";
        });
        if (slide) {
          slide.setAttribute("data-active", "true");
          slide.style.zIndex = "2";
          isHovering = true;
        } else if (slides.length > 0) {
          slides[0].setAttribute("data-active", "true");
          slides[0].style.zIndex = "2";
          isHovering = false;
        }
      };

      slides.forEach((slide) => {
        slide.addEventListener("mouseenter", () => setActiveSlide(slide));
        slide.addEventListener("mouseleave", () => {
          if (!isHovering) {
            activeTimeout = setTimeout(() => setActiveSlide(null), 100);
          }
        });
      });
      if (slides.length > 0) setActiveSlide(slides[0]);
    };

    if (!document.querySelector('script[src*="swiper-bundle.min.js"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
      script.onload = initSwipers;
      document.head.appendChild(script);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
      document.head.appendChild(link);
    } else {
      setTimeout(initSwipers, 100);
    }

    return () => {
      if (portfolioSwiper?.destroy) portfolioSwiper.destroy();
      if (otherServicesSwiper?.destroy) otherServicesSwiper.destroy();
      if (testimonialsSwiper?.destroy) testimonialsSwiper.destroy();
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* ── HERO ── */}
      <section className="relative h-full pt-[7.5rem] lg:pt-[160px] flex items-end lg:items-center justify-start overflow-hidden">
        <div className="block absolute inset-0 w-full h-full bg-[#F5F5F5] opacity-[45%] bg-cover bg-center" style={{ backgroundImage: "url(/images/hex-background-networking.jpg)" }} />
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.175fr] px-4 lg:px-14 w-full xl:gap-12 2xl:gap-20 xl:container mx-auto pb-16 3xl:max-w-[50%]">
          {/* Left col */}
          <div className="relative lg:top-0 text-left text-[#042537]">
            <h1 className="text-[2rem] md:text-[4rem] leading-[120%] text-center md:text-start lg:leading-[1.3] font-semibold">
              AI-Powered Workflows
            </h1>
            <p className="text-sm text-center md:text-start md:text-lg md:mt-6 md:leading-[1.5] font-normal mt-4 !leading-[175%] tracking-normal capitalize">
              We help you track what matters and ignore what doesn't. If you want clear insights on how people use your site, we'll set up a clean analytics system using GA4 and Google Tag Manager.
            </p>
            {/* CTA row */}
            <div className="flex flex-row gap-6 items-center w-full lg:w-auto my-6">
              <Link
                to="/contact"
                className="group relative h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-lg font-medium flex w-1/2 md:w-44"
              >
                <span className="relative flex-1 flex items-center justify-center overflow-hidden h-full">
                  <span className="flex flex-row whitespace-nowrap items-center gap-2.5">
                    Book a Call <ArrowIcon white />
                  </span>
                </span>
              </Link>
              <Link
                to="/portfolio"
                className="group items-center relative gap-2 bg-[#F2F2F8] text-[#0A283A] text-lg leading-6 font-medium justify-center rounded-lg flex transition-all whitespace-nowrap h-12 lg:h-14 w-1/2 md:w-auto"
              >
                <div className="bg-[#F2F2F8] h-full relative z-10 justify-center flex items-center w-full px-5 rounded-lg">
                  Case Studies
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[rgba(23,80,112,0.2)] to-[rgba(34,7,94,0.2)] -top-[1px] -left-[1px] -right-[1px] -bottom-[1px]" />
              </Link>
              <div className="items-center gap-2 text-black/90 hidden lg:flex">
                <GoogleRating />
              </div>
            </div>

            {/* Client logos strip */}
            <section className="relative flex overflow-x-auto rounded-[6.65px] lg:rounded-[10.4px] md:overflow-x-hidden bg-[#F5F5f5] border-[#E9E9E9] justify-around [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full lg:w-fit">
              <div className="flex whitespace-nowrap md:whitespace-normal w-full py-1 px-4 lg:py-[0.4375rem] bg-white justify-around lg:justify-normal lg:pr-7 lg:pl-0 h-[2.075rem] lg:h-[3.2rem] relative z-10">
                {clientLogos.map((logo, i) => (
                  <a key={i} target="_blank" rel="noreferrer" href={logo.href} className="flex-shrink-0 flex items-center -mr-1 h-full max-h-6 lg:max-h-[2.375rem]">
                    <img src={logo.src} className="max-h-6 lg:max-h-[2.375rem] object-fill" loading="lazy" alt="client logo" />
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Right col – hero image */}
          <div className="relative h-[30rem] mt-8 lg:mt-0 max-h-72 lg:max-h-full xl:h-full w-full flex items-center">
            <img
              loading="lazy"
              src="https://rd-cms.do.recognisedesign.com/uploads/ai_cloud_concept_with_robot_arms_124724eeb5.webp"
              alt="Professional businessman working on laptop"
              className="absolute top-0 left-0 right-0 object-cover h-full w-full z-10 rounded-2xl"
            />
            <p className="absolute bottom-5 left-6 right-6 z-30 bg-black/20 w-fit rounded-xl py-3 px-4 text-white font-medium text-base lg:text-xl">
              AI-Powered Workflows, Smarter Insights For Your Business!
            </p>
            <p className="absolute bottom-[-3.5rem] sm:bottom-[-2.5rem] xl:bottom-[-3.5rem] left-0 lg:left-6 right-0 lg:right-6 z-30 w-fit flex-wrap rounded-xl flex flex-row items-center justify-center gap-x-4 gap-y-0.5 lg:py-3 lg:px-4 text-white font-medium text-base lg:text-xl">
              {["Track What Truly Matters", "Clear Analytics With GA4", "Smarter Decisions Less Noise"].map((label, i) => (
                <span key={i} className="flex flex-row items-center gap-2">
                  <CheckIcon />
                  <span className="whitespace-nowrap text-[#042537] text-xs font-medium lg:text-sm">{label}</span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ── */}
      <section className="bg-white px-4 pt-8 pb-12 lg:p-16 lg:px-10 mx-auto xl:container 3xl:max-w-[50%]">
        <div className="relative mx-auto lg:top-0 z-10 text-left lg:text-left">
          <div className="flex max-sm:flex-col max-sm:gap-5 gap-2 justify-between items-end mb-8">
            <div className="flex flex-row justify-between items-center text-center lg:text-start w-full lg:py-2">
              <h2 className="font-semibold text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D]">What We Build</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 gap-5">
            {whatWeBuild.map((item, i) => (
              <div key={i} className="rounded-2xl flex flex-col justify-start p-6 py-4 bg-[#175070] border-t border-white/5 backdrop-blur-[3px] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url(/images/Card.png)] bg-repeat bg-[length:1.5%] opacity-[0.05]" />
                <img loading="lazy" src={item.icon} alt={item.title} className="size-10" />
                <h3 className="font-medium text-white leading-[140%] text-2xl capitalize mt-2.5">{item.title}</h3>
                <span className="flex flex-col flex-1 gap-2 mb-auto mt-1.5">
                  <div className="text-[#DADADD] leading-[150%] text-sm">{item.desc}</div>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="mt-16 relative xl:container 3xl:max-w-[50%] mx-auto px-4 lg:px-10">
        <div className="bg-[#f5f5f5] rounded-[2rem] px-4 py-6 lg:pl-10 lg:pr-0">
          <div className="flex flex-col-reverse items-center lg:flex-row-reverse lg:justify-between gap-3 w-full">
            <img
              loading="lazy"
              src="https://rd-cms.do.recognisedesign.com/uploads/Project_timeline_db1ab8a5d8.webp"
              alt="Our Process"
              className="rounded-xl w-[120%] lg:w-[50%] xl:w-[60%] 2xl:w-[70%] object-cover"
            />
            <div className="my-auto w-full px-4 lg:max-w-sm text-center lg:text-start pt-8 lg:py-10 xl:py-0">
              <h2 className="text-3xl sm:text-3xl lg:text-4xl mb-2 font-semibold text-[#081F2D]">Our Process</h2>
              <p className="text-base text-gray-900 leading-relaxed">
                At the core of our process lies the client: understanding their needs, desires, pain points, architecture, and feedback. Throughout every stage of the project, we engage our experts for your success.
              </p>
              <Link
                to="/about"
                className="group relative w-44 h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-lg font-medium lg:flex block mt-6 mx-auto lg:mx-0"
              >
                <span className="relative flex-1 flex items-center justify-center overflow-hidden h-full">
                  <span className="flex flex-row whitespace-nowrap items-center gap-2.5">
                    Learn More <ArrowIcon white />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR WORK IN ACTION ── */}
      <div className="bg-white p-14 px-4 lg:px-14 lg:pr-0">
        <div className="lg:w-full mb-4 lg:mb-10 xl:container px-4 lg:px-0 lg:pr-10 mx-auto 3xl:max-w-[50%]">
          <div className="flex justify-center lg:justify-between sm:justify-start items-center gap-3 lg:pr-10">
            <h2 className="font-semibold mr-auto text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D]">Our Work In Action</h2>
            <Link
              to="/portfolio"
              className="group relative w-44 h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-lg font-medium hidden lg:flex xxs:block"
            >
              <span className="relative flex-1 flex items-center justify-center overflow-hidden h-full">
                <span className="flex flex-row whitespace-nowrap items-center gap-2.5">
                  View All <ArrowIcon white />
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop slider */}
        <div className="hidden xl:block xl:container xl:mx-auto relative px-4 overflow-visible">
          <div className="swiper portfolio-swiper relative pb-16 w-full">
            <div className="swiper-wrapper items-stretch">
              {portfolio.map((proj, i) => (
                <div key={i} className="swiper-slide h-auto" style={{ marginRight: "20px" }}>
                  <div className="h-full rounded-2xl border border-black/10 flex flex-col top-0 gap-2 p-2 bg-[#F5F5F5] hover:bg-[#127EBA] transition-all duration-300 w-full">
                    <img loading="lazy" src={proj.img} alt={proj.name} className="h-[17.0625rem] bg-center object-cover bg-white rounded-lg" />
                    <span className="flex flex-col justify-between flex-1 gap-2 bg-white rounded-lg p-2">
                      <img loading="lazy" src={proj.logo} alt={proj.name} className="h-[2rem] object-contain mr-auto mb-2" />
                      <div className="text-[#041925] leading-[150%] text-sm">
                        <ul>{proj.points.map((p, pi) => <li key={pi}>{p}</li>)}</ul>
                      </div>
                      <a href={proj.href} className="group relative h-10 items-center justify-center gap-2.5 rounded-[10px] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552] py-2 text-white transition-all text-lg font-medium flex capitalize hover:brightness-110 mt-4">
                        View Project
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                          <path d="M1 7h12m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile grid */}
        <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 lg:pr-10 mt-8 gap-5">
          {portfolio.map((proj, i) => (
            <div key={i} className="rounded-2xl border border-black/10 flex flex-col gap-2 p-2 bg-[#F5F5F5] hover:bg-[#127EBA] transition-all duration-300">
              <img loading="lazy" src={proj.img} alt={proj.name} className="h-[17.0625rem] object-cover bg-white rounded-lg" />
              <span className="flex flex-col justify-between flex-1 gap-2 bg-white rounded-lg p-2">
                <img loading="lazy" src={proj.logo} alt={proj.name} className="h-[2rem] object-contain mr-auto mb-2" />
                <div className="text-[#041925] leading-[150%] text-sm">
                  <ul>{proj.points.map((p, pi) => <li key={pi}>{p}</li>)}</ul>
                </div>
                <a href={proj.href} className="group relative h-10 items-center justify-center gap-2.5 rounded-[10px] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552] py-2 text-white transition-all text-lg font-medium flex capitalize hover:brightness-110">
                  View Project <ArrowIcon white />
                </a>
              </span>
            </div>
          ))}
        </div>

        <Link to="/portfolio" className="group relative h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-lg font-medium block lg:hidden w-full mx-auto mt-5 text-center">
          View All <ArrowIcon white />
        </Link>
      </div>

      {/* ── WHY RD DIGITAL ── */}
      <section className="w-full">
        <div className="mx-auto py-10 lg:py-[4.5rem] flex max-sm:gap-5 max-sm:flex-col justify-between items-center gap-3 px-5 md:px-10 max-sm:text-center xl:px-0 w-full bg-[#F5F5F5]">
          <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-between gap-3 w-full mx-auto xl:container 3xl:max-w-[50%] lg:px-10">
            <img loading="lazy" src="https://rd-cms.do.recognisedesign.com/uploads/why_rd_2_1c7bf0a4ec.webp" alt="Why RD Digital?" className="rounded-xl w-80 lg:w-[26rem] object-cover" />
            <div>
              <h2 className="font-semibold text-start text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D] mb-4 lg:mb-10">Why RD Digital?</h2>
              <p className="text-[#1F1F2B] text-start leading-none mb-1 lg:text-[2rem] text-lg font-normal h-10">Trusted by digital leaders</p>
              <div className="space-y-2 max-w-3xl text-start inline-block text-[#5D5D79]">
                <p>Based in Hertfordshire, serving London and beyond. We work with CTOs, CMOs, and Directors who need reliable delivery. They come to us when internal teams are stretched or tools are falling short.</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Fast onboarding and planning</li>
                  <li>Clear updates, outcomes, and data</li>
                  <li>Direct access to technical leads</li>
                  <li>Long-term support and improvements</li>
                </ul>
              </div>
              <Link
                to="/about"
                className="group relative h-12 lg:h-14 items-center justify-center gap-2 rounded-[10px] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white transition-all text-lg font-medium lg:flex block mt-6 w-full md:w-44"
              >
                <span className="relative flex-1 flex items-center justify-center overflow-hidden h-full">
                  <span className="flex flex-row whitespace-nowrap items-center gap-2.5">About Us <ArrowIcon white /></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES ── */}
      <section className="relative py-5 lg:py-10 w-full px-4 lg:px-10 xl:container 3xl:max-w-[50%] mx-auto">
        <div className="relative lg:mx-auto top-10 lg:top-0 z-10 text-left text-white">
          <div className="flex max-sm:flex-col max-sm:gap-5 gap-2 justify-between items-end mb-8">
            <div className="flex flex-row justify-between items-center text-center lg:text-start w-full lg:py-2">
              <div>
                <h2 className="font-semibold text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D]">Other Services</h2>
              </div>
              <div className="swiper-controls hidden xl:flex flex-col md:flex-row justify-between items-center w-fit z-10 pr-4 max-md:px-4 lg:px-0 gap-4 mt-8 md:mt-0">
                <div className="w-full md:w-auto flex flex-col-reverse md:flex-row gap-4 md:ml-auto">
                  <div className="flex gap-4 justify-end md:justify-start w-full md:w-auto px-0">
                    <div className="other-services-swiper-button-prev rounded-full rotate-180 bg-[#CEB97C] w-12 h-12 flex items-center justify-center hover:bg-[#D6C287] transition-colors duration-300 cursor-pointer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 transition-transform rotate-180 duration-300 hover:scale-110">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </div>
                    <div className="other-services-swiper-button-next min-w-12 min-h-12 rounded-full bg-[#CEB97C] flex items-center justify-center hover:bg-[#D6C287] transition-colors duration-300 cursor-pointer">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 transition-transform rotate-180 duration-300 hover:scale-110">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-0 mr-0 pr-0 hidden xl:block">
            <div className="other-services-swiper swiper h-fit relative pb-24 md:pb-16">
              <div className="swiper-wrapper items-stretch">
                {otherServices.map((svc, i) => (
                  <div key={i} className="swiper-slide h-auto transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]" data-active={i === 0 ? "true" : "false"} style={{ zIndex: i === 0 ? 2 : 1 }}>
                    <div className="bg-white rounded-3xl border border-[#E9E9E9] h-full">
                      <div className="slide-inner-wrapper h-full flex flex-col lg:-8 rounded-3xl bg-white overflow-hidden">
                        <div className="slide-image flex justify-center items-start p-4">
                          <img loading="lazy" src={svc.img} className="w-auto max-h-56 transition-transform duration-300" alt={svc.title} />
                        </div>
                        <div className="slide-content flex flex-col p-4 pt-0 lg:py-4 flex-1">
                          <div className="swiper-slide-content flex-1 flex flex-col justify-start items-start">
                            <div className="flex flex-col gap-2 lg:col-span-3 w-full h-full">
                              <h2 className="text-[#041925] text-xl">{svc.title}</h2>
                              <div className="slide-extra-content transition-all duration-300 ease-in-out h-full flex flex-col justify-between">
                                <p className="text-[#041925] text-sm leading-relaxed pb-5">{svc.desc}</p>
                                <Link
                                  to={svc.href}
                                  className="group relative h-10 items-center justify-center gap-2.5 rounded-[10px] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 text-white transition-all text-sm font-medium flex capitalize hover:brightness-110"
                                >
                                  <span>Learn More</span>
                                  <svg className="group-hover:translate-x-1 transition-transform duration-200" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="stroke-white" stroke="#fff" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </Link>
                              </div>
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
          <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 lg:pr-10 mt-8 gap-5">
            {otherServices.map((svc, i) => (
              <div key={i} className="bg-white rounded-3xl border border-[#E9E9E9] h-full transition-all duration-300">
                <div className="slide-inner-wrapper h-full flex flex-col lg:-8 rounded-3xl bg-white overflow-hidden">
                  <div className="slide-image flex justify-center items-start p-4">
                    <img loading="lazy" src={svc.img} className="w-auto max-h-56 transition-transform duration-300" alt={svc.title} />
                  </div>
                  <div className="slide-content flex flex-col p-4 pt-0 lg:py-4 flex-1">
                    <div className="swiper-slide-content flex-1 flex flex-col justify-end items-start">
                      <div className="space-y-2 lg:col-span-3 w-full">
                        <h2 className="text-[#041925] text-xl">{svc.title}</h2>
                        <div className="slide-extra-content transition-all duration-300 ease-in-out">
                          <p className="text-[#041925] text-sm leading-relaxed pb-5">{svc.desc}</p>
                          <Link
                            to={svc.href}
                            className="group relative h-10 items-center justify-center gap-2.5 rounded-[10px] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 text-white transition-all text-sm font-medium flex capitalize hover:brightness-110"
                          >
                            <span>Learn More</span>
                            <svg className="group-hover:translate-x-1 transition-transform duration-200" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path className="stroke-white" stroke="#fff" d="M1 7h12m0 0-.965-.164A5.92 5.92 0 0 1 7.105 1v0M13 7l-.742.1A5.95 5.95 0 0 0 7.105 13v0" strokeLinecap="round" strokeLinejoin="round" />
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
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white w-full">
        <div className="px-4 pt-8 pb-12 lg:p-16 lg:px-10 mx-auto xl:container 3xl:max-w-[50%]">
          <div className="flex gap-5 md:gap-16 flex-col-reverse md:flex-row">
            <div className="flex-1">
              <div className="mx-auto flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 mb-8">
                <h2 className="font-semibold text-center text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D]">Got Questions? Answered</h2>
                <p className="text-[#3C3C5E] text-center text-sm leading-[150%] tracking-[-1%] lg:text-[0.9375rem] font-normal max-w-sm">
                  Find quick answers to common queries about our features, pricing, and support.
                </p>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-y-2 gap-x-6 p-3 lg:pt-8 lg:pb-12 border border-[#DFE0EC] rounded-xl">
                <Accordion items={faqs} />
                <Accordion items={faqsRight} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <div className="relative mx-auto lg:top-0 z-10 text-left text-white px-0 pt-16 lg:py-16 bg-[#F1F7FA] overflow-hidden">
        <div className="flex flex-col items-start mx-auto xl:container 3xl:max-w-[50%]">
          <div className="flex items-center gap-2 text-black mx-auto lg:mx-0 px-4 lg:px-10">
            <GoogleRating />
          </div>
          <div className="w-full">
            <div className="mx-auto flex justify-center lg:justify-start items-center px-4 lg:px-10">
              <p className="text-2xl md:text-5xl tracking-[-1.5%] leading-[2.5rem] font-medium text-[#1F1F2B] my-3 lg:my-12 text-center lg:text-start">
                What our clients say about our services
              </p>
            </div>
            <div className="pt-3 rounded-2xl relative">
              <div className="swiper testimonials-swiper w-full relative px-4 lg:pl-0 lg:pr-10">
                <div className="swiper-wrapper items-stretch h-full">
                  {googleReviewsMock.map((t, i) => (
                    <div key={i} className="bg-white rounded-3xl shadow-sm flex flex-col p-6 gap-4 swiper-slide w-[343px] !h-auto" style={{ maxWidth: "389px" }}>
                      <div className="flex client-info items-center w-full">
                        <img referrerPolicy="no-referrer" src={t.avatar} alt="Client Avatar" loading="lazy" className="w-14 h-14 rounded-full" />
                        <div className="ml-4">
                          <p className="font-semibold text-lg text-[#061C3D]">{t.name}</p>
                          <div className="flex gap-1">
                            {[...Array(t.rating)].map((_, si) => (
                              <svg key={si} xmlns="http://www.w3.org/2000/svg" viewBox="10 2 3 20" width="1.5em" height="1.5em">
                                <path className="fill-yellow-400" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="pb-5 pt-3 rounded-lg flex-grow">
                        <p className="text-base text-[#061C3D]">{t.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
