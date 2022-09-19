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
`;

export default StyledHome;