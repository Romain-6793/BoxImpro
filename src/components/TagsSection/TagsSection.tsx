import styled from "styled-components";
// import colors from "../../utils/style/colors";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useUrl from "../../utils/hooks/useUrl";
import {
  filterExercices,
  filterSpecialists,
  removeExerciceTag,
  removeSpecialistTag,
  resetSelectedItem,
} from "../../slices/dataSlice";
import { Tag } from "primereact/tag";
import { TagProps, TagType } from "../../data/types";

const StyledSpan = styled.span`
  margin-right: 10px;
`;

const TagsSection: React.FC<TagProps> = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState({
    value: "",
    id: "",
  });

  useEffect(() => {
    // useEffect plays every time selectedItem is set
    if (selectedItem) {
      handleCloseTag();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  const dispatch = useDispatch();
  const currentURL = useUrl();

  const handleCloseTag = () => {
    if (currentURL.includes("exercices")) {
      dispatch(removeExerciceTag(selectedItem));
      dispatch(filterExercices());
      dispatch(resetSelectedItem());
    } else {
      dispatch(removeSpecialistTag(selectedItem));
      dispatch(filterSpecialists());
      dispatch(resetSelectedItem());
    }
  };

  return (
    <div className='flex'>
      {data.map((item: TagType) => (
        //Revoir façon de faire le style
        <Tag style={{ background: "#ff7417" }} key={item.id}>
          <div className='flex align-items-center gap-2'>
            <StyledSpan className='text-base'>{item.value}</StyledSpan>
            <i
              className='pi pi-times text-xs'
              onClick={() =>
                setSelectedItem({ value: item.value, id: item.id })
              }
            ></i>
          </div>
        </Tag>
      ))}
    </div>
  );
};

export default TagsSection;
