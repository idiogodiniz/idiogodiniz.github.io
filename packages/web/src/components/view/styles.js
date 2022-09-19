import styled from 'styled-components';

const StyledView = styled.div`
    height: 4rem;
    padding: 0 2rem;
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
`;

export default StyledView;