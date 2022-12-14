import React, { useState, useLayoutEffect } from 'react';
import StyledTools, {
    Tool,
    ModalTool
} from './styles';
import Section from '../../components/section';

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
            switch (e.key) {
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
                                <button id='close' className='capitalize fit c-white b-black' onClick={click}>fechar</button>
                            </div>
                        </div>
                    </div>
                </ModalTool>
            )}
            <Section tag='Fun????es de Texto'>
                <div className="container-column w100">
                    <Tool id='textInvert' onClick={click}>
                        <h3>Inverter Texto</h3>
                        <p>Gera um novo texto invertido ou reverte o texto.</p>
                    </Tool>
                    <Tool id='upperLowerText' onClick={click}>
                        <h3>Mai??sculas e Min??sculas</h3>
                        <p>Converte o texto para letras mai??sculas ou min??sculas.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Remover Linhas Duplicadas</h3>
                        <p>Remove as linhas repetidas de uma lista.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Ordem Alfab??tica</h3>
                        <p>Coloca uma lista em ordem alfab??tica.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>De Cabe??a para Baixo</h3>
                        <p>Vira seu texto de cabe??a para baixo.</p>
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
                        <h3>Textos Sin??nimos</h3>
                        <p>Cria um novo texto trocando palavras por sin??nimos.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Localizar e Substituir</h3>
                        <p>Localiza todas as ocorr??ncias de um trecho do texto e substitui por outro.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Contador de Caracteres</h3>
                        <p>Calcula quantos caracteres, palavras e linhas existem no texto.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Comparar Textos</h3>
                        <p>Compara dois textos ou c??digos e mostra as diferen??as entre eles.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Corretor Ortogr??fico</h3>
                        <p>Detecta erros ortogr??ficos e sugere corre????es em um texto.</p>
                    </Tool>
                </div>
            </Section>
            <Section tag='Fun????es de Valores Aleat??rios'>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Sorteio</h3>
                        <p>Escolhe um nome aleat??rio presente em uma lista.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Lista Aleat??ria</h3>
                        <p>Coloca uma lista em ordem aleat??ria.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>N??meros Aleat??rios</h3>
                        <p>Gera n??meros aleat??rios de acordo com as configura????es escolhidas.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Dado Online</h3>
                        <p>Joga dados aleat??rios de 6 faces.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>N??meros da Megasena</h3>
                        <p>Gera n??meros aleat??rios para os jogos da Megasena.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de Senha</h3>
                        <p>Gera senhas aleat??rias de diversos tamanhos e op????es.</p>
                    </Tool>
                </div>
            </Section>
            <Section tag='Fun????es de Criptografia e Codifica????o'>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>C??digo Bin??rio</h3>
                        <p>Transforma o texto em c??digo bin??rio e vice-versa.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>C??digo Morse</h3>
                        <p>Transforma o texto em c??digo morse e vice-versa.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Texto Criptografado</h3>
                        <p>Criptografa o texto a partir de uma chave. Para descriptografar, ?? necess??rio a mesma chave que o gerou.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de QR Code</h3>
                        <p>Gera c??digo de barras do formato QR Code.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de C??digo de Barras 1D</h3>
                        <p>Gera c??digo de barras EAN-13, UPC-A, ISBN, entre outros.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de C??digo de Barras em Lote</h3>
                        <p>Gera v??rios c??digos de barras ao mesmo tempo.</p>
                    </Tool>
                </div>
            </Section>
            <Section tag='Fun????es de Data e Hora'>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Calend??rio</h3>
                        <p>Gera o calend??rio de diversos anos com os feriados nacionais.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Contador de Dias</h3>
                        <p>Calcula a diferen??a entre duas datas em dias, meses ou anos.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Somar ou Subtrair Dias</h3>
                        <p>Calcula uma nova data de acordo com a soma ou subtra????o de dias, meses, ou ano.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Hora Certa</h3>
                        <p>Mostra a hora certa de diferentes cidades do Brasil e do mundo.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calculadora de Horas</h3>
                        <p>Soma horas e minutos, ??til para calcular horas extras ou trabalhadas.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Idade</h3>
                        <p>Calcula uma idade em anos, meses e dias.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Cron??metro</h3>
                        <p>Cron??metro online com divis??o de voltas (laps).</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Contagem Regressiva</h3>
                        <p>Cria uma contagem regressiva para algum evento.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Fase da Lua Hoje</h3>
                        <p>Saiba qual ?? a fase, visibilidade, dist??ncia e idade da lua hoje.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calend??rio Lunar</h3>
                        <p>Veja as fases da lua e sua visibilidade por dia.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Esta????o do Ano Hoje</h3>
                        <p>Saiba em qual esta????o do ano estamos e que dia come??a cada uma das quatro esta????es.</p>
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
            </Section>
            <Section tag='Fun????es para Trabalhar com N??meros'>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Convers??o de Base Num??rica</h3>
                        <p>Converte um n??mero entre as bases decimal, bin??ria, octal e hexadecimal.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Conversor de Medidas</h3>
                        <p>Converte diversas unidades de medida como massa, temperatura e velocidade.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>N??meros Romanos</h3>
                        <p>Converte n??meros decimais para romanos e vice-versa.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>N??meros por Extenso</h3>
                        <p>Converte um n??mero em seu valor por extenso.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calculadora de Porcentagem</h3>
                        <p>Faz diversos c??lculos envolvendo porcentagem.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calculadora Regra de 3 Simples</h3>
                        <p>Faz o c??lculo da regra de 3 rapidamente.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calculadora Regra de 3 Composta</h3>
                        <p>Faz o c??lculo da regra de 3 rapidamente.</p>
                    </Tool>
                </div>
            </Section>
            <Section tag='Fun????es para Finan??as'>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Conversor de Moedas</h3>
                        <p>Faz a convers??o de valores entre diversas moedas do mundo. Taxas atualizadas em tempo real.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Percentuais</h3>
                        <p>Calcular o percentual, aumento percentual, desconto percentual, margem de venda, varia????o percentual ou rela????o percentual.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Parcelas</h3>
                        <p>Calcular parcelas a partir de um valor e quantidade de parcelas.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Lucro</h3>
                        <p>Calcular lucro excluindo o valor inicial gasto.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Montante</h3>
                        <p>Calcular valor acumulado.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Prever Pagamentos de Mesmo Valor</h3>
                        <p>Prever pagamentos de mesmo valor rapidamente.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Simulador de Poupan??a</h3>
                        <p>Calcula quanto voc?? ter?? se poupar um valor mensalmente.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Primeiro Milh??o</h3>
                        <p>Calcula o tempo ou a poupan??a necess??ria para acumular um milh??o.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>C??digo dos Bancos</h3>
                        <p>Consulte o n??mero ou c??digo dos principais bancos.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Valor do Sal??rio M??nimo</h3>
                        <p>Consulte o valor do sal??rio m??nimo atual e veja o hist??rico de reajustes</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Juros Simples</h3>
                        <p>Calcular valor futuro, valor presentel (ou principal), taxa de juros ou n??mero de per??odos.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Juros Compostos</h3>
                        <p>Calcular valor futuro, valor presentel (ou principal), taxa de juros ou n??mero de per??odos.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Converter Taxa de Juros</h3>
                        <p>Converter taxa de juros de forma r??pida.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Dinheiro no Tempo</h3>
                        <p>Prever dinheiro no tempo.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Financiamentos e Empr??stimos (Tabela Price e SAC)</h3>
                        <p>Calcular valor per??odico, per??odos e taxa de juros.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Retorno Sobre Investimento e Viabilidade Financeira</h3>
                        <p>Calcular retorno sobre investimento e viabilidade financeira rapidamente.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Saldo Devedor</h3>
                        <p>Calcular saldo devedor rapidamente.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calculadora HP-12C Online</h3>
                        <p>Use uma calculadora HP-12C online.</p>
                    </Tool>
                </div>
            </Section>
            <Section tag='Fun????es para Desenvolvimento'>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Gerador de CEP</h3>
                        <p>Gera um CEP e seu respectivo endere??o.</p>
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
                        <h3>Gerador de Cart??o de Cr??dito</h3>
                        <p>Gera n??mero de cart??o de cr??dito v??lido.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de Conta Banc??ria</h3>
                        <p>Gera conta banc??ria de diversos bancos brasileiros.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de Pessoas</h3>
                        <p>Gera dados pessoais aleat??rios.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Gerador de Lorem Ipsum</h3>
                        <p>Gera textos Lorem Ipsum para preencher espa??os vazios antes de utilizar o conte??do real.</p>
                    </Tool>
                </div>
            </Section>
            <Section tag='Fun????es de uso de Internet'>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Meu IP</h3>
                        <p>Descubra qual ?? o seu endere??o IP na internet.</p>
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
                        <p>Consulta o Whois de um dom??nio para obter informa????es sobre ele ou para saber se j?? est?? registrado.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Localizar IP</h3>
                        <p>Informa a localiza????o geogr??fica de um endere??o IP.</p>
                    </Tool>
                </div>
            </Section>
            <Section tag='Fun????es para Redes Sociais'>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>N??o Seguidores no Instagram</h3>
                        <p>Compara os perfis seguidores/seguindo para mostrar quem n??o est?? te seguindo de volta.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Sorteio no Instagram</h3>
                        <p>Realiza sorteio entre os coment??rios de uma publica????o no Instagram.</p>
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
            </Section>
            <Section tag='Fun????es de Multim??dia'>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Converter Imagem em Texto</h3>
                        <p>Extrai o texto de uma imagem utilizando OCR.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Juntar PDF</h3>
                        <p>Junta diversos arquivos PDF em um s??.</p>
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
                        <p>Redimensiona imagens para uma resolu????o menor.</p>
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
                        <p>Converta uma apresenta????o em slides para outro tipo. Formatos suportados: .dps .key .odp .pot .potx .pps .pssx .ppt .pptm .pptx</p>
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
            </Section>
            <Section tag='Fun????es para Medicina'>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Calcular IMC</h3>
                        <p>C??lculo do IMC (??ndice de Massa Corporal).</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calculadora Gestacional</h3>
                        <p>Calcula a data prov??vel do parto e a idade gestacional.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Per??odo F??rtil</h3>
                        <p>Calcula o per??odo com maior probabilidade de gravidez.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Testosterona Livre</h3>
                        <p>Calcular testosterona livre de forma r??pida.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Risco de C??ncer de Prostata</h3>
                        <p>Calcular risco de c??ncer de prostata de forma r??pida.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Estimativa de Filtra????o Glomerular</h3>
                        <p>Calcular estimativa de filtra????o glomerular de forma r??pida.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Dilui????o e Redilui????o de Medicamentos</h3>
                        <p>Calcular dilui????o e redilui????o de medicamentos de forma r??pida.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Calcular Gotejamento de Medicamento</h3>
                        <p>Calcular gotejamento de medicamento de forma r??pida.</p>
                    </Tool>
                </div>
            </Section>
            <Section tag='Fun????es para Documentos'>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Recibo Online</h3>
                        <p>Gera recibo online para imprimir.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Nota Promiss??ria Online</h3>
                        <p>Gera nota promiss??ria online para imprimir.</p>
                    </Tool>
                </div>
            </Section>
            <Section tag='Fun????es Aleat??rias'>
                <div className="container-column w100">
                    <Tool id='' onClick={click}>
                        <h3>Signos e Datas</h3>
                        <p>Saiba o signo do zod??aco de uma determinada data de nascimento.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Leitura R??pida</h3>
                        <p>Mostra uma palavra de cada vez, para ler em alta velocidade.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Dist??ncia Entre Cidades</h3>
                        <p>Calcula a dist??ncia entre duas cidades e mostra a rota no mapa.</p>
                    </Tool>
                    <Tool id='' onClick={click}>
                        <h3>Minha Localiza????o Atual</h3>
                        <p>Mostra suas coordenadas geogr??ficas e a localiza????o no mapa.</p>
                    </Tool>
                </div>
            </Section>
        </StyledTools>
    )
}

export default Tools;