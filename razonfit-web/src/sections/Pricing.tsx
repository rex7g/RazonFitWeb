import { Check } from 'lucide-react';

export default function Pricing() {
    return (
        <section id="pricing" className="pricing-section">
            <div className="section-header">
                <h2 className="section-title">Elige tu Plan</h2>
                <p className="section-subtitle">Cancela cuando quieras. Sin compromisos a largo plazo.</p>
            </div>

            <div className="container pricing-grid">

                {/* Basic Plan */}
                <div className="pricing-card price-basic">
                    <h3 className="plan-name">Básico</h3>
                    <p className="plan-sub">Para empezar a cuidarse.</p>
                    <div className="price-tag">$29 <span>/mes</span></div>

                    <ul className="features-list">
                        <li className="feature-item">
                            <Check size={18} color="var(--color-primary)" /> Acceso a la app de entrenamiento
                        </li>
                        <li className="feature-item">
                            <Check size={18} color="var(--color-primary)" /> Guía nutricional básica
                        </li>
                        <li className="feature-item disabled">
                            <Check size={18} /> Meal Prep incluido
                        </li>
                    </ul>

                    <button className="w-full btn btn-outline">
                        Seleccionar Básico
                    </button>
                </div>

                {/* Premium Plan */}
                <div className="pricing-card price-premium">
                    <div className="recommended-badge">
                        Recomendado
                    </div>

                    <h3 className="plan-name">Transformación Total</h3>
                    <p className="plan-sub">Meal prep + Entrenador</p>
                    <div className="price-tag">$149 <span>/mes</span></div>

                    <ul className="features-list">
                        <li className="feature-item">
                            <Check size={18} color="var(--color-primary)" /> 10 comidas semanales a domicilio
                        </li>
                        <li className="feature-item">
                            <Check size={18} color="var(--color-primary)" /> Plan de entreno personalizado
                        </li>
                        <li className="feature-item">
                            <Check size={18} color="var(--color-primary)" /> Soporte prioritario 24/7
                        </li>
                        <li className="feature-item">
                            <Check size={18} color="var(--color-primary)" /> Acceso a comunidad exclusiva
                        </li>
                    </ul>

                    <button className="w-full btn btn-primary">
                        Empezar Transformación
                    </button>
                </div>

            </div>
        </section>
    );
}
