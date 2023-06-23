import styled from "styled-components";
import colors from "../../utils/style/colors";
import styleVar from "../../utils/style/style-variables";
import CardContainer from "../CardContainer/CardContainer";

type PageProps = {
  subtitle: string;
};

const StyledTitle = styled.h1`
  color: ${colors.secondary};
  font-family: ${styleVar.titleFontFamily};
`;

const StyledSubtitle = styled.h2`
  color: ${colors.primary};
  font-family: ${styleVar.titleFontFamily};
  font-size: 30px;
  text-decoration: underline;
  margin-top: -25px;
`;

const PageContent: React.FunctionComponent<PageProps> = (props) => {
  const { subtitle } = props;

  return (
    <div className='flex-column'>
      <StyledTitle>Box Impro</StyledTitle>;
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <CardContainer></CardContainer>
    </div>
  );
};

export default PageContent;
