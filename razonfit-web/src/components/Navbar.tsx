import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                {/* Logo */}
                <div className="brand">
                    <span>Razon</span><span>Fit</span>
                </div>

                {/* Desktop Menu */}
                <div className="nav-links">
                    <a href="#features">Características</a>
                    <a href="#testimonials">Testimonios</a>
                    <a href="#pricing">Planes</a>
                    <a href="#login" className="highlight">Login</a>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mobile-menu md:hidden">
                    <a href="#features" onClick={() => setIsOpen(false)}>Características</a>
                    <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonios</a>
                    <a href="#pricing" onClick={() => setIsOpen(false)}>Planes</a>
                    <a href="#login" className="highlight" onClick={() => setIsOpen(false)}>Login</a>
                </div>
            )}
        </nav>
    );
}
