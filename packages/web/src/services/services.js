/* -- cria um delay --
/*
/* recebe n milisegundos
/* cria uma promise
/* a promise fica executando por n milisegundos
*/
export const delay = input => new Promise(resolve => setTimeout(resolve, input));

export const redirect = input => window.location.href = input;

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
            return input.replace(/\w\S*/g, str => str.charAt(0).toUpperCase() + str.substr(1));
        case 'lowercase':
            return input.toLowerCase();
        case 'uppercase':
            return input.toUpperCase();
        case 'text':
            input = input.charAt(0).toUpperCase() + input.substr(1);
            return input.replace(/\. \w\S*|\? \w\S*|! \w\S*/g, str => str.substr(0, 2) + str.charAt(2).toUpperCase() + str.substr(3))
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
export const charCounter = input => input.replace(/\S/g, '').length;

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

/* --sorteio && numeros aleatorios && dado online--
*/
export const genRandom = (max, min, len) => {
    const output = Math.ceil(Math.random() * Math.pow(10, len));
    return output <= max && output >= min ? output : genRandom(max, min, len);
};

/* --lista aleatoria--
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

/* --calculadora regra de tres composta--
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

/* --calcular percentual--
*/

// -- percentual de um valor
export const calcPercentage = (value, perc) => value * (perc / 100);
// -- aumento percentual
export const calcPercentageIncrease = (value, perc) => value * ((100 + perc) / 100);
// -- desconto percentual
export const calcPercentageDiscount = (value, perc) => value * ((100 - perc) / 100);
// -- margem de venda
export const salesMargin = (value, perc) => value / (1 * ((100 - perc) / 100));
// -- variacao percentual
export const percentageChange = (v1, v2) => (v2 / v1 - 1) * 100;
// -- relacao entre dois valores
export const percentageRelationshipBetweenTwoValues = (v1, v2) => (v1 / v2) * 100;

/* --calcular parcelas--
*/

/* --calcular lucro--
*/

/* --calcular montante--
*/

/* --prever pagamentos de mesmo valor--
*/

/* --primeiro milhão--
*/

/* --código dos bancos--
*/

/* --valor do salário mínimo--
*/

/* --calcular juros simples--
/*
/* [VALOR FUTURO]
/*    p . (1 + i.n)
/*    p => valor presente
/*    i => taxa de juros
/*    n => numero de períodos
/*
/* [VALOR PRESENTE]
/*    f / (1 + i.n)
/*    f => valor futuro
/*    i => taxa de juros
/*    n => numero de períodos
/*
/* [TAXA DE JUROS]
/*     (f - p) / (p.n)
/*     f => valor futuro
/*     p => valor presente
/*     n => numero de períodos
/*
/* [NÚMERO DE PERÍODOS]
/*     (f - p) / (p.i)
/*     f => valor futuro
/*     p => valor presente
/*     i => taxa de juros
/*
*/

// -- valor futuro [juros simples]
export const futureValueJS = (value, perc, periods) => value * (1 + (perc / 100) * periods);

// -- valor presente [juros simples]
export const presentValueJS = (value, perc, periods) => value / (1 + (perc / 100) * periods);

// -- taxa de juros [juros simples]
export const interestRateJS = (pValue, fValue, periods) => (fValue - pValue) / (pValue * periods);

// -- numero de periodos [juros simples]
export const calcPeriodsJS = (pValue, fValue, perc) => (fValue - pValue) / (pValue * (perc / 100));

/* --calcular juros compostos--
/*
/* [VALOR FUTURO]
/*    p . (1 + i)^n
/*    p => valor presente
/*    i => taxa de juros
/*    n => numero de períodos
/*
/* [VALOR PRESENTE]
/*    f / (1 + i)^n
/*    f => valor futuro
/*    i => taxa de juros
/*    n => numero de períodos
/*
/* [TAXA DE JUROS]
/*     (f - p)^1/n - 1
/*     f => valor futuro
/*     p => valor presente
/*     n => numero de períodos
/*
/* [NÚMERO DE PERÍODOS]
/*     log(f/p)/log(1+i)
/*     f => valor futuro
/*     p => valor presente
/*     i => taxa de juros
/*
*/

// -- valor futuro [juros simples]
export const futureValueJC = (value, perc, periods) => value * Math.pow(1 + (perc / 100), periods);

// -- valor presente [juros simples]
export const presentValueJC = (value, perc, periods) => value / Math.pow(1 + (perc / 100), periods);

// -- taxa de juros [juros simples]
export const interestRateJC = (pValue, fValue, periods) => Math.pow(fValue / pValue, 1 / periods) - 1;

// -- numero de periodos [juros simples]
export const calcPeriodsJC = (pValue, fValue, perc) => Math.round(Math.log10(fValue / pValue) / Math.log10(1 + (perc / 100)));

/* --converter taxa de juros--
*/
export const convertInterestRate = (perc, from, to) => {
    // dia[0], semama[1], mes[2], bimestre[3], trimestre[4], semestre[5], ano[6]
    const values = [1, 7, 30, 60, 90, 180, 360];
    let tax = 1;
    if (from > to)
        tax = values[to] / values[from];
    else if (from < to)
        tax = values[from] / values[to];
    return Math.pow(1 + (perc / 100), tax) - 1;
};

/* --calcular financiamento e emprestimos--
*/

/* --calcular retorno sobre investimentos e viabilidade financeira--
*/

/* --calcular saldo devedor--
*/

/* --calculadora hp-12c online--
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

/* --calcular testosterona livre--
*/

/* --calcular risco de cancer de prostata--
*/

/* --calcular estimativa de filtracao glomerular--
*/

/* --calcular diluicao e rediluicao de medicamentos--
*/

/* --calcular gotejamento de medicamento--
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