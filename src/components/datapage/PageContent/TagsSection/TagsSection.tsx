import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useUrl from "../../../../utils/hooks/useUrl";
import {
  filterExercices,
  filterSpecialists,
  removeExerciceTag,
  removeSpecialistTag,
  resetSelectedItem,
} from "../../../../slices/dataSlice";
import { Tag } from "primereact/tag";
import { TagProps, TagType } from "../../../../data/types";

const StyledSpan = styled.span`
  margin-right: 10px;
`;

const TagsSection: React.FC<TagProps> = ({ data }) => {
  // Unlike in dropdown component, I call useState here because I don't need to have access to global
  // state since the value and id of my item (tag) are already defined.

  const [selectedItem, setSelectedItem] = useState({
    value: "",
    id: "",
  });

  useEffect(() => {
    // useEffect plays every time selectedItem is set
    if (selectedItem.id) {
      handleCloseTag();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  const dispatch = useDispatch();
  const currentURL = useUrl();

  // handleCloseTag is called every time a selected item is identified (useEffect) i.e. every time I click
  // on my "close" icon of any tag. From there, I can remove the specific tag from my tag array
  // and re-dispatch my filter on data depending on the URL, then I can reset selectedItem on my global
  // state, so I can use again the change event on any of my dropdowns.

  const handleCloseTag = () => {
    const action = currentURL.includes("exercices")
      ? () => {
          dispatch(removeExerciceTag(selectedItem));
          dispatch(filterExercices());
          dispatch(resetSelectedItem());
        }
      : () => {
          dispatch(removeSpecialistTag(selectedItem));
          dispatch(filterSpecialists());
          dispatch(resetSelectedItem());
        };

    action();
  };

  return (
    <div className='flex'>
      {data.map((item: TagType) => (
        <Tag key={item.id}>
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
