import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import StrongAlcohol from "./components/StrongAlcohol/StrongAlcohol";
import LowAlcohol from "./components/LowAlcohol/LowAlcohol";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NonAlcohol from "./components/NonAlcohol/NonAlcohol";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/strong-alcohol' element={<StrongAlcohol />} />
          <Route path='/low-alcohol' element={<LowAlcohol />} />
          <Route path='/non-alcoholic' element={<NonAlcohol />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//https://color.romanuke.com/czvetovaya-palitra-4516/