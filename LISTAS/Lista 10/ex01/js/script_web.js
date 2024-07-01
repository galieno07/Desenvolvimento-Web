const { somar, subtrair, multiplicar, dividir } = require('./operacoes_web');


const executarOperacoes = () => {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);

  console.log(`Soma: ${somar(n1, n2)}`);
  console.log(`Subtração: ${subtrair(n1, n2)}`);
  console.log(`Multiplicação: ${multiplicar(n1, n2)}`);
  console.log(`Divisão: ${dividir(n1, n2)}`);
};

document.getElementById('calcular').addEventListener('click', executarOperacoes);