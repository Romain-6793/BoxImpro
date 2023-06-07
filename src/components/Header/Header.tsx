
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BoxImproLogo from '../../assets/boximpro-logo.png'


const StyledHeader = styled.header`
width: 100%;
`

const NavContainer = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px 20px;
`

const HomeLogoContainer = styled.div`
display: flex;
align-items: center;
@media (max-width: 425px) {
  margin-right: 10px;
}
`

const HomeLogo = styled.img`
 width: 100px;
 height: 100px;
`

const StyledLink = styled(Link)`
margin-right: 0.5rem;
// text-decoration: none;
font-weight: bold;
font-size: 18px;
@media (max-width: 767px) {
  font-size: 10px;
}
`

function Header() {

  // Typer les props de lien 

 return (
  <StyledHeader>
    <NavContainer>
    <Link to="/">
      <HomeLogoContainer>
      <HomeLogo src={BoxImproLogo} />
      </HomeLogoContainer>
    </Link>
      <StyledLink to="/specialists">
        Catégories d'impro
      </StyledLink>
      <StyledLink to="/exercices">
        Exercices d'impro
      </StyledLink>
    </NavContainer>
  </StyledHeader>
  
 )
}

export default Header
