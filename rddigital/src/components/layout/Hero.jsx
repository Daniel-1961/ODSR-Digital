import React from "react";

const Hero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] bg-[url('https://rd-cms.do.recognisedesign.com/uploads/aboutus_hero_mobile_2_caec21da94.webp')] bg-cover bg-top flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/25 z-10"></div>
      <div className="relative z-20 text-left text-white w-full container mx-auto px-[5%] max-w-[1200px]">
        <h1 className="text-[2.5rem] text-[30px] tracking-tighter">
          About RD Digital
        </h1>
      </div>
    </section>
  );
};

export default Hero;
