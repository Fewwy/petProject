import coctailsArr from "../coctailsArr";
import { STR_ALK_FILTER, HOME, LOW_ALK_FILTER, NON_ALK_FILTER } from "./coctailsConst";

export const coctails = (state=coctailsArr, action) => {
    switch (action.type) {
        case STR_ALK_FILTER: {
            return coctailsArr.filter((item) => item.class === 'strong-alcohol');
        }
        case LOW_ALK_FILTER: {
            return coctailsArr.filter((item) => item.class === 'low_alk');
        }
        case NON_ALK_FILTER: {
            return coctailsArr.filter((item) => item.class === 'non_alk');
        }
        case HOME: {
            return state = coctailsArr;
        }
        default: {
            return state;
        }
    }
}