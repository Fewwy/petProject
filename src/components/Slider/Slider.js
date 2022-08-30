import "./Slider.css";
import { useEffect, useRef, useState } from "react";
import coctails from "../Coctails/Coctails";
import Seasons from "../Seasons/Seasons";
import SliderItems from "./SliderItems";

const Slider = (props) => {
  const slider = useRef(null);
  let position = 0;
  const currArr = Array.from(props.arr)

  const GetCoctailsOfSeason = () => {
    return (
      Array.from(currArr).map((item, index) => <SliderItems img={item.src} name={item.name} key={`gridItem${index + 1}`} />)
    )
  }

  const prevHandler = () => {
    if (position === 0) {
      position = -(currArr.length - 1) * 1440;
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
    if (position === -(currArr.length - 1) * 1440) {
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
        <GetCoctailsOfSeason />
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