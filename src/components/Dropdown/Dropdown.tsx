import styled from "styled-components";
import styleVar from "../../utils/style/style-variables";
import colors from "../../utils/style/colors";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

const StyledDDContainer = styled.div`
  .p-dropdown {
    background: ${colors.white};
    // color: ${colors.primary};
    color: black;
  }
`;

const DropdownComponent = () => {
  const [selectedCity, setSelectedCity] = useState("");

  const cities = [
    { value: "Paris", label: "Paris" },
    { value: "Londres", label: "Londres" },
    { value: "Bruxelles", label: "Bruxelles" },
    { value: "Berlin", label: "Berlin" },
    { value: "Genève", label: "Genève" },
    { value: "Rome", label: "Rome" },
    { value: "Madrid", label: "Madrid" },
    { value: "Lisbonne", label: "Lisbonne" },
  ];

  return (
    <div className='flex'>
      <p>Trier par : </p>
      <StyledDDContainer>
        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          placeholder='Select a City'
        />
      </StyledDDContainer>
    </div>
  );
};

export default DropdownComponent;
