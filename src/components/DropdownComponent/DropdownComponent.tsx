import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useUrl from "../../utils/hooks/useUrl";
import {
  setSelectedItem,
  filterExercices,
  filterSpecialists,
  pushExerciceTag,
  pushSpecialistTag,
} from "../../slices/dataSlice";
import { Dropdown } from "primereact/dropdown";
import {
  RootState,
  State,
  DropdownItem,
  DropdownProps,
} from "../../data/types";

const StyledP = styled.p`
  margin-top: 10px;
`;

const DropdownComponent: React.FC<DropdownProps> = ({ data }) => {
  const userState: State = useSelector(
    (state: RootState) => state.userData
  ) as State;
  const selectedItem = userState.selectedItem;
  const dispatch = useDispatch();
  const currentURL = useUrl();

  useEffect(() => {
    // useEffect plays every time selectedItem is set
    if (selectedItem.id) {
      handleSelect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  const handleSelect = () => {
    if (currentURL.includes("exercices")) {
      dispatch(pushExerciceTag(selectedItem));
      dispatch(filterExercices());
    } else {
      dispatch(pushSpecialistTag(selectedItem));
      dispatch(filterSpecialists());
    }
  };

  return (
    <div className='flex'>
      <StyledP>Filtrer par : </StyledP>
      <div>
        {data &&
          data.map((item: DropdownItem) => (
            <Dropdown
              key={item.id}
              value={selectedItem.value}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(e: any) => {
                dispatch(setSelectedItem(e.value));
              }}
              options={item.options}
              placeholder={item.title}
            />
          ))}
      </div>
    </div>
  );
};

export default DropdownComponent;
