import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useUrl from "../../../../utils/hooks/useUrl";
import {
  setSelectedOption,
  filterExercices,
  filterSpecialists,
  pushExerciceTag,
  pushSpecialistTag,
} from "../../../../slices/dataSlice";
import { Dropdown } from "primereact/dropdown";
import {
  RootState,
  State,
  DropdownItem,
  DropdownProps,
} from "../../../../data/types";

const StyledDiv = styled.div`
  margin-right: 10px;
`;

const StyledP = styled.p`
  margin-top: 10px;
  @media (max-width: 776px) {
    margin-top: -100px;
  }
`;

const DropdownFilter: React.FC<DropdownProps> = ({ data }) => {
  // Here, I call a useSelector to have access to my global state, and more precisely, to SelectedItem

  const userState: State = useSelector(
    (state: RootState) => state.userData
  ) as State;
  const selectedOption = userState.selectedOption;
  const dispatch = useDispatch();
  const currentURL = useUrl();

  useEffect(() => {
    // useEffect plays every time selectedItem is set to call handleSelect
    if (selectedOption.id) {
      handleSelect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption]);

  const handleChange = (value: string) => {
    dispatch(setSelectedOption(value));
  };

  const handleSelect = () => {
    // The action called depends on the URL, i.e. the active page

    const action = currentURL.includes("exercices")
      ? () => {
          dispatch(pushExerciceTag(selectedOption));
          dispatch(filterExercices());
        }
      : () => {
          dispatch(pushSpecialistTag(selectedOption));
          dispatch(filterSpecialists());
        };

    action();
  };

  // The map below will act on the DropdownData (see PageContent), it will render every dropdown to
  // have a filtering sort when you click on any option.

  return (
    <StyledDiv className='flex-center'>
      <StyledP>Filtrer par : </StyledP>
      <div>
        {data &&
          data
            .filter((item: DropdownItem) => item.title !== "Ordre alphabétique")
            .map((item) => (
              <Dropdown
                key={item.id}
                value={selectedOption.value}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: any) => {
                  handleChange(e.value);
                }}
                options={item.options}
                placeholder={item.title}
              />
            ))}
      </div>
    </StyledDiv>
  );
};

export default DropdownFilter;
