import React, { useState } from 'react';
import { useF1Navigation } from '../context/NavigationContext';

const Register = () => {
    const { navigate } = useF1Navigation();
    const [formData, setFormData] = useState({
        nombre_ape: '',
        telefono: '',
        email: '',
        pass: '',
        nacimiento: '',
        acepta_terminos: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { nombre_ape, telefono, email, pass, nacimiento, acepta_terminos } = formData;

        if (!nombre_ape || !telefono || !email || !pass || !nacimiento) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        if (acepta_terminos !== '1') {
            alert('Debes aceptar los términos y condiciones para registrarte.');
            return;
        }

        console.log('Register Data:', formData);
        alert('Registro exitoso (Simulado)');
        navigate('/login');
    };

    return (
        <section id="registrarse" className="container my-5">
            <h3 className="text-center text-white mb-4">Registrarse</h3>

            <form onSubmit={handleSubmit} className="border rounded-3 bg-light p-4 shadow mx-auto" style={{ maxWidth: '500px' }}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="text-black">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre_ape" placeholder="Ej. Antonio Quintana" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefono" className="text-black">Teléfono</label>
                    <input type="number" className="form-control" id="telefono" name="telefono" placeholder="Ej. 3794-000000" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="correo" className="text-black">E-mail</label>
                    <input type="email" className="form-control" id="correo" name="email" placeholder="correo.ejemplo@gmail.com" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="contraseña" className="text-black">Crea tu contraseña</label>
                    <input type="password" className="form-control" id="contraseña" name="pass" placeholder="***********" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="fecha" className="text-black">Fecha de nacimiento</label>
                    <input type="date" className="form-control" id="fecha" name="nacimiento" max="2025-12-31" min="1900-01-01" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="text-black">¿Aceptas términos y condiciones?</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input mx-2" type="radio" name="acepta_terminos" id="si" value="1" onChange={handleChange} />
                        <label className="form-check-label text-black" htmlFor="si">Sí</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input mx-2" type="radio" name="acepta_terminos" id="no" value="0" onChange={handleChange} />
                        <label className="form-check-label text-black" htmlFor="no">No</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-bold">Enviar</button>
                <button type="reset" className="btn mt-2 btn-secondary w-100" onClick={() => navigate('/')}>Cancelar</button>
            </form>
        </section>
    );
};

export default Register;
