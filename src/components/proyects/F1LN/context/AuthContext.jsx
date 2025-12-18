import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // 0 = guest, 1 = admin, 2 = user
    const [profile, setProfile] = useState(0);
    const [user, setUser] = useState({ name: '', email: '' });

    const login = (userData, profileId) => {
        setUser(userData);
        setProfile(profileId);
    };

    const logout = () => {
        setUser({ name: '', email: '' });
        setProfile(0);
    };

    return (
        <AuthContext.Provider value={{ profile, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
