import React, { useState } from 'react';
import styled from 'styled-components';

const StyledIntroduce = styled.div`
    padding: 2rem 3.2rem;
    h2, h3 > span {
        font-family: 'inter-semibold';
    }
    h3 {
        font-family: 'inter-medium';
    }
    .introduce__content {
        padding: 1rem 1.8rem;
        .introduce__left-content, .introduce__right-content {
            width: 50%;
        }
    }
`;

const Introduce = _ => (
    <StyledIntroduce className='container-column'>
        <h2>Opa,</h2>
        <div className='container-column al-end fit'>
            <h3>sou <span>José Diogo Caetano Diniz</span></h3>
            <a href='mailto:contato.zedeogo@gmail.com'>contato.zedeogo@gmail.com</a>
        </div>
        <div className='introduce__content container wh100'>
            <div className='introduce__left-content container-column h100'>
                <h4 className="uppercase">atuando como</h4>
                <p>Técnico em Informático</p>
                <h4 className="uppercase">no mercado há</h4>
                <p>2 anos</p>
                <h4 className="uppercase">formação</h4>
                <p>Técnico de Informática</p>
                <h4 className="uppercase">línguas estrangeiras</h4>
                <p>Inglês (pré-avançado)</p>
                <p>Espanhol (básico)</p>
            </div>
            <div className='introduce__right-content container-column h100'>
                <h4 className="uppercase">hacktons</h4>
                <p>beecrowd</p>
                <h4 className="uppercase">conhecimento em</h4>
                <p>Java</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>Python</p>
                <p>CSharp</p>
                <p>MySQL</p>
                <p>MongoDB</p>
                <p>UI/UX Design</p>
            </div>
        </div>
    </StyledIntroduce>
);

const StyledRender = styled.div`
    .render__title {
        display: block;
        width: 100%;
        border-left: .7rem solid #000;
        padding: 0 1.4rem;
        margin-bottom: 1.7rem;
        cursor: pointer;
    }
`;

const mook =
    [<Introduce />];

const RenderSlides = props => {
    const [slides, setSlides] = useState(mook);
    const [view, setView] = useState(false);
    return (
        <StyledRender>
            <h3 className='render__title'>{props.title}</h3>
        </StyledRender>
    );
};

export default RenderSlides;