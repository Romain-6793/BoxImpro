import "./Home.css";
import BoxImproBg from "../../assets/boximpro-background.png";

const Home = (): JSX.Element => {
  return (
    <div className='flex-center'>
      <div className='hero'>
        <div className='hero-text'>
          <h1>Ouvrez la boîte à idées de l'improvisateur !</h1>
          <h2>
            Des dizaines d'exercices et de catégories à votre disposition.
          </h2>
        </div>
        <img src={BoxImproBg} className='background'></img>
      </div>
    </div>
  );
};

export default Home;
