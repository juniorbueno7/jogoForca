<<<<<<< HEAD
# O desafio da forca
=======
# Jogo da Forca 
<p>O jogo ainda não é 100% dinâmico, a palavra da forca é estática (abacaxi), mas será atualizado logo. O atual funcionamento do jogo:
 <p> *Inicia com 6 vidas;
 <p> *Só é possivel uma letra por chute;
 <p> *Toda letra chutada é acrescentada a um array;
 <p> *Caso a letra esteja errada, -1 vida;
 <p> *Se a letra estiver certa, ela é substituida na sua respectiva posição;
 <p> *Se a letra chutada ja foi chutada antes, nada acontece;
 <p> *O jogo termina assim que as vidas acabam ou a palavra esteja completa.
 
 <p>Projeto realizado entre os dias 19/07 e 24/07, após o entendimento do que deveria ser feito, o meu primeiro passo foi aprender o paradigma orientado a objetos no javascript, já que eu não tinha nenhuma experiência anterior. a sensação de completar o projeto foi totalmente empoderadora, algo que acrescentou muito no meu conhecimento e portifólio, sinto que dei um grande passo entendendo como funciona o paradigma, a programação em geral se torna cada dia mais clara pra mim. 
>>>>>>> 437a2f9e5d48233ffbc9d459b1de9ed5ada78a75

Olá! Você está prestes a iniciar o nosso desafio para a seleção do StartDB. Se você chegou aqui sem conhecer o StartDB, você pode encontrar mais informações [neste link](https://start.dbserver.com.br/). O desafio desse ano será desenvolver as regras de um jogo da forca. 
Você conhece o jogo da forca?

![forca](docs/forca.gif) 

> **Observação:** *Dia das mães* no gif acima é a dica sobre a palavra secreta

É um jogo que antigamente necessitava de duas pessoas, uma para selecionar a palavra secreta e outra para tentar acertar. A pessoa que escolhia a palavra desenhava/registrava tudo no papel, desde o desenho da forca, as letras acertadas e letras erradas. Algo muito próximo do gif acima.

> **Observação:** Somente precisa ser implementado as regras do jogo, não é preciso desenvolver a interface do jogo, o GIF é para demonstração.

# Como faço o desafio?

## Baixando o código do desafio
![image](docs/clone-repo.png)
1. Em <i>Code</i> clique em <i>Download Zip</i>
2. Acessar o arquivo [desafio.js](https://github.com/dbserver/startdb-2022/blob/main/desafio/desafio.js)
3. Resolver os desafios que estão comentados no [arquivo de regras](docs/Regras.md)

## Ou clonando o projeto no Github:

1. Clonar projeto (Se não sabe como, acesse [aqui](https://docs.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository))
2. Acessar o arquivo [desafio.js](https://github.com/dbserver/startdb-2022/blob/main/desafio/desafio.js)
3. Resolver os desafios que estão comentados no [arquivo de regras](docs/Regras.md)

## Instalando o Node e rodando localmente

1. Instalar o [Node](https://nodejs.org/en/)
2. Instalar dependencias do projeto com o seguinte comando:
```bash
npm install
```
3. Para interagir com o jogo durante o desenvolvimento, você pode executar `desafio.js`, que irá iniciar o jogo no terminal, com o seguinte comando:
```bash
npm start
```

## Regras do jogo

As regras estão descritas [nesse arquivo](docs/Regras.md).

# Quero enviar meu desafio, como faço :D ?

## Enviar o código fonte por e-mail:

Enviar o código fonte para o e-mail start@dbserver.com.br

## Ou subir código no GitHub:

1. Subir o código para um repositório público (Se não sabe como, acesse [aqui](https://docs.github.com/pt/github/managing-files-in-a-repository/managing-files-using-the-command-line/adding-a-file-to-a-repository-using-the-command-line))
2. Enviar o link do repositório para o e-mail start@dbserver.com.br
