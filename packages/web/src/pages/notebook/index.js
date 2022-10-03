import React from 'react';
import StyledNotebook from './styles';

const Notebook = _ => {
    return (
        <StyledNotebook className='container wh100'>
            <div className='notebook__left-content container-column'>
                <div className='container al-center fit'>
                    <img className='notebook__content-icon' src="/assets/img/pictures/play-button-black.png" alt="" />
                    <h2 className='notebook__title'>Apresentações</h2>
                </div>
            </div>
            <div className='notebook__right-content container-column'>
                <div className='container al-center fit'>
                    <img className='notebook__content-icon' src="/assets/img/pictures/notebook-black.png" alt="" />
                    <h2 className='notebook__title'>Caderno</h2>
                </div>
            </div>
        </StyledNotebook>
    )
}

export default Notebook;