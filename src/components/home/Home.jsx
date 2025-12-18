import AboutMe from "../aboutMe/AboutMe"
import Header from "../header/Header"
import ProyectSection from "../proyects/ProyectSection"

function Home() {
    return (
        <>
            <section id="home">
                <Header />
            </section>
            <section id="about-me">
                <AboutMe />
            </section>
            <section id="projects">
                <ProyectSection />
            </section>
        </>
    )
}

export default Home