import { MainProps } from "../../../../data/types";
import Cards from "./Cards/Cards";
import NoResults from "./NoResults";

const MainContent: React.FC<MainProps> = ({ data }) => {
  const isNotEmpty = data.length !== 0;

  return isNotEmpty ? <Cards data={data} /> : <NoResults />;
};

export default MainContent;
