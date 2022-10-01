import React from 'react';
import StyledSection from './styles';

const Section = props => (
    <StyledSection id={props.tag} bg={props.bg} className={'container-column ' + props.className}>
        <div className='section__tag'>{props.tag[props.tag.length - 1] !== ':' ? `<${props.tag}>` : `${props.tag}`}</div>
        <div className='content'>
            { props.children }
        </div>  
        <div className='section__tag'>{props.tag[props.tag.length - 1] !== ':' ? `<${props.tag}/>` : ''}</div>
    </StyledSection>
);

export default Section;

