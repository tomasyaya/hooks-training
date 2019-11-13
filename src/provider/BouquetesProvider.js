import React, {createContext, useReducer, useState} from 'react';
import bouquetesService from '../service/BouquetesService';
import {
  SEARCH_BOUQUETES, 
  GET_BOUQUETES, 
  NEW_BOUQUETE,
  initialState, 
  reducer,
  DELETE_BOUQUETE, 
} from '../reducer/reducer';

export const BouquetesContext = createContext();
const { Provider } = BouquetesContext;
const initialBouquete = {
  name: '',
  price: '',
  image: 'https://d1mxm3s28igxxe.cloudfront.net/480x480/5cdc02cac4533194998795.png', 
};

const BouquetesProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [createBouquete, setCreateBouquete] = useState(initialBouquete);

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

  const handleSubmit =async e => {
    e.preventDefault();
    const newBouquete = await bouquetesService.createBouquete(createBouquete);
    dispatch({
      type: NEW_BOUQUETE,
      payload: newBouquete
    });
    setCreateBouquete(initialBouquete);
  }

  const handleChange = e => {
    e.persist();
    setCreateBouquete(state => ({
        ...state,
        [e.target.name]: e.target.value
      })
    );
  };

  const handleClick = async id => {
    await bouquetesService.deleteBouquete(id)
    dispatch({
      type: DELETE_BOUQUETE,
      payload: id,
    })
  };

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
      createBouquete,
      handleChange,
      handleSearch,
      handleSubmit,
      handleClick,
      inputs,
      state,
    }}>
      {children}
    </Provider>
  )
}

export default BouquetesProvider;


