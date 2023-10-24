import styled from "styled-components";
import styleVar from "../../utils/style/style-variables";
import classnames from "classnames";

const StyledFooter = styled.footer`
  width: ${styleVar.widthFull}%;
  height: ${styleVar.heightFull}px;
  margin-top: ${styleVar.margin}px;
`;

function Footer(): JSX.Element {
  const combinedClassName = classnames("flex-center", "purple-white");

  return (
    <div>
      <StyledFooter className={combinedClassName}>
        <span>Copyright BOXIMPRO © 2023</span>
      </StyledFooter>
    </div>
  );
}

export default Footer;
