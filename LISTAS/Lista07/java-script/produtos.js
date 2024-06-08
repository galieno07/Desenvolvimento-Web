var produtos = [
    {
        nome: 'Samambaia',
        descricao: 'Uma bela samambaia para decorar sua casa.',
        valor: 'R$ 25,00',
        imagem: "https://via.placeholder.com/150",
    },
    {
        nome: 'Suculenta',
        descricao: 'Suculenta fácil de cuidar e perfeita para ambientes internos.',
        valor: 'R$ 15,00',
        imagem: "https://via.placeholder.com/150"
    },
    {
        nome: 'Cacto',
        descricao: 'Cacto pequeno, ideal para decorar mesas e escritórios.',
        valor: 'R$ 10,00',
        imagem: "https://via.placeholder.com/150"
        
    },
    {
        nome: 'Bonsai',
        descricao: 'Bonsai de fácil manutenção para quem ama miniaturas.',
        valor: 'R$ 50,00',
        imagem: "https://via.placeholder.com/150"
    }
];

var conteudocetral = document.getElementById('conteudo-produto')
for(var produto of produtos){
    var conteudoCentral = document.createElement('div')
    conteudoCentral.className = "conteudo-produto"

    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    conteudoCentral.appendChild(imagem)

    conteudoCentral.appendChild(conteudoCentral)
}