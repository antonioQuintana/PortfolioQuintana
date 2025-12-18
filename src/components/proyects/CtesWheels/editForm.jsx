import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CardComp from './card/CardComp';
import productsData from './FakeDb';

/**
 * Componente para editar productos (Demo Frontend-Only)
 */
const EditForm = ({ _id, onProductUpdated }) => {
    const preset_name = "CtesWheels";
    const cloud_name = "dhatmlle3";

    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [createdProduct, setCreatedProduct] = useState(null);
    const [productData, setProductData] = useState({});

    useEffect(() => {
        if (_id) {
            const productToEdit = productsData.find(p => p._id === _id);
            if (productToEdit) {
                setProductData({ ...productToEdit }); // Clone to avoid direct mutation before save
                setImage(productToEdit.imgDir);
            }
        }
    }, [_id]);

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
                alert('Error al subir imagen (usando anterior o placeholder)');
            }
        }

        const finalProductData = {
            ...productData,
            imgDir: imageUrl || productData.imgDir
        };

        // Simular Update en FakeDb
        const index = productsData.findIndex(p => p._id === _id);
        if (index !== -1) {
            productsData[index] = finalProductData;
        }

        setCreatedProduct(finalProductData);
        setLoading(false);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        if (onProductUpdated) {
            onProductUpdated(); // Notificar al padre para recargar
        }
    };

    return (
        <div className="container">
            <div className="card shadow-sm p-3">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
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
                            rows="2"
                            value={productData.description || ''}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                    </div>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <label htmlFor="price" className="form-label">Precio</label>
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
                        <div className="col-6 mb-3">
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
                        <label htmlFor="imgDir" className="form-label">Imagen</label>
                        <input
                            type="file"
                            className="form-control form-control-sm"
                            id="imgDir"
                            name="imgDir"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        {image && (
                            <div className="mt-2 text-center">
                                <img src={image} alt="Preview" style={{ height: '100px' }} />
                            </div>
                        )}
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Guardando...' : 'Guardar Cambios'}
                        </button>
                    </div>
                </form>
            </div>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Cambios Guardados</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <p>El producto ha sido actualizado.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleCloseModal}>
                        Aceptar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default EditForm;