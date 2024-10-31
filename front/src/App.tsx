import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header className="App-header">
        <Navbar />
        <section>
          <div className="info">
            <h1 className="title">Ezequiel Arroyo</h1>
            <h4 className="subtitle">Front-end</h4>
            <h5 className="sobreMi">
              Desarrollador web autodidacta especializado en React y TypeScri.
              Mi enfoque está en crear soluciones elegantes y eficientes que
              resuelvan problemas del mundo real.
            </h5>
          </div>
          <div className="perfil">
            <img src="../public/perfil.png" alt="perfil" />
          </div>
        </section>
      </header>
      <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum
        reiciendis, perferendis fugit dolorum quas ratione odio, soluta iusto ex
        aliquid ipsa, veritatis voluptas illo porro. Tenetur tempore nam
        quos.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Odio sapiente expedita molestiae magni tempora culpa ad exercitationem
        voluptatibus necessitatibus, mollitia cum eveniet atque, id nam libero
        pariatur optio. Voluptates, recusandae.
      </main>

      <footer></footer>
    </>
  );
}

export default App;
