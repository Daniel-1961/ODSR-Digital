import React from "react";

const AboutStory = () => {
  return (
    <section className="bg-white py-24 px-24 flex gap-24 items-start">
      <div className="w-1/3 flex justify-center pt-12">
        <div className="relative w-64 h-64">
          {/* Stylized Chip Graphic */}
          <div className="absolute inset-0 bg-slate-50 rounded-3xl border border-slate-100 shadow-inner flex items-center justify-center">
            <img
              src="https://rd-cms.do.recognisedesign.com/uploads/aboutus_full_logo_1_1_99bc39207e.webp"
              alt="RD Digital"
            />
          </div>
          {/* Decorative lines */}
          <div className="absolute -left-12 top-1/2 w-12 h-px bg-slate-200"></div>
          <div className="absolute -right-12 top-1/2 w-12 h-px bg-slate-200"></div>
          <div className="absolute left-1/2 -top-12 w-px h-12 bg-slate-200"></div>
          <div className="absolute left-1/2 -bottom-12 w-px h-12 bg-slate-200"></div>
        </div>
      </div>

      <div className="w-2/3 space-y-8 text-slate-800 leading-relaxed">
        <p className="text-[17px]">
          We're RD Digital, previously known as Recognise Design, and we've been
          building things that work and last since 2013. It all started with two
          developers, Abel and Jordan, freelancing after hours while working
          full time at Hobbs London. Abel was the technical lead, the guy
          teaching clean code and frameworks. Jordan soaked it all in, and
          together they started building sites for small businesses, learning
          fast and figuring it out as they went. From the beginning, it was less
          about flashy design and more about function, performance, and people.
        </p>
        <p className="text-[17px]">
          Their paths eventually took different turns. Abel went on to lead dev
          teams at Debenhams and worked with top agencies like Publicis Sapient.
          Jordan moved into contracting, working across brands like eBay, M&C
          Saatchi, and Collinson Group. Along the way, they stayed close and
          brought a third person into the mix: Hiruy, Abel's brother and a sharp
          mind in automated testing and IT. The three would hang out after work,
          not knowing they were laying the foundation for something bigger. In
          2022, RD Digital officially came to life. Offices opened in Addis
          Ababa and Ware, Hertfordshire. A team grew. Clients came, including
          Columbus UK and Columbus Italy. And here we are today.
        </p>
      </div>
    </section>
  );
};

export default AboutStory;
