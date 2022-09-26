import styled from "styled-components";

const StyledSection = styled.section`
    background-color: ${ props => '#' + props.bg };
    padding: 1rem 1.7rem;
    .section__tag {
        color: ${ props => props.bg !== '000' ? '' : '#fff'};
        font-family: 'inter-semibold';
        margin: 1.8rem 0;
    }
    .content p, .content h2, .content h3, .content a, .content span {
        color: ${ props => props.bg !== '000' ? '' : '#fff'};
    }
`;

export default StyledSection;