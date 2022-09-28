import styled from 'styled-components';

const StyledHome = styled.div`
    @media screen and (max-width: 900px) {
        .onscreen {
            height: 4rem;
        }
    }
`;

export const Top = styled.div`
    padding: 15vh 5vw;
    .top__welcome-card {
        width: 60%;
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
        margin-top: 2rem;
        width: 60%;
        img {
            width: 30vw;
            height: auto;
        }
    }
    @media screen and (max-width: 1100px) {
        min-height: 35.7rem;
        height: 75vh;
        align-items: center;
        .top__welcome-card {
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
            h2:nth-child(n+2) {
                margin-top: 1.7rem;
            }
            p {
                margin-bottom: .8rem;
            }
            @media screen and (max-width: 900px) {
                width: 100%;
            }
        }
        .section__about-img {
            width: 15rem;
            height: 15rem;
            margin-right: 4rem;
            @media screen and (max-width: 900px) {
                margin-right: 0;
                margin-bottom: 3rem;
            }
        }
        img {
            border: 6px solid #fff;
            width: 15rem;
            height: auto;
        }
        @media screen and (max-width: 900px) {
            flex-direction: column-reverse;
            .section__about-img {
                width: 12rem;
                height: 12rem;
            }
            img {
                width: 12rem;
            }
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
    .section__knowledge {
        width: 100%;
        .section__knowledge-min {
            min-height: 45vh;
        }
        .section__knowledge-carrousel {
            margin: .4rem 0 1.6rem;
            width: 150%;
            left: -16%;
            h2 {
                opacity: .4;
            }
            h2:nth-child(3) {
                opacity: inherit;
            }
        }
        h2 {
            font-family: 'inter-regular';
            text-align: center;
            cursor: pointer;
            width: 17.5%;
        }
        h2:nth-child(3) {
            font-family: 'inter-semibold';
        }
        .section__knowledge-card {
            background-color: #fff;
            margin: 1.25%;
            width: 17.5%;
            height: 4.3rem;
            padding: 1rem 1rem;
            border-radius: 10px;
            h3 {
                color: #000;
            }
        }
        .section__knowledge-view{
            justify-content: flex-start;
            align-items: flex-start;
        }
        @media screen and (max-width: 900px) {
            justify-content: space-between;
            .section__knowledge-carrousel {
                width: 200%;
                left: -25.5%;
            }
            h2 {
                width: 25%;
            }
            .first, .last {
                display: none;
            }
            .section__knowledge-card {
                margin: 1rem 1.6%;
                width: 30%;
                padding: .7rem .7rem;
                h3 {
                    font-size: .8rem;
                    line-height: 1rem;
                }
            }
        }
    }
`;

export const Footer = styled.footer`
`;

export default StyledHome;