import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Saveurs from "./pages/Saveurs";
import FiltreSaveurs from "./pages/FiltreSaveurs";
import MenuDetails from "./pages/MenuDetails";
import FiltreAliments from "./pages/FiltreAliments";
import PrixInferieur from "./pages/PrixInferieur";
import PrixExtremes from "./pages/PrixExtreme";

function App() {
  return (
    <BrowserRouter>
      <Header />

  <main className="px-4 py-4 w-100">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saveurs/:id" element={<Saveurs />} />
      <Route path="/saveurs-filtre" element={<FiltreSaveurs />} />
      <Route path="/details/:id" element={<MenuDetails />} />
      <Route path="/sans-california" element={<FiltreAliments />} />
      <Route path="/prix-inferieur" element={<PrixInferieur />} />
      <Route path="/prix-extremes" element={<PrixExtremes />} />
    </Routes>
  </main>


      <Footer />
    </BrowserRouter>
  );
}

export default App;
