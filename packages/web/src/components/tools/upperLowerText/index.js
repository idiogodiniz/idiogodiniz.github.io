import React, { useState, useLayoutEffect } from 'react';
import { orietationText } from '../../../services/services';
import styled from 'styled-components';

const StyledUpperLowerText = styled.div`
    select {
        width: 100%;
    }
    .text__orientation {
        padding: 1rem .8rem 0rem;
    }
    .text__content {
        height: 100%;
        padding: 1rem .8rem 4rem;
        h3 {
            height: 2rem;
        }
        .text__view {
            width: 48%;
            height: 100%;
            div {
                padding: 0 0 3rem;
            }
        }
        @media screen and (max-width: 900px) {
            flex-direction: column;
            .text__view {
                width: 100%;
                height: 49%;
            }
        }
    }
`;

const UpperLowerText = _ => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [orientation, setOrientation] = useState('capitalize');

    useLayoutEffect(_ => {
        setOutput(orietationText(input, orientation));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input, orientation]);

    return (
        <StyledUpperLowerText className='container-column wh100 relative'>
            <h2>Maiúsculas e Minúsculas</h2>
            <div className="container w100 text__orientation">
                <select value={orientation} onChange={e => setOrientation(e.target.value)} name="">
                    <option value='capitalize'>Primeira letra de todas as palavras maiúscula</option>
                    <option value='text'>Primeira letra de cada parágrafo maiúscula</option>
                    <option value="uppercase">Maiúsculo</option>
                    <option value="lowercase">Minúsculo</option>
                </select>
            </div>
            <div className='text__content container jc-between relative h100'>
                <div className='text__view'>
                    <h3>Entrada</h3>
                    <div className="h100">
                        <textarea className='wh100' value={input} onChange={e => setInput(e.target.value)} name="input"></textarea>
                    </div>
                </div>
                <div className='text__view'>
                    <h3>Saída</h3>
                    <div className='h100'>
                        <textarea className='wh100' readOnly value={output} name="output"></textarea>
                    </div>
                </div>
            </div>
        </StyledUpperLowerText>
    );
};

export default UpperLowerText;