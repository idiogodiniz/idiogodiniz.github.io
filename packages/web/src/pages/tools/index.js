import React from 'react';
import StyledTools from './styles';

const Tools = _ => {
    return (
        <StyledTools>
            <div className="tool_init-space" />
            <div className="w100 tools__h2-line relative fit"><h2 className='capitalize cFFFFFF b000000 fit'>texto</h2></div>
            <div className="container-column w100">
                <ul>
                    <li>
                        <div>
                            <h3>Inverter Texto</h3>
                            <p>Gera um texto invertido;</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Inverter Texto</h3>
                            <p>Gera um texto invertido;</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Inverter Texto</h3>
                            <p>Gera um texto invertido;</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Inverter Texto</h3>
                            <p>Gera um texto invertido;</p>
                        </div>
                    </li>
                </ul>
            </div>
        </StyledTools>
    )
}

export default Tools;