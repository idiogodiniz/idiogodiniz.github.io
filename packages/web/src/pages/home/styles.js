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
            margin-bottom: 1rem;
        }
        p:nth-child(2) {
            font-size: 1.2rem;
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
        @media screen and (max-width: 400px) {
        h1 {
            font-size: 2.3rem;
        }
    }
    }
`;

export const Main = styled.main`
    .section__about {
        article {
            width: 60%;
            h2:nth-child(n+2) {
                margin-top: 1.3rem;
            }
            p {
                margin-bottom: .8rem;
            }
            @media screen and (max-width: 900px) {
                width: 100%;
            }
        }
        .section__about-img {
            width: 14rem;
            height: 14rem;
            margin-right: 21px;
            img {
                border: 6px solid #fff;
                width: 100%;
                height: 100%;
            }
            @media screen and (max-width: 900px) {
                margin-right: 0;
                margin-bottom: 3rem;
            }
        }
        @media screen and (max-width: 900px) {
            flex-direction: column-reverse;
            .section__about-img {
                width: 12rem;
                height: 12rem;
                img {
                    width: 12rem;
                }
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
            @media screen and (max-width: 900px) {
                font-size: .8rem;
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
            min-height: 60vh;
        }
        .section__knowledge-carrousel {
            margin: .4rem 0 1.6rem;
            width: 150%;
            left: -16%;
            h2 {
                opacity: .4;
            }
            h2:nth-child(3) {
                cursor: default;
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
            margin: 1.19%;
            width: 22.6%;
            height: 4.3rem;
            cursor: pointer;
            :hover {
                div:nth-child(2) {
                    background-color: #000000;
                }
                h3 {
                    color: #fff;
                }
                div:nth-child(1) > div {
                    background-image: linear-gradient(to right, #00000000, #00000000, #000000aa, #000000dd, #000, #000);
                }
            }
            h3 {
                padding: .4rem;
                color: #000;
            }
            img {
                width: 100%;
                height: auto;
            }
            div {
                width: 50%;
            }
            div:nth-child(1) {
                background-size: 100% auto;   
                background-position: 50% 50%;
            }
            div:nth-child(1) > div {
                right: 0;
                background-image: linear-gradient(to right, #ffffff00, #ffffff00, #ffffffaa, #ffffff);
                width: 100%;
            }
        }
        .section__knowledge-view{
            justify-content: flex-start;
            align-items: flex-start;
        }
        @media screen and (max-width: 900px) {
            justify-content: space-between;
            .section__knowledge-carrousel {
                width: 250%;
                left: -43%;
                h2 {
                width: 25%;
                :hover {
                    color: #fff
                }
            }
            }
            .first, .last {
                display: none;
            }
            .section__knowledge-card {
                margin: 1rem 2%;
                width: 45.85%;
                h3 {
                    font-family: 'inter-medium';
                    font-size: .8rem;
                    line-height: 1rem;
                }
                @media screen and (max-width: 500px) {
                    margin: 1rem 0;
                    width: 100%;
                }
            }
        }
    }
`;

export const Footer = styled.footer`
`;

export default StyledHome;