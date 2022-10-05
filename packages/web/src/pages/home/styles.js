import styled from 'styled-components';

const StyledHome = styled.div`
    @media screen and (max-width: 900px) {
        .onscreen {
            height: 4rem;
        }
    }
`;

export const Top = styled.div`
    .top__welcome-card {
        padding-top: 8rem;
        padding-bottom: 8rem;
        h1 {
            width: 65%;
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
    @media screen and (max-width: 1100px) {
        align-items: center;
        .top__welcome-card h1 {
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
            margin-right: 21px;
            div:nth-child(1) {
                background-image: linear-gradient(-95.27deg, #ff9900, #ff0000 91%);
                width: 14rem;
                height: 14rem;
            }
            img {
                width: calc(100% - 4px);
                height: calc(100% - 4px);
                top: 2px;
                left: 2px;
            }
            @media screen and (max-width: 900px) {
                margin-right: 0;
                margin-bottom: 3rem;
            }
        }
        @media screen and (max-width: 900px) {
            flex-direction: column-reverse;
            .section__about-img {
                div:nth-child(1) {
                    width: 12rem;
                    height: 12rem;
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
            margin-bottom: 3rem;
            div {
                width: 65%;
                @media screen and (max-width: 900px) {
                    width: 85%;
                }
            }
            div:nth-child(1) {
                padding: .8rem 1rem;
                @media screen and (max-width: 900px) {
                    width: 85%;
                    padding: .5rem .8rem;
                }
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
            width: 120%;
            left: -10.2%;
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
            margin: 1.19%;
            width: 22.6%;
            height: 4.3rem;
            cursor: pointer;
            h3 {
                padding: .4rem;
            }
            img {
                width: 100%;
                height: auto;
            }
            div:nth-child(1), div:nth-child(2) {
                width: 50%;
            }
            div:nth-child(1) {
                border-radius: .5rem 0 0 .5rem;
                background-size: 100% auto;   
                background-position: 50% 50%;
            }
            div:nth-child(1) > div {
                right: 0;
                background-image: linear-gradient(95.27deg, #ff000000, #ff000000, #ff0000ca, #ff0000);
                width: 100%;
            }
            div:nth-child(2) {
                border-radius: 0 .5rem .5rem 0;
            }
        }
        .section__knowledge-view{
            justify-content: flex-start;
            align-items: flex-start;
        }
        @media screen and (max-width: 900px) {
            justify-content: space-between;
            .section__knowledge-carrousel {
                width: 160%;
                left: -30%;
                h2 {
                width: 28%;
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