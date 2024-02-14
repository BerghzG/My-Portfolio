// Variaveis
let resultado = document.querySelector('p')
let opcoes = document.querySelector('.triangulo')
var player1 = document.getElementById('jodador')
var pc1 = document.getElementById('pc')
var butao = document.querySelector('.but')

// Chamada onClick
opcoes.addEventListener('click', function(event) {
    if (event.target.classList.contains('pedra')) {
        rock()
    } else if (event.target.classList.contains('papel')) {
        paper()
    } else if (event.target.classList.contains('tesoura')) {
        scissor()
    }
}) 

butao.addEventListener('click', function() {
    pc = 0
    player = 0

    pc1.innerText = pc
    player1.innerText = player
})

// Contadores
let player = 0
let pc = 0

// 1 = Pedra
// 2 = Papel
// 3 = Tesoura

// Funções Onclick
function rock() {
        if (Math.floor(Math.random() * (3 - 1 + 1)) + 1 === 1) {
        resultado.innerText = 'Os dois jogaram pedra. Empate!';
        setTimeout(function() {
            resultado.innerText = "";
        }, 2700)
        player++
        player1.innerText = player
        pc++
        pc1.innerText = pc
    } else if (Math.floor(Math.random() * (3 - 1 + 1)) + 1 === 2) {
        resultado.innerText = 'Computador jogou papel! Você perdeu!';
         setTimeout(function() {
            resultado.innerText = "";
        }, 2700)
        pc++
        pc1.innerText = pc
    } else if (Math.floor(Math.random() * (3 - 1 + 1)) + 1 === 3) {
        resultado.innerText = 'Computador jogou tesoura! Você venceu!';
         setTimeout(function() {
            resultado.innerText = "";
        }, 2700)
        player++
        player1.innerText = player
    }}


function paper() {
    if (Math.floor(Math.random() * (3 - 1 + 1)) + 1 === 1) {
        resultado.innerText = 'Computador jogou pedra. Você venceu!';
        setTimeout(function() {
            resultado.innerText = "";
        }, 2700)
        player++
        player1.innerText = player
    } else if (Math.floor(Math.random() * (3 - 1 + 1)) + 1 === 2) {
        resultado.innerText = 'Os dois jogaram papel! Empate!';
         setTimeout(function() {
            resultado.innerText = "";
        }, 2700)
        player++
        player1.innerText = player
        pc++
        pc1.innerText = pc
    } else if (Math.floor(Math.random() * (3 - 1 + 1)) + 1 === 3) {
        resultado.innerText = 'Computador jogou tesoura! Você perdeu!';
         setTimeout(function() {
            resultado.innerText = "";
        }, 2700)
        pc++
        pc1.innerText = pc
    }}

function scissor() {
     if (Math.floor(Math.random() * (3 - 1 + 1)) + 1 === 1) {
        resultado.innerText = 'Computador jogou pedra. Você perdeu!';
        setTimeout(function() {
            resultado.innerText = "";
        }, 2700)
        pc++
        pc1.innerText = pc
    } else if (Math.floor(Math.random() * (3 - 1 + 1)) + 1 === 2) {
        resultado.innerText = 'Computador jogou papel! Você venceu!';
         setTimeout(function() {
            resultado.innerText = "";
        }, 2700)
        player++
        player1.innerText = player
    } else if (Math.floor(Math.random() * (3 - 1 + 1)) + 1 === 3) {
        resultado.innerText = 'Os dois jogaram tesoura! Empate!';
         setTimeout(function() {
            resultado.innerText = "";
        }, 2700)
        player++
        player1.innerText = player
        pc++
        pc1.innerText = pc
    }}
