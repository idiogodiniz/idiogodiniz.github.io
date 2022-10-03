import styled from 'styled-components';

const StyledNotebook = styled.div`
    padding-top: 5rem;
    .notebook__left-content, .notebook__right-content {
        width: 50%;
        padding: 2rem 4rem;
        .notebook__title {
            padding-left: 1rem;
        }
    }
    .notebook__content-icon {
        width: 2rem;
        height: auto;
    }
`;

export default StyledNotebook;