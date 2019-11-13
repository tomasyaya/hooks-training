import React from 'react';
import {Container, Wrapper, Image} from './styles';
import {useLazyLoading} from '../../hooks/useLazyLoading';

const BouqueteCard = ({
    id,
    name,
    image,
    price,
}) => {
    const [ show, element ] = useLazyLoading()
    return(
        <Wrapper ref={element}>
            {   
                show &&
                <Container>
                    <Image src={image} alt={name} />
                    <p>{name}</p>
                    <p>{price}</p>
                </Container>
            }
        </Wrapper>
    );
};

export default BouqueteCard;
