import styled from 'styled-components';

const StyledView = styled.div`
    display: ${ props => props.view === true ? 'flex' : 'none' };
    background-color: #ffffffa5;
    flex-direction: row;
    height: 4rem;
    padding: 0 2rem;
    backdrop-filter: blur(10px);
    font-family: 'inter-regular';
    div:nth-child(1) {
        div {
            margin-left: .8rem;
        }
    }
    .view__logo-image {
        width: 2.2rem;
        height: auto;
    }
    .view__settings-image {
        width: 1.8rem;
        height: auto;
    }
    nav > ul > li {
        margin-right: 1.5rem;
    }
    nav {
        margin-right: 2rem;
    }
    div:nth-child(2) {
        z-index: 1;
    }
    @media (max-width: 900px) {
        padding: 0 1.2rem;
        @media (max-width: 600px) {
            padding: 0 .8rem;
        }
        height: 3.4rem;
        nav {
            display: none;
        }
        .view__logo-image {
            width: 1.7rem;
        }
        .view__settings-image {
            width: 1.5rem;
        }
    }
`;

export const OnOtherScreens = styled.header`
    display: none;
    @media only screen and (max-width: 900px) {
        display: flex;
        background-color: #000;
        height: 4rem;
        padding: 0 2.4rem;
        bottom: 0;
        li, a {
            width: fit-content;
            height: fit-content;
        }
        img {
            width: 2rem;
            height: auto;
        }
    }
    @media (max-width: 600px) {
        padding: 0 1rem;
        img {
            width: 1.7rem;
        }
    }
`;

export default StyledView;