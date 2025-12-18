import firma from '../../img/firmaBlanca.png'
import './AppNavbar.css';

function AppNavbar() {

    return (
        <nav className="navbar navbar-expand-md sticky-top"
            style={{
                backgroundColor: 'var(--tertiary-color)',
                borderBottom: '3px solid rgba(148, 0, 0, 0.44)',
                boxShadow: '0 6px 20px rgba(173, 47, 47, 1)',
                backdropFilter: 'blur(5px)'
            }}>
            <div className="container-fluid"
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                }}
            >
                <img src={firma} alt="firma" className="navbar-logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                    <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto" style={{ fontFamily: 'var(--font-heading)', fontWeight: '600' }}>
                        {[
                            { label: 'Inicio', id: 'home' },
                            { label: 'Sobre Mi', id: 'about-me' },
                            { label: 'Proyectos', id: 'projects' },
                            { label: 'Contacto', id: 'contact' }
                        ].map((item) => (
                            <li className="nav-item" key={item.label}>
                                <a
                                    className="nav-link"
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const element = document.getElementById(item.id);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    style={{
                                        color: 'var(--text-color)',
                                        margin: '0 10px',
                                        transition: 'color 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                                    onMouseLeave={(e) => e.target.style.color = 'var(--text-color)'}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default AppNavbar
