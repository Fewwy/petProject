import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BackgroundBlur from './components/UI/BackgroundBlur/Backgroundblur';
import Card from './components/Card/Card.js';
import Grid from './components/Grid/Grid';

import { useSelector } from 'react-redux';

function App() {
  const coctails = useSelector((state) => state.coctails);
  const isCardOpen = useSelector((state) => state.isCardOpen);

  const [date, setDate] = useState();
  const [dateUpdate, setDateUpdate] = useState(false);
  const [popupSwitch, setPopupSwitch] = useState(false);

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone/Europe/Moscow')
      .then((res) => {
        return res.json();
      })
      .then((date) => setDate(date.datetime))
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      });
  }, [dateUpdate]);

  let currentDate = new Date(date);
  const month = currentDate.getMonth() + 1;

  const summerArr = coctails.filter((item) => item.season === 'summer');
  const fallArr = coctails.filter((item) => item.season === 'fall');
  const winterArr = coctails.filter((item) => item.season === 'winter');
  const springArr = coctails.filter((item) => item.season === 'spring');

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

  return (
    <BrowserRouter>
      <div className="app">
        <BackgroundBlur />
        <Header callBack={setDateUpdate} />
        <Routes>
          {
            <>
              <Route path="/" element={<Home arr={coctailsOfSeason} />} />
              <Route path="/strong-alcohol" element={<Grid />} />
              <Route path="/low-alcohol" element={<Grid />} />
              <Route path="/non-alcoholic" element={<Grid />} />
              <Route
                path="/:category/:id"
                element={coctails.map((item) => {
                  if (isCardOpen === item.id) {
                    return (
                      <Card
                        name={item.name}
                        ing={item.ingredients}
                        desc={item.description}
                        src={item.src_sqv}
                        seasos={item.season}
                      ></Card>
                    );
                  }
                })}
              ></Route>
            </>
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//https://color.romanuke.com/czvetovaya-palitra-4516/

//name={targetCard[0].name} src={targetCard[0].src_sqv}

//https://color.romanuke.com/czvetovaya-palitra-4567/
