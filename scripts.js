document.getElementById('fazerlogin').addEventListener('click', function () {
   var usuario = document.getElementById('usuario').value;
   var senha = document.getElementById('senha').value;

   alert(`O login que você enviou foi.\n Usuário: ${usuario}\n Senha: ${senha}`)
});