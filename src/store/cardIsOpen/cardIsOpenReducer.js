import { CARD_OPEN, CARD_TOGGLE } from "./cardIsOpenConst"
const isOpenState = {
    isOpen: false,
    id: ''
}

export const isCardOpen = (state = '', action) => {
    switch (action.type) {
        case CARD_TOGGLE: {
            return state = action.cardId
        }
        default: {
            return state
        }
    }
}