const produtos = [
    {
id: 1, 
nome: "Carta x",
raridade: "Ultra Raro",
preco: 120,
descricao: "Mago mais iconico",
imagem: "",
}, 
{
id: 2, 
nome: "Carta Teste",
raridade: "Raro",
preco: 125,
descricao: "Teste mais iconico",
imagem: "",
}
];

/* produtos.forEach() 
 metedo para usar em toda variavel array,dentro dos ( ) 
 passar a funcao que voce quer que aconteca 

 produtos.forEach(function(meuItem){
    console.log(meuItem); /* comando de loop dentro de um array
 }); */
 
 /* desta forma abaixo que fazemos para 
 adicionar alguma coisa dentro da lista de array
 document.getElementById("lista").insertAdjacentHTML("afterbegin", meuProdutoHtml);
 */

 produtos.forEach(function(meuItem) {
    const meuProdutoHtml = ` 
    <div class="produto">
                <div class="produto_imagem_container">
                    <img src="../../Imagens/Dark Magician.jpg" class="produto_imagem" />
                </div>
                <div class="produto_informacao_container">
                    <h3>${meuItem.nome}</h3>
                    <span>${meuItem.raridade}</span>
                    <!-- quando for um texto pequeno pode ser usado o span. Quando for um texto maior usa o <p>-->
                    <p>${meuItem.descricao}</p>
                    <span>R$ ${meuItem.preco}</span>
                    <button>Adicionar</button>
                </div>
            </div>
    
    `;
    document.getElementById("lista").insertAdjacentHTML("afterbegin", meuProdutoHtml);
}) ;
