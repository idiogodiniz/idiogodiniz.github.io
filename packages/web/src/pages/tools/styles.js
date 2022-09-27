import styled from 'styled-components';

const StyledTools = styled.div`
    padding: 5rem 4rem;
    h2 {
        font-family: 'inter-medium';
        font-size: 1.7rem;
        line-height: 1rem;
        padding: .7rem .8rem .1rem;
    }
    section:nth-child(n + 2) > div > h2{
        margin-top: 2.7rem;
    }
    .tools__h2-line {
        border-bottom: .7rem solid #000;
        margin-bottom: 1.7rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 5rem 1rem;
    }
`;

export const Tool = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-left: .7rem solid #000;
    padding: 0 1.4rem;
    margin-bottom: 1.7rem;
    cursor: pointer;
`;

export const ModalTool = styled.div`
    top: 0;
    left: 0;
    #close {
        cursor: pointer;
        width: fit-content;
        height: fit-content;
        font-size: 1.7rem;
        font-family: 'inter-bold';
        color: #242424;
    }
    .modaltool__overlay {
        background-color: #242424c4;
        backdrop-filter: blur(3px);
    }
    .modaltool__content {
        width: 94vw;
        height: 92vh;
        background-color: #ffffffcc;
        border-radius: .3rem;
        padding: .6rem 1rem;
    }
`;

export default StyledTools;