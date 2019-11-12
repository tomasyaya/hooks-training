
export const GET_BOUQUETES = 'GET_BOUQUETES';

export const initialState = {
  bouquetes: []
}

export const reducer = (state, action) => {
  const { type, payload} = action;
  switch(type) {
    case GET_BOUQUETES:
      return {
        ...state,
        bouquetes: [...payload]
      }
    default:
      return {
        ...state
      }
  }
}