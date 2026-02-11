function realizarLogin() {
  var email =
    document.getElementById(
      "email",
    ).value; /* vai armazenar o email que o usuario digitar */
  var senha =
    document.getElementById(
      "senha",
    ).value; /*vai armazenar a senha que o usuario digitou */

  if (!email) {
    /* ! sinal de negacao mostra que nao foi digitado nada do email */
    document.getElementById("email").style.borderColor =
      "tomato"; /* se nao digitar nada no email, a borda do elemento vai ficar avermelhada */

    return; /* ele vai parar aqui a execução do script */
  }

  if (!senha) {
    /* ! sinal de negacao mostra que nao foi digitado nada na senha */
    document.getElementById("senha").style.borderColor =
      "tomato"; /* se nao digitar nada na senha, a borda do elemento vai ficar avermelhada */

    return; /* ele vai parar aqui a execução do script */
  }

  // ........... condição do if para verificar a senha e o email ............ //

  if (email === "senai@gmail.com" && senha === "senai") {
    /* usamos 3 sinais de  === para comparar tanto o valor quanto o tipo de informação */

    window.location.href =
      "home.html"; /*caso estiver certo vai mandar o usuario para esta tela */
  } else {
    alert(
      "Credenciais incorretas",
    ); /*caso estiver errada o email e a senha ele vai aparecer esse alerta na tela */
  }
}

function exibirSenha() {
  var tipo_atual =
    document.getElementById(
      "senha",
    ).type; /* aqui vai ver qual é o tipo atual da variavel, type é tipo */

  /* document.getElementById(senha).type = tipo_atual === "text" ? "password" : "text" 
esse é um modelo que é semi if e funciona igual
*/

  if (tipo_atual === "text") {
    document.getElementById("senha").type = "password";
  } else {
    document.getElementById("senha").type = "text";
  }
  /* aqui ele vai mudar a senha quando clicar no botao exibir senha para o texto que é a senha */
}

/* 1 pegar o valor do email em uma variavel
2 pegar o valor da senha em uma variavel
3 fazer uma condicao (if) para verificar se o email é igual 
senai@gmail.com e senha = senai
Caso a condição seja verdadeira:
 redireciona o usiario ara tela de home.html
Caso a condicao seja falsa:
exibir um alert() dizendo credenciais incorretas */

/* window.location.href = "" .... esse opcao coloca o caminha da pagina voce quer que va */
