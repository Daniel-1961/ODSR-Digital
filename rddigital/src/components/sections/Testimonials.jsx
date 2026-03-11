const testimonials = [
    {
        id: 1,
        name: 'Sarah Mitchell',
        role: 'CTO, Columbus Direct',
        rating: 5,
        quote:
            'RD Digital transformed our online platform for the Italian market. Their technical expertise and understanding of the insurance industry made them the perfect partner.',
        avatar: 'SM',
    },
    {
        id: 2,
        name: 'James Patterson',
        role: 'Director, Electric Car Chargers UK',
        rating: 5,
        quote:
            'The team delivered a web and mobile app that completely streamlined our operations. We\'ve cut admin time significantly and our customers love the new booking system.',
        avatar: 'JP',
    },
    {
        id: 3,
        name: 'Dr. Emma Collins',
        role: 'CEO, Berkeley Square Medical',
        rating: 5,
        quote:
            'They understood our strict compliance requirements from day one. The redesigned site meets all design and regulatory standards while improving the patient booking experience.',
        avatar: 'EC',
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-sm font-semibold tracking-widest uppercase text-accent-blue mb-4">
                        What our clients say about our services
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading-dark max-w-3xl mx-auto">
                        Don't take our word for it...
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-sm text-body-text leading-relaxed mb-6">
                                "{t.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center shrink-0">
                                    <span className="text-white text-xs font-bold">{t.avatar}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-heading-dark">{t.name}</p>
                                    <p className="text-xs text-body-text">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
