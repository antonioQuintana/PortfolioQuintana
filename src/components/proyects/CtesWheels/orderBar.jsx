import { Dropdown } from "react-bootstrap"


function OrderBar({ onSort }) { // Recibimos la funcion por props

    const handleSort = (eventKey) => {
        if (onSort) onSort(eventKey);
    }
    return (
        <Dropdown className="mb-3">
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                Ordenar
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSort('asc')}>Precio - menor a mayor</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSort('desc')}>Precio - mayor a menor</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
//Se intentó con select y value pero no funcionaba, solucion onClick en cada boton

export default OrderBar
