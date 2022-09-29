/* -- cria um delay --
/*
/* recebe n milisegundos
/* cria uma promise
/* a promise fica executando por n milisegundos
*/
export const delay = input => new Promise(resolve => setTimeout(resolve, input));

/*
/* ======================================
/* ||                                  ||
/* ||              texto               ||
/* ||                                  ||
/* ======================================
*/

/* -- inverte um texto --
/*
/* recebe um texto
/* cria uma variável que será o retorno
/* identifica o tamanho do texto
/* passa por todos os seus caractéres de trás para frente
/* salva cada caractere em uma variável
/* retorna o texto invertido
*/
export const invertTextFunction = input => {
    let output = '';
    for (let i = input.length - 1; i >= 0; i--)
        output += input.charAt(i);
    return output;
};

/* --maiusculas para minusculas--
/*
/* recebe um texto
/* identifica o tipo
/* retorna um novo texto modificado
*/
export const orietationText = (input, type) => {
    switch (type) {
        case 'capitalize':
            return input.replace(/\S\w*/g, str => str.charAt(0).toUpperCase() + str.substr(1));
        case 'lowercase':
            return input.toLowerCase();
        case 'uppercase':
            return input.toUpperCase();
        case 'text':
            input = input.charAt(0).toUpperCase() + input.substr(1);
            return input.replace(/\. \S\w*/g, str => str.substr(0, 2).toLowerCase() + str.charAt(2).toUpperCase() + str.substr(3).toLowerCase())
        default:
            break;
    };
};

/* --remover linhas duplicadas--
*/

/* --ordem alfabetica--
*/

/* --de cabeça para baixo--
*/

/* --letras diferentes--
*/

/* --letras empilhadas--
*/

/* --prefixo e sufixo--
*/

/* --texto sinonimos--
*/

/* --localizar e substituir--
*/

/* --contador de caracteres--
*/
export const charCounter = input => input.replace(/ |.|,/g, '').length;

/* --comparar textos--
*/

/* --corretor ortográfico--
*/

/*
/* ======================================
/* ||                                  ||
/* ||            aleatorio             ||
/* ||                                  ||
/* ======================================
*/

/* --sorteio--
*/

/* --lista aleatoria--
*/

/* --numeros aleatorios--
*/

/* --dado online--
*/

/* --numeros da megasena--
*/

/* --gerador de senha--
*/

/*
/* ======================================
/* ||                                  ||
/* ||   criptografia e codificacao     ||
/* ||                                  ||
/* ======================================
*/

/* --codigo binario--
*/

/* --codigo morse--
*/

/* --texto criptografado--
*/

/* --gerador de qrcode--
*/

/* --gerador de codigo de barras 1d--
*/

/* --gerador de codigo de barras em lote--
*/

/*
/* ======================================
/* ||                                  ||
/* ||           data e hora            ||
/* ||                                  ||
/* ======================================
*/

/* --calendario--
*/

/* --contador de dias--
*/

/* --somar ou subtrair dias--
*/

/* --hora certa--
*/

/* --calculadora de horas--
*/

/* --calcular idade--
*/

/* --cronometro--
*/

/* --contagem regressiva--
*/

/* --fase da lua hoje--
*/

/* --calendario lunar--
*/

/* --estacao do ano hoje--
*/

/* --dia do ano--
*/

/* --semana do ano--
*/

/*
/* ======================================
/* ||                                  ||
/* ||             numeros              ||
/* ||                                  ||
/* ======================================
*/

/* --conversao de base numerica--
*/

/* --conversor de medidas--
*/

/* --numeros romanos--
*/

/* --numeros por extenso--
*/

/* --calculadora de porcentagem--
*/

/* --calculadora regra de tres simples--
*/

/*
/* ======================================
/* ||                                  ||
/* ||             finanças             ||
/* ||                                  ||
/* ======================================
*/

/* --conversor de moedas--
*/

/* --simulador de poupança--
*/

/* --simulador de financiamento--
*/

/* --primeiro milhão--
*/

/* --código dos bancos--
*/

/* --valor do salário mínimo--
*/

/*
/* ======================================
/* ||                                  ||
/* ||           desenvolvedor          ||
/* ||                                  ||
/* ======================================
*/

/* --gerador de cep--
*/

/* --gerador de cpf--
*/

/* --gerador de cnjp--
*/

/* --gerador de cartao de credito--
*/

/* --gerador de conta bancaria--
*/

/* --gerador de pessoas--
*/

/* --gerador de lorem ipsum--
*/

/*
/* ======================================
/* ||                                  ||
/* ||             internet             ||
/* ||                                  ||
/* ======================================
*/

/* --meu ip--
*/

/* --teste de velocidade--
*/

/* --teste de portas--
*/

/* --whois--
*/

/* --localizar ip--
*/

/*
/* ======================================
/* ||                                  ||
/* ||          redes sociais           ||
/* ||                                  ||
/* ======================================
*/

/* --nao seguidores no instagram--
*/

/* --sorteio no instagram--
*/

/* --contador de inscritos em tempo real--
*/

/* --ordenar conta do instagram--
*/

/* --gerador de link do whatsapp--
*/

/*
/* ======================================
/* ||                                  ||
/* ||           multimídia             ||
/* ||                                  ||
/* ======================================
*/

/* --converter imagem em texto--
*/

/* --juntar pdf--
*/

/* --comprimir pdf--
*/

/* --comprimir png--
*/

/* --comprimir jpg--
*/

/* --foto em preto e branco--
*/

/* --redimencionar imagem--
*/

/* --recortar fotos--
*/

/* --capturar sites--
*/

/* --converter arquivo--
*/

/* --converter audio--
*/

/* --converter cad--
*/

/* --converter documento--
*/

/* --converter ebook--
*/

/* --converter fonte--
*/

/* --converter imagem--
*/

/* --converter slides--
*/

/* --converter planilhas--
*/

/* --converter vetor--
*/

/* --converter video--
*/

/*
/* ======================================
/* ||                                  ||
/* ||            medicina              ||
/* ||                                  ||
/* ======================================
*/

/* --calcular imc--
*/

/* --calculadora gestacional--
*/

/* --calcular periodo fertil--
*/

/*
/* ======================================
/* ||                                  ||
/* ||            documentos            ||
/* ||                                  ||
/* ======================================
*/

/* --recibo online--
*/

/* --nota promissoria online--
*/

/*
/* ======================================
/* ||                                  ||
/* ||             diversos             ||
/* ||                                  ||
/* ======================================
*/

/* --signos e datas--
*/

/* --leitura rapida--
*/

/* --distancia entre cidades--
*/

/* --minha localizacao atual--
*/