const especies = [
    //AQUÁRIOS MONTADOS
    {
        "tipo": "1", 
        "nome": "Aquário decorado 59L",
        "preco": 1400.00,
        "caminhoImg": "imagens/montados/aquario_decorado_59litros.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Aquário 96L",
        "preco": 580.00,
        "caminhoImg": "imagens/montados/aquario_96litros.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Beteira 5L",
        "preco": 90.00,
        "caminhoImg": "imagens/montados/beteira_5litros.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Aquário com móvel 70L",
        "preco": 1500.00,
        "caminhoImg": "imagens/montados/aquario_com_movel_70litros.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Aquário completo 30L",
        "preco": 1500.00,
        "caminhoImg": "imagens/montados/aquarioCompleto30litros.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Aquário 150L com móvel",
        "preco": 1900.00,
        "caminhoImg": "imagens/montados/aquario_150litros_comMovel.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Aquaterrário",
        "preco": 170.00,
        "caminhoImg": "imagens/montados/aquaterrario.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Aquário 82L com móvel",
        "preco": 1900.00,
        "caminhoImg": "imagens/montados/aquario_82litros_com_movel.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Aquário decorado",
        "preco": 200.00,
        "caminhoImg": "imagens/montados/aquario_decorado.jpg"
    }
];


//código JavaScript para os itens das espécies serem feitos:
especies.forEach(especies => {
    const div = document.createElement('div');
    div.classList.add('item');

    // Formatando o preco para exibição no arquivo html
    let preco = especies.preco;

    let precoFormatado =  preco.toLocaleString('pt-BR', {
        style: 'currency', 
        currency: 'BRL' // currency = moeda, nesse caso o real (R$) 
    });

    div.innerHTML = `
        <img src="${especies.caminhoImg}" alt="${especies.nome}">
        <h1>${especies.nome}</h1>
        <p><strong>${precoFormatado}</strong></p>
    `;

    if (especies.tipo === '1') {
        const  especiesDoce = document.getElementById('area1');
        especiesDoce.appendChild(div);
    } else {
        const  especiesSalgada = document.getElementById('area2');
        especiesSalgada.appendChild(div);
    }
});