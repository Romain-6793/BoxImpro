import { Route, Routes } from "react-router-dom";
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Specialists from "./pages/Specialists/Specialists";
import Exercices from "./pages/Exercices/Exercices";

function App() {
  // Typer le routeur

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/specialists' element={<Specialists />} />
        <Route path='/exercices' element={<Exercices />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
