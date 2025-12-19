import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="row text-white my-4">
                    <h3 className="text-center">Contacta con nosotros</h3>
                    <p className="text-center">
                        Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.
                    </p>
                    <h6 className="text-center">Creador de la página web:</h6>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md my-4" style={{ maxWidth: '300px' }}>
                            <div className="card h-100 shadow">
                                <a href="#" target="_blank" rel="noreferrer">
                                    <img src="f1ln-assets/img/antonio_quintana.jpg" className="card-img-top" alt="Antonio Quintana" />
                                </a>
                                <div className="card-body">
                                    <h5 className="card-title">Antonio Quintana</h5>
                                    <p className="card-text mb-1">
                                        <strong>Email:</strong> quintanarijoan@gmail.com
                                    </p>
                                    <p className="card-text mb-1">
                                        <strong>Teléfono:</strong> 3794-395882
                                    </p>
                                    <p className="card-text mb-1">
                                        <strong>Linkedin: </strong>
                                        <a href="https://www.linkedin.com/in/ricardo-quintana-7b4287196" target="_blank" rel="noreferrer">
                                            Antonio Quintana
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-3">
                <div className="row">
                    <h5 className="text-center text-white">
                        Completa el siguiente formulario en linea si desea recibir más informacion
                    </h5>
                </div>
            </div>

            {/* Formulario en linea */}
            <div className="container mb-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const email = e.target.elements.inputEmail.value;
                            const isChecked = e.target.elements.checkInfo.checked;

                            if (email && email.includes('@') && isChecked) {
                                alert("Estaremos en contacto con ud");
                            } else {
                                alert("Por favor ingrese un correo válido y asegúrese de querer recibir info");
                            }
                        }} className="d-flex align-items-center justify-content-center border rounded-1 bg-light p-4 shadow mx-auto">
                            <input
                                type="email"
                                className="form-control me-2"
                                id="inputEmail"
                                placeholder="Correo electronico"
                                style={{ maxWidth: '250px' }}
                                required
                            />
                            <div className="form-check me-2">
                                <input className="form-check-input" type="checkbox" id="checkInfo" />
                                <label className="form-check-label text-black" htmlFor="checkInfo">
                                    Deseo recibir info
                                </label>
                            </div>
                            <button type="submit" className="btn btn-success">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
