import { useState } from 'react';
import { faqs } from '../../data/siteData';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Split FAQs into two columns
    const mid = Math.ceil(faqs.length / 2);
    const leftFaqs = faqs.slice(0, mid);
    const rightFaqs = faqs.slice(mid);

    return (
        <section className="py-20 md:py-28 bg-primary-light">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading-dark mb-4">
                        Got Questions? Answered
                    </h2>
                    <p className="text-base text-body-text max-w-2xl mx-auto">
                        Find quick answers to common queries about our features, services, and support.
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="space-y-4">
                        {leftFaqs.map((faq, i) => {
                            const globalIndex = i;
                            return (
                                <FAQItem
                                    key={globalIndex}
                                    faq={faq}
                                    isOpen={openIndex === globalIndex}
                                    onClick={() => toggle(globalIndex)}
                                />
                            );
                        })}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        {rightFaqs.map((faq, i) => {
                            const globalIndex = i + mid;
                            return (
                                <FAQItem
                                    key={globalIndex}
                                    faq={faq}
                                    isOpen={openIndex === globalIndex}
                                    onClick={() => toggle(globalIndex)}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQItem({ faq, isOpen, onClick }) {
    return (
        <div
            className={`bg-white border rounded-xl transition-all duration-300 ${isOpen ? 'border-accent-blue/30 shadow-md' : 'border-gray-200'
                }`}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
            >
                <span className={`text-sm font-semibold pr-4 transition-colors duration-200 ${isOpen ? 'text-accent-blue' : 'text-heading-dark'
                    }`}>
                    {faq.question}
                </span>
                <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-primary-dark rotate-45' : 'bg-gray-100'
                        }`}
                >
                    <svg
                        className={`w-4 h-4 transition-colors duration-200 ${isOpen ? 'text-white' : 'text-heading-dark'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </div>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-5' : 'max-h-0'
                    }`}
            >
                <p className="px-5 text-sm text-body-text leading-relaxed">
                    {faq.answer}
                </p>
            </div>
        </div>
    );
}
