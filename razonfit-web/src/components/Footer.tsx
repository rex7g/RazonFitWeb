import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="brand">
                    <span>Razon</span><span>Fit</span>
                </div>

                <div className="footer-links">
                    <a href="#">Legal</a>
                    <a href="#">Privacidad</a>
                    <a href="#">Contacto</a>
                    <a href="#">Blog</a>
                </div>

                <div className="social-links">
                    <a href="#"><Instagram size={20} /></a>
                    <a href="#"><Twitter size={20} /></a>
                    <a href="#"><Facebook size={20} /></a>
                </div>

                <div className="copyright">
                    © {new Date().getFullYear()} RazonFit. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
