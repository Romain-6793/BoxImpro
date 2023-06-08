import "./Header.css";
import { Menubar } from "primereact/menubar";
import BoxImproLogo from "../../assets/boximpro-logo.png";

function Header() {
  // Typer les props de lien

  const navlist = [
    {
      label: "Accueil",
      icon: "pi pi-fw pi-home",
      command: () => {
        window.location.href = "/";
      },
    },
    {
      label: "Catégories",
      icon: "pi pi-fw pi-bookmark",
      command: () => {
        window.location.href = "/specialists";
      },
    },
    {
      label: "Exercices",
      icon: "pi pi-fw pi-bookmark",
      command: () => {
        window.location.href = "/exercices";
      },
    },
  ];

  return (
    <div>
      <header>
        <nav className='nav'>
          <img src={BoxImproLogo} className='logo' />
          <ul>
            <Menubar model={navlist} />
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
