import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import useUrl from "../../utils/hooks/useUrl";
import { filterExercices, pushExerciceTag, pushSpecialistTag } from "../../slices/dataSlice";
import { Dropdown } from "primereact/dropdown";
import { DropdownItem, DropdownProps, TagType } from "../../data/types";

const StyledP = styled.p`
  margin-top: 10px;
`;

const DropdownComponent: React.FC<DropdownProps> = ({data}) => {

  const dispatch = useDispatch()
  const currentURL = useUrl()

  const [selectedItem, setSelectedItem] = useState<TagType>({
    value: "",
    id: ""
  });

  useEffect(() => {
    // useEffect plays every time selectedItem is set
    if (selectedItem) {
      handleSelect();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  const handleSelect = () => {
    console.log(selectedItem)
    if (currentURL.includes("exercices")) {
      dispatch(pushExerciceTag(selectedItem))
      dispatch(filterExercices())
    } else {
      dispatch(pushSpecialistTag(selectedItem))
    }
  }
  
  return (
    <div className='flex'>
      <StyledP>Filtrer par : </StyledP>
      <div>
        {data &&
          data.map((item: DropdownItem) => (
            <Dropdown
              key={item.id}
              value={selectedItem.value}
              onChange={(e) => {
                setSelectedItem(
                  {
                  value : e.value, 
                  id : Math.floor(Math.random() * Math.floor(Math.random() * Date.now())).toString()
                  })
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
