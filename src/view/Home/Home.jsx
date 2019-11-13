import React, {useEffect, useContext} from 'react';
import {BouquetesContext} from '../../provider/BouquetesProvider';
import BouqueteCard from '../../components/BouqueteCard/BouqueteCard';
import {BouquetesContainer, Jumbotron, Title, Container} from './styles';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
  const {
    getBouquetes,
    handleSearch,
    handleClick,
    state: {
      bouquetes
    },
  } = useContext(BouquetesContext);

  useEffect(() => { getBouquetes() },[])

  const displayBouquetes = bouquetes.map(({id, ...bouquete}) => <BouqueteCard key={id} id={id} {...bouquete} handleClick={handleClick} />);
  return(
    <Container>
        <Jumbotron>
          <Title>Bouquetes Service</Title>
          <SearchBar
            type='text'
            placeholder='Search'
            onChange={handleSearch}
          />
        </Jumbotron>
        <BouquetesContainer>
          { displayBouquetes }
        </BouquetesContainer>
    </Container>
  )
}

export default Home;