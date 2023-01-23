import "./Popup.css";
import { useContext, useState, useReducer } from "react";

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes("@") }
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
if (action.type === 'USER_INPUT') { 
  return {value: action.val, isValid: action.val.trim().length > 6}
}
if (action.type === 'INPUT_BLUR') {
  return { value: state.value, isValid: state.value.trim().length > 6}
}
return { value: "", isValid: false };
}

const Popup = () => {

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const handleClosePopup = () => {
    //ctx.setPopupSwitch(false);
  };

  const emailChangeHandler = (evt) => {
    dispatchEmail({ type: "USER_INPUT", val: evt.target.value });
  };

  const passwordChangeHandler = (evt) => {
    dispatchPassword({ type: "USER_INPUT", val: evt.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="popup">
      <div className="popup__title-wrapper">
        <h1 className="popup__title">Sign in</h1>
        <button className="popup__close" onClick={handleClosePopup}></button>
      </div>
      <form className="popup__form" onSubmit={submitHandler}>
        <p className="popup__title_input">Username</p>
        <input
          className="popup__input popup__input_username"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></input>
        <p className="popup__title_input">Password</p>
        <input
          className="popup__input popup__input_password"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></input>
        <button className="popup__button">Sign in</button>
      </form>
      <button className="popup__button popup__button_close">Sign up</button>
    </div>
  );
};

export default Popup;
