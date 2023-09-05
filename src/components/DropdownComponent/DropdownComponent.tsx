import styled from "styled-components";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { speDropdownData } from "./speDropdownData";
import { exDropdownData } from "./exDropdownData";
import { DropdownItem } from "../../data/types";
import useUrl from "../../utils/hooks/useUrl";

const StyledP = styled.p`
  margin-top: 10px;
`;

const DropdownComponent = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const currentURL = useUrl();
  const data = currentURL.includes("exercices")
    ? exDropdownData
    : speDropdownData;

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
                setSelectedItem(e.value);
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
