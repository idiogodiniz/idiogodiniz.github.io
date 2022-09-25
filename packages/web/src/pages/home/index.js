import React from 'react';
import Section from '../../components/section';
import StyledHome, {
    Top,
    Main
} from './styles';

const Index = _ => {
    return (
        <StyledHome className='container-column wh100 al-center'>
            <Top className='container jc-between w100 limit-view'>
                <Section className='top__welcome-card' bg='EEEEEE' tag='welcome'>
                    <h1>Seja bem vindo(a) ao portfólio de José Diniz</h1>
                    <p>Espero que encontre o que precisa</p>
                    <div className='container fit'>
                        <a className='fit' href='/'><img src='/assets/img/pictures/github-black.png' alt='' /></a>
                        <a className='fit' href='/'><img src='/assets/img/pictures/linkedin-black.png' alt='' /></a>
                        <a className='fit' href='/'><img src='/assets/img/pictures/instagram-black.png' alt='' /></a>
                    </div>
                </Section>
                <div className='top__background container jc-center'>
                    <img src='/assets/img/pictures/background-top.png' alt='' />
                </div>
            </Top>
            <Main className='container-column w100 limit-view'>
                <Section bg='000' tag='about'>
                    <div className='container section__about w100 jc-between'>
                        <article>
                            <h2 className='uppercase'>nome</h2>
                            <p className='capitalize'>josé diogo caetano diniz</p>
                            <h2 className='uppercase'>idade</h2>
                            <p>18</p>
                            <h2 className='uppercase'>estado cívil</h2>
                            <p>Solteiro</p>
                            <h2 className='uppercase'>sobre</h2>
                            <p>
                                Sou um programador jovem que possuí diploma
                                de nível médio de Técnico de Informática.
                            </p>
                            <p>
                                Antes dos estudos, tenho contato com a área de
                                Tecnologia desde meus 12 anos de idade, que
                                também foi a idade que eu recebi meu primeiro
                                notebook, inclusive, possuo o mesmo até hoje,
                                guardado em um lugar especial com cuidados
                                frequentes para manter seu estado.
                            </p>
                            <p>
                                Tenho uma paixão imensurável por estudar, passo
                                horas estudando todos os dias, aprendendo coisas
                                novas e diferentes. Essa paixão vem da minha
                                curiosidade, que por mais incrível que pareça,
                                ela não acaba, e me motiva para conquistar tudo
                                aquilo que almejo.
                            </p>
                        </article>
                        <div className='section__about-img relative'>
                            <img className='relative z2' src='/assets/img/pictures/user-image.jpg' alt='' />
                            <div className='box-shadow-white-right' />
                        </div>
                    </div>
                </Section>
                <Section className='section__contactme' bg='FFF' tag='contactme:'>
                    <div className='container w100'>
                        <div className='section__contactme-box relative'>
                            <h2 className='uppercase'>e-mail</h2>
                            <a href='mailto:contato.zedeogo@gmail.com'>contato.zedeogo@gmail.com</a>
                            <div className='box-shadow-black-right'></div>
                        </div>
                    </div>
                    <div className='container w100 jc-end'>
                        <div className='section__contactme-box container-column al-end relative'>
                            <h2 className='uppercase'>telefone celular</h2>
                            <a href='tel:11988067221'>11 988067221</a>
                            <div className='box-shadow-black-left'></div>
                        </div>
                    </div>
                    <div className='container w100'>
                        <div className='section__contactme-box relative'>
                            <h2 className='uppercase'>redes sociais</h2>
                            <p>@zedeogo</p>
                            <div className='box-shadow-black-right'></div>
                        </div>
                    </div>
                </Section>
            </Main>
        </StyledHome>
    );
};

export default Index;