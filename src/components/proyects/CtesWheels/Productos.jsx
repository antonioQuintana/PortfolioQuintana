import { useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import CardComp from './card/CardComp'
import ProductsPag from './ProductsPag';
import OrderBar from './orderBar';
import products from './FakeDb';
/**
 * Componente que muestra el catalogo de productos mediante los cards de cada uno
 * recupera el estado del copyProducts y currentPage
 */

function Productos() {

    // 1. Definir items por página
    const [itemsPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);

    // 4. Copia local para ordenar sin mutar el original permanentemente (aunque FakeDb es mutable)
    const [allProducts, setAllProducts] = useState([...products]);

    // 5. Función de ordenamiento
    const handleSort = (order) => {
        const sorted = [...allProducts].sort((a, b) => {
            if (order === 'asc') return a.price - b.price;
            if (order === 'desc') return b.price - a.price;
            return 0;
        });
        setAllProducts(sorted);
        setCurrentPage(1); // Volver a pagina 1
    };

    // 2. Calcular índices para el slice (usando allProducts en lugar de products)
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // 3. Obtener los productos actuales
    const currentProducts = allProducts.slice(indexOfFirstItem, indexOfLastItem);

    // 6. Función para cambiar de página
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    if (products.length === 0) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                <Spinner animation="border" variant="primary" />
            </Container>
        );
    }

    return (
        <Container className="py-5">
            <h2 className="text-center mb-2 text-hw-orange" style={{ fontFamily: 'var(--font-racing)' }}>
                Catálogo Oficial
            </h2>
            <OrderBar onSort={handleSort} />
            <Row>
                {currentProducts.map(product => (
                    <Col key={product._id} md={4} lg={3} className="mb-4">
                        <CardComp product={product} />
                    </Col>
                ))}
            </Row>
            <ProductsPag
                itemsPerPage={itemsPerPage}
                totalItems={allProducts.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </Container>
    )
}
export default Productos
