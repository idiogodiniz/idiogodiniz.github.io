import React from 'react';
import StyledSection from './styles';

const Section = props => (
    <StyledSection id={props.tag} bg={props.bg} className={'container-column relative ' + props.className}>
        <div className="section__line h100 absolute" />
        <div className='section__tag relative c-orange-o'>
            {props.tag}
            <div className='absolute b-orange'/>
        </div>
        <div className='content'>
            { props.children }
        </div>  
    </StyledSection>
);

export default Section;

