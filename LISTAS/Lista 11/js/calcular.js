let inputValorBruto = document.getElementById('valor-bruto')
let inputValorLiquido = document.getElementById('valor-liquido')
let inputTaxa = document.getElementById('valor-taxa')
let botao = document.getElementById('btn-calcular')





botao.addEventListener('click', function(){
    let valorBruto = Number(inputValorBruto.value)
    let taxa = Number(inputTaxa.value)
    inputValorLiquido.value = valorIR = valorBruto * 15 / 100

    if(valorBruto - taxa > 0 ){
        
    inputValorLiquido.value = valorIR = valorBruto * 15 / 100

    }
    else{
        alert('Valor invalido')
    }
})