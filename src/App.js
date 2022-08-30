import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import StrongAlcohol from "./components/StrongAlcohol/StrongAlcohol";
import LowAlcohol from "./components/LowAlcohol/LowAlcohol";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NonAlcohol from "./components/NonAlcohol/NonAlcohol";
import { useEffect, useState } from "react";
import coctails from "./components/Coctails/Coctails";

function App() {
  const [date, setDate] = useState();
  const [dateUpdate, setDateUpdate] = useState(false);
  const [items, setItems] = useState(coctails);
  

  useEffect(() => {
    fetch("http://worldtimeapi.org/api/timezone/Europe/Moscow")
      .then((res) => {
        return res.json();
      })
      .then((date) => setDate(date.datetime))
      .catch((err) => {
        console.log("Ошибка. Запрос не выполнен: ", err);
      });
  }, [dateUpdate]);

  let currentDate = new Date(date);
  const month = currentDate.getMonth() + 1;

  const summerArr = items.filter((item) => item.season === "summer");
  const fallArr = items.filter((item) => item.season === "fall");
  const winterArr = items.filter((item) => item.season === "winter");
  const springArr = items.filter((item) => item.season === "spring");


  const coctailsOfSeason =
    month === 6 || month === 7 || month === 8
      ? summerArr
      : month === 9 || month === 10 || month === 11
      ? fallArr
      : month === 12 || month === 1 || month === 2
      ? winterArr
      : month === 3 || month === 4 || month === 5
      ? springArr
      : '';

      console.log(dateUpdate)

  return (
    <BrowserRouter>
      <div className="app">
        <Header callBack={setDateUpdate} />
        <Routes>
          <Route path="/" element={<Home arr={coctailsOfSeason}/>} />
          <Route path="/strong-alcohol" element={<StrongAlcohol arr={items} />} />
          <Route path="/low-alcohol" element={<LowAlcohol arr={items} />} />
          <Route path="/non-alcoholic" element={<NonAlcohol arr={items} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//https://color.romanuke.com/czvetovaya-palitra-4516/
