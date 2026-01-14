import { Utensils, Dumbbell, TrendingUp } from 'lucide-react';

const features = [
    {
        icon: <Utensils size={32} />,
        title: "Meal Prep Semanal",
        description: "Comida saludable, calculada por macros y deliciosa, entregada directamente en tu puerta cada semana."
    },
    {
        icon: <Dumbbell size={32} />,
        title: "Entrenamientos Smart",
        description: "Algoritmos avanzados que adaptan tu rutina diaria según tu nivel de energía y progreso real."
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Gestión Profesional",
        description: "Herramientas avanzadas para que tu entrenador siga tu evolución y ajuste tu plan en tiempo real."
    }
];

export default function Features() {
    return (
        <section id="features" className="features-section">
            <div className="section-header">
                <h2 className="section-title">Todo lo que necesitas</h2>
                <p className="section-subtitle">
                    Fitness 360° para un estilo de vida real, diseñado para encajar en tu rutina.
                </p>
            </div>

            <div className="container features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon-wrapper">
                            {feature.icon}
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-desc">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
