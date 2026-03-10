import Button from "../common/Button";
import { products } from "../../data/siteData";

export default function Products() {
  return (
    <section className="py-20 md:py-28 bg-primary-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-[-10%] w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-[-10%] w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent-blue mb-4">
            OUR PRODUCTS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Built by us. Used by many.
          </h2>
        </div>

        {/* Products */}
        <div className="space-y-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text Content */}
              <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <span className="text-sm font-mono text-accent-blue/60 tracking-widest">
                  {String(index + 1).padStart(3, "0")}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2 mb-4">
                  {product.title}
                </h3>
                <p className="text-base text-white/60 leading-relaxed mb-8 max-w-md">
                  {product.description}
                </p>
                <Button to={product.link} size="md">
                  View Product
                  <svg
                    className="w-4 h-4 ml-1"
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

              {/* Product Screenshot */}
              <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
