import { Routes, Route } from 'react-router-dom'
import './App.css'
import LogosVite from './components/logosVite'
import Home from './components/home/Home'
import AppNavbar from './components/appNavbar/AppNavbar'
import AppFooter from './components/appFooter/AppFooter'
import MainCtesWheels from './components/proyects/CtesWheels/MainCtesWheels'

const PortfolioLayout = ({ children }) => (
  <>
    <AppNavbar />
    {children}
    <AppFooter />
  </>
);

function App() {
  return (
    <Routes>
      {/* Standalone Project Route (Fullscreen) */}
      <Route path="/project/cteswheels/*" element={<MainCtesWheels standalone={true} />} />

      {/* Standard Portfolio Routes */}
      <Route path="*" element={
        <PortfolioLayout>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <LogosVite />
              </>
            } />
          </Routes>
        </PortfolioLayout>
      } />
    </Routes>
  )
}

export default App
