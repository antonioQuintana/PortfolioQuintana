import { useState } from "react";
import "./CtesWheels.css";
import Home from "./Home";
import AppNavbar from "./AppNavbar";
import Productos from "./Productos";

import Carrito from "./Carrito";
import ListaAdmin from "./ListaAdmin";
import ProductForm from "./productForm";

// Contexto simulado para el enrutamiento interno
import { createContext, useContext } from "react";

const NavigationContext = createContext();

export const useInternalNavigation = () => useContext(NavigationContext);

function MainCtesWheels({ standalone = false, fullscreenRef }) {
    const [currentPath, setCurrentPath] = useState("/");

    const navigate = (path) => {
        setCurrentPath(path);
    };

    const renderPage = () => {
        switch (currentPath) {
            case "/":
                return <Home />;
            case "/tienda":
                return <Productos />;
            case "/carrito":
                return <Carrito />;
            case "/admin":
                return <ListaAdmin />;
            case "/admin/nuevo":
                return <ProductForm />;
            default:
                return <Home />;
        }
    };

    return (
        <NavigationContext.Provider value={{ currentPath, navigate, standalone, fullscreenRef }}>
            <AppNavbar />
            {renderPage()}
        </NavigationContext.Provider>
    );
}

export default MainCtesWheels;