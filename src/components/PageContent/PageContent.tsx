import { useSelector } from "react-redux"
import styled from "styled-components";
import colors from "../../utils/style/colors";
import styleVar from "../../utils/style/style-variables";
import useUrl from "../../utils/hooks/useUrl";
import { RootState, PageProps } from "../../data/types";
import MainContent from "../MainContent/MainContent";
import DropdownComponent from "../DropdownComponent/DropdownComponent";
import SearchBar from "../SearchBar/SearchBar";
import TagsSection from "../TagsSection/TagsSection";

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
  margin-bottom: 50px;
`;

// type RootState = ReturnType<typeof store.getState>;

const PageContent: React.FC<PageProps> = (props) => {
  const { subtitle } = props;
  const currentURL = useUrl();
  const userState = useSelector((state : RootState) => state.userData);
  const exercicesData = userState.exercicesData;
  const specialistsData = userState.specialistsData;
  const exercicesOptionsData = userState.exercicesOptionsData;
  const specialistsOptionsData = userState.specialistsOptionsData;
  const data = currentURL.includes("exercices") ? exercicesData : specialistsData;
  const dropdownData = currentURL.includes("exercices")
    ? exercicesOptionsData
    : specialistsOptionsData;

  return (
    <div className='flex-column'>
      <StyledTitle>Box Impro</StyledTitle>;
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledSearchSection className='flex'>
        <DropdownComponent data={dropdownData} />
        <SearchBar />
      </StyledSearchSection>
      <TagsSection data={dropdownData} />
      <MainContent data={data}></MainContent>
    </div>
  );
};

export default PageContent;
