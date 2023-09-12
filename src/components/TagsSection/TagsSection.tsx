import styled from "styled-components";
// import colors from "../../utils/style/colors";
import { Tag } from 'primereact/tag';
import { TagProps } from "../../data/types";

const StyledSpan = styled.span`
  margin-right: 10px;
`;

const TagsSection: React.FC<TagProps> = ({data}) => {
  return (
  <div className="flex">
    {data.map((item: string) => (
        //Revoir façon de faire le style
    <Tag style={{background: "#ff7417"}}>
      <div className="flex align-items-center gap-2">
        <StyledSpan className="text-base">{item}</StyledSpan>
        <i className="pi pi-times text-xs"></i>
      </div>
    </Tag>
      ))
}
  </div>
  ) 

}

export default TagsSection;