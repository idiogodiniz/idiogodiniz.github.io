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
        output += input[i];
    return output;
}

/* --maiusculas para minusculas--
*/

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
/* ||             numeros              ||
/* ||                                  ||
/* ======================================
*/

/* ----
*/