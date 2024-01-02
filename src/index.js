let nomeHeroi = 'Marlysson'
let quantExperiencia = 10500
let classificacao

if (quantExperiencia <= 1000) {
    classificacao = 'Ferro'
    //console.log('Nível ' + classificacao)
}
if (quantExperiencia > 1000 && quantExperiencia <= 2000) {
    classificacao = 'Bronze'
    //console.log('Nível ' + classificacao)
}
if (quantExperiencia > 2000 && quantExperiencia <= 5000) {
    classificacao = 'Prata'
    //console.log('Nível ' + classificacao)
}
if (quantExperiencia > 5000 && quantExperiencia <= 7000) {
    classificacao = 'Ouro'
    //console.log('Nível ' + classificacao)
}
if (quantExperiencia > 7000 && quantExperiencia <= 8000) {
    classificacao = 'Platina'
    //console.log('Nível ' + classificacao)
}
if (quantExperiencia > 8000 && quantExperiencia <= 9000) {
    classificacao = 'Ascendente'
    //console.log('Nível ' + classificacao)
}
if (quantExperiencia > 9000 && quantExperiencia <= 10000) {
    classificacao = 'Imortal'
    //console.log('Nível ' + classificacao)
}
if (quantExperiencia > 10000) {
    classificacao = 'Radiante'
    //console.log('Nível ' + classificacao)
}

console.log('O heroi ' + nomeHeroi + ' está no nível: ' + classificacao)

