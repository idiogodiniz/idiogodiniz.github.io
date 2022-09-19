import styled from "styled-components";

const StyledSection = styled.section`
    background-color: #${ props => props.bg };
    padding: 0 1.7rem;
    .section__tag {
        font-family: 'inter-semibold';
        margin: 1.8rem 0;
    }
`;

export default StyledSection;