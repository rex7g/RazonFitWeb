import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Carlos M.",
        role: "Usuario Pro",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
        text: "La comida es increíblemente buena. No parece dieta. He bajado 5kg en un mes sin sufrir y con más energía que nunca.",
        stars: 5,
    },
    {
        name: "Ana R.",
        role: "Usuario Básico",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
        text: "Como madre trabajadora, el plan de Meal Prep me facilita la vida. Mi cliente de entrenamiento personal está encantado porque la comida ya está lista.",
        stars: 4,
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="section-header">
                <h2 className="section-title">Lo que dicen de nosotros</h2>
            </div>

            <div className="container testimonials-grid">
                {testimonials.map((t, index) => (
                    <div key={index} className="testimonial-card">
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    className={i < t.stars ? "star-filled" : "star-empty"}
                                />
                            ))}
                        </div>
                        <p className="quote">"{t.text}"</p>
                        <div className="author">
                            <img src={t.image} alt={t.name} className="author-avatar" />
                            <div className="author-info">
                                <h4>{t.name}</h4>
                                <p>{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
