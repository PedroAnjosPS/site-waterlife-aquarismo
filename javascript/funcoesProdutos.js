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
        "nome": "Hang On RS-2000",
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
        "nome": "Filtro interno OT-82A",
        "preco": 90.00,
        "caminhoImg": "imagens/produtos/filtros/filtro_Interno _OT82A.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Filtro interno OT-62A",
        "preco": 66.00,
        "caminhoImg": "imagens/produtos/filtros/filtroInterno_ot62a.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Hang On HF-350",
        "preco": 70.00,
        "caminhoImg": "imagens/produtos/filtros/hANG_ON_HF350.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Hang On HF-250",
        "preco": 60.00,
        "caminhoImg": "imagens/produtos/filtros/hANG_ON_HF250.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Hang On HL-400",
        "preco": 195.00,
        "caminhoImg": "imagens/produtos/filtros/hang_on_HL400.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Filtro interno JP-092",
        "preco": 130.00,
        "caminhoImg": "imagens/produtos/filtros/filtroInterno_Jp.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Filtro interno OT-2000F",
        "preco": 140.00,
        "caminhoImg": "imagens/produtos/filtros/filtroInterno_ot2000f.jpg"
    },

    //BOMBAS D'AGUA

    {
        "tipo": "1", 
        "nome": "XTPUMP 240",
        "preco": 68.00,
        "caminhoImg": "imagens/produtos/bombas_dagua/xt_pump_240.jpg"
    },
    {
        "tipo": "1", 
        "nome": "XTPUMP 900",
        "preco": 120.00,
        "caminhoImg": "imagens/produtos/bombas_dagua/xtpump_900.jpg"
    },
    {
        "tipo": "1", 
        "nome": "XTPUMP 360",
        "preco": 95.00,
        "caminhoImg": "imagens/produtos/bombas_dagua/xt_pump_360.jpg"
    },
    {
        "tipo": "1", 
        "nome": "XTPUMP 1600",
        "preco": 169.00,
        "caminhoImg": "imagens/produtos/bombas_dagua/xtpump_1600.jpg"
    },
    {
        "tipo": "1", 
        "nome": "XTPUMP 240",
        "preco": 68.00,
        "caminhoImg": "imagens/produtos/bombas_dagua/xt_pump_240.jpg"
    },
    {
        "tipo": "1", 
        "nome": "XTPUMP 2500",
        "preco": 259.00,
        "caminhoImg": "imagens/produtos/bombas_dagua/xtpump_2500.jpg"
    },
    {
        "tipo": "1", 
        "nome": "XTPUMP 3000",
        "preco": 275.00,
        "caminhoImg": "imagens/produtos/bombas_dagua/xT_PUMP_3000.jpg"
    },
    {
        "tipo": "1", 
        "nome": "XTPUMP 4000 LH",
        "preco": 543.00,
        "caminhoImg": "imagens/produtos/bombas_dagua/xT_PUMP_4000_LH.jpg"
    },
    {
        "tipo": "1", 
        "nome": "ACPUMP 4000",
        "preco": 711.00,
        "caminhoImg": "imagens/produtos/bombas_dagua/aC_PUMP_4000.jpg"
    },

    //PRODUTOS DE LIMPEZA

    {
        "tipo": "2", 
        "nome": "Raspador magnético RS-32C",
        "preco": 141.00,
        "caminhoImg": "imagens/produtos/produtos_limpeza/raspador_magnetico_RS32C.jpeg"
    },
    {
        "tipo": "2", 
        "nome": "Raspador manual 60cm",
        "preco": 65.00,
        "caminhoImg": "imagens/produtos/produtos_limpeza/raspador_manual_60cm .jpg"
    },
    {
        "tipo": "2", 
        "nome": "DIP - desinfetante de corais",
        "preco": 75.00,
        "caminhoImg": "imagens/produtos/produtos_limpeza/dip_desinfetante_corais.jpg"
    },
    {
        "tipo": "2", 
        "nome": "NITRAOUT",
        "preco": 99.00,
        "caminhoImg": "imagens/produtos/produtos_limpeza/nitraout.jpg"
    },
    {
        "tipo": "2", 
        "nome": "PHOSOUT",
        "preco": 99.00,
        "caminhoImg": "imagens/produtos/produtos_limpeza/phosOut.jpg"
    },
    {
        "tipo": "2", 
        "nome": "Phosphate remover",
        "preco": 36.00,
        "caminhoImg": "imagens/produtos/produtos_limpeza/phosphate_remover.jpg"
    },
    {
        "tipo": "2", 
        "nome": "AmGuard",
        "preco": 100.00,
        "caminhoImg": "imagens/produtos/produtos_limpeza/amGuard.jpg"
    },
    {
        "tipo": "2", 
        "nome": "Ot Ammonia Remover",
        "preco": 33.00,
        "caminhoImg": "imagens/produtos/produtos_limpeza/otAmmoniaRemover.jpg"
    },
    {
        "tipo": "2", 
        "nome": "Amonclean",
        "preco": 65.00,
        "caminhoImg": "imagens/produtos/produtos_limpeza/amonClean.jpg"
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

