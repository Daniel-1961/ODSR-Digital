import { Link } from "react-router-dom";
import Button from "../common/Button";
import { services } from "../../data/siteData";

const serviceImages = {
  "web-app-development": "/assets/images/wordpress_5bebdedc02.webp",
  "umbraco-development": "/assets/images/Time_tracking_144a73f515.webp",
  azure: "/assets/images/Clean up space.svg",
  "customer-acquisition": "/assets/images/AI_Chat_3_a7a2465bfa.webp",
};

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading-dark">
              What we do
            </h2>
          </div>
          <Button
            to="/services"
            variant="ghost"
            size="sm"
            className="mt-4 sm:mt-0 text-accent-blue font-semibold"
          >
            View all
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Mock dashboard image */}
              <div className="w-full h-44 bg-gray-50 rounded-xl mb-5 overflow-hidden flex items-end justify-center px-4 pt-4">
                <img
                  src={serviceImages[service.id]}
                  alt={service.title}
                  className="w-full h-auto object-cover object-top rounded-t-lg shadow-sm border border-gray-100"
                />
              </div>
              {/* Content */}
              <h3 className="text-lg font-bold text-heading-dark mb-3 leading-snug">
                {service.title}
              </h3>

              <p className="text-sm text-body-text leading-relaxed mb-5">
                {service.description}
              </p>

              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-sm font-semibold bg-indigo-600/70 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                Read More
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
