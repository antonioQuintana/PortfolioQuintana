import "./assets/styleMyWeb.css"
import logo from "./assets/logo.png"

function PrimeraWeb() {
    return (
        <div className="primera-web-container">
            <nav>
                <a href="#header-home" className="logo">Biografias</a>
                <div className="navclass">
                    <a href="#sobre-nosotros" className="nav-link">Sobre nosotros</a>
                    <a href="#banda-semanal" className="nav-link">Banda semanal</a>
                    <a href="#imagenes" className="nav-link">Imagenes</a>
                    <a href="#registrarse" className="nav-link">Registrarse</a>
                </div>
                <div className="drop-menu">
                    <p className="dropbtn">Menú</p>
                    <div className="dropdown-content">
                        <a href="#sobre-nosotros">Sobre nosotros</a>
                        <a href="#banda-semanal">Banda semanal</a>
                        <a href="#imagenes" className="nav-link">Imagenes</a>
                        <a href="#registrarse">Registrarse</a>
                    </div>
                </div>
            </nav>
            <header id="header-home">
                <img className="header-img" src={logo} alt="Logo" />
                <div>
                    <h1>Web de Antonio Quintana</h1>
                    <h3>Curso de programacion fullstack</h3>
                    <h4>Navega en esta web para conocer a tus bandas favoritas</h4>
                </div>
            </header>
            <hr />
            <section id="sobre-nosotros">
                <h3 className="section-title">Sobre nosostros</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                    sapiente aliquam pariatur tempora optio laudantium deserunt velit cum,
                    illo inventore perspiciatis ex minus animi vitae obcaecati dolorem
                    maiores expedita mollitia, a molestias. Est enim quibusdam ut animi sint
                    laboriosam modi magni suscipit voluptates, asperiores molestias
                    doloribus impedit ipsum iste, quae eos temporibus aperiam quo unde saepe
                    laudantium. Vel aperiam culpa dolorem nihil dicta quasi maxime sed,
                    quibusdam voluptatem, non, soluta porro aliquam quisquam voluptatum
                    pariatur sapiente eveniet vitae atque inventore ratione. Ex consequatur
                    reiciendis quam deleniti, exercitationem facere illo ipsa accusamus
                    magni magnam dolorum eaque culpa dicta non animi iusto placeat. Alias
                    quos impedit a dolorum natus non reprehenderit, porro, distinctio, velit
                    similique facere placeat neque. Natus nemo provident velit inventore
                    aperiam rem assumenda incidunt quod odio aut tenetur ea et, neque
                    temporibus, distinctio autem, totam suscipit blanditiis! Facere
                    accusantium sapiente dolore fugit maxime sit ab possimus adipisci quidem
                    nihil iusto, neque, dolorum nesciunt qui, quo optio voluptate totam
                    ullam ratione quos iure sequi odit doloribus. Quod vitae quo quam odio
                    quae maxime, possimus numquam! Dolor, possimus natus, enim quaerat
                    tenetur obcaecati explicabo ab aspernatur qui distinctio nulla hic
                    corporis debitis ut commodi ad dolorem mollitia? Fugiat alias nihil
                    numquam?
                </p>
            </section>

            <section id="banda-semanal">
                <h3 className="section-title">Banda semanal</h3>

                <div className="flex">
                    <div className="principal">
                        <h3>Indice</h3>
                        <ol>
                            <li>Primera clase</li>
                            <ul>
                                <li>Vimos la introducción</li>
                            </ul>
                            <li>Segunda clase</li>
                            <ul>
                                <li>Intro y descarga de VScode</li>
                            </ul>
                            <li>Tercera clase</li>
                            <ul>
                                <li>Cursiva</li>
                                <li>Negrita</li>
                                <li>Vinculos</li>
                            </ul>
                        </ol>
                        <p>
                            Aca estamos probando la utilizacion de
                            <span className="italic">"letras cursivas" </span>, tambien de
                            <span className="negrita">letras en negrita.</span>
                        </p>

                        <p>
                            <span className="celeste">Probando ahora background color</span>
                            <span className="fBlue"> y color de fuente</span>
                        </p>
                        <p className="custom-p2">A este parrafo le cambie el estilo desde el header</p>
                        <br />
                        <iframe
                            className="video"
                            src="https://www.youtube.com/embed/HhQ75Ax77E0?si=mOixR5TtMApg0ORb"
                            allowFullScreen
                            title="YouTube video"
                        ></iframe>
                        <p>¿De dónde es la banda "El Zar"?</p>
                        <p>📍Ciudad de origen: Buenos Aires.</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210147.47497977133!2d-58.598112915272836!3d-34.61543034455085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1728396513021!5m2!1ses-419!2sar"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps"
                        ></iframe>
                    </div>
                    <div>
                        <p>Aca probaremos la utlizacion de hipervínculos, por ejemplo:</p>
                        <ul>
                            <li>
                                Click
                                <a href="https://www.youtube.com/watch?v=HhQ75Ax77E0">aquí</a>
                                para escuchar una música
                            </li>
                            <br />
                            <div className="celeste">
                                <img
                                    className="imagen"
                                    src="https://i.scdn.co/image/ab67616d0000b273d55bc53daf6f06244ed01e9d"
                                    alt="Spotify"
                                />
                            </div>
                            <p>Probando insertar imagen.</p>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="imagenes">
                <h3 className="section-title">Imagenes</h3>
                <div className="img-section">
                    <div className="img-conteiner">
                        <img
                            src="https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0EepmU-default.jpg"
                            alt="El Zar Cover"
                        />
                        <div className="img-info">
                            <div className="overlay">
                                <p></p>
                                <h5>EL ZAR</h5>
                                <p>Imagen sacada de google</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="img-conteiner">
                        <img
                            src="https://cdn.rock.com.ar/wp-content/uploads/2023/04/el-zar-6.jpeg"
                            alt="El Zar Band"
                        />
                        <div className="img-info">
                            <div className="overlay">
                                <p></p>
                                <h5>EL ZAR</h5>
                                <p>Imagen sacada de google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="registrarse" className="registrarse-style">
                <h3 className="section-title">Registrarse</h3>
                <form method="post" onSubmit={(e) => e.preventDefault()}>
                    {/* method post hace que no se muestre la info del formulario en el link */}

                    <label className="style-label">
                        Nombre
                        <input
                            className="input-box"
                            type="text"
                            name="nombre"
                            placeholder="Ej. Antonio Quintana"
                        />
                    </label>
                    {/* label favorece la accesibilidad y es más representativa semanticamente */}
                    <label className="style-label">
                        Teléfono
                        <input
                            className="input-box"
                            type="number"
                            name="telefono"
                            placeholder="Ej. 3794-000000"
                        />
                    </label>

                    <label className="style-label">
                        E-mail
                        <input
                            className="input-box"
                            type="email"
                            name="correo-elec"
                            placeholder="correo.ejemplo@gmail.com"
                        />
                    </label>
                    <label className="style-label">
                        Crea tu contraseña
                        <input
                            className="input-box"
                            type="password"
                            name="contraseña"
                            placeholder="  ***********"
                        />
                    </label>
                    <label className="style-label">
                        De dónde sos?
                        <select className="input-box" name="nacionalidad" defaultValue="Argentina">
                            <option value="Argentina">Argentina</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Paraguay">Paraguay</option>
                        </select>
                    </label>
                    <label className="style-label">
                        Fecha de nacimiento <input className="input-box" type="date" />
                    </label>
                    <label className="style-label">Subí tu foto <input type="file" /> </label>
                    <label>
                        Porqué quieres suscribirte?
                        Por hobbie
                        <input className="mx-1" type="checkbox" name="suscripcion" value="hobbie" />
                        Por trabajo
                        <input className="mx-1" type="checkbox" name="suscripcion" value="trabajo" />
                        Por estudio
                        <input className="mx-1" type="checkbox" name="suscripcion" value="estudio" />
                    </label>
                    <br />
                    <label>
                        Aceptas terminos y condiciones? Si
                        <input className="mx-1"
                            type="radio"
                            name="term-cond"
                            value="si"
                        />
                        No<input className="mx-1" type="radio" name="term-cond" value="no" />
                    </label>
                    <br />
                    <button className="bottom-submit negrita" type="submit">Enviar</button>
                </form>
            </section>
            <section>
                <div style={{ overflowX: 'auto' }}>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Edad</th>
                                <th>Nacionalidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Antonio</td>
                                <td>25 años</td>
                                <td>Brasilero</td>
                            </tr>
                            <tr>
                                <td>Agostina</td>
                                <td>23 años</td>
                                <td>Argentina</td>
                            </tr>
                            <tr>
                                <td>Juanpedro</td>
                                <td>19 años</td>
                                <td>Chileno</td>
                            </tr>
                            <tr>
                                <td>JoseCarlos</td>
                                <td>21 años</td>
                                <td>Paraguayo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <footer>Derechos Reservados. ---------- Biografías 2024.</footer>
        </div>
    )
}

export default PrimeraWeb