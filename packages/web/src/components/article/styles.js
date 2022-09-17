import styled from 'styled-components';

const StyledArticle = styled.article`
    .article__ondark, .article__not-ondark {
        h2 {
            font-family: 'inria-bold';
        }
        p {
            font-family: 'inria-regular'
        }
    }
    .article__ondark {
        p {
            color: #F2F2F2;
        }
        a {
            color: #00A3FF;
        }
    }
`;

export default StyledArticle;