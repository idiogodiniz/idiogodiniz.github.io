import styled from 'styled-components';

const StyledHome = styled.div`
`;

export const Top = styled.div`
    padding: 15vh 5vw;
    .top__welcome-card {
        width: 28%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(5px);
        h1 {
            margin-bottom: 1.4rem;
        }
        p:nth-child(2) {
            margin-bottom: 1rem;
        }
        div > a > img {
            width: 1.4rem;
            height: auto;
            margin-right: 1.2rem;
        }
    }
    .top__background {
        width: 60%;
        height: fit-content;
        img {
            width: 30rem;
            height: auto;
        }
    }
    @media screen and (max-width: 900px) {
        padding: 20% 0;
        height: 85vh;
        .top__welcome-card {
            background-color: unset;
            box-shadow: none;
            backdrop-filter: unset;
            width: 85%;
        }
        .top__background {
            display: none;
        }
    }
`;

export const Main = styled.main`
    .section__about {
        article {
            width: 60%;
            p {
                margin-bottom: .8rem;
            }
            @media screen and (max-width: 900px) {
                width: 100%;
            }
        }
        .section__about-img {
            width: 12rem;
            height: 12rem;
            margin-right: 4rem;
            @media screen and (max-width: 900px) {
                margin-right: 0;
                margin-bottom: 3rem;
            }
        }
        img {
            width: 12rem;
            height: auto;
        }
        @media screen and (max-width: 900px) {
            flex-direction: column-reverse;
        }
    }
    .section__contactme{
        h2, p, a {
            position: relative;
            color: #fff;
            z-index: 2;
        }
        h2 {
            font-size: .9rem;
            font-family: 'inter-regular';
            @media screen and (max-width: 900px) {
                font-size: .6rem;
                line-height: 1.2rem;
            }
        }
        p, a {
            font-family: 'inter-medium';
            font-size: 1.5rem;
            line-height: 2.1rem;
            @media screen and (max-width: 900px) {
                font-size: .8rem;
                line-height: 1.3rem;
            }
        }
        .section__contactme-box {
            background-color: #000;
            width: 65%;
            padding: .8rem 1rem;
            margin-bottom: 3rem;
            @media screen and (max-width: 900px) {
                width: 85%;
                padding: .5rem .8rem;
            }
        }
    }
`;

export default StyledHome;