/**
 * Componente de paginación que va dejabo de el catalogo de productos
 */
function ProductsPag({ itemsPerPage, totalItems, paginate, currentPage }) {
    const pageNumbers = []; //array para poder hacer luego un map

    // Calcular la cantidad total de páginas
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example" className="mt-4">
            <ul className="pagination justify-content-center">
                {/* Botón Previous */}
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}> {/* Si la pagina actual es 1, deshabilita el boton retroceder */}
                    <button className="page-link" onClick={() => paginate(currentPage - 1)}>
                        &laquo;
                    </button>
                </li>

                {/* Números de página */}
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}> {/* en la pagina actual, active lo pone de color azul */}
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}

                {/* Botón Next */}
                <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>{/*desactiva el boton siguiente si la pagina actual es la ultima */}
                    <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                        &raquo;
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default ProductsPag;