import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../common/Button';

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    {
        label: 'Services',
        to: '/services',
        children: [
            { label: 'Web and App Development', to: '/services/web-app-development' },
            { label: 'Marketing Analytics', to: '/services/marketing-analytics' },
            { label: 'Hosting with Azure', to: '/services/azure' },
            { label: 'Automated Testing', to: '/services/automated-testing' },
            { label: 'AI-Powered Workflows', to: '/services/ai-powered-workflows' },
            { label: 'Umbraco Development', to: '/services/umbraco-development' },
            { label: 'Customer Acquisition', to: '/services/customer-acquisition' },
        ],
    },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Insights', to: '/blog' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4">
            <nav
                className={`
          max-w-7xl mx-auto flex items-center justify-between
          px-6 py-3 rounded-pill transition-all duration-300
          ${scrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-lg'
                        : 'bg-white/90 backdrop-blur-sm shadow-md'
                    }
        `}
            >
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2.5 shrink-0">
                    <div className="w-8 h-8 bg-primary-dark rounded-lg flex items-center justify-center">
                        <span className="text-white font-black text-sm">R</span>
                    </div>
                    <span className="text-lg font-bold text-primary-dark tracking-tight">
                        RD <span className="gradient-text">DIGITAL</span>
                    </span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) =>
                        link.children ? (
                            <div
                                key={link.label}
                                className="relative group"
                                onMouseEnter={() => setServicesOpen(true)}
                                onMouseLeave={() => setServicesOpen(false)}
                            >
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${isActive
                                            ? 'text-accent-blue'
                                            : 'text-heading-dark hover:text-accent-blue'
                                        }`
                                    }
                                >
                                    {link.label}
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </NavLink>

                                {/* Dropdown */}
                                <div
                                    className={`
                    absolute top-full left-0 mt-2 w-64 py-2
                    bg-white rounded-card shadow-xl border border-border
                    transition-all duration-200 origin-top
                    ${servicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                  `}
                                >
                                    {link.children.map((child) => (
                                        <NavLink
                                            key={child.label}
                                            to={child.to}
                                            className={({ isActive }) =>
                                                `block px-4 py-2.5 text-sm transition-colors duration-150 ${isActive
                                                    ? 'text-accent-blue bg-accent-blue/5'
                                                    : 'text-heading-dark hover:text-accent-blue hover:bg-accent-blue/5'
                                                }`
                                            }
                                        >
                                            {child.label}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <NavLink
                                key={link.label}
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors duration-200 ${isActive
                                        ? 'text-accent-blue'
                                        : 'text-heading-dark hover:text-accent-blue'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        )
                    )}
                </div>

                {/* CTA */}
                <div className="hidden lg:block">
                    <Button to="/contact" size="sm">
                        Book a Call
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden p-2 text-heading-dark"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {mobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`
          lg:hidden mt-2 mx-auto max-w-7xl
          bg-white rounded-card shadow-xl border border-border
          overflow-hidden transition-all duration-300
          ${mobileOpen ? 'max-h-screen opacity-100 p-4' : 'max-h-0 opacity-0 p-0'}
        `}
            >
                {navLinks.map((link) =>
                    link.children ? (
                        <div key={link.label} className="mb-2">
                            <NavLink
                                to={link.to}
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 text-sm font-semibold text-heading-dark"
                            >
                                {link.label}
                            </NavLink>
                            <div className="pl-4 border-l-2 border-accent-blue/20">
                                {link.children.map((child) => (
                                    <NavLink
                                        key={child.label}
                                        to={child.to}
                                        onClick={() => setMobileOpen(false)}
                                        className="block py-1.5 text-sm text-body-text hover:text-accent-blue"
                                    >
                                        {child.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <NavLink
                            key={link.label}
                            to={link.to}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-sm font-medium text-heading-dark hover:text-accent-blue"
                        >
                            {link.label}
                        </NavLink>
                    )
                )}
                <div className="pt-3 mt-3 border-t border-border">
                    <Button to="/contact" size="sm" className="w-full">
                        Book a Call
                    </Button>
                </div>
            </div>
        </header>
    );
}
