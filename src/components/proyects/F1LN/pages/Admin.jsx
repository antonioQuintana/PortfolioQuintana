import React from 'react';
import { useF1Navigation } from '../context/NavigationContext';

const Admin = () => {
    const { navigate } = useF1Navigation();

    // Mock users data
    const users = [
        { id: 1, name: 'Juan Perez', email: 'juan@example.com', role: 'User' },
        { id: 2, name: 'Maria Gomez', email: 'maria@example.com', role: 'Admin' },
        { id: 3, name: 'Carlos Lopez', email: 'carlos@example.com', role: 'User' },
        { id: 4, name: 'Laura Martinez', email: 'laura@example.com', role: 'User' },
        { id: 5, name: 'Pedro Rodriguez', email: 'pedro@example.com', role: 'Admin' },
        { id: 6, name: 'Ana Fernandez', email: 'ana@example.com', role: 'User' },
    ];

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-white">Panel de Administración de Usuarios</h2>
                <button className="btn btn-secondary" onClick={() => navigate('/')}>Volver al Inicio</button>
            </div>

            <div className="table-responsive bg-light p-4 rounded shadow">
                <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <span className={`badge ${user.role === 'Admin' ? 'bg-danger' : 'bg-primary'}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-warning me-2" onClick={() => alert(`Editar usuario ${user.name}`)}>
                                        <i className="bi bi-pencil-fill"></i> Editar
                                    </button>
                                    <button className="btn btn-sm btn-danger" onClick={() => alert(`Eliminar usuario ${user.name}`)}>
                                        <i className="bi bi-trash-fill"></i> Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
