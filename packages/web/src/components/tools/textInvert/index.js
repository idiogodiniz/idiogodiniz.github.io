import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { invertTextFunction } from '../../../services';

const StyledTextInvert = styled.div`
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

const TextInvert = _ => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [selected, setSelected] = useState('');

    useLayoutEffect(_ => {
        if (selected === 'input')
            setOutput(invertTextFunction(input));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input]);

    useLayoutEffect(_ => {
        if (selected === 'output')
            setInput(invertTextFunction(output));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [output]);

    return (
        <StyledTextInvert className='container-column wh100'>
            <h2>Inverter Texto</h2>
            <div className='text__content wh100 container jc-between relative'>
                <div className='text__view'>
                    <h3>Texto não invertido</h3>
                    <div className="h100">
                        <textarea className='wh100' onMouseUp={_ => setSelected('input')} value={input} onChange={e => setInput(e.target.value)} name="" id=""></textarea>
                    </div>
                </div>
                <div className='text__view'>
                    <h3>Texto invertido</h3>
                    <div className='h100'>
                        <textarea className='wh100' onMouseUp={_ => setSelected('output')} value={output} onChange={e => setOutput(e.target.value)} name="" id=""></textarea>
                    </div>
                </div>
            </div>
        </StyledTextInvert>
    );
};

export default TextInvert;