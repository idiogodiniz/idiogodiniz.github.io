import styled from "styled-components";

const StyledSection = styled.section`
    padding: 1.4rem 5rem;
    .section__line {
        width: 1px;
        background-color: #242424;
        top: 0;
        left: 5rem;
    }
    .section__tag {
        padding: 1.2rem 2.4rem .8rem;
        font-family: 'inter-semibold';
        font-size: 1rem;
        margin: 1.8rem 0 .6rem;
        div {
            height: 250%;
            width: 3px;
            top: 0;
            left: 0;
        }
    }
    .content {
        padding: 0 0 0 2.4rem;
    }
    @media screen and (max-width: 900px) {
        padding: 1rem 1.7rem;
        .section__line {
            left: 1.7rem;
        }
    }
`;

export default StyledSection;