import React, {useContext} from 'react';
import {Container} from './styles';
import {BouquetesContext} from '../../provider/BouquetesProvider';
import Form from '../../components/Form/Form';


const Header = () => {
    const {
        handleSubmit,
        handleChange,
        inputs
    } = useContext(BouquetesContext)
    return(
        <Container>
            <Form
                onSubmit={handleSubmit}
                onChange={handleChange}
                inputs={inputs}
            />
        </Container>
    )
}

export default Header;