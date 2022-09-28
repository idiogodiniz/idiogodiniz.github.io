import styled from 'styled-components';

const StyledTools = styled.div`
    padding: 5rem 4rem;
    h2 {
        font-family: 'inter-medium';
        font-size: 1.7rem;
        line-height: 1rem;
        padding: .7rem .8rem .1rem;
    }
    h3 {
        font-family: 'inter-medium';
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
    display: block;
    width: 100%;
    border-left: .7rem solid #000;
    padding: 0 1.4rem;
    margin-bottom: 1.7rem;
    cursor: pointer;
`;

export const ModalTool = styled.div`
    top: 0;
    left: 0;
    .modaltool__overlay {
        background-color: #000000c4;
        backdrop-filter: blur(3px);
    }
    .modaltool__content {
        width: 94vw;
        height: 92vh;
        background-color: #fff;
        border-radius: 6px;
        padding: 1rem;
        .modaltool__view {
            border-radius: 6px;
        }
        .modaltool__close-window {
            bottom: 0;
            padding: 1rem .4rem;
            button {
                font-size: 1.3rem;
                cursor: pointer;
                border: none;
                padding: .5rem 1.3rem;
                border-radius: 6px;
            }
        }
    }
`;

export default StyledTools;