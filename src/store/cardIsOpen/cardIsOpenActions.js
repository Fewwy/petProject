import { CARD_TOGGLE } from './cardIsOpenConst';

export const cardToggle = (cardId) => ({
  type: CARD_TOGGLE,
  cardId,
});
