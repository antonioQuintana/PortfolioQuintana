import { Container, Row, Col, Button } from 'react-bootstrap';
import CardComp from './card/CardComp';
import products from './FakeDb';
import { useInternalNavigation } from "./MainCtesWheels";

const Home = () => {
    const { navigate } = useInternalNavigation();
    const productsCopia = [...products];
    productsCopia.sort(() => Math.random() - 0.5);
    const featuredProducts = productsCopia.slice(0, 3);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <div className="hero-section text-center text-white py-5" style={{
                background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=2070&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Container>
                    <h1 className="display-2 mb-4 hero-title">
                        <span className="highlight">VELOCIDAD</span> SIN LÍMITES
                    </h1>
                    <p className="lead mb-5 fs-3 hero-subtitle">La colección más exclusiva de Hot Wheels en Corrientes.</p>

                    <Button
                        size="lg"
                        className="px-5 py-3 fs-4 shadow-lg btn-ctes-primary"
                        onClick={() => navigate('/tienda')}
                    >
                        VER CATÁLOGO COMPLETO
                    </Button>
                </Container>
            </div>

            {/* Featured Section */}
            <Container className="py-5 text-center">
                <h2 className="section-title">
                    DESTACADOS DE LA SEMANA
                </h2>
                <Row>
                    {featuredProducts.map(product => (
                        <Col key={product._id} md={4} className="mb-4">
                            <CardComp product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;