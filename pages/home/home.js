 async function carregarDados(){
 var resposta = await fetch("http://localhost:3000/products"); 
/* ele vai levar as informações ate o servidor, e vai salvar na variavel. */
var dados = await resposta.json(); /* vamos extrair as informações do json do banco de dados e salvar na variavel dados */ 

/* async = asincrona (coisas que sao executadas com demora)
   await = espere a resposta para responder 
   ferct = metodo que vai buscar coisas no servidor*/


 dados.forEach(function(meuItem) {
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


}

carregarDados(); /*Aqui estou chamando a função*/ 

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
