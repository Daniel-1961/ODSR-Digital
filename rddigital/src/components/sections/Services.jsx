import { Link } from "react-router-dom";

export default function ServicesSection({ services, description, serviceImages }) {
  return (
    <section className="bg-white px-4 pt-8 pb-12 lg:p-16 lg:px-10 mx-auto xl:container 3xl:max-w-[50%]">
      <div className="relative mx-auto lg:top-0 z-10 text-left lg:text-left">
        {/* Header */}
        <div className="flex max-sm:flex-col max-sm:gap-5 gap-2 justify-between items-end mb-8">
          <div className="flex flex-row justify-between items-center text-center lg:text-start w-full lg:py-2">
            <h2 className="font-semibold text-2xl lg:text-5xl leading-[120%] capitalize text-[#081F2D]">
              What we do
            </h2>

            <Link
              to="/contact"
              className="group relative w-44 h-12 lg:h-14 flex items-center justify-center gap-2 rounded-[10px] bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 lg:py-4 px-4 text-white text-lg font-medium transition-all lg:block"
            >
              Scale Faster
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 gap-5">
          {services?.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl border border-black/10 flex flex-col p-4 bg-white"
            >
              <img
                loading="lazy"
                src={serviceImages[service.id]}
                alt={service.title}
                className="h-full w-full max-h-56 object-cover object-top rounded-[1.25rem]"
              />

              <div className="flex flex-col justify-between flex-1 gap-4 mt-4">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium text-xl text-[#2b3c45] leading-[120%]">
                    {service.title}
                  </h3>
                  <p className="text-[#041925] leading-[150%] text-sm">
                    {service.description || description || ""}
                  </p>
                </div>

                {service.link && (
                  <Link
                    to={service.link}
                    className="group relative h-10 flex items-center justify-center gap-2.5 rounded-[10px] border-[1.4px] border-solid border-transparent bg-[#175070] bg-[linear-gradient(318.96deg,#B37FEB_-1.9%,rgba(210,174,245,0)_17.34%,#EFDBFF_87.36%)] bg-blend-soft-light shadow-[0px_0px_16px_0px_#1b496552,0px_2px_2px_0px_#000000] py-2 text-white text-lg font-medium transition-all capitalize hover:brightness-110"
                  >
                    Read more
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}