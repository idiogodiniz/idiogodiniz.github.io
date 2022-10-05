import styled from 'styled-components';

const StyledTools = styled.div`
    h2 {
        font-family: 'inter-medium';
        font-size: 1.7rem;
        line-height: 1.7rem;
        padding: .4rem .8rem 0;
    }
    h3 {
        font-family: 'inter-medium';
    }
    @media screen and (max-width: 1000px) {
        h2 {
            font-size: 1.2rem;
            line-height: 1.2rem;
            padding: .4rem .8rem 0;
        }
    }
`;

export const Tool = styled.div`
    border-radius: .5rem;
    h3, p {
        background-image: linear-gradient(95.27deg, #ff9900, #ff0000 91%);
        position: relative;
        z-index: 2;
    }
    h3 {
        border-radius: .5rem .5rem 0 0;
        padding: .7rem .7rem .2rem .7rem;
    }
    p {
        border-radius: 0 0 .5rem .5rem;
        padding: 0 .7rem .7rem .7rem;
    }
    display: block;
    width: 100%;
    margin-bottom: 1.7rem;
    position: relative;
    cursor: pointer;
    :hover {
        ::before {
            content: "";
            background-image: linear-gradient(-95.27deg, #ff9900, #ff0000 91%);
            z-index: 1;
            position: absolute;
            top: 10px;
            left: 10px;
            border-radius: .5rem;
            z-index: 1;
            width: 100%;
            height: 100%;
        }
        ::after {
            content: "";
            z-index: 1;
            position: absolute;
            left: 12px;
            top: 12px;
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            background-color: #000;
            border-radius: .5rem;
        }
    }
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
        padding: 1rem;
        .modaltool__close-window {
            bottom: 0;
            padding: 1rem .4rem;
        }
    }
`;

export default StyledTools;