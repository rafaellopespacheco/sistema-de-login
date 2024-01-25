document.getElementById('fazerregistro').addEventListener('click', function () {
   var email = document.getElementById('email').value;
   var usuario = document.getElementById('usuario').value;
   var senha = document.getElementById('senha').value;
   var senha_c = document.getElementById('senha_confirmacao').value;
   var termos = document.getElementById('termo').checked;
   var termo2 = termos ? "Aceitou os termos" : "Não aceitou os termos"
   alert(`Dados fornecidos no registro.\n E-mail: ${email}\n Usuário: ${usuario}\n Senha: ${senha}\n Confirmação da senha: ${senha_c}\n Aceitou os termos? ${termo2}`)
});