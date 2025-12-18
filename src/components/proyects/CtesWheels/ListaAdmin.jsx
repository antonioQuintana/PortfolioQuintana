import { Modal, Button, Container, Card, Table, Row } from "react-bootstrap";
import { useState } from "react";
import EditForm from "./editForm"; // Verify path
import productsData from "./FakeDb"; // Import database
import { useInternalNavigation } from "./MainCtesWheels";

/**
 * Componente que muestra la lista de productos
 * Versión Demo Frontend-Only
 */
function ListaAdmin() {
    const { navigate, fullscreenRef } = useInternalNavigation();

    // Estado local inicializado con la "base de datos" falsa
    const [products, setProducts] = useState([...productsData]);
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const handleDelete = (_id) => {
        if (confirm("¿Estas seguro de eliminar este producto? (Se eliminará de la sesión actual)")) {
            const index = productsData.findIndex(p => p._id === _id);
            if (index !== -1) {
                productsData.splice(index, 1); // Eliminar del "backend"
                setProducts([...productsData]); // Actualizar UI
                alert("Producto eliminado");
            }
        }
    };

    const handleEdite = (_id) => {
        setEditingId(_id);
        setShowModal(true);
    };

    // Callback para refrescar la lista después de editar
    const handleProductUpdated = () => {
        setProducts([...productsData]);
        setShowModal(false);
    };

    return (
        <Container className="py-5">
            <Row>
                <h4 className="mb-4 col-md-2 text-hw-orange">Productos</h4>
                <Button
                    variant="success"
                    size="lg"
                    className="col-md-2 mx-5 mb-4"
                    onClick={() => navigate('/admin/nuevo')}
                >
                    Nuevo Producto
                </Button>
            </Row>
            <Card className="p-3 shadow-sm" style={{ backgroundColor: 'rgba(0,0,0,0.4)', borderColor: 'var(--hw-blue)' }}>
                <Table responsive hover className="admin-table mb-0">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Categoria</th>
                            <th>Stock</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(item => (
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
                                <td>{item.category}</td>
                                <td>{item.stock}</td>
                                <td>
                                    <Button
                                        variant="success"
                                        size="sm"
                                        onClick={() => handleEdite(item._id)}
                                    >
                                        ✏️
                                    </Button>
                                    <Button
                                        className="mx-2"
                                        variant="danger"
                                        size="sm"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        X
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>

            <Modal show={showModal} onHide={() => setShowModal(false)} container={fullscreenRef?.current || document.body}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Pasamos productsData y un callback de actualización */}
                    {editingId && (
                        <EditForm
                            _id={editingId}
                            onProductUpdated={handleProductUpdated}
                        />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default ListaAdmin;