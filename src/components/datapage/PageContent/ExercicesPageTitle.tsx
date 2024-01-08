import { useState } from "react";
import styled from "styled-components";
import colors from "../../../utils/style/colors";
import styleVar from "../../../utils/style/style-variables";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { slides } from "../../../data/slides";
import { PageProps } from "../../../data/types";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledPageTitle = styled.h2`
  color: ${colors.tertiary};
  font-family: ${styleVar.titleFontFamily};
  font-size: 30px;
  margin-top: -25px;
  padding: 5px;
  border: 2px solid ${colors.tertiary};
  border-radius: 5px;
`;

const ExercicesPageTitle: React.FC<PageProps> = ({ pageTitle }) => {
  const [visible, setVisible] = useState(false);

  return (
    <StyledDiv>
      <StyledPageTitle>{pageTitle}</StyledPageTitle>
      <div>
        <Button label='En savoir plus !' onClick={() => setVisible(true)} />
        <Dialog
          header={slides[1].title}
          visible={visible}
          style={{ width: "50vw" }}
          onHide={() => setVisible(false)}
        >
          {slides[1].text}
        </Dialog>
      </div>
    </StyledDiv>
  );
};

export default ExercicesPageTitle;
