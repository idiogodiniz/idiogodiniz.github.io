import styled from 'styled-components';

const StyledHome = styled.div`
    background: linear-gradient(to right, #0C0C0C 0%, #110027 100%);
    height: 100%;
    min-height: 100vh;
`;

export const Top = styled.div`
    height: calc(40rem - 2vw);
    width: 100%;
    .top__left-side {
        width: 35%;
        padding:  0 4rem;
        height: 100%;
        h1, .top__af-h{
            font-family: 'inria-bold';
            margin-bottom: .8rem;
        }
        .top__af-h {
            font-size: 1.4rem;
            line-height: 1.5rem;
        }
    }
    .top__right-side {
        height: fit-content !important;
        min-height: fit-content !important;
        width: 30%;
        bottom: 0;
        right: 0;
        margin: 0 2rem 2rem 0;
    }
`;

export const Main = styled.main`
    article {
        width: 45%;
    }
    .section__conhec-cards {
        ::nth-child(1) {
            overflow: hidden;
        }
    }
`;

export default StyledHome;