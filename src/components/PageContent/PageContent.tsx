import { useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import styleVar from "../../utils/style/style-variables";
import useUrl from "../../utils/hooks/useUrl";
import { RootState, PageProps, State } from "../../data/types";
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
  height: ${styleVar.height}px;
  justify-content: space-around;
  margin-bottom: ${styleVar.margin}px;
  @media (max-width: 975px) {
    width: 75%;
    height: 200px;
  }
  @media (max-width: 767px) {
    height: 0;
  }
`;

// PageContent is my central component, I call a useSelector to have access to my global state.
// From there I recover all the data I need (list of objects, of dropdowns, of tags). Then my data
// will display depending on the URL (exercices or specialists page) as well as my subtitle.

const PageContent: React.FC<PageProps> = ({ subtitle }) => {
  const [isSmall, setIsSmall] = useState({
    matches: window.matchMedia("(max-width: 767px)").matches,
  });

  function screenListener() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (e: any) => setIsSmall({ matches: e.matches });
    window.matchMedia("(max-width: 767px)").addEventListener("change", handler);
  }

  screenListener();

  const currentURL = useUrl();
  const userState: State = useSelector(
    (state: RootState) => state.userData
  ) as State;

  const {
    filteredExercicesData,
    filteredSpecialistsData,
    exercicesOptionsData,
    specialistsOptionsData,
    exercicesTagsData,
    specialistsTagsData,
  } = userState;

  const data = currentURL.includes("exercices")
    ? filteredExercicesData
    : filteredSpecialistsData;
  const dropdownData = currentURL.includes("exercices")
    ? exercicesOptionsData
    : specialistsOptionsData;
  const tagData = currentURL.includes("exercices")
    ? exercicesTagsData
    : specialistsTagsData;

  return isSmall.matches ? (
    <div className='flex-column'>
      <StyledTitle>Box Impro</StyledTitle>;
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledSearchSection className='flex'>
        <SearchBar />
      </StyledSearchSection>
      <TagsSection data={tagData} />
      <MainContent data={data}></MainContent>
    </div>
  ) : (
    <div className='flex-column'>
      <StyledTitle>Box Impro</StyledTitle>;
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledSearchSection className='flex'>
        <DropdownComponent data={dropdownData} />
        <SearchBar />
      </StyledSearchSection>
      <TagsSection data={tagData} />
      <MainContent data={data}></MainContent>
    </div>
  );
};

export default PageContent;
