import { useSelector } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import colors from "../../../utils/style/colors";
import styleVar from "../../../utils/style/style-variables";
import useUrl from "../../../utils/hooks/useUrl";
import { RootState, PageProps, State } from "../../../data/types";
import ExercicesPageTitle from "./ExercicesPageTitle";
import SpecialistsPageTitle from "./SpecialistsPageTitle";
import MainContent from "./MainContent/MainContent";
import DropdownFilter from "./DropdownFilter/DropdownFilter";
import DropdownSort from "./DropdownSort/DropdownSort";
import TagsSection from "./TagsSection/TagsSection";

const StyledBlackBg = styled.div`
  background: ${colors.black};
`;

const StyledWrapper = styled.div`
  width: 80%;
  margin-top: 20px;
  border-radius: 5px;
  background: ${colors.white};
`;

const StyledTitle = styled.h1`
  color: ${colors.secondary};
  font-family: ${styleVar.titleFontFamily};
`;

const StyledSearchSection = styled.div`
  width: 75%;
  height: ${styleVar.height}px;
  align-items: center;
  margin-bottom: ${styleVar.margin}px;
  @media (max-width: 1483px) {
    height: 200px;
  }
  @media (max-width: 790px) {
    height: 220px;
  }
  @media (max-width: 767px) {
    height: 0;
  }
`;

// PageContent is my central component, I call a useSelector to have access to my global state.
// From there I recover all the data I need (list of objects, of dropdowns, of tags). Then my data
// will display depending on the URL (exercices or specialists page) as well as my subtitle.

const PageContent: React.FC<PageProps> = ({ pageTitle }) => {
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
    <StyledBlackBg className='flex-column'>
      <StyledWrapper className='flex-column'>
        <StyledTitle>Box Impro</StyledTitle>
        {exercicesPage ? (
          <ExercicesPageTitle pageTitle={pageTitle} />
        ) : (
          <SpecialistsPageTitle pageTitle={pageTitle} />
        )}
        <StyledSearchSection className='flex-column'>
          <DropdownSort data={dropdownData} />
        </StyledSearchSection>
        <TagsSection data={tagData} />
        <MainContent data={data} />
      </StyledWrapper>
    </StyledBlackBg>
  ) : (
    <StyledBlackBg className='flex-center'>
      <StyledWrapper className='flex-column'>
        <StyledTitle>Box Impro</StyledTitle>
        {exercicesPage ? (
          <ExercicesPageTitle pageTitle={pageTitle} />
        ) : (
          <SpecialistsPageTitle pageTitle={pageTitle} />
        )}
        <StyledSearchSection className='flex'>
          <DropdownFilter data={dropdownData} />
          <DropdownSort data={dropdownData} />
        </StyledSearchSection>
        <TagsSection data={tagData} />
        <MainContent data={data} />
      </StyledWrapper>
    </StyledBlackBg>
  );
};

export default PageContent;
