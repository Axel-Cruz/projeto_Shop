var legumes = [
 {
    id: 1,
    imagem:
      "https://phygital-files.mercafacil.com/big_mart/uploads/produto/br_colis_ninja_unidade_15a943f2-f033-4c56-9100-d98da2cb5a9a.png",
    nome: "Tomate",
    gramas_unidade: 250,
    preco: 3,
    fornecedor: "Pomar Senai",
    preco_quilo: 12,
  },
  {
    id: 2,
    imagem: "https://example.com/images/cenoura.png",
    nome: "Cenoura",
    gramas_unidade: 200,
    preco: 2.5,
    fornecedor: "Horta Verde",
    preco_quilo: 12.5,
  },
  {
    id: 3,
    imagem: "https://example.com/images/alface.png",
    nome: "Alface",
    gramas_unidade: 150,
    preco: 1.5,
    fornecedor: "Fazenda Bela",
    preco_quilo: 10,
  },
  {
    id: 4,
    imagem: "https://example.com/images/pepino.png",
    nome: "Pepino",
    gramas_unidade: 300,
    preco: 2,
    fornecedor: "Pomar Senai",
    preco_quilo: 6.67,
  },
  {
    id: 5,
    imagem: "https://example.com/images/berinjela.png",
    nome: "Berinjela",
    gramas_unidade: 250,
    preco: 3.5,
    fornecedor: "Horta Verde",
    preco_quilo: 14,
  },
];


// ETAPA 2 
 //Desse jeito ele vai chamar cada item da lista 
legumes.forEach( (legume) =>{
   // Montar o bloco html que deseja inserir 
   var htmlProduto = `
   <div class="produto">
        <img
          width="100px"
          src="https://phygital-files.mercafacil.com/big_mart/uploads/produto/br_colis_ninja_unidade_15a943f2-f033-4c56-9100-d98da2cb5a9a.png"
        />

        <div class="produto_nome_container">
          <h2>${legumes.nome}</h2>
          <span>Cada - Aprox. 200g</span>
        </div>

        <span>${legume.fornecedor}</span>

        <div class="produto_precos_container">
          <span>3 reais</span>
          <span>R$ 15,00 por KG</span>
        </div>

        <div class="produto_botoes_container">
          <div>
            <button>+</button>
            <button>-</button>
          </div>
          <button>Add 1 item</button>
        </div>
      </div>
   `;
   document.getElementById("lista").insertAdjacentHTML("beforeend", htmlProduto);
   //vai na tela pega o elemento com id lista e insere o htmlProduto antes do final do elemento.

});

// 1 FORMA - FUNCAO NOMEADA
//legumes.forEach(function (legume) {}); 

// 2 FORMA - SEM PASSAR O NOME DA FUNCAO
//legumes.forEach(function(item){});

// 3 FORMA - FUNCAO ANONIMA
//legumes.forEach((item) => {});



