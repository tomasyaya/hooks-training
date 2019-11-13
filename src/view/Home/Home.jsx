import React, {useEffect, useContext} from 'react';
import {BouquetesContext} from '../../provider/BouquetesProvider';
import BouqueteCard from '../../components/BouqueteCard/BouqueteCard';
import {BouquetesContainer, Jumbotron} from './styles';
import SearchBar from '../../components/SearchBar/SearchBar';
import Form from '../../components/Form/Form';

const Home = () => {
  const {
    getBouquetes,
    handleSearch,
    handleSubmit,
    handleChange,
    handleClick,
    inputs,
    state: {
      bouquetes
    },
  } = useContext(BouquetesContext);

  useEffect(() => { getBouquetes() },[])

  const displayBouquetes = bouquetes.map(({id, ...bouquete}) => <BouqueteCard key={id} id={id} {...bouquete} handleClick={handleClick} />);
  return(
    <div>
      <div>
        <Form
          onSubmit={handleSubmit}
          onChange={handleChange}
          inputs={inputs}
        />
      </div>
      <div>
        <Jumbotron>
          <SearchBar
            type='text'
            placeholder='Search'
            onChange={handleSearch}
          />
        </Jumbotron>
        <BouquetesContainer>
          { displayBouquetes }
        </BouquetesContainer>
      </div>
    </div>
  )
}

export default Home;