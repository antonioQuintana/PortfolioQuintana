import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useF1Navigation } from '../context/NavigationContext';

const Navbar = () => {
    const { profile, user, logout } = useAuth();
    const { navigate, currentPage } = useF1Navigation();

    const handleNavClick = (e, path) => {
        e.preventDefault();
        navigate(path);
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#960000' }} data-bs-theme="dark">
            <div className="container-fluid">
                <div>
                    <a className="navbar-brand" href="#" onClick={(e) => handleNavClick(e, '/')}>
                        <img src="/f1ln-assets/img/logo-f1news.jpg" height="50" className="rounded" alt="Logo" />
                    </a>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Guest View (Default) */}
                {profile === 0 && (
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link ${currentPage === '/' ? 'active' : ''}`} href="#" onClick={(e) => handleNavClick(e, '/')}>Principal</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${currentPage === '/register' ? 'active' : ''}`} href="#" onClick={(e) => handleNavClick(e, '/register')}>Registrarse</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${currentPage === '/login' ? 'active' : ''}`} href="#" onClick={(e) => handleNavClick(e, '/login')}>Ingresar</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${currentPage === '/pilots' ? 'active' : ''}`} href="#" onClick={(e) => handleNavClick(e, '/pilots')}>Pilotos</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Más info
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="https://alangulotv.org/" target="_blank" rel="noreferrer">Mira la F1 EN VIVO</a>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={(e) => handleNavClick(e, '/contact')}>Contactá con nosotros</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-dark" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e3e3e3"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                            </button>
                        </form>
                    </div>
                )}

                {/* Admin View */}
                {profile === 1 && (
                    <>
                        <div className="btn btn-secondary active btnUser btn-sm">
                            <strong>Admin:</strong> {user.name}
                        </div>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className={`nav-link ${currentPage === '/' ? 'active' : ''}`} href="#" onClick={(e) => handleNavClick(e, '/')}>Principal</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${currentPage === '/pilots' ? 'active' : ''}`} href="#" onClick={(e) => handleNavClick(e, '/pilots')}>Pilotos</a>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active btn btn-link" onClick={logout}>Cerrar Sesión</button>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Más info
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="https://alangulotv.cloud/canal/multi-f1/" target="_blank" rel="noreferrer">Mira la F1 EN VIVO</a>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={(e) => handleNavClick(e, '/contact')}>Contactá con nosotros</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-dark" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e3e3e3"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                                </button>
                            </form>
                        </div>
                    </>
                )}

                {/* User View */}
                {profile === 2 && (
                    <>
                        <div className="btn btn-secondary active btnUser btn-sm">
                            <strong>Usuario:</strong> {user.name}
                        </div>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className={`nav-link ${currentPage === '/' ? 'active' : ''}`} href="#" onClick={(e) => handleNavClick(e, '/')}>Principal</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${currentPage === '/pilots' ? 'active' : ''}`} href="#" onClick={(e) => handleNavClick(e, '/pilots')}>Pilotos</a>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link active btn btn-link" onClick={logout}>Cerrar Sesión</button>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Más info
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="https://alangulotv.cloud/canal/multi-f1/" target="_blank" rel="noreferrer">Mira la F1 EN VIVO</a>
                                        </li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={(e) => handleNavClick(e, '/contact')}>Contactá con nosotros</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-dark" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e3e3e3"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                                </button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
