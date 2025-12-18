import React, { createContext, useContext, useState } from 'react';

const F1NavigationContext = createContext();

export const useF1Navigation = () => useContext(F1NavigationContext);

export const F1NavigationProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('/');

    const navigate = (path) => {
        setCurrentPage(path);
        // Scroll to top of F1LN container if needed, or just efficient re-render
    };

    return (
        <F1NavigationContext.Provider value={{ currentPage, navigate }}>
            {children}
        </F1NavigationContext.Provider>
    );
};
