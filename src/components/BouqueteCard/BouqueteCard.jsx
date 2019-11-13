import React from 'react';
import {useLazyLoading} from '../../hooks/useLazyLoading';
import {
    Container, 
    Wrapper, 
    Image, 
    Button,
} from './styles';

const BouqueteCard = ({
    handleClick,
    price,
    image,
    name,
    id,
}) => {
    const [ show, element ] = useLazyLoading()
    return(
        <Wrapper ref={element}>
            {   
                show &&
                <Container>
                    <Button onClick={() => handleClick(id)}>Remove</Button>
                    <Image src={image} alt={name} />
                    <p>{name}</p>
                    <p>{price}</p>
                </Container>
            }
        </Wrapper>
    );
};

export default BouqueteCard;
