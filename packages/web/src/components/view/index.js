import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import StyledView, {
    OnOtherScreens
} from './styles';
import { delay } from '../../services';

const View = props => {
    const [show, setShow] = useState(true);

    useEffect(_ => {
        const controlHeader = _ => {
            let currentY = window.scrollY;
            delay(50).then(_ => {
                if (window.scrollY < currentY)
                    setShow(true);
                else if (window.scrollY > currentY)
                    setShow(false);
            });
        };
        window.addEventListener('scroll', controlHeader);
        return _ => {
            window.removeEventListener('scroll', controlHeader)
        };
    }, []);

    return (
        <div className='container-column relative wh100'>
            <StyledView view={show} className='w100 jc-between fixed top z3'>
                <div className='container h100 al-center'>
                    <img className='view__logo-image' src='/assets/img/pictures/logo-black.png' alt='' />
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
                        <img className='view__settings-image' src='/assets/img/pictures/settings-black.png' alt='' />
                    </div>
                </div>
            </StyledView>
            <OnOtherScreens className='fixed w100 z3'>
                <nav className='wh100'>
                    <ul className='container jc-between al-center wh100'>
                        <li>
                            <Link to='/'><img src='/assets/img/pictures/home-white.png' alt='' /></Link>
                        </li>
                        <li>
                            <Link to='/api'><img src='/assets/img/pictures/api-white.png' alt='' /></Link>
                        </li>
                        <li>
                            <Link to='/tools'><img src='/assets/img/pictures/tools-white.png' alt='' /></Link>
                        </li>
                        <li>
                            <Link to='/finder'><img src='/assets/img/pictures/search-white.png' alt='' /></Link>
                        </li>
                        <li>
                            <Link to='/blog'><img src='/assets/img/pictures/blog-white.png' alt='' /></Link>
                        </li>
                        <li>
                            <Link to='/notebook'><img src='/assets/img/pictures/notebook-white.png' alt='' /></Link>
                        </li>
                    </ul>
                </nav>
            </OnOtherScreens>
            {props.children}
        </div>
    )
};

export default View;