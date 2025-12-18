import fotoTitulo from '../../img/fotoTitulo3.jpg';

function Header() {
    return (
        <div className="header-section" style={{
            backgroundImage: `linear-gradient(to bottom, transparent, var(--bg-color)), linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${fotoTitulo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
        }}>
            <div className="text-center animate-fade-in">
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>
                    Antonio Quintana
                </h1>

                <div style={{
                    width: '80px',
                    height: '6px',
                    background: 'var(--primary-color)',
                    margin: '1.5rem auto',
                    borderRadius: '3px'
                }}></div>

                <h2 style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    fontWeight: '300',
                    color: 'var(--text-color)',
                    marginBottom: '0.5rem'
                }}>
                    Profesor en Matemáticas
                </h2>

                <h2 style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    fontWeight: '700',
                    color: 'var(--primary-color)',
                    textShadow: '0 0 20px rgba(0, 180, 216, 0.4)'
                }}>
                    Full Stack Developer
                </h2>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'bounce 2s infinite'
            }}>
                <span style={{ fontSize: '2rem', color: 'var(--text-muted)' }}>&darr;</span>
            </div>

            <style>{`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateX(-50%) translateY(0);}
                    40% {transform: translateX(-50%) translateY(-10px);}
                    60% {transform: translateX(-50%) translateY(-5px);}
                }
            `}</style>
        </div>
    )
}

export default Header