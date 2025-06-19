//função para selecionar e mostrar as especies de água doce ou salgada
//Vai depender de que link o usuário clicar
window.onload = function() {
    const url = new URLSearchParams(window.location.search); //pega a informação da url
    const tipo = url.get('tipo'); //pega o tipo da url 

    if (tipo === '0') {
        showFiltros();
    } else if (tipo === '1') {
        showBombas();
    } else {
        showLimpeza();
    }
};

function showFiltros() {
    document.getElementById('area1').style.display = 'flex';
    document.getElementById('area2').style.display = 'none';
    document.getElementById('area3').style.display = 'none';
};

function showBombas() {
    document.getElementById('area1').style.display = 'none';
    document.getElementById('area2').style.display = 'flex';
    document.getElementById('area3').style.display = 'none';
};

function showLimpeza() {
    document.getElementById('area1').style.display = 'none';
    document.getElementById('area2').style.display = 'none';
    document.getElementById('area3').style.display = 'flex';
};



const especies = [
    //FILTROS

    {
        "tipo": "0", 
        "nome": "Hang ON RS-2000",
        "preco": 140.00,
        "caminhoImg": "imagens/produtos/filtros/hang_ON_Rs2000.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Filtro interno OT-1000F",
        "preco": 130.00,
        "caminhoImg": "imagens/produtos/filtros/filtroInterno_ot1000f.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Neon Cardinal",
        "descricao": "Também conhecido como Tetra-cardinal.",
        "preco": 8.50,
        "caminhoImg": "imagens/peixes-doces/neon-cardinal.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Ramirezi Eletric Blue",
        "descricao": "Tem como nome científico Microgeophagus ramirezi.",
        "preco": 15.00,
        "caminhoImg": "imagens/peixes-doces/ramirezi-eletric-blue.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Ramirezi Ouro",
        "descricao": "Também conhecido como Ramirezi Dourado.",
        "preco": 8.00,
        "caminhoImg": "imagens/peixes-doces/ramirezi-ouro.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Camarão Vermelho",
        "descricao": "Também conhecido como Camarão Red Sakura.",
        "preco": 15.00,
        "caminhoImg": "imagens/peixes-doces/camarao-vermelho.png"
    },
    {
        "tipo": "0", 
        "nome": "Betta Macho",
        "descricao": "Também conhecido como Peixe-Lutador-Siamês.",
        "preco": 15.00,
        "caminhoImg": "imagens/peixes-doces/betta-macho.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Caramujo Ampulária",
        "descricao": "Também conhecido como Ampullariidae.",
        "preco": 2.00,
        "caminhoImg": "imagens/peixes-doces/caramujo-ampularia.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Plati Azul",
        "descricao": "Tem como nome científico Xiphophorus maculatus.",
        "preco": 2.99,
        "caminhoImg": "imagens/peixes-doces/plati-azul.jpg"
    },

    //BOMBAS D'AGUA

    {
        "tipo": "1", 
        "nome": "Ocellaris Comum",
        "descricao": "Conhecido como Peixe-Palhaço-Comum",
        "preco": 35.00,
        "caminhoImg": "imagens/peixes-salgados/peixe-salgada.jfif"
    },
    {
        "tipo": "1", 
        "nome": "Baiacu-de-Valentini",
        "descricao": "Conhecido como Peixe-Balão",
        "preco": 219.00,
        "caminhoImg": "imagens/peixes-salgados/baiacu-valentini.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Caranguejo Algueiro",
        "descricao": "Conhecido também como Caranguejo Mitrax",
        "preco": 49.00,
        "caminhoImg": "imagens/peixes-salgados/caranguejo-algueiro.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Apogon",
        "descricao": "Conhecido como Peixe-Cardeal",
        "preco": 89.00,
        "caminhoImg": "imagens/peixes-salgados/apogon.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Ermitão",
        "descricao": "Conhecido também como Caranguejo-Ermitão",
        "preco": 69.00,
        "caminhoImg": "imagens/peixes-salgados/ermitao.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Coerelus",
        "descricao": "Conhecido como Peixe-Balão",
        "preco": 99.00,
        "caminhoImg": "imagens/peixes-salgados/coerelus.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Estrela Chocolate",
        "descricao": "Encontrada nas águas do Indo-Pacífico",
        "preco": 199.00,
        "caminhoImg": "imagens/peixes-salgados/estrela-chocolate.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Tamarin Wrasse",
        "descricao": "Conhecido como Bodião Manchado",
        "preco": 849.00,
        "caminhoImg": "imagens/peixes-salgados/tamarin-wrasse.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Tomini",
        "descricao": "Conhecido como Bristletooth Tomini Tang",
        "preco": 849.00,
        "caminhoImg": "imagens/peixes-salgados/tomini.jpg"
    },

    //PRODUTOS DE LIMPEZA

    {
        "tipo": "2", 
        "nome": "Ocellaris Comum",
        "descricao": "Conhecido como Peixe-Palhaço-Comum",
        "preco": 35.00,
        "caminhoImg": "imagens/peixes-salgados/peixe-salgada.jfif"
    },
    {
        "tipo": "2", 
        "nome": "Baiacu-de-Valentini",
        "descricao": "Conhecido como Peixe-Balão",
        "preco": 219.00,
        "caminhoImg": "imagens/peixes-salgados/baiacu-valentini.jpg"
    },
    {
        "tipo": "2", 
        "nome": "Caranguejo Algueiro",
        "descricao": "Conhecido também como Caranguejo Mitrax",
        "preco": 49.00,
        "caminhoImg": "imagens/peixes-salgados/caranguejo-algueiro.jpg"
    },
    {
        "tipo": "2", 
        "nome": "Apogon",
        "descricao": "Conhecido como Peixe-Cardeal",
        "preco": 89.00,
        "caminhoImg": "imagens/peixes-salgados/apogon.jpg"
    },
    {
        "tipo": "2", 
        "nome": "Ermitão",
        "descricao": "Conhecido também como Caranguejo-Ermitão",
        "preco": 69.00,
        "caminhoImg": "imagens/peixes-salgados/ermitao.jpg"
    },
    {
        "tipo": "2", 
        "nome": "Coerelus",
        "descricao": "Conhecido como Peixe-Balão",
        "preco": 99.00,
        "caminhoImg": "imagens/peixes-salgados/coerelus.jpg"
    },
    {
        "tipo": "2", 
        "nome": "Estrela Chocolate",
        "descricao": "Encontrada nas águas do Indo-Pacífico",
        "preco": 199.00,
        "caminhoImg": "imagens/peixes-salgados/estrela-chocolate.jpg"
    },
    {
        "tipo": "2", 
        "nome": "Tamarin Wrasse",
        "descricao": "Conhecido como Bodião Manchado",
        "preco": 849.00,
        "caminhoImg": "imagens/peixes-salgados/tamarin-wrasse.jpg"
    },
    {
        "tipo": "2", 
        "nome": "Tomini",
        "descricao": "Conhecido como Bristletooth Tomini Tang",
        "preco": 849.00,
        "caminhoImg": "imagens/peixes-salgados/tomini.jpg"
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

    if (especies.tipo === '0') {
        const  filtros = document.getElementById('area1');
        filtros.appendChild(div);
    } else if (especies.tipo === '1') {
        const  bombas = document.getElementById('area2');
        bombas.appendChild(div);
    } else {
        const limpeza = document.getElementById('area3');
        limpeza.appendChild(div);
    }
});


// Teste de visualização (gerando os itens por estrutura de repetição)
/*document.addEventListener('DOMContentLoaded', () => {
    const doce = document.getElementById('especie-doce');
    
    for (let item = 1; item < 10; item++) {

        let itemDoce = document.createElement('div');
        itemDoce.classList.add('item');
        
        itemDoce.innerHTML = `
            <div class='item'>
                <img src='imagens/peixe-doce.jpg' alt='img-teste'>
                <h1>Peixe Doce</h1>
                <p>Descrição.</p>
                <p><strong>Valor R$ 0,00</strong></p>
            </div>
        `;

        doce.appendChild(itemDoce);
    }

},);  

// Teste de visualização (gerando os itens por estrutura de repetição)
document.addEventListener('DOMContentLoaded', () => {
    const salgada = document.getElementById('especie-salgada');
    
    for (let item = 1; item < 10; item++) {

        let itemSalgada = document.createElement('div');
        itemSalgada.classList.add('item');
        
        itemSalgada.innerHTML = `
            <div class='item'>
                <img src='imagens/peixe-salgada.jfif' alt='img-teste'>
                <h1>Peixe Salgada</h1>
                <p>Descrição.</p>
                <p><strong>Valor R$ 0,00</strong></p>
            </div>
        `;

        salgada.appendChild(itemSalgada);
    }

},);  */

