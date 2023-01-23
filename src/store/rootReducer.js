import { combineReducers } from "redux";
import { coctails } from "./coctails/coctailsReducer";
import { isCardOpen } from "./cardIsOpen/cardIsOpenReducer";

export  const rootReducer = combineReducers({
    coctails,
    isCardOpen
});