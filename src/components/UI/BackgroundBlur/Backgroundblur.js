import "./BackgroundBlur.css";
import Popup from "../../Popup/Popup";
import { useContext } from "react";

const BackgroundBlur = () => {
  const activeStyle = "active"

  return (
    <div
      //className={`backgroun-blur ${ctx.popupSwitch === true ? activeStyle : ''}`}
    >
      <Popup />
    </div>
  );
};

export default BackgroundBlur;
