import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useF1Navigation } from '../context/NavigationContext';

const Login = () => {
    const { login } = useAuth();
    const { navigate } = useF1Navigation();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulation of login logic
        if (!email || !pass) {
            setError('Por favor complete todos los campos');
            return;
        }

        // Logic to simulate admin vs user based on email content for demo purposes
        // In a real app, this would be an API call
        if (email.toLowerCase().includes('admin')) {
            login({ name: 'Admin User', email }, 1);
            navigate('/admin');
        } else {
            login({ name: 'Usuario Ejemplo', email }, 2);
            navigate('/');
        }
    };

    return (
        <section id="login" className="container my-5">
            <h3 className="text-center text-white mb-4">Iniciar sesión</h3>
            {error && (
                <div className="alert alert-warning">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="border rounded-3 bg-light p-4 shadow mx-auto" style={{ maxWidth: '500px' }}>
                <div className="mb-3">
                    <label htmlFor="email" className="text-black">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="correo.ejemplo@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pass" className="text-black">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="pass"
                        name="pass"
                        placeholder="***********"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success w-100 fw-bold">Ingresar</button>
                <button type="button" className="btn btn-secondary w-100 mt-2" onClick={() => navigate('/')}>Cancelar</button>
            </form>
        </section>
    );
};

export default Login;
