import React from 'react';
import Section from '../../components/section';
import StyledHome, {
    Top
} from './styles';

const Index = _ => {
    return (
        <StyledHome className='container-column wh100 al-center'>
            <Top className='container jc-between w100 limit-view'>
                <Section className='top__welcome-card' bg='EEEEEE' tag='welcome'>
                    <h1>Seja bem vindo(a) ao portfólio de José Diniz</h1>
                    <p>Espero que encontre o que precisa</p>
                    <div className='container fit'>
                        <a className='fit' href="/"><img src="/assets/img/pictures/github-black.png" alt="" /></a>
                        <a className='fit' href="/"><img src="/assets/img/pictures/linkedin-black.png" alt="" /></a>
                        <a className='fit' href="/"><img src="/assets/img/pictures/instagram-black.png" alt="" /></a>
                    </div>
                </Section>
                <div className="top__background container jc-center">
                    <img src="/assets/img/pictures/background-top.png" alt="" />
                </div>
            </Top>
        </StyledHome>
    );
};

export default Index;