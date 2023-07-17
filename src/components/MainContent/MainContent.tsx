import { specialists } from "../../data/specialists";
import { exercices } from "../../data/exercices";
import Cards from "../Cards/Cards";
import useUrl from "../../utils/hooks/useUrl";

const CardContainer = () => {
  const currentURL = useUrl();
  const data = currentURL.includes("exercices") ? exercices : specialists;

  return <Cards data={data} />;
};

export default CardContainer;
