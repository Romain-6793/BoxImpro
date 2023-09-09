import styled from "styled-components";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { DropdownItem, DropdownProps } from "../../data/types";

const StyledP = styled.p`
  margin-top: 10px;
`;

const DropdownComponent: React.FC<DropdownProps> = ({data}) => {
  const [selectedItem, setSelectedItem] = useState("");
  
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
                console.log(selectedItem);
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
