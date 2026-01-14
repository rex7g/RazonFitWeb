import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="container hero-content">

                {/* Content */}
                <div className="hero-text">
                    <h1 className="hero-title">
                        Transforma tu<br />
                        Cuerpo con<br />
                        <span className="highlight">Ciencia y Sabor</span>
                    </h1>
                    <p className="hero-subtitle">
                        La plataforma definitiva que combina nutrición de chef y entrenamiento de atleta en una sola app.
                        Consigue resultados reales sin sacrificar el disfrute.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary">
                            Empieza tu Cambio
                        </button>
                        <button className="btn btn-outline">
                            <PlayCircle size={18} /> Saber más
                        </button>
                    </div>
                </div>

                {/* Visuals */}
                <div className="hero-visual">
                    <div className="visual-container">
                        {/* Main Visual Composition */}
                        <div className="visual-cards">

                            {/* Card 1: Workout */}
                            <div className="card-visual card-up">
                                <div className="card-image-wrap">
                                    <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=400" alt="Training" />
                                </div>
                                <div className="card-meta">
                                    <div className="icon-box">
                                        <ArrowRight size={16} />
                                    </div>
                                    <div className="meta-text">
                                        <p>Quema Grasa</p>
                                        <p>Rutinas de alto impacto</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Food */}
                            <div className="card-visual card-down">
                                <div className="card-image-wrap">
                                    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400" alt="Healthy Food" />
                                </div>
                                <div className="card-meta" style={{ background: '#F0FDF4', borderRadius: '12px', marginTop: '0.5rem' }}>
                                    <div className="meta-text" style={{ padding: '0.25rem' }}>
                                        <span style={{ color: '#16A34A', fontWeight: 'bold', fontSize: '0.75rem' }}>100% Natural</span>
                                        <p style={{ marginTop: '0.25rem' }}>Ingredientes frescos</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
