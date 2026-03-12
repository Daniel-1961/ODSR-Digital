import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1b4e6b]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-4'
            }`}>
            <nav className="max-w-[90rem] mx-auto px-6 sm:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex justify-start w-fit lg:w-[20%]">
                        <Link to="/" className="flex flex-col gap-2 shrink-0 items-center justify-center -ml-2 lg:ml-0 mt-3 sm:mt-0">
                            <svg className="h-8 lg:h-10 text-white w-auto" width="26" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.0175391 3.08058L0.0438477 6.16995L4.56016 6.19635C9.52372 6.23156 9.8482 6.25796 11.3653 6.79486C12.8825 7.32296 14.1453 8.13271 15.2941 9.31212C16.0658 10.1131 16.5744 10.8436 17.1094 11.9262C18.723 15.2004 18.4511 18.9939 16.399 22.0657C15.8816 22.8226 14.6451 24.1252 14.0576 24.5213C13.8471 24.6533 13.6805 24.7854 13.6805 24.8206C13.6805 24.847 14.7416 25.9384 16.0307 27.2322L18.3897 29.5999L19.0474 29.063C19.8542 28.4116 21.0995 27.109 21.7572 26.2376C26.7383 19.5924 25.9578 10.2187 19.9595 4.51524C18.0126 2.6757 15.6975 1.34666 13.1894 0.63373C11.2075 0.0704269 11.2338 0.0704269 5.36696 0.0352192L0 1.33514e-05L0.0175391 3.08058Z" fill="currentColor"></path>
                                <path d="M0.0295855 12.6925C0.00328728 12.7453 -0.00547879 14.4462 0.00328728 16.4554L0.0295855 20.1127L4.19347 20.1391C6.82329 20.1479 8.58527 20.1303 8.97098 20.0686C10.2333 19.8747 11.2852 19.0728 11.8462 17.8919C12.1092 17.3367 12.1268 17.2221 12.1268 16.3585C12.1268 15.4684 12.118 15.4067 11.7937 14.7634C11.2414 13.6266 10.2333 12.8687 9.00604 12.6748C8.14697 12.5338 0.0821819 12.5426 0.0295855 12.6925Z" fill="currentColor"></path>
                                <path d="M0 29.6042V32.7156L5.32182 32.6805C9.12062 32.663 10.81 32.6192 11.2476 32.5403C11.589 32.479 11.8778 32.4088 11.9041 32.3913C11.9216 32.365 10.6261 31.0328 9.01559 29.4202L6.08333 26.4841H3.04604H0V29.6042Z" fill="currentColor"></path>
                            </svg>
                            <svg className="h-3 lg:h-4 text-white w-auto" width="130" viewBox="0 0 130 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M118.03 17.8138V0.925812H121.297V17.8138H118.03ZM120.432 17.8138V14.907H129.032V17.8138H120.432Z" fill="currentColor"></path>
                                <path d="M99.7957 17.8138L106.594 0.925812H109.261L116.035 17.8138H112.552L107.315 3.95268H108.516L103.207 17.8138H99.7957ZM103.399 14.6668V11.9282H112.48V14.6668H103.399Z" fill="currentColor"></path>
                                <path d="M92.322 17.8138V1.28615H95.6131V17.8138H92.322ZM86.9409 3.83256V0.925812H100.994V3.83256H86.9409Z" fill="currentColor"></path>
                                <path d="M81.4092 17.8138V0.925812H84.6763V17.8138H81.4092Z" fill="currentColor"></path>
                                <path d="M70.5193 18.054C69.3181 18.054 68.1891 17.8378 67.1321 17.4054C66.0911 16.957 65.1702 16.3324 64.3695 15.5316C63.5847 14.7309 62.9681 13.81 62.5197 12.769C62.0873 11.712 61.8711 10.5749 61.8711 9.35779C61.8711 8.12462 62.0953 6.98755 62.5437 5.94656C62.9922 4.88956 63.6167 3.96869 64.4175 3.18395C65.2183 2.38319 66.1551 1.76661 67.2282 1.3342C68.3012 0.885772 69.4623 0.66156 70.7115 0.66156C72.1048 0.66156 73.386 0.92581 74.5551 1.45431C75.7242 1.9668 76.6931 2.69549 77.4618 3.64038L75.2518 5.85047C74.7233 5.16182 74.0666 4.63332 73.2819 4.26497C72.4972 3.89662 71.6323 3.71245 70.6874 3.71245C69.6144 3.71245 68.6615 3.95268 67.8287 4.43313C67.012 4.89757 66.3714 5.55419 65.9069 6.403C65.4425 7.23578 65.2103 8.21271 65.2103 9.33377C65.2103 10.4548 65.4345 11.4478 65.8829 12.3126C66.3473 13.1614 66.9719 13.826 67.7567 14.3065C68.5574 14.7869 69.4703 15.0272 70.4953 15.0272C71.5523 15.0272 72.4571 14.835 73.2098 14.4506C73.9625 14.0502 74.5391 13.4737 74.9395 12.721C75.3398 11.9522 75.54 11.0154 75.54 9.91031L77.6781 11.3757L70.3031 11.3036V8.46895H78.9032V8.92538C78.9032 10.9433 78.5429 12.6329 77.8222 13.9942C77.1015 15.3395 76.1086 16.3564 74.8434 17.0451C73.5942 17.7177 72.1528 18.054 70.5193 18.054Z" fill="currentColor"></path>
                                <path d="M55.9788 17.8138V0.925812H59.2459V17.8138H55.9788Z" fill="currentColor"></path>
                                <path d="M40.2663 17.8138V14.907H44.5664C45.6554 14.907 46.6083 14.6828 47.4251 14.2344C48.2419 13.77 48.8745 13.1214 49.3229 12.2886C49.7874 11.4558 50.0196 10.4708 50.0196 9.33377C50.0196 8.22872 49.7874 7.26781 49.3229 6.45104C48.8585 5.61825 48.2179 4.97765 47.4011 4.52922C46.5843 4.06478 45.6394 3.83256 44.5664 3.83256H40.1943V0.925812H44.6145C45.8636 0.925812 47.0167 1.13401 48.0737 1.5504C49.1467 1.9668 50.0756 2.55936 50.8604 3.32808C51.6611 4.0808 52.2777 4.96964 52.7101 5.99461C53.1585 7.01958 53.3828 8.14064 53.3828 9.35779C53.3828 10.5749 53.1585 11.704 52.7101 12.745C52.2777 13.77 51.6691 14.6668 50.8844 15.4355C50.0996 16.1883 49.1708 16.7728 48.0978 17.1892C47.0408 17.6056 45.8957 17.8138 44.6625 17.8138H40.2663ZM38.0322 17.8138V0.925812H41.2993V17.8138H38.0322Z" fill="currentColor"></path>
                                <path d="M17.6517 17.8896V14.9243H22.0383C23.1493 14.9243 24.1213 14.6956 24.9546 14.2381C25.7878 13.7643 26.4331 13.1027 26.8906 12.2531C27.3644 11.4035 27.6013 10.3988 27.6013 9.23882C27.6013 8.11152 27.3644 7.13127 26.8906 6.29805C26.4168 5.44849 25.7633 4.79499 24.9301 4.33753C24.0968 3.86374 23.1329 3.62685 22.0383 3.62685H17.5781V0.661575H22.0873C23.3616 0.661575 24.538 0.873964 25.6162 1.29874C26.7109 1.72352 27.6584 2.32801 28.459 3.11221C29.2759 3.88008 29.9049 4.78682 30.346 5.83243C30.8034 6.87803 31.0322 8.02167 31.0322 9.26332C31.0322 10.505 30.8034 11.6568 30.346 12.7187C29.9049 13.7643 29.284 14.6792 28.4835 15.4634C27.6829 16.2313 26.7354 16.8276 25.6407 17.2524C24.5625 17.6772 23.3943 17.8896 22.1363 17.8896H17.6517ZM15.3726 17.8896V0.661575H18.7054V17.8896H15.3726Z" fill="currentColor"></path>
                                <path d="M2.48287 10.6847V8.08702H6.47741C7.29429 8.08702 7.92329 7.8828 8.3644 7.47436C8.82186 7.04958 9.05058 6.46959 9.05058 5.7344C9.05058 5.06456 8.82186 4.50908 8.3644 4.06797C7.92329 3.61051 7.29429 3.38179 6.47741 3.38179H2.48287V0.661575H6.77149C7.88245 0.661575 8.85453 0.882133 9.68775 1.32325C10.5373 1.74803 11.1908 2.33618 11.6483 3.08771C12.1221 3.83924 12.3589 4.70513 12.3589 5.68539C12.3589 6.69832 12.1221 7.58055 11.6483 8.33208C11.1908 9.06727 10.5373 9.64726 9.68775 10.072C8.83819 10.4805 7.84977 10.6847 6.72248 10.6847H2.48287ZM0.0322266 17.8896V0.661575H3.3651V17.8896H0.0322266ZM9.44269 17.8896L3.7572 10.4396L6.8205 9.48388L13.4862 17.8896H9.44269Z" fill="currentColor"></path>
                            </svg>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Pill Shape */}
                    <div className="hidden lg:flex justify-center flex-1">
                        <div className="bg-white rounded-full px-8 py-1.5 shadow-sm border border-gray-100 relative">
                            <DesktopMenu />
                        </div>
                    </div>

                    {/* CTA - Flex 1 for perfect centering */}
                    <div className="flex-1 hidden lg:flex items-center justify-end">
                        <Link to="/contact" className="relative group inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 rounded-lg overflow-hidden border border-white/20 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#3b82f6] to-[#1e40af] group-hover:from-[#2563eb] group-hover:to-[#1d4ed8]"></span>
                            <span className="relative flex items-center gap-2">
                                Book a Call
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="flex-1 flex justify-end lg:hidden">
                        <button
                            className="p-2 text-white"
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
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Component */}
            <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        </header>
    );
}
