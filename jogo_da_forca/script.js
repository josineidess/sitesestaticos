var palavras = ["AMORA","ABACAXI","ACABATE","CARRO","NOTEBOOK"]

function sortear_palavra(){
  return Math.round(Math.random() * ((palavras.length-1) - 0) + 0);
} 

var vidas = 6
var img1 = document.querySelectorAll("img")[0]
var secreta = document.getElementById("palavrasecreta")
var letras = [] //botoes das letras da palavra secreta
var tentativas = [] //letras que já foram tentadas
var alfabeto = document.getElementById("alfabeto")
var l_alfabetos = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
var b_alfabetos = [] //lista de dicionario de botoes com seu status(letra já escolhida ou não)
var palavra = palavras[sortear_palavra()]
var idas = 0 //quantidade de letras acertadas
var letras_tentadas = document.getElementById("escolhidas") 
var l_t = "" //variavel que guarda as letras já escolhidas


//funcao que indica a quantidade de vidas e muda a imagem da forca
function imagemAtual(){
  if(vidas < 0){
   alert("Game over!")
   img1.src = './images/'+6+'.png'
    vidas = 6
  }else{
	img1.src = './images/'+vidas+'.png'
  }
}

//funcao que gera palavra secreta
function gerarPalavra(){
  for(let e = 0;e < palavra.length;e++){
    let btn = document.createElement('BUTTON');
    let lbl = document.createTextNode(" ");        
    btn.appendChild(lbl);   
    secreta.appendChild(btn);
    letras.push(btn)
  }
}

//funcao que gera alfabeto
function gerarAlfabeto(){
   for(let e = 0;e < l_alfabetos.length;e++){
     let btn = document.createElement('BUTTON');
     let lbl = document.createTextNode(l_alfabetos[e]);        
     btn.appendChild(lbl);   
     btn.addEventListener("click", function(event){
       tentar(l_alfabetos[e])
     }
     );
     console.log(btn.value)
     
     alfabeto.appendChild(btn);
     b_alfabetos.push({btn: false})
   }
}


//funcao que indica se a letra existe na palavra
function tentar(l){
  
  let encontrou = false

  if(!tentativas.includes(l)){ //verifica se a letra é repetida
    l_t += l + " "
    letras_tentadas.textContent = l_t
    tentativas.push(l)
    for(let e = 0;e < palavra.length;e++){
      if(palavra[e] == l){
          b_alfabetos[e] = true
          encontrou = true
          letras[e].textContent = l
          idas += 1
      }
    }
  }else{
      alert("Essa letra já foi...")
      encontrou = true
  }

  if(encontrou == false){
    errou()
  }
}

//checa se o jogador ganhou toda vez que tiver algum click
document.addEventListener("click", ganhou)

//verifica se a quantidade de letras acertadas é igual a quantidada de letras da palavra secreta
function ganhou(){
  if(idas == palavra.length){
    alert("Você ganhou!!")
    window.location.reload()
  }else{
    return false
  }
}


function inicio(){
  gerarPalavra()
  gerarAlfabeto()
 
}


function errou(){
  vidas -= 1
  imagemAtual() //chama a funcao que muda o frame da forca
}

inicio()

