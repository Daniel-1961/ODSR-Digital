import Button from '../common/Button';

const benefits = [
    'Fast onboarding and planning',
    'Clear updates, outcomes, and data',
    'Direct access to technical leads',
    'Long-term support and improvements',
];

export default function WhyRD() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Text */}
                    <div>
                        <p className="text-sm font-semibold tracking-widest uppercase text-accent-blue mb-4">
                            Why RD Digital?
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading-dark mb-4 leading-tight">
                            Trusted by digital leaders
                        </h2>
                        <p className="text-base text-body-text leading-relaxed mb-8 max-w-lg">
                            Based in Hertfordshire, serving London and beyond. We work with CTOs, CMOs, and Directors
                            who need reliable delivery. They come to us when internal teams are stretched or tools
                            are falling short.
                        </p>

                        {/* Benefits list */}
                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-primary-dark flex items-center justify-center shrink-0">
                                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-heading-dark font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>

                        <Button to="/about" size="lg">
                            About Us
                            <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Button>
                    </div>

                    {/* Right Visual */}
                    <div className="hidden lg:flex justify-center items-center">
                        <div className="relative w-full max-w-md">
                            <img
                                src="/assets/images/why_rd_2_1c7bf0a4ec.webp"
                                alt="Why RD Digital"
                                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
