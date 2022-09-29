import React, { useState, useLayoutEffect } from 'react';
import StyledTools, {
    Tool,
    ModalTool
} from './styles';

import TextInvert from '../../components/tools/textInvert/index';
import UpperLowerText from '../../components/tools/upperLowerText';

const Tools = _ => {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState();

    const click = e => {
        const id = e.target.id === '' ? e.target.parentElement.id : e.target.id;
        if (!modal)
            setModal(true);
        else if (id === 'close' || id === 'overlay') {
            setModal(false);
            setModalContent();
        };
        switch (id) {
            case 'textInvert':
                setModalContent(<TextInvert />);
                break;
            case 'upperLowerText':
                setModalContent(<UpperLowerText />);
                break;
            default:
                break;
        };
    };

    useLayoutEffect(_ => {
        const identifyKey = e => {
            switch (e) {
                case 'Escape':
                    if (modal)
                        setModal(false);
                    break;
                default:
                    break;
            };
        };
        window.addEventListener('keypress', identifyKey);
        return _ => {
            window.removeEventListener('keypress', identifyKey);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <StyledTools>
            {modal && (
                <ModalTool className='fixed z4 w100 h100v container-column al-center jc-center'>
                    <div id='overlay' className="modaltool__overlay wh100" onClick={click} />
                    <div className='modaltool__content fixed container-column z5'>
                        <div className='wh100 relative'>
                            {modalContent}
                            <div className='container jc-center absolute w100 modaltool__close-window'>
                                <button id='close' className='capitalize fit cFFFFFF b000000' onClick={click}>fechar</button>
                            </div>
                        </div>
                    </div>
                </ModalTool>
            )}
            <section>
                <div className="w100 tools__h2-line relative fit">
                    <h2 className='capitalize cFFFFFF b000000 fit'>
                        texto
                    </h2>
                </div>
                <div className="container-column w100">
                    <Tool id='textInvert' onClick={click}>
                        <h3>Inverter Texto</h3>
                        <p>Gera um novo texto invertido ou reverte o texto.</p>
                    </Tool>
                    <Tool id='upperLowerText' onClick={click}>
                        <h3>Maiúsculas e Minúsculas</h3>
                        <p>Converte o texto para letras maiúsculas ou minúsculas.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Remover Linhas Duplicadas</h3>
                        <p>Remove as linhas repetidas de uma lista.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Ordem Alfabética</h3>
                        <p>Coloca uma lista em ordem alfabética.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>De Cabeça para Baixo</h3>
                        <p>Vira seu texto de cabeça para baixo.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Letras Diferentes</h3> 
                        <p>Converte o texto em letras personalizadas para postar nas redes sociais.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Letras Empilhadas</h3>
                        <p>Adiciona pequenas letras em cima do texto.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Prefixo e Sufixo</h3>
                        <p>Adiciona um prefixo ou sufixo em cada linha do texto.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Textos Sinônimos</h3>
                        <p>Cria um novo texto trocando palavras por sinônimos.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Localizar e Substituir</h3>
                        <p>Localiza todas as ocorrências de um trecho do texto e substitui por outro.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Contador de Caracteres</h3>
                        <p>Calcula quantos caracteres, palavras e linhas existem no texto.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Comparar Textos</h3>
                        <p>Compara dois textos ou códigos e mostra as diferenças entre eles.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Corretor Ortográfico</h3>
                        <p>Detecta erros ortográficos e sugere correções em um texto.</p>
                    </Tool>
                </div>
            </section>
            <section>
                <div className="w100 tools__h2-line relative fit">
                    <h2 className='capitalize cFFFFFF b000000 fit'>
                        aleatório
                    </h2>
                </div>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Sorteio</h3>
                        <p>Escolhe um nome aleatório presente em uma lista.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Lista Aleatória</h3>
                        <p>Coloca uma lista em ordem aleatória.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Números Aleatórios</h3>
                        <p>Gera números aleatórios de acordo com as configurações escolhidas.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Dado Online</h3>
                        <p>Joga dados aleatórios de 6 faces.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Números da Megasena</h3>
                        <p>Gera números aleatórios para os jogos da Megasena.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de Senha</h3>
                        <p>Gera senhas aleatórias de diversos tamanhos e opções.</p>
                    </Tool>
                </div>
            </section>
            <section>
                <div className="w100 tools__h2-line relative fit">
                    <h2 className='cFFFFFF b000000 fit'>
                        Criptografia e Codificação
                    </h2>
                </div>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Código Binário</h3>
                        <p>Transforma o texto em código binário e vice-versa.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Código Morse</h3>
                        <p>Transforma o texto em código morse e vice-versa.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Texto Criptografado</h3>
                        <p>Criptografa o texto a partir de uma chave. Para descriptografar, é necessário a mesma chave que o gerou.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de QR Code</h3>
                        <p>Gera código de barras do formato QR Code.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de Código de Barras 1D</h3>
                        <p>Gera código de barras EAN-13, UPC-A, ISBN, entre outros.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de Código de Barras em Lote</h3>
                        <p>Gera vários códigos de barras ao mesmo tempo.</p>
                    </Tool>
                </div>
            </section>
            <section>
                <div className="w100 tools__h2-line relative fit">
                    <h2 className='cFFFFFF b000000 fit'>
                        Data e Hora
                    </h2>
                </div>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Calendário</h3>
                        <p>Gera o calendário de diversos anos com os feriados nacionais.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Contador de Dias</h3>
                        <p>Calcula a diferença entre duas datas em dias, meses ou anos.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Somar ou Subtrair Dias</h3>
                        <p>Calcula uma nova data de acordo com a soma ou subtração de dias, meses, ou ano.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Hora Certa</h3>
                        <p>Mostra a hora certa de diferentes cidades do Brasil e do mundo.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calculadora de Horas</h3>
                        <p>Soma horas e minutos, útil para calcular horas extras ou trabalhadas.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Idade</h3>
                        <p>Calcula uma idade em anos, meses e dias.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Cronômetro</h3>
                        <p>Cronômetro online com divisão de voltas (laps).</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Contagem Regressiva</h3>
                        <p>Cria uma contagem regressiva para algum evento.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Fase da Lua Hoje</h3>
                        <p>Saiba qual é a fase, visibilidade, distância e idade da lua hoje.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calendário Lunar</h3>
                        <p>Veja as fases da lua e sua visibilidade por dia.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Estação do Ano Hoje</h3>
                        <p>Saiba em qual estação do ano estamos e que dia começa cada uma das quatro estações.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Dia do Ano</h3>
                        <p>Saiba em qual dia do ano estamos e visualize o progresso.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Semana do Ano</h3>
                        <p>Saiba em qual semana do ano estamos e visualize o progresso.</p>
                    </Tool>
                </div>
            </section>
            <section>
                <div className="w100 tools__h2-line relative fit">
                    <h2 className='capitalize cFFFFFF b000000 fit'>
                        números
                    </h2>
                </div>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Conversão de Base Numérica</h3>
                        <p>Converte um número entre as bases decimal, binária, octal e hexadecimal.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Conversor de Medidas</h3>
                        <p>Converte diversas unidades de medida como massa, temperatura e velocidade.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Números Romanos</h3>
                        <p>Converte números decimais para romanos e vice-versa.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Números por Extenso</h3>
                        <p>Converte um número em seu valor por extenso.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calculadora de Porcentagem</h3>
                        <p>Faz diversos cálculos envolvendo porcentagem.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calculadora Regra de 3 Simples</h3>
                        <p>Faz o cálculo da regra de 3 rapidamente.</p>
                    </Tool>
                </div>
            </section>
            <section>
                <div className="w100 tools__h2-line relative fit">
                    <h2 className='capitalize cFFFFFF b000000 fit'>
                        finanças
                    </h2>
                </div>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Conversor de Moedas</h3>
                        <p>Faz a conversão de valores entre diversas moedas do mundo. Taxas atualizadas em tempo real.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Simulador de Poupança</h3>
                        <p>Calcula quanto você terá se poupar um valor mensalmente.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Simulador de Financiamento</h3>
                        <p>Simula o financiamento de veículos, imóveis ou qualquer outro bem.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Primeiro Milhão</h3>
                        <p>Calcula o tempo ou a poupança necessária para acumular um milhão.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Código dos Bancos</h3>
                        <p>Consulte o número ou código dos principais bancos.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Valor do Salário Mínimo</h3>
                        <p>Consulte o valor do salário mínimo atual e veja o histórico de reajustes</p>
                    </Tool>
                </div>
            </section>
            <section>
                <div className="w100 tools__h2-line relative fit">
                    <h2 className='capitalize cFFFFFF b000000 fit'>
                        desenvolvedor
                    </h2>
                </div>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Gerador de CEP</h3>
                        <p>Gera um CEP e seu respectivo endereço.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de CPF</h3>
                        <p>Gera ou valida um CPF.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de CNPJ</h3>
                        <p>Gera ou valida um CNPJ.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de Cartão de Crédito</h3>
                        <p>Gera número de cartão de crédito válido.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de Conta Bancária</h3>
                        <p>Gera conta bancária de diversos bancos brasileiros.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de Pessoas</h3>
                        <p>Gera dados pessoais aleatórios.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de Lorem Ipsum</h3>
                        <p>Gera textos Lorem Ipsum para preencher espaços vazios antes de utilizar o conteúdo real.</p>
                    </Tool>
                </div>
            </section>
            <section>
                <div className="w100 tools__h2-line relative fit">
                    <h2 className='capitalize cFFFFFF b000000 fit'>
                        internet
                    </h2>
                </div>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Meu IP</h3>
                        <p>Descubra qual é o seu endereço IP na internet.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Teste de Velocidade</h3>
                        <p>Teste a velocidade da sua internet.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Teste de Portas</h3>
                        <p>Verifica portas abertas de um IP ou Host.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Whois</h3>
                        <p>Consulta o Whois de um domínio para obter informações sobre ele ou para saber se já está registrado.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Localizar IP</h3>
                        <p>Informa a localização geográfica de um endereço IP.</p>
                    </Tool>
                </div>
            </section>
            <section>
                <div className="w100 tools__h2-line relative fit">
                    <h2 className='capitalize cFFFFFF b000000 fit'>
                        redes sociais
                    </h2>
                </div>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Não Seguidores no Instagram</h3>
                        <p>Compara os perfis seguidores/seguindo para mostrar quem não está te seguindo de volta.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Sorteio no Instagram</h3>
                        <p>Realiza sorteio entre os comentários de uma publicação no Instagram.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Contador de Inscritos em Tempo Real</h3>
                        <p>Mostra, em tempo real, a quantidade de incritos/seguidores de uma conta do YouTube ou Instagram.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Ordenar Conta do Instagram</h3>
                        <p>Ordena os posts de uma conta do Instagram em ordem decrescente de curtidas.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de Link para Whatsapp</h3>
                        <p>Cria um link direto para uma conversa no Whatsapp.</p>
                    </Tool>
                </div>
            </section>
            <section>
                <div className="w100 tools__h2-line relative fit">
                    <h2 className='capitalize cFFFFFF b000000 fit'>
                        multimídia
                    </h2>
                </div>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Converter Imagem em Texto</h3>
                        <p>Extrai o texto de uma imagem utilizando OCR.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Juntar PDF</h3>
                        <p>Junta diversos arquivos PDF em um só.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Comprimir PDF</h3>
                        <p>Reduz o tamanho de arquivos PDF.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Comprimir PNG</h3>
                        <p>Reduz o tamanho de arquivos PNG.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Comprimir JPG</h3>
                        <p>Reduz o tamanho de arquivos JPG</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Foto em Preto e Branco</h3>
                        <p>Filtro para deixar fotos em preto e branco.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Redimensionar Imagem</h3>
                        <p>Redimensiona imagens para uma resolução menor.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Recortar Fotos</h3>
                        <p>Recorta, gira e inverte fotos.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Capturar Sites</h3>
                        <p>Salve sites como pdf ou foto.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Converter Arquivo</h3>
                        <p>Converta um arquivo para outro tipo. Formatos suportados: .z7 .ace .alz .arc .arj .bz .bz2 .cab .cpio .deb .dmg .gz .img .iso .jar .lha .lz .lzma .lzo .rar .rpm .rz .tar .tar.7z .tar.bz .tar.bz2</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Converter Audio</h3>
                        <p>Converta um audio para outro tipo. Formatos suportados: .aac .ac3 .aif .aifc .aiff .amr .au .caf. fac .m4a .m4b .mp3 .oga .voc .wav .weba .wma</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Converter CAD</h3>
                        <p>Converta o tipo do CAD. Formatos suportados: .dwg .dxf</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Converter Documento</h3>
                        <p>Converta um documento para outro tipo. Formatos suportados: .abw .djvu .doc .docm .docx .dot .dotx .html .hwp .lwp .md .odt .pages .pdf .rst .rtf .tex .txt .wpd .wps .zabw</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Converter Ebook</h3>
                        <p>Converta um ebook para outro tipo. Formatos suportados: .azw .azw3 .azw4 .cbc .cbr .cbz .chm .epub .fb2 .htm .htmlz .lit .lrf .mobi .pdb .pml .prc .rb .snb .tcr .txtz</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Converter Fonte</h3>
                        <p>Converta uma fonte para outro tipo. Formatos suportados: .eot .otf .ttf .woff .woff2</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Converter Imagem</h3>
                        <p>Converta uma imagem para outro tipo. Formatos suportados: .3fr .arw .avif .bmp .cr2 .cr3 .crw .dcr .dng .eps .erf .gif .heic .heif .icns .ico .jfif .jpeg .jpg .mos .mrw .nef .odd .odg .orf .pef .png .ppm .ps .psd .raf .raw .rw2 .tif .tiff .webp .x3f .xcf .xps</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Converter Slides</h3>
                        <p>Converta uma apresentação em slides para outro tipo. Formatos suportados: .dps .key .odp .pot .potx .pps .pssx .ppt .pptm .pptx</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Converta Planilhas</h3>
                        <p>Converta uma planilha em outro tipo. Formatos suportados: .csv .et .numbers .ods .xls .xlsm .xlsx</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Converter Vetor</h3>
                        <p>Converta um vetor em outro tipo. Formatos suportados: .ai .cdr .cgm .emf .sk .sk1 .svg .svgz .vsd .wmf</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Converter Video</h3>
                        <p>Converta um video em outro tipo. Formatos suportados: .3g2 .3gp .3gpp .avi .cavs .dv .dvr .flv .m2ts .m4v .mkv .mod .mov .mp4 .mpeg .mpg .mts .mxf .ogg .rm .rmvb .swf .ts .vob .webm .wmv .wtv</p>
                    </Tool>
                </div>
            </section>
            <section>
                <div className="w100 tools__h2-line relative fit">
                    <h2 className='capitalize cFFFFFF b000000 fit'>
                        medicina
                    </h2>
                </div>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Calcular IMC</h3>
                        <p>Cálculo do IMC (Índice de Massa Corporal).</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calculadora Gestacional</h3>
                        <p>Calcula a data provável do parto e a idade gestacional.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Período Fértil</h3>
                        <p>Calcula o período com maior probabilidade de gravidez.</p>
                    </Tool>
                </div>
            </section>
            <section>
                <div className="w100 tools__h2-line relative fit">
                    <h2 className='capitalize cFFFFFF b000000 fit'>
                        documentos
                    </h2>
                </div>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Recibo Online</h3>
                        <p>Gera recibo online para imprimir.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Nota Promissória Online</h3>
                        <p>Gera nota promissória online para imprimir.</p>
                    </Tool>
                </div>
            </section>
            <section>
                <div className="w100 tools__h2-line relative fit">
                    <h2 className='capitalize cFFFFFF b000000 fit'>
                        diversos
                    </h2>
                </div>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Signos e Datas</h3>
                        <p>Saiba o signo do zodíaco de uma determinada data de nascimento.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Leitura Rápida</h3>
                        <p>Mostra uma palavra de cada vez, para ler em alta velocidade.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Distância Entre Cidades</h3>
                        <p>Calcula a distância entre duas cidades e mostra a rota no mapa.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Minha Localização Atual</h3>
                        <p>Mostra suas coordenadas geográficas e a localização no mapa.</p>
                    </Tool>
                </div>
            </section>
        </StyledTools>
    )
}

export default Tools;