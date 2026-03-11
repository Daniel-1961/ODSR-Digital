import Button from '../common/Button';

const partnerLogos = [
    { name: 'Columbus Direct', src: '/assets/images/columbus_direct_a5b453083d.webp' },
    { name: 'Berkeley Square Medical', src: '/assets/images/Berkeley_Square_Medical_1_5a5e4d48e5.webp' },
    { name: 'Electric Car Chargers', src: '/assets/images/image_52_1_cea5ad58f1.webp' }, // Approximated
    { name: 'Staysure', src: '/assets/images/f35e45d85c685a4d844acc27b62003e8c35e06b6_1_a82fcc2c81.webp' },
    { name: 'Avanti Travel', src: '/assets/images/image_53_8e9ee46437.webp' },
];

export default function Hero() {
    return (
        <section className="relative bg-primary-dark min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Background decorative blobs */}
            <div className="absolute top-10 left-[-5%] w-[500px] h-[500px] bg-accent-blue/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-10 right-[-5%] w-[600px] h-[600px] bg-accent-purple/6 rounded-full blur-[150px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/4 rounded-full blur-[200px]" />

            {/* Main Hero Content */}
            <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-12 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left z-10 relative">
                        <h1 className="text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-white leading-[1.15] mb-6 tracking-tight">
                            Web Platforms For<br />
                            Regulated<br />
                            Businesses
                        </h1>

                        <p className="text-lg md:text-xl text-white max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0 font-medium">
                            We Build Secure Digital Products For Companies Where Compliance,
                            Speed, And Results Matter. Our Clients Include Leading Insurance
                            Providers, Medical Brands, And Technical Teams Across The UK And
                            Europe.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <div className="flex gap-4">
                                <Button to="/contact" size="md" className="px-8 py-3.5 text-base">
                                    Book a Call
                                    <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Button>
                                <Button to="/portfolio" size="md" className="px-8 py-3.5 text-base bg-[#F1F7FA] text-heading-dark hover:bg-white shadow">
                                    Case Studies
                                </Button>
                            </div>

                            {/* Google Rating */}
                            <div className="flex items-center gap-3 mt-4 sm:mt-0">
                                <div className="w-10 h-10 flex shrink-0">
                                    <img src="/assets/images/google.webp" alt="Google" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-white font-bold text-[13px] leading-tight mb-0.5">Google Rating</span>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-white font-bold text-sm leading-none">5.0</span>
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <svg key={star} className="w-3.5 h-3.5 text-[#FFB800]" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="text-white/80 text-[11px] mt-0.5">See all our reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right — Original Side Visual SVG */}
                    <div className="relative justify-center items-center min-h-[400px] hidden lg:block opacity-20 lg:opacity-100 absolute -right-[20%] lg:right-0">
                        <img
                            src="/assets/images/side visual for hero.svg"
                            alt="High Performance Web Platforms Visual"
                            className="w-full max-w-[650px] object-contain drop-shadow-2xl translate-x-12"
                        />
                    </div>
                </div>
            </div>

            {/* Partner Logos Bar */}
            <div className="relative max-w-[90rem] mx-auto px-6 pb-20 mt-8 w-full z-10">
                <div className="bg-white rounded-xl py-5 px-8 shadow-xl">
                    <div className="flex items-center justify-between gap-6 overflow-hidden">
                        {partnerLogos.map((logo) => (
                            <div
                                key={logo.name}
                                className="flex shrink-0 items-center justify-center transition-transform hover:scale-105"
                            >
                                <img src={logo.src} alt={logo.name} className="h-9 lg:h-11 w-auto max-w-[140px] object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
