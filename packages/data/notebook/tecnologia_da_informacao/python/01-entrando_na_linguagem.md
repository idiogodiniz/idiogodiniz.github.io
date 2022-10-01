# Entrando na Linguagem

> ### Referências Bibliográficas
> 
> - DEVMEDIA. **Programando com Javascript**. DevMedia. Disponível em: https://www.devmedia.com.br/programando-com-javascript/24170. Acesso em: 21 de agosto de 2022.
> - FLANAGAN, David. **JavaScript: O Guia Definitivo**. 6. ed. Porto Alegre: Bookman, 2013.
> - WIKIPEDIA.  **Visual Studio Code**. Wikipedia. Disponível em: https://pt.wikipedia.org/wiki/Visual_Studio_Code. Acesso em: 21 de agosto de 2022.
> - VISUAL STUDIO CODE. **Debugging**. Visual Studio Code. Disponível em: https://code.visualstudio.com/docs/editor/debugging. Acesso em: 21 de agosto de 2022.

**JavaScript** é a linguagem de programação da Web. A ampla maioria dos sites modernos usa JavaScript e todos os navegadores modernos incluem interpretadores JavaScript, tornando-a a linguagem de programação mais onipresente da história. JavaScript faz parte da **tríade** de tecnologias que todos os desenvolvedores Web devem conhecer: HTML, CSS e JavaScript.

Se você já conhece outras linguagens de programação, talvez ajude saber que JavaScript é uma linguagem de alto nível, dinâmica, interpretada e não tipada, conveniente para estilos de programação [orientados a objetos]() e funcionais. A sintaxe de JavaScript é derivada da linguagem [Java](), das funções de primeira classe de **Scheme** e da **herança** baseada em protótipos de **Self**. Mas não é preciso conhecer essas linguagens nem estar familiarizado com esses termos no momento.  

Na verdade, o nome "JavaScript" é um pouco enganoso. A não ser pela semelhança **sintática** superficial, JavaScript é completamente diferente da linguagem de programação Java. E Javascript já deixou para trás suas raízes como linguagem de script há muito tempo, tornando-se uma linguagem de uso geral robusta e eficiente. A versão mais recente da linguagem define novos recursos para desenvolvimento de software em grande escala.  

## História  

JavaScript foi criada na **Netscape** na fase inicial da Web e, tecnicamente, "JavaScript" é uma marca registrada, licenciada pela **Sun Microsystems** (agora [Oracle]()), usada para descrever a implementação da linguagem pelo Netscape (agora [Mozilla]()). A Netscape enviou a linguagem para a **ECMA** (European Computer Manufacture's Association) para padronização e, devido a questões relacionadas à marca registrada, a versão padronizada manteve o nome estranho **"ECMAScript"**. Pelos mesmos motivos ligados à marca registrada, a versão da Microsoft da linguagem é formalmente conhecida como ["JScript"](). Na prática, quase todo mundo chama a linguagem de JavaScript.  

> Note que será usado o termo ECMAScript para se referir ao padrão da linguagem, abreviada como **ES3** e **ES5**, assim como vai ver JavaScript abreviado como **JS**, ou não.  

Na última década, todos os navegadores Web implementaram a versão 3 do padrão ECMAScript e não havia necessidade de se pensar em números de versão: o padrão da linguagem era estável e as implementações do navegadores eram, na maioria, **interoperáveis**. Recentemente, uma importante nova versão da linguagem foi definida como ECMAScript versão 5 e os navegadores estavam começando a implementá-la.  

Quando falamos da linguagem em si, os únicos números de **versão relevantes** são ECMAScript versões 3 ou 5. A versão 4 da ECMAScript esteve em desenvolvimento por anos, mas se mostrou ambiciosa demais e nunca foi lançada. Contudo, às vezes você também vai ver um número de versão de JavaScript, como **JavaScript 1.5** ou **JavaScript 1.8**. Esses são números da versão do Mozilla: a versão 1.5 é basicamente a ECMAScript 3, e as versões posteriores incluem [extensões não padronizadas da linguagem](). Por fim, também existem números de versão vinculados a interpretadores ou "engines" de JavaScript específicos. O Google chama seu intepretador JavaScript de **V8**.  

Para ser útil, toda linguagem deve ter ou uma plataforma, ou biblioteca padrão, ou API de funções para fazer coisas como entrada e saída básicas. A linguagem JavaScript básica define uma API mínima para trabalhar como texto, arrays, datas e expressões regulares, mas não inclui funcionalidade alguma de entrada ou saída. **Entrada e saída** (assim como recursos mais sofisticados, como conexão em rede, armazenamento e gráficos) são responsabilidade do "ambiente hospedeiro" dentro do qual JavaScript está incorporada. Normalmente, esse **"ambiente hospedeiro"** dentro do qual JavaScript está incorporada. Normalmente, esse ambiente hospedeiro é um **navegador Web**.  

## Preparando Ambiente

Vamos utilizar o VSCode, mesmo existindo outros editores de código fonte, esse é a que eu mais recomendo, e também você vai aprender a utilizar a ferramenta de debug do VSCode.

O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para **depuração**, controle de versionamento **Git** incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código. Ele é customizável, permitindo que os usuários possam mudar o tema do editor, teclas de atalho e preferências. Ele é um software livre e de código aberto, apesar do download oficial estar sob uma licença proprietária.

O Visual Studio Code é baseado no **Electron**, um framework que é usado para desenvolver aplicativos Node.js para o desktop rodando no motor de layout Blink. Apesar de usar o Electron como framework, o software não usa o **Atom** e em seu lugar emprega o mesmo componente editor (apelidado "Monaco") usado no Visual Studio Team Services (anteriormente chamado de Visual Studio Online).

### Recursos

O Visual Studio Code suporta um número de linguagens de programação e um conjunto de recursos que podem ou não estar disponíveis para a dada linguage.

Muitos dos recursos do Visual Studio Code features não são expostos através de menus ou da interface de usuário. Ao invés disso, elas estão acessíveis através da paleta de comandos ou por meio de um arquivo JSON (como as preferências do usuário).

No papel de um editor de código fonte, o Visual Studio Code permite alterar a página de código na qual o documento atual é salvo, o **caractere que identifica quebra de linha** (uma escolha entre **CR** e **CRLF**), e a linguagem de programação do documento ativo. 

| Recursos | Linguagens |
| - | - |
| Realce de sintaxe | Batch, C++, Clojure, CoffeeScript, DockerFile, Elixir, F#, Go, Pug template language, Java, HandleBars, INI, Lua, Makefile, Objective-C, Perl, PowerShell, Python, R, Razor, Ruby, Rust, SQL, Visual Basic, XML |
| Snippets | Groovy, Markdown, Nim, PHP, Swift |
| Complementação inteligente de código | CSS, HTML, JavaScript, JSON, Less, Sass, TypeScript |
| Refatoração | C#, TypeScript |
| Depuração | <ul><li>JavaScript e TypeScript para projetos Node.js</li><li>C# e F# para projetos Mono no Linux e no macOS</li><li>C e C++ no Windows, no Linux e no macOS</li><li>Python</li></ul>

### Debugging

Uma das principais características do Visual Studio Code é seu ótimo suporte para depurador. O depurador (debug) integrado ajuda a acelerar a edição, compilação e as repetições de execução durante a depuração.