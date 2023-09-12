import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux"
import useUrl from "../../utils/hooks/useUrl";
import { pushExerciceTag } from "../../slices/dataSlice";
import { Dropdown } from "primereact/dropdown";
import { DropdownItem, DropdownProps } from "../../data/types";

const StyledP = styled.p`
  margin-top: 10px;
`;

const DropdownComponent: React.FC<DropdownProps> = ({data}) => {

  const dispatch = useDispatch()
  const currentURL = useUrl()

  const [selectedItem, setSelectedItem] = useState("");
  console.log(selectedItem)

  const handleSelect = () => {
    if (currentURL.includes("exercices")) {
      dispatch(pushExerciceTag(selectedItem))
    } else {
      console.log("Cette fonctionnalité n'est pas encore au point...")
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
              value={selectedItem}
              onChange={(e) => {
                setSelectedItem(e.value),
                handleSelect()
                // console.log(selectedItem);
                // createTag(e.value)
                // En fait, il faut push mon nouveau tag, qui aura e.value dans un array géré par Redux
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
