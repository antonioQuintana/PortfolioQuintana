import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const Home = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                <h3 className="text-center text-white">Página de Noticias de Fórmula 1</h3>
            </div>
            <div className="container fluid my-3 text-center w-75">
                <LiteYouTubeEmbed id="zdbjhZdBH5s" />
            </div>
            <div className="row my-3">
                <div className="border rounded-4 bg-light p-2 shadow-lg mx-auto" style={{ maxWidth: '1100px' }}>
                    <div id="carouselExampleAutoplaying" className="carousel slide border" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/f1ln-assets/img/inicio1.jpg" className="d-block w-100 rounded-3" alt="Inicio 1" />
                            </div>
                            <div className="carousel-item">
                                <img src="/f1ln-assets/img/inicio2.jpg" className="d-block w-100 rounded-3" alt="Inicio 2" />
                            </div>
                            <div className="carousel-item">
                                <img src="/f1ln-assets/img/inicio3.jpg" className="d-block w-100 rounded-3" alt="Inicio 3" />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
