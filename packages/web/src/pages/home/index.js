import React, { useState, useEffect, useLayoutEffect } from 'react';
import Section from '../../components/section';
import StyledHome, {
    Top,
    Main,
    Footer
} from './styles';
import { getKnowledge } from '../../api/public/get';
import { redirect } from '../../services/services';

const Home = _ => {
    const [knowledge, setKnowledge] = useState([{ name: '', content: [{name: '', img: '', desc: ''}] }]);
    const [positions, setPositions] = useState([0, 0, 0, 0, 0]);
    const [position, setPosition] = useState(0);
    const [changedPosition, setChangedPosition] = useState(false);

    const check = number => {
        if (number === knowledge.length)
            return 0;
        else if (number > knowledge.length)
            return number - knowledge.length;
        else
            return number;
    };

    const click = e => {
        const id = e.target.id;
        switch (id) {
            case 'kp1':
                setPosition(knowledge.length - 3);
                setChangedPosition(!changedPosition);
                break;
            case 'kp2':
                setPosition(knowledge.length - 2);
                setChangedPosition(!changedPosition);
                break;
            case 'kp4':
                setPosition(0);
                setChangedPosition(!changedPosition);
                break;
            case 'kp5':
                setPosition(1);
                setChangedPosition(!changedPosition);
                break;    
            default:
                break;
        };
    };

    useEffect(_ => {
        const fetchKnowledge = async _ => {
            const response = await getKnowledge();
            setKnowledge(response.content);
        };
        fetchKnowledge();
    }, []);

    useLayoutEffect(_ => {
        if (knowledge[0].name !== '')
            setPositions([knowledge.length - 2, knowledge.length - 1, 0, 1, 2]);
    }, [knowledge]);
    
    useLayoutEffect(_ => {
        const definePositions = _ => {
            setPositions([check(positions[1] + position), check(positions[2] + position), check(positions[3] + position), check(positions[4] + position), check(positions[4] + position + 1)]);
        }
        definePositions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [changedPosition]);

    return (
        <StyledHome className='container-column wh100 al-center'>
            <Top className='container-column jc-center w100 limit-view'>
                <Section className='top__welcome-card' tag='Boas Vindas'>
                    <h1>Seja bem vindo(a) ao portfólio de José Diniz</h1>
                    <p>Espero que encontre o que precisa</p>
                    <div className='container fit'>
                        <a className='fit' href='https://github.com/zedeogo'><img src='/assets/img/pictures/github-white.png' alt='' /></a>
                        <a className='fit' href='https://www.linkedin.com/in/zedeogo/'><img src='/assets/img/pictures/linkedin-white.png' alt='' /></a>
                        <a className='fit' href='https://www.instagram.com/zedeogo'><img src='/assets/img/pictures/instagram-white.png' alt='' /></a>
                    </div>
                </Section>
            </Top>
            <Main className='container-column w100 limit-view'>
                <Section tag='Sobre Mim'>
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
                        <div className='section__about-img relative fit'>
                            <div className='relative z2 radius'><img className='absolute radius' src='/assets/img/pictures/jose.jpg' alt='' /></div>
                            <div className='box-shadow b-orange' />
                        </div>
                    </div>
                </Section>
                <Section className='section__contactme' tag='Entre em Contato'>
                    <div className='section__contactme-box container fit relative w100'>
                        <div className='b-orange relative radius z2'>
                            <h2 className='uppercase'>e-mail</h2>
                            <a href='mailto:contato.zedeogo@gmail.com'>contato.zedeogo@gmail.com</a>
                        </div>
                        <div className='box-shadow b-orange'></div>
                    </div>
                    <div className='section__contactme-box container fit relative w100 jc-end'>
                        <div className='container-column b-orange-o relative radius z2 al-end w100'>
                            <h2 className='uppercase'>telefone celular</h2>
                            <a href='tel:11988067221'>11 988067221</a>
                        </div>
                        <div className='box-shadow-r b-orange-o'></div>
                    </div>
                    <div className='section__contactme-box container fit relative w100'>
                        <div className='b-orange relative radius z2'>
                            <h2 className='uppercase'>redes sociais</h2>
                            <p>@zedeogo</p>
                        </div>
                        <div className='box-shadow b-orange'></div>
                    </div>
                </Section>
                <Section className='section__knowledge container-column' tag='Conhecimento'>
                    <div className='fit w100 section__knowledge-min'>
                        <div className="w100 o-hidden relative">
                            <div className='section__knowledge-carrousel w100 container jc-between relative'>
                                <h2 id='kp1' className='first' onClick={click}>{knowledge[positions[0]].name}</h2>
                                <h2 id='kp2' className='norm' onClick={click}>{knowledge[positions[1]].name}</h2>
                                <h2 className='norm'>{knowledge[positions[2]].name}</h2>
                                <h2 id='kp4' className='norm' onClick={click}>{knowledge[positions[3]].name}</h2>
                                <h2 id='kp5' className='last' onClick={click}>{knowledge[positions[4]].name}</h2>
                            </div>
                        </div>
                        <div className='container w100 wrap'>
                            {knowledge[positions[2]].content.map(item => 
                                <div onClick={_ => redirect(item.a)} className='section__knowledge-card radius container wh100 relative z2 box-shadow-hover' key={item.name}>
                                    <div className="h100 relative z2 b-white" style={{ backgroundImage: `url(${item.img})` }}>
                                        <div className='absolute h100' />
                                    </div>
                                    <div className="h100 container-column relative z2 b-orange"><h3>{item.name}</h3></div>
                                </div>
                            )}
                        </div>
                    </div>
                </Section>
                <Section tag='portfolio'></Section>
                <Section tag='social'></Section>
            </Main>
            <Footer></Footer>
            <div className='onscreen w100' />
        </StyledHome>
    );
};

export default Home;