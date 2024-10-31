import Button from "./Button";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navBar">
      <a className="logo" href="https://www.linkedin.com/feed/">
        <div></div>
        <img src="../../public/logo.png" alt="logo" />
      </a>
      <div className="menu">
        <Button>Habilidades </Button>
        <Button>Proyectos</Button>
        <Button>Contacto</Button>
      </div>
    </div>
  );
}

export default Navbar;
