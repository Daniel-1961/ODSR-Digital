import Button from '../common/Button';
import { products } from '../../data/siteData';

export default function Products() {
    return (
        <section className="py-20 md:py-28 bg-white relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
                {/* Header */}
                <div className="text-left mb-10">
                    <h2 className="text-3xl md:text-3xl lg:text-[2rem] font-medium text-primary-dark">
                        OUR PRODUCTS
                    </h2>
                </div>

                {/* Products List */}
                <div className="flex flex-col gap-12 lg:gap-16">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10 w-full"
                        >
                            {/* Col 1: Number & Logo */}
                            <div className="flex items-center gap-4 lg:w-[220px] shrink-0">
                                <span className="text-sm font-semibold text-body-text">
                                    ({String(index + 1).padStart(3, '0')})
                                </span>
                                <img
                                    src={product.logo}
                                    alt={`${product.title} logo`}
                                    className="h-10 lg:h-12 w-auto object-contain"
                                />
                            </div>

                            {/* Col 2: Dashboard Mockup */}
                            <div className="w-full sm:w-2/3 md:w-1/2 lg:w-[280px] shrink-0 mx-auto lg:mx-0">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-auto object-contain drop-shadow-xl hover:-translate-y-1 transition-transform duration-300"
                                />
                            </div>

                            {/* Col 3: Title & Description */}
                            <div className="flex-1 lg:max-w-md xl:max-w-lg">
                                <h3 className="text-2xl font-medium text-heading-dark mb-2">
                                    {product.title}
                                </h3>
                                <p className="text-base text-body-text leading-relaxed whitespace-pre-line">
                                    {product.description}
                                </p>
                            </div>

                            {/* Col 4: Button */}
                            <div className="shrink-0 mt-4 lg:mt-0 self-start lg:self-center">
                                <Button to={product.link} size="md">
                                    View Product
                                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
