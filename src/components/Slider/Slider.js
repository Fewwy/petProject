import "./Slider.css";
import { useEffect, useRef, useState } from "react";
import coctails from "../Coctails/Coctails";
import Seasons from "../Seasons/Seasons";
import SliderItems from "./SliderItems";

const Slider = () => {
  const [date, setDate] = useState();
  const slider = useRef(null);
  const [items, setItems] = useState(coctails);
  let position = 0;

  useEffect(() => {
    fetch("http://worldtimeapi.org/api/timezone/Europe/Moscow")
      .then((res) => {
        return res.json();
      })
      .then((date) => setDate(date.datetime), setItems(summerArr))
      .catch((err) => {
        console.log("Ошибка. Запрос не выполнен: ", err);
      });
  }, []);

  let currentDate = new Date(date);
  const month = currentDate.getMonth() + 1;

  const summerArr = items.filter((item) => item.season === "summer");
  const GetSummerCoctails = () => {
    return (
      summerArr.map(item => <SliderItems img={item.src} name={item.name} />)
    )
  }
  const GetCoctailsComponents = () => {
    return (
      items.map(item => <SliderItems img={item.src} name={item.name} />)
    )
  }
  const CurrentCoctails = () => {
    if (month === 6 || month === 7 || month === 8) {
      return <GetSummerCoctails />
    } else {
      return <GetCoctailsComponents />
    }
  }

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

  return (
    <div className="slider">
      <div className="slider__window" ref={slider}>
        <CurrentCoctails />
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