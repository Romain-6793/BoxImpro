import styled from "styled-components";
import styleVar from "../../utils/style/style-variables";
import colors from "../../utils/style/colors";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import BoxImproLogo from "../../assets/boximpro-logo.png";

const StyledNav = styled.nav`
  width: ${styleVar.widthFull}%;
  .p-menubar {
    font-family: ${styleVar.fontFamily};
    height: ${styleVar.heightFull}px;
    background: ${colors.primary};
    color: ${colors.white};
    border: none;
  }
`;

const StyledLogo = styled.img`
  height: ${styleVar.heightFull}px;
  margin-left: 40px;
  margin-top: 16px;
`;

const StyledUl = styled.ul`
  width: ${styleVar.widthFull}%;
  margin-left: 20px;
`;

function Header(): JSX.Element {
  const navlist: MenuItem[] = [
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
      <header className='purple-white'>
        <StyledNav className='flex'>
          <StyledLogo src={BoxImproLogo} />
          <StyledUl className='purple-white'>
            <Menubar model={navlist} />
          </StyledUl>
        </StyledNav>
      </header>
    </div>
  );
}

export default Header;
