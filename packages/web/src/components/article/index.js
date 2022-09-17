import React from 'react';
import StyledArticle from './styles';

const Article = props => {
    const ArticleTheme = _ => {
        if (props.onDark === true)
            return (
                <div className="article__ondark container-column">
                    { props.children }
                </div>
            );
        else
            return (
                <div className="article__not-ondark container-column">
                    { props.children }
                </div>
            );
    };
    return (
        <StyledArticle className='container-column'>
            <ArticleTheme />
        </StyledArticle>
    );
};

export default Article;