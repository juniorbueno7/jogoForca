//infelizmente caminho-feliz nao verifica as etapas, nao consegui fazer essa parte... porem rodando o desafio o jogo funciona normalmente.

class Forca {

  letrasChutadas = [];
  arrayCerto = ['_','_','_','_','_','_','_'];
  contadorDeVidas = 6;
  palavraDoDesafioArray = [];

  constructor(palavraDoDesafio){
    this.palavraDoDesafio = palavraDoDesafio
  }

  chutar(letra) {
    if(letra.length == 1){
      if(this.letrasChutadas.includes(letra) == false){
        this.letrasChutadas.push(letra)
        this.verificarEntrada(letra)
      }
    }else {
      return;
    }
   }

   //Verifica se a letra de entrada do chute  se encontra na palavraDoDesafio, se sim percorre a palavraDoDesafioEmArray e aloca a letra no seu devido lugar.
   verificarEntrada(letra){
    this.palavraDoDesafioArray = this.palavraDoDesafio.split('')

    if(this.palavraDoDesafio.includes(letra)){
      for(let i = 0; i <= this.palavraDoDesafioArray.length; i++){
        if(letra == this.palavraDoDesafioArray[i]){
         this.arrayCerto[i] = letra
        }
       }
      } else {
        this.contadorDeVidas--
      }
    }
   
    //Confere o contadorDeVidas e retorna o estado do jogo.
    buscarEstado() {
    
      let palavraDoDesafio = this.palavraDoDesafioArray.toString()
      let palavraCerta = this.arrayCerto.toString()

      if(this.contadorDeVidas > 0 && palavraDoDesafio == palavraCerta){
          this.estadoDoJogo = "ganhou"
      } else if (this.contadorDeVidas <= 0) {
          this.estadoDoJogo = "perdeu"
        }
  
    return this.estadoDoJogo; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.contadorDeVidas, // Quantidade de vidas restantes
          palavra: this.arrayCerto // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
