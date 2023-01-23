export const allCoctails = (state) => state.coctails;

export const StrongAlk = (state) =>
  state.filters.filter((item) => item.class === 'strong-alcohol');

export const LowAlk = (state) =>
  state.filters.filter((item) => item.class === 'low_alk');

export const NonAlk= (state) =>
  state.filters.filter((item) => item.class === 'non_alk');