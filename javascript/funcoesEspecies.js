//função para selecionar e mostrar as especies de água doce ou salgada
//Vai depender de que link o usuário clicar
window.onload = function() {
    const url = new URLSearchParams(window.location.search); //pega a informação da url
    const tipo = url.get('tipo'); //pega o tipo da url 

    if (tipo === '1') {
        showDoce();
    } else if (tipo === '0') {
        showSalgada();
    }
};

function showDoce() {
    document.getElementById('area1').style.display = 'flex';
    document.getElementById('area2').style.display = 'none';
};

function showSalgada() {
    document.getElementById('area1').style.display = 'none';
    document.getElementById('area2').style.display = 'flex';
};


//Seleção de conteúdo por link clicado:
//Dados JSON página espécies;
//As informações dos itens relicionados as espécies serão colocados aqui abaixo;
//Siga o padrão de formato JSON para colocar os dados;
//Para atribuir um novo item abra"{}" (chaves), as quais devem estar dentro dos colchetes ("[]") já abertos;
//Coloque "chave" (identificador do valor que será colocado):"valores" (informação atribuído a esse identificador);
//Para separação de cada "'chave':'valor'" deve-se sempre usar a vírgula. Apenas no último item que a aplicação do sinal gráfico não deve ser aplicado;
//O nome das chaves (como tipo, nome etc.) tem que estar entre aspas e não devem conter espaços ou hífens ("-"), porque, apesar de estarem entre aspas, na hora de referenciá-los mais pra frente no código esses fatores acabam gerando problemas;
//Dados de textos são do tipo string, para que esses valores sejam atribuidos deve-se colocá-los entre aspas (""). Já dados númericos podem ser inteiros (sem vírgula, no caso, o ponto final é usado como vírgula na maior parte das linguagens de programação. Exemplo: Em programação, um número real não é 5,50; mas sim 5.50) ou reais (com vírgula, ou no caso, com ponto final);
//As imagens devem ser colocadas nas pastas de "peixes-doces" ou "peixes-salgados" (para uma maior organização), cujas pastas estão dentro da pasta "imagens", as imagens vão ser separadas de acordo com o tipo da espécie (se ela for de água salgada ou doce);
//Para que as imagens apareçam deve-se colocar o caminho da imagem, exemplo: "imagens/peixes-doces/barbus-sumatra.jpg" (também não pode haver espaço em branco, além do nome da imagem ter que terminar com o tipo da extensão da mesma, podendo ser ".jpg", ".png", ".jfif" etc.);
const especies = [
    //PEIXES DE ÁGUA DOCE
    {
        "tipo": "1", //tipo 1 = água doce; tipo 0 = água salgada;
        "nome": "Barbus Sumatra",
        "descricao": "Popularmente conhecido como Barbo-tigre.",
        "preco": 5.00,
        "caminhoImg": "imagens/peixes-doces/barbus-sumatra.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Acará-Bandeira",
        "descricao": "Também conhecido como Acará Bandeira Marmorato.",
        "preco": 9.90,
        "caminhoImg": "imagens/peixes-doces/acara-marmore.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Neon Cardinal",
        "descricao": "Também conhecido como Tetra-cardinal.",
        "preco": 8.50,
        "caminhoImg": "imagens/peixes-doces/neon-cardinal.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Ramirezi Eletric Blue",
        "descricao": "Tem como nome científico Microgeophagus ramirezi.",
        "preco": 15.00,
        "caminhoImg": "imagens/peixes-doces/ramirezi-eletric-blue.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Ramirezi Ouro",
        "descricao": "Também conhecido como Ramirezi Dourado.",
        "preco": 8.00,
        "caminhoImg": "imagens/peixes-doces/ramirezi-ouro.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Camarão Vermelho",
        "descricao": "Também conhecido como Camarão Red Sakura.",
        "preco": 15.00,
        "caminhoImg": "imagens/peixes-doces/camarao-vermelho.png"
    },
    {
        "tipo": "1", 
        "nome": "Betta Macho",
        "descricao": "Também conhecido como Peixe-Lutador-Siamês.",
        "preco": 15.00,
        "caminhoImg": "imagens/peixes-doces/betta-macho.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Caramujo Ampulária",
        "descricao": "Também conhecido como Ampullariidae.",
        "preco": 2.00,
        "caminhoImg": "imagens/peixes-doces/caramujo-ampularia.jpg"
    },
    {
        "tipo": "1", 
        "nome": "Plati Azul",
        "descricao": "Tem como nome científico Xiphophorus maculatus.",
        "preco": 2.99,
        "caminhoImg": "imagens/peixes-doces/plati-azul.jpg"
    },
    //PEIXES DE ÁGUA SALGADA
    {
        "tipo": "0", 
        "nome": "Ocellaris Comum",
        "descricao": "Conhecido como Peixe-Palhaço-Comum",
        "preco": 35.00,
        "caminhoImg": "imagens/peixes-salgados/peixe-salgada.jfif"
    },
    {
        "tipo": "0", 
        "nome": "Baiacu-de-Valentini",
        "descricao": "Conhecido como Peixe-Balão",
        "preco": 219.00,
        "caminhoImg": "imagens/peixes-salgados/baiacu-valentini.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Caranguejo Algueiro",
        "descricao": "Conhecido também como Caranguejo Mitrax",
        "preco": 49.00,
        "caminhoImg": "imagens/peixes-salgados/caranguejo-algueiro.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Apogon",
        "descricao": "Conhecido como Peixe-Cardeal",
        "preco": 89.00,
        "caminhoImg": "imagens/peixes-salgados/apogon.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Ermitão",
        "descricao": "Conhecido também como Caranguejo-Ermitão",
        "preco": 69.00,
        "caminhoImg": "imagens/peixes-salgados/ermitao.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Coerelus",
        "descricao": "Conhecido como Peixe-Balão",
        "preco": 99.00,
        "caminhoImg": "imagens/peixes-salgados/coerelus.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Estrela Chocolate",
        "descricao": "Encontrada nas águas do Indo-Pacífico",
        "preco": 199.00,
        "caminhoImg": "imagens/peixes-salgados/estrela-chocolate.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Tamarin Wrasse",
        "descricao": "Conhecido como Bodião Manchado",
        "preco": 849.00,
        "caminhoImg": "imagens/peixes-salgados/tamarin-wrasse.jpg"
    },
    {
        "tipo": "0", 
        "nome": "Tomini",
        "descricao": "Conhecido como Bristletooth Tomini Tang",
        "preco": 849.00,
        "caminhoImg": "imagens/peixes-salgados/tomini.jpg"
    }
];


//código JavaScript para os itens das espécies serem feitos:
especies.forEach(especies => {
    const div = document.createElement('div');
    div.classList.add('item', 'destaque');

    // Formatando o preco para exibição no arquivo html
    let preco = especies.preco;

    let precoFormatado =  preco.toLocaleString('pt-BR', {
        style: 'currency', 
        currency: 'BRL' // currency = moeda, nesse caso o real (R$) 
    });

    div.innerHTML = `
        <img src="${especies.caminhoImg}" alt="${especies.nome}">
        <h1>${especies.nome}</h1>
        <p id='descricao'>${especies.descricao}</p>
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

// Configura o Intersection Observer (API do JavaScript que observa quando um elemento entra na área visível da tela) para animar os itens quando aparecerem na tela
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('aparecendo');
                observer.unobserve(entry.target); //Para a animação funcionar só uma vez, após o carregamento da página
            }
        });
    }, {threshold: 0.1}); //10% do elemento visível pode disparar

    //Aplica o efeito do observer para cada item criado
    const itens = document.querySelectorAll('.item.destaque');
    itens.forEach(item => observer.observe(item));

},); 