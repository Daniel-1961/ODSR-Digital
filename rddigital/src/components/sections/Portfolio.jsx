import Button from '../common/Button';
import { projects } from '../../data/siteData';

export default function PortfolioSection() {
    return (
        <section className="py-20 md:py-28 bg-primary-light">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-14">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading-dark">
                            Our Work In Action
                        </h2>
                    </div>
                    <Button to="/portfolio" variant="ghost" size="sm" className="mt-4 sm:mt-0 text-accent-blue font-semibold">
                        View All
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Button>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Project Screenshot Preview */}
                            <div className="relative w-full h-48 bg-gray-50 overflow-hidden border-b border-gray-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-heading-dark mb-4">
                                    {project.title}
                                </h3>

                                <ul className="space-y-2.5 mb-6">
                                    {project.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-body-text">
                                            <svg className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    href={project.link}
                                    size="sm"
                                    className="self-start mt-2"
                                >
                                    View Project
                                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second CTA row */}
                <div className="flex justify-center mt-12">
                    <Button to="/portfolio" size="md">
                        View All
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Button>
                </div>
            </div>
        </section>
    );
}
