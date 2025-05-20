//dados em JSON:
const destaques = [
    {
        "nome": "Barbus Sumatra",
        "descricao": "Peixe de água doce.",
        "preco": 5.00,
        "caminhoImg": "imagens/peixe-doce.jpg"
    },
    {
        "nome": "Ocellaris Comum",
        "descricao": "Peixe de água salgada.",
        "preco": 35.00,
        "caminhoImg": "imagens/peixe-salgada.jfif"
    },
    {
        "nome": "Coral Zoanthos",
        "descricao": "Coral.",
        "preco": 35.00,
        "caminhoImg": "imagens/coral.jpg"
    },
    {
        "nome": "Filtro oT60",
        "descricao": "Filtro.",
        "preco": 66.00,
        "caminhoImg": "imagens/filtro.jfif"
    },
    {
        "nome": "ZNAC",
        "descricao": "Produto para limpeza de corais.",
        "preco": 17.00,
        "caminhoImg": "imagens/produto-limpeza.jfif"
    },
    {
        "nome": "Aquário 24 L",
        "descricao": "Aquário montado de 24 L.",
        "preco": 179.00,
        "caminhoImg": "imagens/aquario.jfif"
    }
]

//código JavaScript:
const areaDestaques = document.getElementById('itens-destaque');

destaques.forEach(destaque => {
    const div = document.createElement('div');
    div.classList.add('item', 'destaque');

    // Formatando o preco para exibição no arquivo html
    let preco = destaque.preco;

    let precoFormatado =  preco.toLocaleString('pt-BR', {
        style: 'currency', 
        currency: 'BRL' // currency = moeda, nesse caso o real (R$) 
    });

    div.innerHTML = `
        <img src="${destaque.caminhoImg}" alt="${destaque.nome}">
        <h1>${destaque.nome}</h1>
        <p>${destaque.descricao}</p>
        <p><strong>${precoFormatado}</strong></p>
    `;

    areaDestaques.appendChild(div);
});

//efeito dos itens de destaque aparecendo

// Configura o Intersection Observer (API do JavaScript) para animar os itens quando aparecerem na tela
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

