import { useDispatch } from "react-redux";
import useUrl from "../../../../utils/hooks/useUrl";
import { InputText } from "primereact/inputtext";
import {
  filteredExercicesSearch,
  filteredSpecialistsSearch,
} from "../../../../slices/dataSlice";

// The main Searchbar to display data depending on what you type

const SearchBar = () => {
  const currentURL = useUrl();
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e: any) => {
    // The action called depends on the URL, i.e. the active page

    const action = currentURL.includes("exercices")
      ? () => {
          dispatch(filteredExercicesSearch(e.target.value));
        }
      : () => {
          dispatch(filteredSpecialistsSearch(e.target.value));
        };

    action();
  };
  return (
    <div>
      <span className='p-input-icon-left'>
        <i className='pi pi-search' />
        <InputText placeholder='Rechercher' onChange={handleSearch} />
      </span>
    </div>
  );
};

export default SearchBar;
