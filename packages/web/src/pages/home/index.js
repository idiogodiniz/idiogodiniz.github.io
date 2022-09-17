import React, { useState, useEffect } from 'react';
import { getConhec } from '../../api/raw.githubusercontent.com/get';
import Subtitle from '../../components/subtitle/index';
import Article from '../../components/article/index';
import Section from '../../components/section';
import Card from '../../components/card';
import StyledHome, {
    Top,
    Main
} from './styles';

const Index = _ => {
    const [conhecimento, setConhecimento] = useState([]);
    const [cardNumbers, setCardNumbers] = useState([]);
    const [renderCards, setRenderCards] = useState(false);

    const obterCon = async _ => await getConhec()
        .then(({ data }) => setConhecimento(data));
    
    const nextCard = _ => {
        let newArray = cardNumbers;
        for (let i; i < newArray.length; i++)
            newArray[i] = newArray[i] + 1;
        console.log(newArray)
        setCardNumbers(newArray);
    };

    const click = e => {
        if (e.target.id === 'card-button')
            nextCard();
    };

    useEffect(_ => {
        obterCon();
    }, []);

    useEffect(_ => {
        const initCard = _ => {
            const array = [conhecimento.length - 1, 0, 1]
            setCardNumbers(array);
        }
        initCard();
    }, [conhecimento]);

    useEffect(_ => {
        const canCard = _ => {
            if (conhecimento[0] !== undefined && cardNumbers[0] !== undefined)
                setRenderCards(true);
        }
        canCard();
    }, [conhecimento, cardNumbers]);
    
    return (
        <StyledHome className='container-column al-center'>
            <Top className='container al-center relative limit-view'>
                <div className='container-column jc-center top__left-side'>
                    <Subtitle onDark={true} content='- bem vindo' />
                    <h1 className='cFFFFFF'>Seja bem vindo(a) ao portfólio de <span className="c00A3FF top__h-name">José Diogo</span></h1>
                    <p className="cCECECE top__af-h">Espero que encontre o que precisa</p>
                    <div className="top__social-media"></div>
                </div>
                <div className='container-column fit top__right-side absolute'>
                    <Subtitle onDark={true} content='- introdução' />
                    <Article className='top__article-intrd' onDark={true}>
                        <h2 className='c00A3FF'>Desenvolvedor Web e Técnico de Informática</h2>
                        <p>Use este portfólio para conhecer um pouco sobre mim e do que sou capaz.</p>
                    </Article>
                </div>
            </Top>
            <Main className='container-column al-center relative w100 limit-view'>
                <Section className='w100'>
                    <Subtitle content='- entre em contato' />
                    <div className='w100 jc-between container'>
                        <Article onDark={true}>
                            <h2>
                                Qualquer tipo de pergunta ou assunto
                            </h2>
                            <p>
                                Basta me enviar mensagem através do
                                meu discord @zedeogo#3375 no servidor
                                <a href='https://discord.gg/rbf8FVXkJ3'>
                                    Devs' House
                                </a>.
                            </p>
                            <p>
                                Ou através do meu email profissional:
                                <a href="mailto:contato.zedeogo@gmail.com">contato.zedeogo@gmail.com</a>
                            </p>
                            <p>
                                Estou sempre aberto a tudo, desde sugestões
                                ou questionamentos, costumo dar atenção a todos.
                            </p>
                        </Article>
                    </div>
                </Section>
                <Section className='w100'>
                    <Subtitle content='- conhecimento' onDark={true} />
                    <Article onDark={true}>
                        <h2 className='c00A3FF'>
                            Veja o que sou capaz de fazer através
                            do que uso
                        </h2>
                    </Article>
                    <button id='card-button' onClick={click}>avançar</button>
                    {renderCards && (
                        <div className='section__conhec-cards w100 container relative o-hidden'>
                            {cardNumbers.map(item =>
                                <Card width='15rem' height='20rem' key={item}>
                                    <h3>{conhecimento[item].name}</h3>
                                    <ul>
                                        {conhecimento[item].content.map(item =>
                                            <li className='container' key={item.name}>
                                                <img src={item.img} alt="" />
                                                <p>{item.name}</p>
                                            </li>
                                        )}
                                    </ul>
                                </Card>
                            )}
                        </div>
                    )}
                </Section>
                <Section className='w100'>
                    <Subtitle content='- jobs' onDark={true} />
                    <Article onDark={true}>
                        <h2>
                            Projetos criativos para demonstração
                        </h2>
                        <p>Analise e conclua o que sou capaz de fazer através desses projetos.</p>
                        <a href='https://github.com/zedeogo?tab=repositories'>Veja mais &gt;&gt;</a>
                    </Article>
                </Section>
                <div className="main__mail">
                    <h2 className='c00A3FF'>
                        Tem um projeto? Vamos conversar
                    </h2>
                    <a href="mailto:contato.zedeogo@gmail.com">contato.zedeogo@gmail.com</a>
                </div>
                <Section className='w100'>
                    <Subtitle content='- redes sociais' onDark={true} />
                    <Article onDark={true}>
                        <h2>
                            Venha descobrir um pouco mais sobre quem sou
                        </h2>
                    </Article>
                </Section>
            </Main>
        </StyledHome>
    );
};

export default Index;