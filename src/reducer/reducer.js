
export const GET_BOUQUETES = 'GET_BOUQUETES';
export const SEARCH_BOUQUETES = 'SEARCH_BOUQUETES';
export const NEW_BOUQUETE = 'NEW_BOUQUETE';
export const DELETE_BOUQUETE = 'DELETE_BOUQUETE';

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
    case NEW_BOUQUETE:
        return {
          ...state,
          bouquetes: [...state.bouquetes, payload],
          stashBouquetes: [...state.stashBouquetes, payload],
        }
    case DELETE_BOUQUETE: 
        return {
          ...state,
          bouquetes: [...state.bouquetes].filter(({id}) => id !== payload),
          stashBouquetes: [...state.stashBouquetes].filter(({id}) => id !== payload),
        }
    default:
      return {
        ...state
      }
  };
};