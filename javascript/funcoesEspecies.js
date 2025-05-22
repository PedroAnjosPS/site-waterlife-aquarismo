// seleção de conteúdo por link clicado:
//Dados JSON página espécies
const especies = [
    {
        "tipo": "1", //tipo 1 = água doce; tipo 0 = água salgada
        "nome": "Barbus Sumatra",
        "descricao": "Peixe de água doce.",
        "preco": 5.00,
        "caminhoImg": "imagens/peixe-doce.jpg"
    }
];

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
    document.getElementById('especie-doce').style.display = 'flex';
    document.getElementById('especie-salgada').style.display = 'none';
};

function showSalgada() {
    document.getElementById('especie-doce').style.display = 'none';
    document.getElementById('especie-salgada').style.display = 'flex';
};

// Teste de visualização (gerando os itens por estrutura de repetição)
document.addEventListener('DOMContentLoaded', () => {
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

},);  

