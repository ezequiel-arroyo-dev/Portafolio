import Navbar from "./components/Navbar";
import { CardHability } from "./components/Card";

function App() {
  return (
    <>
      <header className="App-header">
        <Navbar />
        <section>
          <div className="info">
            <h1 className="title">Ezequiel Arroyo</h1>
            <h3 className="subtitle">Front-end</h3>
            <p className="sobreMi">
              Desarrollador web autodidacta especializado en React y TypeScri.
              Mi enfoque está en crear soluciones elegantes y eficientes que
              resuelvan problemas del mundo real.
            </p>
          </div>
          <div className="perfil">
            <img src="../public/perfil.jpg" alt="perfil" />
          </div>
        </section>
      </header>
      <main>
        <section className="habilidades">
          <h2 className="title">Habilidades</h2>
          <div className="habilidadesContainer">
            <CardHability prop="HTML" />
            <CardHability prop="CSS" />
            <CardHability prop="JavaScript" />
            <CardHability prop="TypeScript" />
            <CardHability prop="React" />
            <CardHability prop="Git" />
            <CardHability prop="GitHub" />
          </div>
        </section>
        <section className="proyectos">
          <h2 className="title">Proyectos</h2>
          <div className="proyectos-container"></div>
        </section>
      </main>

      <footer>
        <section className="contacto">
          <h2 className="title">Contacto</h2>
          <form action="" method="post" className="letter">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Mensaje"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </footer>
    </>
  );
}

export default App;
