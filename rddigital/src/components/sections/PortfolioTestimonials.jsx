const testimonials = [
  {
    id: 1,
    author: 'Berkeley Square Medical',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVsHn1BdEOUT8sf6q7XgfefEfKBKd6t84gi24rT0UYSh6s4stc=s128-c0x00000000-cc-rp-mo',
    rating: 5,
    text: 'Fantastic Group of designers that work at Recognise design. They have been working on our branding and website design for the past two years and continue to do an amazing job. Special thanks to Jay, Abel Who ensure the design work is done meticulously and always timely! Highly recommend this company 👌'
  },
  {
    id: 2,
    author: 'Michael Bekele',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJmFYvB_Q5MoKMYuYQycBQdTfhrmBgE3RLHi_GVF-wfyegVaw=s128-c0x00000000-cc-rp-mo',
    rating: 5,
    text: 'We had an excellent experience working with Recognise. Their team was timely and professional throughout the project, delivering high-quality solutions that exceeded our expectations.'
  },
  {
    id: 3,
    author: 'Owen Ellis',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIhAMi7NMBrxJc7MiJNFWMXy39VqLstpPRriNnYdUnk5i2SgA=s128-c0x00000000-cc-rp-mo',
    rating: 5,
    text: 'The team at Recognise Design have been excellent throughout the whole process of designing and building web pages for us.'
  },
  {
    id: 4,
    author: 'Yolande Integral Yoga',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjU2U2MhSIoHVe8wCm5mS49F9RYJJZrogH_qMZZXl2YBA2e0WZVB=s128-c0x00000000-cc-rp-mo',
    rating: 5,
    text: 'A lovely Team very professional and efficient. I got what I wanted in good time. With no hesitation I would recommend this local company Recognise Design.'
  }
];

export default function PortfolioTestimonials() {
  return (
    <div className="relative mx-auto lg:top-0 z-10 text-left lg:text-left text-white px-0 pt-16 lg:py-16 bg-[#F1F7FA] overflow-hidden">
      <div className="flex flex-col items-start mx-auto xl:container 3xl:max-w-[50%]">
        <div className="flex items-center sm:justify-center gap-2 text-black mx-auto lg:mx-0 px-4 lg:px-10">
          <img loading="lazy" src="/assets/images/google.webp" alt="Google icon" className="h-full w-auto" />
          <span className="flex flex-col items-start gap-[1px]">
            <span className="font-bold text-xs text-current/90">Google Rating</span>
            <span className="flex text-dark-orange items-center gap-0 font-bold text-lg text-[#F59E0B]">
              <span className="font-extrabold text-sm leading-7 mr-1.5">5.0 </span>
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="10 2 3 20" className="size-[1.125rem]">
                  <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path>
                </svg>
              ))}
            </span>
            <span className="text-xs text-current/90">See all our reviews</span>
          </span>
        </div>
        
        <div className="w-full">
          <div className="mx-auto flex justify-center lg:justify-start items-center px-4 lg:px-10">
            <p className="text-2xl md:text-5xl tracking-[-1.5%] leading-[2.5rem] font-medium text-[#1F1F2B] my-3 lg:my-12 text-center lg:text-start">
              What our clients say about our services
            </p>
          </div>
          
          <div className="pt-3 rounded-2xl relative">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-4 lg:pl-0 lg:pr-10 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              
              {testimonials.map((t) => (
                <div key={t.id} className="bg-white rounded-3xl shadow-sm flex-shrink-0 w-[343px] snap-center sm:snap-start lg:w-[412px]">
                  <div className="space-y-4 h-full flex flex-col p-6">
                    <div className="flex items-center w-full">
                      <img referrerPolicy="no-referrer" src={t.avatar} alt="Client Avatar" loading="lazy" className="w-14 h-14 rounded-full" />
                      <div className="ml-4">
                        <p className="font-semibold text-lg text-[#061C3D]">{t.author}</p>
                        <div className="flex gap-1 text-[#F59E0B]">
                          {[...Array(t.rating)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="10 2 3 20" width="1.5em" height="1.5em">
                              <path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08z"></path>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="pb-5 pt-3 rounded-lg flex-grow">
                      <p className="text-base text-[#061C3D]">{t.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
