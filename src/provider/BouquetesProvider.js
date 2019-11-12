import React, {createContext, useReducer, useState} from 'react';
import {initialState, reducer} from '../reducer/reducer';

export const BouquetesContext = createContext();
const {Provider} = BouquetesContext;

const BouquetesProvider = ({children}) => {

  const [count, setCount] = useState(0);
  const sumCount = () => setCount(state => ({count: state.count + 1}));
  const restCount = () => setCount(state => ({count: state.count - 1}));

  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <Provider value={{
      count,
      sumCount,
      restCount,
      state,
      dispatch,
    }}>
      {children}
    </Provider>
  )
}

export default BouquetesProvider;


