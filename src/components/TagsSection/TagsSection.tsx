import styled from "styled-components";
// import colors from "../../utils/style/colors";
import { Tag } from 'primereact/tag';
import { DropdownProps, DropdownItem, Options } from "../../data/types";

const StyledSpan = styled.span`
  margin-right: 10px;
`;

const TagsSection: React.FC<DropdownProps> = ({data}) => {
  return (
  <div className="flex">
    {data.map((item: DropdownItem) => item.options.map((option : Options, index) => (
        //Revoir façon de faire le style
    <Tag style={{background: "#ff7417"}} key={`${option}-${index}`}>
      <div className="flex align-items-center gap-2">
        <StyledSpan className="text-base">{option.value}</StyledSpan>
        <i className="pi pi-times text-xs"></i>
      </div>
    </Tag>
      ))
    )}
  </div>
  ) 

}

export default TagsSection;