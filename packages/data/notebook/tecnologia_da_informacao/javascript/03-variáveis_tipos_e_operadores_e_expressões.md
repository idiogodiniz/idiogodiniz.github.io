# Variáveis, Tipos e Operadores e Expressões

> ### Referências Bibliográficas
> 
> - FLANAGAN, David. **JavaScript: O Guia Definitivo**. 6. ed. Porto Alegre: Bookman, 2013.
> - MOZILLA. **Estrutura de dados do Javascript**. Mozilla. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures. Acesso em: 27 de agosto de 2022.
> - MOZILLA. **Expressões e Operadores**. Mozilla. Disponível em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators. Acesso em 27 de agosto de 2022.
> - MOZILLA. **Mutável**. Mozilla. Disponível em: https://developer.mozilla.org/pt-BR/docs/Glossary/Mutable. Acesso em 27 de agosto de 2022.
> - PEREIRA, Yure. **Entendendo o uso de escopo no JavaScript**. Medium, 2017. Disponível em: https://medium.com/weyes/entendendo-o-uso-de-escopo-no-javascript-3669172ca5ba. Acesso em: 28 de agosto de 2022.

## Variáveis

Variável é um nome **simbólico** para um valor, e são declaradas através de uma palavra chave, são elementos básicos na programação, pois são aquelas que armazenam os dados que precisamos no nosso algoritmo. Cada dado pode ser de um tipo diferente e, por isso precisamos mostrar ao nosso algoritmo logo no início o que esperar armazenar.

```javascript
// Valores podem ser atribuídos através do sinal =
let x; // Variável x declarada sem valor atribuído
let y = 10; // Variável y declarada com valor 10 atribuído
y = 20; // Alteramos o valor 10 para 20 após o novo valor ter sido atribuído
```

### Escopo de variável
Quando nos referimos a escopo de variável estamos se referindo a qual local de nosso código uma determinada variável pode ser acessada. No JavaScript existem somente dois tipos de escopos, que são eles, escopo global e local. O código a seguir ilustra basicamente como funcionam esses dois escopos.

```javascript
var globalVariable = 10; // Variável localizada no escopo global

function pointer() { // Tudo presente dentro das chaves aqui, será do escopo da função (local)
    var localVariable = globalVariable * 10 % 2.8; // Variável localizada no escopo local

    console.log(globalVariable); // Exibindo variável do escopo global no console
    console.log(localVariable); // Exibindo variável do escopo local no console
};

console.log(localVariable);  // Exibindo variável do escopo local no console
pointer();
```

Técnicamente, uma variável global é definida quando declaramos uma variável fora de qualquer função, assim ela torna acessível a qualquer parte da nossa aplicação ou site, podendo ser lida e alterada, e uma variável local se torna local quando ela é declarada dentro de uma função, de tal maneira a qual ela somente estará acessível dentro dessa função.

Dependendo do tipo que usarmos para declarar uma variável, vamos obter erros dependendo da forma que implementarmos, veja no exemplo abaixo:

```javascript
let globalVariable = 10;

function pointer() {
    let localVariable = globalVariable * 10 % 2.8; 

    console.log(globalVariable); // 10
    console.log(localVariable); // 2.000000000000006
};

console.log(localVariable);  // error
pointer();
```

> #### Blocos no JavaScript não têm escopo
>
> É bom ressaltar que no JavaScript blocos de instruções como IF, FOR, WHILE etc. não criam seu próprio escopo como acontece em outros linguagem de programação que são semelhantes ao C, de forma como já foi dito anteriormente que no JavaScript somente existem dois tipos de escopos, que são eles escopo global e escopo local.
>
> Por isso, evite criar variáveis em escopos de blocos, pois isso pode causar erros inesperados e/ou indesejados, afinal, podem ser mais dificeis de serem identificados.

### Declaração de Variáveis

| Tipo | Explicação |
| - | - |
| var | Declara uma variável, opcionalmente, inicializando-a com um valor |
| let | Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor |
| const | Declara uma constante de escopo de bloco, apenas de leitura |

Podemos declarar facilmente uma variável, mencionando seu tipo, declarando um nome e atribuindo um valor.

```javascript
var a = 10;
let b = 10;
const c = 10;
```

### Variáveis Globais

Variáveis globais são propriedades do objeto global. Em páginas web o objeto global é a window, assim você pode configurar e acessar variáveis globais utilizando a sintaxe window.variavel.

Consequentemente, você pode acessar variáveis globais declaradas em uma janela ou frame ou frame de outra janela. Por exemplo, se uma variável chamada phoneNumber é declarada em um documento, você pode consultar esta variável de um frame como parent.phoneNumber.

## Tipos de valores

Como ja foi apresentado, JavaScript é uma linguagem de **típagem dinâmica**, afinal, você não necessita declarar o tipo de uma variável antes de sua atribuição, pois **o tipo será automaticamente determinado quando o programa for processado**, e isso também significa que você pode reatribuir uma mesma variável com um tipo diferente.

```javascript
var x = 42; // x é um Number agora
x = "bar"; // x é um String agora
x = true; // x é um Boolean agora
```

#### Primitivos

Valores primitivos são aqueles que não podem ser decompostos em unidades menores, eles representam o grau mais elementar que se pode ter em uma linguagem de programação. **A partir deles, todas as outras representações são criadas**.

Se mudarmos nosso pensamentos ao nível físico da máquina, veriámos que a representação primária subliome é o dígito binário, o qual é utilizado pelo processador para realizar suas computações. No entanto, essa seria uma representação pouco significativa para a linguagem, já que na construção de softwares corporativos, a manipulação com números, textos e verificações lógicas predominam.

A última versão ECMAScript define sete tipos de dados primitivos:
| Tipo | Definição Básica |
| - | - |
| Boolean | representa uma entidade lógica e pode ter dois valores: verdadeiro(true) ou falso(false) |
| Null | representa exatamente um valor: null(nulo) |
| Undefined | representa uma variável que não foi atribuída a um valor específico, assume o valor undefined(indefinido) |
| Number | representa literalmente numeros |
| BigInt | representa inteiros no formato de precisão **arbritrária** |
| String | representa dados textuais, um conjunto de "elementos" de valores de 16-bits **unsigned integer** |
| Symbol | (novo) valores desse tipo podem ser usados para fazer propriedades de objetos anônimos |

#### Mutável e imutável

Mutável é o tipo da variável que pode ser alterada. Em JavaScript, somente objetos e arrays são mutáveis, valores primitivos não. Você pode fazer o nome da variável apontar para um novo valor, mas o valor anterior continua na memória. Logo, a necessidade da coleta de lixo, **"garbage collection"**. 

Um objeto mutável é um objeto cujo estado pode ser modificado após sua criação. 

Imutáveis são os objetos cujo o estado não podem ser mudados uma vez criados.

Strings e Numbers são imutáveis.

```javascript
var stringImutavel = 'Hello'; // um novo objeto com o valor string é criado.

stringImutavel = stringImutavel + 'World'; // anexando 'World' ao valor existente.

/* Ao anexar a 'stringImutavel' com um valor de string, os seguintes eventos ocorrem:
/*   - O valor existente de 'stringImutavel' é recuperado.
/*   - 'World' é anexado ao valor existente de 'stringImutavel'.
/*   - O valor resultante é então alocado para um novo bloco na memória.
/*   - O objeto 'stringImutavel' agora aponta para um novo espaço de memória criado.
/*   - O espaço de memória criado anteriormente está habilitado para a coleta de lixo.
*/
```

## Operadores e Expressões

Operadores e expressões são símbolos especiais que tem um significado próprio para a linguagem e estão associados a determinadas operações. Existem operadores aritméticos como a soma(+) ou a subtração(-), operadores relacionais como a comparação de igualdade (==) e operadores de cadeias de caracteres como a concatenação (+).

O JavaScript possui operadores binários, unário, ternário, e condicional, siga a tabela para mais detalhes.

### Aritmético

| Operador | Exemplo | Tipo | Objetivo |
| - | - | - | - |
| + | a + b | Aritmético | Soma |
| - | a - b | Aritmético | Subtração |
| * | a * b | Aritmético | Multiplicação |
| / | a / b | Aritmético | Divisão |
| % | a % b | Aritmético | Resto da Divisão |
| ** | a ** b | Aritmético | Potenciação |
| = | let a = b | Aritmético | Atribuição Simples |
| += | a+=b | Aritmético | Atribuição Composta |
| -= | a-=b | Aritmético | Atribuição Composta |
| [*=]() | a*=b | Aritmético | Atribuição Composta |
| /= | a/=b | Aritmético | Atribuição Composta |
| %= | a%=b | Aritmético | Atribuição Composta |
| [**=]() | a**= | Aritmético | Atribuição Composta |
| n++ | a++ | Aritmético | Incremento **(pós-fixado)** |
| ++n | ++a | Aritmético | Incremento **(pré-fixado)** |
| n-- | b-- | Aritmético | Decremento **(pós-fixado)** |
| --n | --b | Aritmético | Decremento **(pré-fixado)** |

### Comparação

| Operador | Exemplo | Tipo | Objetivo |
| - | - | - | - |
| < | a < b | Comparação | Menor |
| > | a > b | Comparação | Maior |
| <= | a <= b | Comparação | Menor ou igual |
| >= | a >= b | Comparação | Maior ou igual |
| == | a == b | Comparação | Igual |
| != | a != b | Comparação | Diferente |
| === | a === b | Comparação | Estritamente igual |
| !== | a !=== b | Comparação | Estritamente diferente |

### Lógico

| Operador | Exemplo | Tipo | Objetivo |
| - | - | - | - |
| !n | !c | Lógico | Negação |
| && | c && d | Lógico | AND |
| II | c II d | Lógico | OR |

### Bit-a-bit

| Operador | Exemplo | Tipo | Objetivo |
| - | - | - | - |
| & | c & d | Bit-a-bit | AND |
| I | c I d | Bit-a-bit | OR |
| ^ | c ^ d | Bit-a-bit | XOR |
| ~ | ~ a | Bit-a-bit | NOT |
| << | a << b | Bit-a-bit | Deslocamento à esquerda |
| >> | a >> b | Bit-a-bit | Deslocamento à direita com propagação de sinal |
| >>> | a >>> b | Bit-a-bit | Deslocamento à direita com preenchimento zero |

### String

| Operador | Exemplo | Tipo | Objetivo |
| - | - | - | - |
| + | 'pão' + ' com ovo' | String | Concatenar |

### Ternário

| Operador | Exemplo | Tipo | Objetivo |
| - | - | - | - |
| ? | a === b ? true : false | Ternário | Condições |

### Vírgula

| Operador | Exemplo | Tipo | Objetivo |
| - | - | - | - |
| , | var l, i **. . .** | Vírgula | Avaliar |

### Unário

| Operador | Exemplo | Tipo | Objetivo |
| - | - | - | - |
| delete | delete objeto | Unário | Apagar um objeto |
| typeof | typeof operando | Unário | Retornar tipo |
| void | void expressão | Unário | Especifica que uma expressão deve ser avaliada sem retorno de valor. |

### Relacional

| Operador | Exemplo | Tipo | Objetivo |
| - | - | - | - |
| in | numeroOuPropriedade in objeto | Relacional | Indentificar se existe ou não em algo |
| instanceof | nomeObjeto instanceof tipoObjeto | Relacional | Indentificar igualdade do tipo |