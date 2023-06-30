import styled from "styled-components";
import colors from "../../utils/style/colors";
import styleVar from "../../utils/style/style-variables";
import MainContent from "../MainContent/MainContent";
import DropdownComponent from "../Dropdown/Dropdown";
import SearchBar from "../SearchBar/SearchBar";

type PageProps = {
  subtitle: string;
};

const StyledTitle = styled.h1`
  color: ${colors.secondary};
  font-family: ${styleVar.titleFontFamily};
`;

const StyledSubtitle = styled.h2`
  color: ${colors.primary};
  font-family: ${styleVar.titleFontFamily};
  font-size: 30px;
  text-decoration: underline;
  margin-top: -25px;
`;

const StyledSearchSection = styled.div`
  width: ${styleVar.widthFull}%;
  height: 50px;
  justify-content: space-around;
`;

const PageContent: React.FC<PageProps> = (props) => {
  const { subtitle } = props;

  return (
    <div className='flex-column'>
      <StyledTitle>Box Impro</StyledTitle>;
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledSearchSection className='flex'>
        <DropdownComponent />
        <SearchBar />
      </StyledSearchSection>
      <MainContent></MainContent>
    </div>
  );
};

export default PageContent;
