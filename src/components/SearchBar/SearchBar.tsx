import { InputText } from 'primereact/inputtext';

const SearchBar = () => {
  return (
  <div>
    <span className="p-input-icon-left">
      <i className="pi pi-search" />
      <InputText placeholder="Search" />
    </span>
  </div>
  ) 
};

export default SearchBar;
