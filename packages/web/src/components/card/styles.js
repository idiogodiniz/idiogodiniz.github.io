import styled from 'styled-components';

const StyledCard = styled.div`
    border-top: ${props => `solid ${props.color} 5px`};
    width: ${props => props.width};
    padding: 1.6rem;
    background: #242424;
    box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(24px);
    border-radius: .4rem;
    margin: 0 0 1% 0;
    h3 {
        width: 100%;
        text-align: center;
        margin: 0 0 1vw 0
    }
    p {
        margin-bottom: .4rem;
    }
`;

export default StyledCard;