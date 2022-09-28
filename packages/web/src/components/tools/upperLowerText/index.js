import React, { useState } from 'react';
import styled from 'styled-components';

const StyledUpperLowerText = styled.div`
    .text__content {
        height: calc(100% - 4rem);
        padding: 2rem 1rem 4rem;
        h3 {
            height: 2rem;
        }
        .text__view {
            width: 48%;
            height: 100%;
        }
    }
    textarea {
        resize: none;
        padding: 1rem;
    }
`;

const UpperLowerText = _ => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [selected, setSelected] = useState('');

    return (
        <StyledUpperLowerText className='container-column wh100'>
            <h2>Maiúsculas e Minúsculas</h2>
            <div className='text__content wh100 container jc-between relative'>
                <div className='text__view'>
                    <h3>Entrada</h3>
                    <div className="h100">
                        <textarea className='wh100' onMouseUp={_ => setSelected('input')} value={input} onChange={e => setInput(e.target.value)} name="input"></textarea>
                    </div>
                </div>
                <div className='text__view'>
                    <h3>Saída</h3>
                    <div className='h100'>
                        <textarea className='wh100' onMouseUp={_ => setSelected('output')} value={output} onChange={e => setOutput(e.target.value)} name="output"></textarea>
                    </div>
                </div>
            </div>
        </StyledUpperLowerText>
    );
};

export default UpperLowerText;