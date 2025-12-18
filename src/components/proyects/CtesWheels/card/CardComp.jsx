import { Card, Button } from 'react-bootstrap';
import './CardStyle.css';
import cart from '../FakeCart';
/**
 * Componente que muestra la tarjeta de un producto que recibe como prop
 * Renderiza la tarjeta de un producto con su imagen, nombre, categoria, stock y precio
 * 
 */
function CardComp({ product }) {
    const handleAddToCart = () => {
        const existingItem = cart.find(item => item._id === product._id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        alert('Producto agregado al carrito!');
    };

    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={product.imgDir}
                style={{ height: '200px', objectFit: 'contain', padding: '10px' }}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-muted small">
                    {product.category} - Quedan {product.stock}
                </Card.Text>
                <Card.Text>
                    {product.description.length > 40
                        ? product.description.substring(0, 40) + '...'
                        : product.description}
                </Card.Text>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 text-price-ctes">${product.price}</h5>
                    {product.stock > 0
                        ? <Button variant="primary" size="sm" onClick={handleAddToCart}>
                            Agregar +
                        </Button>
                        : <button className="btn btn-warning btn-sm btn-ctes-outstock" disabled>
                            Sin Stock
                        </button>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardComp;