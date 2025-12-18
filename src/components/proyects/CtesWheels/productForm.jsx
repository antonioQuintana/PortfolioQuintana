import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CardComp from './card/CardComp';
import productsData from './FakeDb'; // Import database
import { useInternalNavigation } from "./MainCtesWheels";

/**
 * Componente que muestra el formulario de carga de productos
 * Versión Demo Frontend-Only
 */
const ProductForm = () => {
    const { navigate } = useInternalNavigation();
    const preset_name = "CtesWheels";
    const cloud_name = "dhatmlle3";

    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [createdProduct, setCreatedProduct] = useState(null);
    const [productData, setProductData] = useState({});

    const uploadImageToCloudinary = async (file) => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', preset_name);

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                method: 'POST',
                body: data
            });

            const fileData = await response.json();
            return fileData.secure_url;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            const previewUrl = URL.createObjectURL(file);
            setImage(previewUrl);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let newValue;
        (name === 'price' || name === 'stock')
            ? newValue = parseFloat(value)
            : newValue = value;

        setProductData({
            ...productData,
            [name]: newValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let imageUrl = '';

        if (selectedFile) {
            try {
                imageUrl = await uploadImageToCloudinary(selectedFile);
            } catch (error) {
                alert('Error al subir la imagen (Simulado: se usará placeholder si falla).');
                // En demo podríamos no fallar bloqueantemente
            }
        }

        const newId = (productsData.length + 1).toString(); // Generar ID simple
        const finalProductData = {
            ...productData,
            _id: newId,
            imgDir: imageUrl || productData.imgDir || "https://placehold.co/600x400"
        };

        // Simular Post
        productsData.push(finalProductData);

        setCreatedProduct(finalProductData);
        setLoading(false);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/admin'); // Volver a la lista
    };

    return (
        <div className="container mt-5 mb-5">
            <Button variant="outline-secondary" onClick={() => navigate('/admin')} className="mb-3">
                &larr; Volver
            </Button>
            <div className="card shadow p-4">
                <h2 className="card-title text-center mb-4">Cargar Producto (Demo)</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre del Producto</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={productData.name || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Descripción</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows="3"
                            value={productData.description || ''}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="price" className="form-label">Precio</label>
                            <div className="input-group">
                                <span className="input-group-text">$</span>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    name="price"
                                    value={productData.price || ''}
                                    onChange={handleInputChange}
                                    min="0"
                                    step="0.01"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="stock" className="form-label">Stock</label>
                            <input
                                type="number"
                                className="form-control"
                                id="stock"
                                name="stock"
                                value={productData.stock || ''}
                                onChange={handleInputChange}
                                min="0"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Categoría</label>
                        <input
                            type="text"
                            className="form-control"
                            id="category"
                            name="category"
                            value={productData.category || ''}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="imgDir" className="form-label">Imagen del Producto</label>
                        <input
                            type="file"
                            className="form-control"
                            id="imgDir"
                            name="imgDir"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        {image && (
                            <div className="mt-3 text-center">
                                <img
                                    src={image}
                                    alt="Vista previa"
                                    className="img-thumbnail"
                                    style={{ height: '350px' }}
                                />
                            </div>
                        )}
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                            {loading ? 'Cargando...' : 'Guardar Producto'}
                        </button>
                    </div>
                </form>
            </div>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>¡Producto Creado!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-center mb-3">El producto se ha guardado en memoria temporalmente.</p>
                    {createdProduct && (
                        <div className="d-flex justify-content-center">
                            <div style={{ width: '18rem' }}>
                                <CardComp product={createdProduct} />
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Volver al Listado
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProductForm;