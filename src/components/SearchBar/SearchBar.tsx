import { useDispatch } from "react-redux";
import useUrl from "../../utils/hooks/useUrl";
import { InputText } from "primereact/inputtext";
import {
  filteredExercicesSearch,
  filteredSpecialistsSearch,
} from "../../slices/dataSlice";

const SearchBar = () => {
  const currentURL = useUrl();
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e: any) => {
    if (currentURL.includes("exercices")) {
      dispatch(filteredExercicesSearch(e.target.value));
    } else {
      dispatch(filteredSpecialistsSearch(e.target.value));
    }
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
