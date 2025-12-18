import { FaReact, FaNodeJs, FaGitAlt, FaTrello, FaBootstrap, FaJava, FaRobot } from 'react-icons/fa';
import { SiVite, SiMongodb, SiExpress, SiAuth0, SiRedux, SiJavascript, SiHtml5, SiCss3, SiMysql, SiPhp, SiCodeigniter, SiXampp, SiAxios, SiPostman, SiReactrouter } from 'react-icons/si';

import './LogosVite.css';

const techs = [
    { icon: <FaReact />, name: 'React', color: '#61DAFB' },
    { icon: <SiVite />, name: 'Vite', color: '#646CFF' },
    { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
    { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
    { icon: <SiExpress />, name: 'Express', color: '#ffffff' },
    { icon: <SiRedux />, name: 'Redux', color: '#764ABC' },
    { icon: <SiReactrouter />, name: 'R. Router', color: '#CA4245' },
    { icon: <SiAxios />, name: 'Axios', color: '#5A29E4' },
    { icon: <FaBootstrap />, name: 'Bootstrap', color: '#7952B3' },
    { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
    { icon: <SiPhp />, name: 'PHP', color: '#777BB4' },
    { icon: <SiCodeigniter />, name: 'CodeIgniter', color: '#EF4223' },
    { icon: <SiXampp />, name: 'XAMPP', color: '#FB7A24' },
    { icon: <FaJava />, name: 'Java', color: '#007396' },
    { icon: <SiAuth0 />, name: 'Auth0', color: '#EB5424' },
    { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
    { icon: <SiPostman />, name: 'Postman', color: '#FF6C37' },
    { icon: <FaTrello />, name: 'Trello', color: '#0079BF' },
    { icon: <FaRobot />, name: 'Antigravity', color: '#00D8FF' },
    { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
    { icon: <SiHtml5 />, name: 'HTML5', color: '#E34F26' },
    { icon: <SiCss3 />, name: 'CSS3', color: '#1572B6' },
];

function LogosVite() {
    return (
        <div className="logos-slider-container mb-5">
            <h3 className="text-center mb-4 section-title" style={{ fontSize: '1.5rem', opacity: 0.8 }}>Tecnologías</h3>
            <div className="slider-track-container">
                <div className="slider-track">
                    {/* First set of logos */}
                    {techs.map((tech, index) => (
                        <div key={`tech-${index}`} className="tech-slide">
                            <div className="tech-icon" style={{ color: tech.color }}>
                                {tech.icon}
                            </div>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {techs.map((tech, index) => (
                        <div key={`tech-dup-${index}`} className="tech-slide">
                            <div className="tech-icon" style={{ color: tech.color }}>
                                {tech.icon}
                            </div>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}

export default LogosVite