
export const GET_BOUQUETES = 'GET_BOUQUETES';
export const SEARCH_BOUQUETES = 'SEARCH_BOUQUETES';

export const initialState = {
  bouquetes: [],
  stashBouquetes: [],
}

export const reducer = (state, action) => {
  const { type, payload} = action;
  switch(type) {
    case GET_BOUQUETES:
      return {
        ...state,
        bouquetes: [...payload],
        stashBouquetes: [...payload],
      }
    case SEARCH_BOUQUETES:
        return {
          ...state,
          bouquetes: [...state.stashBouquetes].filter(({name}) => name.toLowerCase().includes(payload))
        }
    default:
      return {
        ...state
      }
  }
}