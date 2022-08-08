import "./Slider.css";
import { useEffect, useRef, useState } from "react";
import coctails from "../Coctails/Coctails";
import Seasons from "../Seasons/Seasons";
import SliderOfSeason from "./SliderOfSeason";

const Slider = () => {
  const slider = useRef(null);
  const [items, setItems] = useState(coctails);

  let position = 0;

  const prevHandler = () => {
    if (position === 0) {
      position = -(items.length - 1) * 1440;
      slider.current.childNodes.forEach((element) => {
        element.style.transform = `translateX(${position}px)`;
      });
    } else {
      position += 1440;
      slider.current.childNodes.forEach((element) => {
        element.style.transform = `translateX(${position}px)`;
      });
    }
  };

  const nextHandler = () => {
    if (position === -(items.length - 1) * 1440) {
      position = 0;
      slider.current.childNodes.forEach((element) => {
        element.style.transform = `translateX(${position}px)`;
      });
    } else {
      position -= 1440;
      slider.current.childNodes.forEach((element) => {
        element.style.transform = `translateX(${position}px)`;
      });
    }
  };

  const GetItemOfSeason = () => {
    fetch("http://worldtimeapi.org/api/timezone/Europe/Moscow")
      .then((res) => {
        return res.json();
      })

      .then((data) => {
        let date = new Date(data.datetime);
        const month = date.getMonth() + 1;

        if (month === 6 || month === 7 || month === 8) {
          const summerArr = items.filter((item) => item.season === "summer");

          summerArr.map((item) => {
            return (
              <div
                className="slider__items"
                style={{ backgroundImage: `url(${item.src})` }}
              ></div>
            );
          });
        }
      })
      .catch((err) => {
        console.log("Ошибка. Запрос не выполнен: ", err);
      });
  };

  return (
    <div className="slider">
      <div className="slider__window" ref={slider}>
        <SliderOfSeason />
      </div>
      <button
        className="slider__button slider__button_type_prev"
        onClick={prevHandler}
      >{`<`}</button>
      <button
        className="slider__button slider__button_type_next"
        onClick={nextHandler}
      >{`>`}</button>
      <Seasons />
    </div>
  );
};

export default Slider;
