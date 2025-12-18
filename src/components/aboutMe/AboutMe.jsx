import { useState, useRef } from "react";

function AboutMe() {
    const [activeTab, setActiveTab] = useState('#list-item-1');
    const contentRef = useRef(null);

    const handleTabClick = (e, tabId) => {
        e.preventDefault();
        setActiveTab(tabId);
        const element = document.querySelector(tabId);
        if (element && contentRef.current) {
            const container = contentRef.current;
            const topPos = element.offsetTop - container.offsetTop;
            container.scrollTo({
                top: topPos,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        if (!contentRef.current) return;

        const container = contentRef.current;
        const scrollPosition = container.scrollTop;
        const offset = 100;

        const sections = ['#list-item-1', '#list-item-2', '#list-item-3'];

        for (const sectionId of sections) {
            const element = document.querySelector(sectionId);
            if (element) {
                const elementTop = element.offsetTop - container.offsetTop;
                const elementBottom = elementTop + element.offsetHeight;

                if (scrollPosition >= elementTop - offset && scrollPosition < elementBottom) {
                    setActiveTab(sectionId);
                }
            }
        }
    };

    return (
        <div className="section-container">
            <h2 className="section-title">Acerca de Mí</h2>

            <div className="glass-panel" style={{ overflow: 'hidden' }}>
                <div className="row g-0">

                    <div className="col-md-4 p-3 p-md-4 d-flex flex-column" style={{
                        borderRight: '1px solid var(--glass-border)',
                        backgroundColor: 'rgba(0,0,0,0.2)'
                    }}>
                        <div id="list-example" className="list-group sticky-top pt-4" style={{ top: '2rem' }}>
                            {['#list-item-1', '#list-item-2', '#list-item-3'].map((item, index) => (
                                <a
                                    key={item}
                                    className={`list-group-item list-group-item-action mb-3 ${activeTab === item ? 'active' : ''}`}
                                    href={item}
                                    onClick={(e) => handleTabClick(e, item)}
                                    style={{
                                        backgroundColor: activeTab === item ? 'var(--primary-color)' : 'transparent',
                                        color: activeTab === item ? '#fff' : 'var(--text-muted)',
                                        border: '1px solid ' + (activeTab === item ? 'var(--primary-color)' : 'var(--glass-border)'),
                                        borderRadius: '0.5rem',
                                        padding: '1rem',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeTab !== item) {
                                            e.currentTarget.style.borderColor = 'var(--secondary-color)';
                                            e.currentTarget.style.color = 'var(--text-color)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeTab !== item) {
                                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                                            e.currentTarget.style.color = 'var(--text-muted)';
                                        }
                                    }}
                                >
                                    {index === 0 && 'Resumen Ejecutivo'}
                                    {index === 1 && 'Puntos Clave'}
                                    {index === 2 && 'Historia Completa'}
                                </a>
                            ))}
                        </div>
                    </div>


                    <div className="col-md-8 text-start">
                        <div
                            className="p-3 p-md-5"
                            tabIndex="0"
                            ref={contentRef}
                            onScroll={handleScroll}
                            style={{
                                height: '600px',
                                overflowY: 'auto',
                                scrollBehavior: 'smooth'
                            }}
                        >
                            <div id="list-item-1" className="mb-5 animate-fade-in">
                                <h3 className="mb-4" style={{ color: 'var(--secondary-color)' }}>Resumen Ejecutivo</h3>
                                <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    Soy un <strong>Desarrollador Full Stack Junior</strong> con una sólida base en <strong>lógica algorítmica</strong> y <strong>arquitectura de software</strong>, obtenida de mi formación como <strong>Profesor de Matemáticas</strong> y mi actual <strong>Licenciatura en Sistemas de Información (UNNE)</strong>. Mi valor diferencial es la capacidad para estructurar soluciones complejas, manejar el <strong>MERN Stack</strong> (React, Node.js, MongoDB) y aplicar una metodología de trabajo disciplinada en equipo. Cuento además con experiencia docente en transferencia de conocimiento y documentación de procesos.
                                </p>
                            </div>

                            <hr style={{ borderColor: 'var(--glass-border)', margin: '3rem 0' }} />

                            <div id="list-item-2" className="mb-5">
                                <h3 className="mb-4" style={{ color: 'var(--secondary-color)' }}>Puntos Destacados</h3>
                                <div className="d-grid gap-3">
                                    {[
                                        { title: 'Fundamento Técnico', desc: 'Lógica algorítmica, POO (Java), Estructuras de Datos.' },
                                        { title: 'Experiencia Práctica', desc: 'MERN Stack y LAMP Stack.' },
                                        { title: 'Metodología', desc: 'Uso riguroso de Git/GitHub, Trello y metodologías ágiles.' },
                                        { title: 'Habilidad Transferible', desc: 'Capacidad docente para documentar y transferir conocimiento.' }
                                    ].map((point, i) => (
                                        <div key={i} className="p-3" style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            borderRadius: '0.5rem',
                                            borderLeft: '4px solid var(--primary-color)'
                                        }}>
                                            <strong style={{ color: 'var(--primary-color)' }}>{point.title}:</strong> {point.desc}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr style={{ borderColor: 'var(--glass-border)', margin: '3rem 0' }} />

                            <div id="list-item-3" className="mb-5">
                                <h3 className="mb-4" style={{ color: 'var(--secondary-color)' }}>Historia Completa y Trayectoria</h3>

                                <h5 className="mt-5 mb-3 ">Trayectoria Profesional y Académica</h5>
                                <p style={{ lineHeight: '1.8' }}>
                                    Me gradué como Profesor en Matemáticas a fines de 2023. Siempre apasionado por la tecnología, en 2024 decidí profundizar mis conocimientos, iniciando la Licenciatura en Sistemas de Información en la UNNE. El transcurso de estos años me ha brindado una base sólida en fundamentos de programación y buenas prácticas.
                                </p>

                                <h5 className="mt-5 mb-3 ">Transición al Desarrollo Full Stack</h5>
                                <p style={{ lineHeight: '1.8' }}>
                                    Para complementar mi formación, completé el entrenamiento intensivo de <strong>Talentos Digitales</strong> (Telco + PoloIT Corrientes + UNNE), donde desarrollé proyectos reales:
                                    <br /><br />
                                    <strong>E-Commerce SPA:</strong> Construida con React, Vite, MongoDB Atlas, Express y Node.js.
                                    <br />
                                    <strong>Web App (LAMP):</strong> Desarrollada con CodeIgniter, PHP y MySQL.<br /> Esta etapa consolidó mi manejo de herramientas profesionales como Git/GitHub para el control de versiones y el uso de IA para optimizar la eficiencia del trabajo.
                                </p>

                                <h5 className="mt-5 mb-3">Mi Valor para una Organización</h5>
                                <p style={{ lineHeight: '1.8' }}>
                                    Actualmente busco mi primera oportunidad como desarrollador Junior o Trainee, donde pueda aportar un perfil integral definido por el rigor del pensamiento lógico y analítico, propio de mi formación constante. Mi diferencial radica en una alta capacidad de aprendizaje para asimilar nuevos frameworks con rapidez y, sobre todo, en mi faceta como docente; esto me permite no solo ejecutar tareas técnicas, sino también facilitar la gestión del conocimiento dentro del equipo, documentando procesos con claridad y capacitando a mis pares. Integro estas competencias con habilidades blandas consolidadas, como la comunicación asertiva, la responsabilidad proactiva y una gestión eficiente del tiempo enfocada en resultados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
