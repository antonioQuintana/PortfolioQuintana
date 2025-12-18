import { useState } from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './AppFooter.css';

const AppFooter = () => {
  const [showCopied, setShowCopied] = useState(false);
  const instagramURL = "https://www.instagram.com/antoniio_quintana/";
  const linkedinURL = "https://www.linkedin.com/in/ricardo-quintana-7b4287196";
  const githubURL = "https://github.com/antonioQuintana";
  const email = "quintanarijoan@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <footer className="footer-container " id="contact">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <h4 className="mb-0 me-3" style={{ fontSize: '1.5rem', opacity: 0.8, color: 'var(--text-color)' }}>Contacta Conmigo</h4>
        <div style={{ animation: 'bounce 2s infinite' }}>
          <span style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>&darr;</span>
        </div>
      </div>
      <div className="footer-social-links">

        <a
          href={instagramURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="social-icon instagram"
        >
          <FaInstagram size={24} />
        </a>


        <a
          href={linkedinURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="social-icon linkedin"
        >
          <FaLinkedinIn size={24} />
        </a>


        <a
          href={githubURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="social-icon github"
        >
          <FaGithub size={24} />
        </a>


        <div style={{ position: 'relative', display: 'inline-block' }}>
          <a
            href={`mailto:${email}`}
            onClick={handleCopyEmail}
            aria-label="Copy Email Address"
            className="social-icon gmail"
            style={{ cursor: 'pointer' }}
          >
            <SiGmail size={24} />
          </a>
          {showCopied && (
            <span className="animate-fade-in" style={{
              position: 'absolute',
              bottom: '120%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--primary-color)',
              color: '#000',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              zIndex: 10
            }}>
              ¡Copiado!
            </span>
          )}
        </div>
      </div>
      <p className="footer-copyright">
        © {new Date().getFullYear()} Quintana Antonio - Todos los derechos reservados.
      </p>
      <p className="footer-copyright">
        Maquetado con Vite, React Router DOM y React Bootstrap.
      </p>
    </footer>
  );
};

export default AppFooter;
