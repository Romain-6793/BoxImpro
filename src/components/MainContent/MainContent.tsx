import { specialists } from "../../data/specialists";
import { exercices } from "../../data/exercices";
import Cards from "../Cards/Cards";
import useUrl from "../../utils/hooks/useUrl";

const CardContainer = () => {
  
  const currentURL = useUrl()

  return currentURL.includes("exercices") ? (
    <Cards data={exercices} />
  ) : (
    <Cards data={specialists} />
  );
};

export default CardContainer;
