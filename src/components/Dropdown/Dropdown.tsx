import styled from "styled-components";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";

const StyledP = styled.p`
  margin-top: 10px;
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
      <StyledP>Trier par : </StyledP>
      <div>
        <Dropdown
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.value)}
          options={cities}
          placeholder='Select a City'
        />
      </div>
    </div>
  );
};

export default DropdownComponent;
