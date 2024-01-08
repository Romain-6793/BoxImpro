import { useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import colors from "../../../utils/style/colors";
import styleVar from "../../../utils/style/style-variables";
import useUrl from "../../../utils/hooks/useUrl";
import { RootState, PageProps, State } from "../../../data/types";
import MainContent from "./MainContent/MainContent";
import DropdownFilter from "./DropdownFilter/DropdownFilter";
import DropdownSort from "./DropdownSort/Dropdownsort";
import SearchBar from "./SearchBar/SearchBar";
import TagsSection from "./TagsSection/TagsSection";

const StyledWrapper = styled.div`
  background: ${colors.black};
`;

const StyledTitle = styled.h1`
  color: ${colors.secondary};
  font-family: ${styleVar.titleFontFamily};
`;

const StyledSubtitleExercices = styled.h2`
  color: ${colors.tertiary};
  font-family: ${styleVar.titleFontFamily};
  font-size: 30px;
  margin-top: -25px;
  padding: 5px;
  border: 2px solid ${colors.tertiary};
`;

const StyledSubtitleSpecialists = styled.h2`
  color: ${colors.primary};
  font-family: ${styleVar.titleFontFamily};
  font-size: 30px;
  margin-top: -25px;
  padding: 5px;
  border: 2px solid ${colors.primary};
`;

const StyledSearchSection = styled.div`
  width: 75%;
  height: ${styleVar.height}px;
  justify-content: space-around;
  margin-bottom: ${styleVar.margin}px;
  @media (max-width: 975px) {
    width: 75%;
    height: 200px;
  }
  @media (max-width: 768px) {
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
  const exercicesPage = currentURL.includes("exercices");
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

  const data = exercicesPage ? filteredExercicesData : filteredSpecialistsData;
  const dropdownData = exercicesPage
    ? exercicesOptionsData
    : specialistsOptionsData;
  const tagData = exercicesPage ? exercicesTagsData : specialistsTagsData;

  return isSmall.matches ? (
    <StyledWrapper className='flex-column'>
      <StyledTitle>Box Impro</StyledTitle>;{" "}
      {exercicesPage ? (
        <StyledSubtitleExercices>{subtitle}</StyledSubtitleExercices>
      ) : (
        <StyledSubtitleSpecialists>{subtitle}</StyledSubtitleSpecialists>
      )}
      <StyledSearchSection className='flex'>
        <DropdownSort data={dropdownData} />
        <SearchBar />
      </StyledSearchSection>
      <TagsSection data={tagData} />
      <MainContent data={data}></MainContent>
    </StyledWrapper>
  ) : (
    <StyledWrapper className='flex-column'>
      <StyledTitle>Box Impro</StyledTitle>;
      {exercicesPage ? (
        <StyledSubtitleExercices>{subtitle}</StyledSubtitleExercices>
      ) : (
        <StyledSubtitleSpecialists>{subtitle}</StyledSubtitleSpecialists>
      )}
      <StyledSearchSection className='flex'>
        <DropdownFilter data={dropdownData} />
        <DropdownSort data={dropdownData} />
        <SearchBar />
      </StyledSearchSection>
      <TagsSection data={tagData} />
      <MainContent data={data}></MainContent>
    </StyledWrapper>
  );
};

export default PageContent;
