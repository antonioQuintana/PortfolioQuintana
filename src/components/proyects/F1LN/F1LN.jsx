import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';
import Pilots from './pages/Pilots';
import { AuthProvider } from './context/AuthContext';
import { F1NavigationProvider, useF1Navigation } from './context/NavigationContext';
import './index.css';

const F1LNContent = () => {
  const { currentPage } = useF1Navigation();

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <Home />;
      case '/contact':
        return <Contact />;
      case '/login':
        return <Login />;
      case '/register':
        return <Register />;
      case '/admin':
        return <Admin />;
      case '/pilots':
        return <Pilots />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {renderPage()}
      <Footer />
    </div>
  );
};

function F1LN() {
  return (
    <div className="f1ln-app-container">
      <AuthProvider>
        <F1NavigationProvider>
          <F1LNContent />
        </F1NavigationProvider>
      </AuthProvider>
    </div>
  );
}

export default F1LN;
