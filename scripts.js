const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (evento) {
   evento.preventDefault();
   const usuario = document.getElementById('usuario').value.trim();
   const senha = document.getElementById('senha').value.trim();
   const erro = document.getElementById('erro');

   if (!usuario || !senha) {
      erro.innerHTML = 'Você deve preencher todos os campos!';
      erro.style.color = 'red'
   } else {
      erro.innerHTML = `
      Você fez login com sucesso!
      <p>Email: ${usuario}</p>
      <p>Senha: ${senha}</p>
      `;
      erro.style.color = 'green'
      formulario.reset()
   }
});

/* OLHO VER SENHA */

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