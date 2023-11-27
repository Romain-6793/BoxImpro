import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useUrl from "../../../utils/hooks/useUrl";
import {
  sortExercicesAZ,
  sortSpecialistsAZ,
  sortExercicesPopularity,
  sortSpecialistsPopularity,
  setSelectedSortingOption,
} from "../../../slices/dataSlice";
import { Dropdown } from "primereact/dropdown";
import {
  RootState,
  State,
  DropdownItem,
  DropdownProps,
} from "../../../data/types";

const StyledP = styled.p`
  margin-top: 10px;
`;

const DropdownSort: React.FC<DropdownProps> = ({ data }) => {
  // Here, I call a useSelector to have access to my global state, and more precisely, to SelectedItem

  const userState: State = useSelector(
    (state: RootState) => state.userData
  ) as State;
  const selectedSortingOption = userState.selectedSortingOption;
  const dispatch = useDispatch();
  const currentURL = useUrl();

  useEffect(() => {
    // useEffect plays every time selectedItem is set to call handleSelect
    if (selectedSortingOption.id) {
      handleSort();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSortingOption]);

  const handleChange = (value: string) => {
    dispatch(setSelectedSortingOption(value));
  };

  const handleSort = () => {
    // The action called depends on the URL, i.e. the active page

    const isExercicesPage = currentURL.includes("exercices");
    const sortAction =
      selectedSortingOption.value === "Popularité"
        ? isExercicesPage
          ? sortExercicesPopularity()
          : sortSpecialistsPopularity()
        : isExercicesPage
        ? sortExercicesAZ()
        : sortSpecialistsAZ();

    dispatch(sortAction);
  };

  // The map below will act on the DropdownData (see PageContent), it will render every dropdown to
  // have a filtering sort when you click on any option.

  return (
    <div className='flex'>
      <StyledP>Trier par : </StyledP>
      <div>
        {data &&
          data
            .filter((item: DropdownItem) => item.title === "Ordre alphabétique")
            .map((item) => (
              <Dropdown
                key={item.id}
                value={selectedSortingOption.value}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: any) => {
                  handleChange(e.value);
                }}
                options={item.options}
                placeholder={item.title}
              />
            ))}
      </div>
    </div>
  );
};

export default DropdownSort;
