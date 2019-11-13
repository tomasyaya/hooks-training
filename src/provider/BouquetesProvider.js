import React, {createContext, useReducer, useState} from 'react';
import {initialState, reducer, GET_BOUQUETES, SEARCH_BOUQUETES} from '../reducer/reducer';
import bouquetesService from '../service/BouquetesService';


export const BouquetesContext = createContext();
const {Provider} = BouquetesContext;

const BouquetesProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [createBouquete, setCreateBouquete] = useState({name: '', price: ''})

  const getBouquetes = async () => {
    const response = await bouquetesService.getBouquetes();
    dispatch({
      type: GET_BOUQUETES,
      payload: response,
    });
  };

  const handleSearch = event => dispatch({
    type: SEARCH_BOUQUETES,  
    payload: event.target.value
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e)
  }

  const handleChange = e => setCreateBouquete({[e.target.name]: e.target.value})
  
  const inputs = [
    {
      name: 'name',
      value: createBouquete.name,
    },
    {
      name: 'price',
      value: createBouquete.price,
    }
  ];

  return(
    <Provider value={{
      getBouquetes,
      handleChange,
      handleSearch,
      handleSubmit,
      inputs,
      state,
    }}>
      {children}
    </Provider>
  )
}

export default BouquetesProvider;


