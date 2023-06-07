// import { Link } from "react-router-dom";
import { Menubar } from "primereact/menubar";
// import styled from "styled-components";
// import BoxImproLogo from "../../assets/boximpro-logo.png";

// const HomeLogoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   @media (max-width: 425px) {
//     margin-right: 10px;
//   }
// `;

// const HomeLogo = styled.img`
//   width: 100px;
//   height: 100px;
// `;

// const StyledLink = styled(Link)`
//   margin-right: 0.5rem;
//   // text-decoration: none;
//   font-weight: bold;
//   font-size: 18px;
//   @media (max-width: 767px) {
//     font-size: 10px;
//   }
// `;

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
        <nav>
          {/* <Link to='/'>
            <HomeLogoContainer>
              <HomeLogo src={BoxImproLogo} />
            </HomeLogoContainer>
          </Link>
          <StyledLink to='/specialists'>Catégories d'impro</StyledLink>
          <StyledLink to='/exercices'>Exercices d'impro</StyledLink> */}
          <ul>
            <Menubar model={navlist} />
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
