const pix ={
    chavePix : "PixFeliz",
    valorTransferencia: 100.00,
    dataTransacao: "2024-05-10T16:40:13Z",
    descricaoPagamento: " Divida Atrasada",

    pagador:{
        nome:"Pedro Gustavo Da Silva",
        documento: "441.521.542.90"
    },

    recebedor:{
        nome:"william David Villa",
        documento:"914.315.537.42",
    },

    historicoTransacao:[{
        data: "2024-03-17T09:60:51Z",
        valor: 200.00,
        descricao: "Entrada na divida",
    },

    {
        data: "2024-04-29T012:30:10Z",
        valor: 300.00,
        descricao: "Pagamento divida",
    },
]


};
console.log(pix);