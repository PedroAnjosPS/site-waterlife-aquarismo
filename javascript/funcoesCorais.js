const corais = [
    //CORAIS
    {
        "tipo": "1", 
        "nome": "Zoanthos",
        "preco": 35.00,
        "caminhoImg": "imagens/corais/zoanthos.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Goniopora Verde Miolo Amarelo",
        "preco": 80.00,
        "caminhoImg": "imagens/corais/goniopora_Verde_Miolo_Amarelo.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Leather Umbrella",
        "preco": 30.00,
        "caminhoImg": "imagens/corais/leather_Umbrella.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Galaxae",
        "preco": 180.00,
        "caminhoImg": "imagens/corais/galaxae.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Blastomussa Merletti",
        "preco": 80.00,
        "caminhoImg": "imagens/corais/blastomussa_Merlett.jpg"
    },
    {
        "tipo": "1", 
        "nome": "GSP (Green Star Polyp)",
        "preco": 30.00,
        "caminhoImg": "imagens/corais/gSP_Green_Star_Polyp.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Elegance",
        "preco": 1200.00,
        "caminhoImg": "imagens/corais/elegance.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Open Brain",
        "preco": 1200.00,
        "caminhoImg": "imagens/corais/open_Brain.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Acanthastrea",
        "preco": 170.00,
        "caminhoImg": "imagens/corais/acanthastrea.jpg"
    }
];


//código JavaScript para os itens das espécies serem feitos:
corais.forEach(corais => {
    const div = document.createElement('div');
    div.classList.add('item');

    // Formatando o preco para exibição no arquivo html
    let preco = corais.preco;

    let precoFormatado =  preco.toLocaleString('pt-BR', {
        style: 'currency', 
        currency: 'BRL' // currency = moeda, nesse caso o real (R$) 
    });

    div.innerHTML = `
        <img src="${corais.caminhoImg}" alt="${corais.nome}">
        <h1>${corais.nome}</h1>
        <p><strong>${precoFormatado}</strong></p>
    `;

    const  coraisDiv = document.getElementById('area1');
    coraisDiv.appendChild(div);
    
});
