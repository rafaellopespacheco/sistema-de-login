document.getElementById('fazerlogin').addEventListener('click', function () {
   var usuario = document.getElementById('usuario').value;
   var senha = document.getElementById('senha').value;

   alert(`O login que você enviou foi.\n Usuário: ${usuario}\n Senha: ${senha}`)
});

var senhaInput = document.getElementById('senha');
var olhoIcon = document.querySelector('.olho-icon');
function mostrarSenha() {
   senhaInput.type = (senhaInput.type === 'password') ? 'text' : 'password';
   olhoIcon.src = (senhaInput.type === 'password')
      ? 'assets/olho_fechado.png'
      : 'assets/olho_aberto.png';
}
senhaInput.addEventListener('input', function () {
   olhoIcon.style.display = (senhaInput.value.length > 0) ? 'inline-block' : 'none';
});
window.addEventListener('load', function () {
   olhoIcon.style.display = (senhaInput.value.length > 0) ? 'inline-block' : 'none';
});