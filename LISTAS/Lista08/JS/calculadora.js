var numero1 = document.getElementById('n1')
var numero2 = document.getElementById('n2')

function Somar(){
    var resultado = Number(numero1.value) + Number(numero2.value)

    var res = document.getElementById("resultado")
    res.textContent = resultado
}
function Subtrair(){
    var resultado = Number(numero1.value) - Number(numero2.value)

    var res = document.getElementById("resultado")
    res.textContent = resultado
}function Multiplicar(){
    var resultado = Number(numero1.value) * Number(numero2.value)

    var res = document.getElementById("resultado")
    res.textContent = resultado
}function Dividir(){
    var resultado = Number(numero1.value) / Number(numero2.value)

    var res = document.getElementById("resultado")
    res.textContent = resultado
}