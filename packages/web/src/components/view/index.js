import React from 'react';
import { Link } from 'react-router-dom';
import {
    Header,
    Logo
} from './styles';

const View = props => (
    <div className='relative wh100'>
        <Header className='container jc-center fixed z5'>
            <div className='header-bar container jc-between al-center limit-view'>
                <Logo className='container al-center cFFFFFF'>
                    <img src="/assets/img/icon/logo.png" alt="Logo" />
                </Logo>
                <nav className='container'>
                    <ul className='container al-center'>
                        <li className='container al-center'>
                            <Link className='cFFFFFF' to='/'>Página Inicial</Link>
                        </li>
                        <li>
                            <Link className='cFFFFFF' to='/services'>Serviços</Link>
                        </li>
                        <li>
                            <Link className='cFFFFFF' to='/works'>Trabalhos</Link>
                        </li>
                        <li>
                            <Link className='cFFFFFF' to='/api'>API</Link>
                        </li>
                        <li>
                            <Link className='cFFFFFF' to='/caderno'>Caderno</Link>
                        </li>
                        <li>
                            <Link className='cFFFFFF' to='/aboutme'>Sobre mim</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Header>
        <div className='container-column wh100'>
            <div className='container-column'>
                {props.children}
            </div>
        </div>
    </div>
);

export default View;