function carregarMenu(){
    document.body.insertAdjacentHTML("afterbegin", `
        <div class="menu">
        <h1 class="logo_name">GeekShop</h1>
        <div class="container_direita_menu">
            <ul>
                <li>Produtos</li>
                <li>Sobre</li>
                <li>Contatos</li>
            </ul>
            <div class="carrinho_icone_container">
                <img src="../../Imagens/cart.svg.svg">
            </div>
        </div>
    </div>
        `); /*para inserir logo apos o body*/
}

carregarMenu(); /* chamar a função para chamar o menu*/