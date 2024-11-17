/* document trata se do html  para pegar queryselecto 
criar variavel (let)

*/

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-inf")
let modal = document.querySelector(".modal")


botaoSom.addEventListener("click", ligaSom)
video.addEventListener("click", desligaSom)



function ligaSom(){
    video.muted = false   
}

function desligaSom(){
    video.muted = true
}
botao.addEventListener("click", mostraModal)
modal.addEventListener("click", sair)

function mostraModal(){
    modal.style.display = "block"
    
}
function sair(){
    modal.style.display = "none"
}