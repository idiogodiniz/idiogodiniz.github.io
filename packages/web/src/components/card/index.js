import React from 'react';
import StyledCard from './styles';

const Card = props => {
    return (
        <StyledCard width={props.width} height={props.height} color={props.color} className={'container-column' + props.className}>
            {props.children}
        </StyledCard>
    )
};

export default Card;