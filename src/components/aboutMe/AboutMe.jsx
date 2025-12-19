import { useState, useRef } from "react";
import './AboutMe.css';

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

            <div className="glass-panel about-panel">
                <div className="row g-0">

                    <div className="col-md-4 p-3 p-md-4 d-flex flex-column about-sidebar">
                        <div id="list-example" className="list-group sticky-top pt-4 about-nav-container">
                            {['#list-item-1', '#list-item-2', '#list-item-3'].map((item, index) => (
                                <a
                                    key={item}
                                    className={`list-group-item list-group-item-action mb-3 about-nav-item ${activeTab === item ? 'active' : ''}`}
                                    href={item}
                                    onClick={(e) => handleTabClick(e, item)}
                                >
                                    {index === 0 && 'Resumen'}
                                    {index === 1 && 'Puntos Clave'}
                                    {index === 2 && 'Historia Completa'}
                                </a>
                            ))}
                        </div>
                    </div>


                    <div className="col-md-8 text-start">
                        <div
                            className="p-3 p-md-5 about-content-area"
                            tabIndex="0"
                            ref={contentRef}
                            onScroll={handleScroll}
                        >
                            <div id="list-item-1" className="mb-5 animate-fade-in">
                                <h3 className="mb-4 about-subtitle">Resumen</h3>
                                <p className="mb-4 about-text">
                                    Soy un <strong>Desarrollador Full Stack Junior</strong> con una sólida base en <strong>lógica algorítmica</strong> y <strong>arquitectura de software</strong>, obtenida de mi formación como <strong>Profesor de Matemáticas</strong> y mi actual formación en <strong>Licenciatura en Sistemas de Información (UNNE)</strong>. Mi valor diferencial es la capacidad para estructurar soluciones complejas y aplicar una metodología de trabajo disciplinada en equipo. Cuento además con experiencia docente en transferencia de conocimiento y documentación de procesos.
                                </p>
                            </div>

                            <hr className="about-divider" />

                            <div id="list-item-2" className="mb-5">
                                <h3 className="mb-4 about-subtitle">Puntos Destacados</h3>
                                <div className="d-grid gap-3">
                                    {[
                                        { title: 'Fundamento Técnico', desc: 'Lógica algorítmica, POO (Java), Estructuras de Datos.' },
                                        { title: 'Experiencia Práctica', desc: 'MERN Stack y LAMP Stack.' },
                                        { title: 'Metodología', desc: 'Uso riguroso de Git/GitHub, Trello y metodologías ágiles.' },
                                        { title: 'Habilidad Transferible', desc: 'Capacidad docente para transferir conocimiento y documentar procesos.' }
                                    ].map((point, i) => (
                                        <div key={i} className="p-3 about-highlight-card">
                                            <strong style={{ color: 'var(--primary-color)' }}>{point.title}:</strong> {point.desc}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <hr className="about-divider" />

                            <div id="list-item-3" className="mb-5">
                                <h3 className="mb-4 about-subtitle">Historia Completa y Trayectoria</h3>

                                <h5 className="mt-5 mb-3 about-section-heading">Trayectoria Profesional y Académica</h5>
                                <p style={{ lineHeight: '1.8' }}>
                                    Me gradué como Profesor en Matemáticas a fines de 2023. Siempre apasionado por la tecnología, en 2024 decidí profundizar mis conocimientos, iniciando la Licenciatura en Sistemas de Información en la UNNE. El transcurso de estos años me ha brindado una base sólida en <strong>fundamentos de programación</strong> y <strong>buenas prácticas</strong>.
                                </p>

                                <h5 className="mt-5 mb-3 about-section-heading">Transición al Desarrollo Full Stack</h5>
                                <p style={{ lineHeight: '1.8' }}>
                                    Para complementar mi formación, completé el entrenamiento intensivo de <strong>Talentos Digitales</strong> (Telco + PoloIT Corrientes + UNNE), donde desarrollé proyectos reales:
                                    <br /><br />
                                    <strong>E-Commerce SPA:</strong> Construida con React, Vite, MongoDB Atlas, Express y Node.js.
                                    <br />
                                    <strong>Web App (LAMP):</strong> Desarrollada con CodeIgniter, PHP y MySQL.<br /> Esta etapa consolidó mi manejo de herramientas profesionales como Git/GitHub para el control de versiones y el uso de IA para optimizar la eficiencia del trabajo.
                                </p>

                                <h5 className="mt-5 mb-3 about-section-heading">Mi Valor para una Organización</h5>
                                <p style={{ lineHeight: '1.8' }}>
                                    Actualmente busco mi primera oportunidad como desarrollador Junior o Trainee, donde pueda aportar un perfil integral definido por la resolución de problemas a través de código, la lógica en la estructuración de nuevos procesos y un enfoque constante en la eficiencia, propio de mi formación constante.
                                    <br />
                                    Mi diferencial radica en una <strong>alta capacidad de aprendizaje</strong> para asimilar nuevos frameworks con rapidez y, sobre todo, en mi faceta como docente; esto me permite no solo ejecutar tareas técnicas, sino también facilitar la gestión del conocimiento dentro del equipo, documentando procesos con claridad y capacitando a mis pares. Integro estas competencias con habilidades blandas consolidadas, como la comunicación asertiva, la responsabilidad proactiva y una gestión eficiente del tiempo enfocada en resultados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
