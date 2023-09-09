
import { MainProps } from "../../data/types";
import Cards from "../Cards/Cards";

const MainContent: React.FC<MainProps> = ({data}) => {
  return <Cards data={data} />;
};

export default MainContent
