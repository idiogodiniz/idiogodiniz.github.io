import React from 'react';
import { Link } from 'react-router-dom';
import StyledView from './styles';

const View = props => (
    <div className='container-column relative wh100'>
        <StyledView className='container w100 jc-between absolute top z2'>
            <div className='container h100 al-center'>
                <img className='view__logo-image' src="/assets/img/pictures/logo-black.png" alt="" />
                <div className='fit'>welcome</div>
            </div>
            <div className='container h100 al-center'>
                <nav className='fit'>
                    <ul className='fit container'>
                        <li>
                            <Link to='/'>Página Inicial</Link>
                        </li>
                        <li>
                            <Link to='/api'>Api</Link>
                        </li>
                        <li>
                            <Link to='/tools'>Ferramentas</Link>
                        </li>
                        <li>
                            <Link to='/finder'>Finder</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/notebook'>Caderno</Link>
                        </li>
                    </ul>
                </nav>
                <div className='fit'>
                    <img className='view__settings-image' src="/assets/img/pictures/settings-black.png" alt="" />
                </div>
            </div>
        </StyledView>
        { props.children }
    </div>
);

export default View;