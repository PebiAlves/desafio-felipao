console.log("### DESAFIO CLASSIFICADOR DE NÍVEL DE HERÓI ###")

let nomeHeroi = "Pebi"

console.log("Seja bem vindo ao universo de " + nomeHeroi)
console.log(nomeHeroi + " ira enfretar varias aventuras, durante essa jornada.")
console.log("Apareceram inimigos para enfrentar e adiquirir XP!!")

let msgJogo = "Mensagem do jogo: "
let xp = 0
let hp = 100

console.log(msgJogo + nomeHeroi + " possui " + xp + " de experiencia e " + hp + " de vida!")
console.log(nomeHeroi + " estava seguindo sua trilha para chegar na cidade dourada.")
console.log(msgJogo + " Aparece um dragão azul")

if (hp > 30) {
    for (let cont = 0; cont < 5; cont++) {
        console.log(nomeHeroi + " ataca dragão")
        xp += 200
        console.log(msgJogo + nomeHeroi + " recebe " + xp + " de experiencia.")
        console.log("Dragão ataca e " + nomeHeroi + " perde 2 de vida.")
        hp -=2
        console.log(msgJogo + nomeHeroi + " esta com " + hp + " de vida!")
    }
}
let nivel = ""

if (xp <= 1000){
    console.log(msgJogo + " seu nivel é de Ferro")
    nivel = "Ferro"
}
else if (xp <= 2000){
    console.log(msgJogo + " seu nivel é de Bronze")
    nivel = "Bronze"
}
else if (xp <= 5000){
    console.log(msgJogo + " seu nivel é de Prata")
    nivel = "Prata"
}
else if (xp <= 7000){
    console.log(msgJogo + " seu nivel é de Ouro")
    nivel = "Ouro"
}
else if (xp <= 8000){
    console.log(msgJogo + " seu nivel é de Platina")
    nivel = "Platina"
}
else if (xp <= 9000){
    console.log(msgJogo + " seu nivel é de Ascendente")
    nivel = "Ascendente"
}
else if (xp <= 10000){
    console.log(msgJogo + " seu nivel é de Imortal")
    nivel = "Imortal"
}
else{
    console.log(msgJogo + " seu nivel é de Radiante")
    nivel = "Radiante"
}

console.log(msgJogo + " O Herói de nome " + nomeHeroi + " está no nível de " + nivel)
console.log(msgJogo + nomeHeroi + " possui " + xp + " de experiencia e " + hp + " de vida!")
console.log(nomeHeroi + " estava seguindo sua trilha para chegar na cidade dourada.")
console.log(msgJogo + " Aparece um o chefão dos dragão")
console.log(" Para enfretar o heroi precisa estar com 100 de HP")

if (hp < 100){
    for(let cont = 0; hp < 100; cont++){
        console.log(msgJogo + nomeHeroi + " Bebe poção de HP recuperar 2 de vida")
        hp += 2
    }
}

if (hp === 100) {
    for (let cont = 0; cont < 5; cont++) {
        console.log(nomeHeroi + " ataca chefão")
        xp += 1800
        console.log(msgJogo + nomeHeroi + " recebe " + xp + " de experiencia.")
        console.log("Chefão ataca e " + nomeHeroi + " perde 2 de vida.")
        hp -= 10
        console.log(msgJogo + nomeHeroi + " esta com " + hp + " de vida!")
    }
}

if (xp <= 1000){
    console.log(msgJogo + " seu nivel é de Ferro")
    nivel = "Ferro"
}
else if (xp <= 2000){
    console.log(msgJogo + " seu nivel é de Bronze")
    nivel = "Bronze"
}
else if (xp <= 5000){
    console.log(msgJogo + " seu nivel é de Prata")
    nivel = "Prata"
}
else if (xp <= 7000){
    console.log(msgJogo + " seu nivel é de Ouro")
    nivel = "Ouro"
}
else if (xp <= 8000){
    console.log(msgJogo + " seu nivel é de Platina")
    nivel = "Platina"
}
else if (xp <= 9000){
    console.log(msgJogo + " seu nivel é de Ascendente")
    nivel = "Ascendente"
}
else if (xp <= 10000){
    console.log(msgJogo + " seu nivel é de Imortal")
    nivel = "Imortal"
}
else{
    console.log(msgJogo + " seu nivel é de Radiante")
    nivel = "Radiante"
}

console.log(msgJogo + nomeHeroi + " possui " + xp + " de experiencia e " + hp + " de vida!")
console.log(msgJogo + " O Herói de nome " + nomeHeroi + " está no nível de " + nivel)