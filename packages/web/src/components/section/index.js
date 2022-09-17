import React from 'react';
import StyledSection from './styles';

const Section = props => (
    <StyledSection className={'container-column ' + props.className}>
        { props.children}
    </StyledSection>
);

export default Section;