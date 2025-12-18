import { Container, Table, Button, Card } from 'react-bootstrap';

import { useState } from 'react';
import cart from './FakeCart';


import { useInternalNavigation } from './MainCtesWheels';

/**
 * Componente que muestra el carrito de compras del usuario
 * Renderiza la tabla de productos en el carrito, el total y los botones de vaciar carrito y finalizar compra
 * Se simula una ventana de pago que aun no tiene funcionalidad
 */
const Carrito = () => {
    const { navigate } = useInternalNavigation();
    // Inicializar estado con el contenido actual de FakeCart
    const [cartItems, setCartItems] = useState([...cart]);

    // Usuario simulado para permitir la "compra"
    const loguedUser = { _id: '1', name: 'Usuario Demo' };

    const [finalizado, setFinalizado] = useState(false);

    // Calcular total basado en el estado local
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleRemove = (_id) => {
        // Encontrar índice en el array original exportado para mantener sincronía
        const index = cart.findIndex(item => item._id === _id);
        if (index !== -1) {
            cart.splice(index, 1); // Modificar el cart original
            setCartItems([...cart]); // Actualizar estado local
        }
    };

    const handleClear = () => {
        cart.length = 0; // Vaciar array original
        setCartItems([]); // Actualizar estado local
    };

    const handleConfirm = () => {
        if (confirm("¿Confirmar compra simulada? (Esto es una demo, no se realizará ningún cargo)")) {
            alert("¡Compra simulada con éxito! Gracias por probar la demo.");
            setFinalizado(true);
            cart.length = 0;
            setCartItems([]);
        }
    }

    if (cartItems.length === 0) {
        return (
            <>
                {finalizado ? (
                    <div className="text-center mt-5"><Button variant="warning" size="lg">Compra finalizada</Button></div>
                ) : null}
                <Container className="py-3 text-center">
                    <h2>Tu carrito está vacío</h2>
                    <Button variant="primary" className="mt-3" onClick={() => navigate('/tienda')}>Ir a la Tienda</Button>
                </Container>
            </>
        );
    }

    return (
        <Container className="py-5">
            <h2 className="mb-4 text-hw-orange">Tu Carrito</h2>
            <Card className="p-3 shadow-sm">
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cant.</th>
                            <th>Subtotal</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item._id}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={item.imgDir}
                                            alt={item.name}
                                            style={{ width: '50px', marginRight: '10px' }}
                                        />
                                        {item.name}
                                    </div>
                                </td>
                                <td>${item.price}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price * item.quantity}</td>
                                <td>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleRemove(item._id)}
                                    >
                                        X
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <Button variant="outline-danger" onClick={handleClear}>Vaciar Carrito</Button>
                    <div className="text-end">
                        <h4>Total: <span className="text-hw-blue">${total.toFixed(2)}</span></h4>
                        {/* Siempre mostramos el botón de finalizar ya que tenemos usuario simulado */}
                        <Button variant="success" size="lg" className="mt-2" onClick={handleConfirm}>Finalizar Compra</Button>
                    </div>
                </div>
            </Card>
        </Container>
    );
};

export default Carrito;