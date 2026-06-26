import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/binexlogo.png';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { to: '/', label: 'Home' },
        { to: '/process', label: 'Process' },
        { to: '/services', label: 'Services' },
        { to: '/about', label: 'About' },
        { to: '/pricing', label: 'Pricing' },
    ];

    return (
        <nav className={`navbar fixed top-0 left-0 right-0 z-50 px-6 py-3 ${scrolled ? 'scrolled' : ''}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="BizNex Logo" className="h-10 w-auto object-contain" />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            className={({ isActive }) =>
                                `nav-link text-sm font-semibold transition-colors ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                    <Link to="/contact" className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/30">
                        Contact
                    </Link>
                </div>

                <button
                    className="md:hidden text-slate-700 text-2xl"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`} />
                </button>
            </div>

            <div className={`md:hidden mt-3 pb-4 space-y-3 ${mobileOpen ? 'block' : 'hidden'}`}>
                {links.map((l) => (
                    <NavLink
                        key={l.to}
                        to={l.to}
                        className={({ isActive }) =>
                            `block font-medium ${isActive ? 'text-blue-600' : 'text-slate-700'} hover:text-blue-600 transition-colors`
                        }
                        onClick={() => setMobileOpen(false)}
                    >
                        {l.label}
                    </NavLink>
                ))}
                <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors" onClick={() => setMobileOpen(false)}>
                    Contact
                </Link>
            </div>
        </nav>
    );
}