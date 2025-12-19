import { useState, useRef, lazy, Suspense } from 'react';

const MainCtesWheels = lazy(() => import('./CtesWheels/MainCtesWheels'));
const PrimeraWeb = lazy(() => import('./PrimeraWeb'));
const F1LN = lazy(() => import('./F1LN/F1LN'));

function ProyectSection() {
    const [activeTab, setActiveTab] = useState('1');
    const containerRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const LoadingSpinner = () => (
        <div className="d-flex justify-content-center align-items-center h-100" style={{ minHeight: '400px' }}>
            <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

    return (
        <div className="section-container">
            <h2 className="section-title">Mis Proyectos</h2>

            <div className="alert alert-info d-flex align-items-center mb-4 mx-auto glass-panel" style={{ maxWidth: '800px', backgroundColor: 'rgba(255, 244, 244, 0.66)', border: '1px solid var(--primary-color)' }}>
                <div style={{ fontSize: '1.5rem', marginRight: '1rem' }}>ℹ️</div>
                <div>
                    <strong>Nota:</strong> Las aplicaciones mostradas aquí son versiones resumidas para demostración, operando sin backend real o con simulaciones.
                    <br />
                    <span className="d-block mt-1" style={{ fontSize: '0.9em', opacity: 0.9 }}>
                        <strong>Destacado:</strong> El proyecto <em>F1LN</em> fue refactorizado exitosamente de un stack legacy (CodeIgniter/XAMPP) a una SPA moderna en React con asistencia de Inteligencia Artificial.
                    </span>
                </div>
            </div>

            <div className={`glass-panel ${isFullscreen ? 'fullscreen-mode' : ''}`} ref={containerRef} style={{
                overflow: 'hidden',
                minHeight: isFullscreen ? '100vh' : '700px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div className="card-header position-relative p-2 p-md-4" style={{
                    borderBottom: '1px solid var(--glass-border)',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <ul className="nav nav-pills justify-content-center m-0 gap-2 gap-md-3">
                        {[
                            { id: '1', label: 'CtesWheels' },
                            { id: '2', label: 'F1LN' },
                            { id: '3', label: 'Primera Web' }
                        ].map((tab) => (
                            <li className="nav-item" key={tab.id}>
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    style={{
                                        backgroundColor: activeTab === tab.id ? 'var(--primary-color)' : 'transparent',
                                        color: activeTab === tab.id ? '#fff' : 'var(--text-muted)',
                                        border: '1px solid ' + (activeTab === tab.id ? 'var(--primary-color)' : 'var(--glass-border)'),
                                        borderRadius: '50px',
                                        padding: '0.4rem 1.2rem',
                                        fontWeight: '600',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        fontSize: '0.9rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeTab !== tab.id) {
                                            e.currentTarget.style.color = 'var(--text-color)';
                                            e.currentTarget.style.borderColor = 'var(--secondary-color)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeTab !== tab.id) {
                                            e.currentTarget.style.color = 'var(--text-muted)';
                                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                                        }
                                    }}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>


                    <div className="d-md-position-absolute end-0 me-4 mt-3 mt-md-0">
                        <button
                            onClick={toggleFullscreen}
                            className="btn btn-sm btn-outline-light"
                            style={{ borderRadius: '20px' }}
                        >
                            {isFullscreen ? 'Salir' : '⤢ Pantalla Completa'}
                        </button>
                    </div>
                </div>

                <div className="card-body flex-grow-1 text-start" style={{ overflowY: 'auto' }}>
                    <Suspense fallback={<LoadingSpinner />}>
                        {activeTab === '1' && <MainCtesWheels fullscreenRef={containerRef} />}
                        {activeTab === '2' && (
                            <div className="text-start" style={{ padding: '0' }}>
                                <F1LN />
                            </div>
                        )}
                        {activeTab === '3' && (
                            <div className="text-start">
                                <PrimeraWeb />
                            </div>
                        )}
                    </Suspense>
                </div>
            </div>


            <style>{`
                .fullscreen-mode {
                    border-radius: 0 !important;
                    background-color: var(--bg-color) !important;
                }
                @media (min-width: 768px) {
                    .d-md-position-absolute {
                        position: absolute !important;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            `}</style>
        </div>
    )
}

export default ProyectSection