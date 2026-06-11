function atualizarDataHora() {
  const agora = new Date();
  const dataHora = agora.toLocaleString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  document.getElementById('dataHora').textContent = dataHora;
}

atualizarDataHora();
setInterval(atualizarDataHora, 1000);

document.getElementById('formAgendamento').addEventListener('submit', function(event) {
  event.preventDefault();

  const nomeCliente = document.getElementById('nomeCliente').value;
  const nomePet = document.getElementById('nomePet').value;
  const servico = document.getElementById('servico').value;
  const metodo = document.getElementById('tipoAtendimento').value;
  const dataOriginal = document.getElementById('data').value;
  const partesData = dataOriginal.split("-");
  const data = partesData[2] + "/" + partesData[1] + "/" + partesData[0];
  const hora = document.getElementById('hora').value;
  const mensagem = document.getElementById('mensagem');

  mensagem.classList.remove('d-none');
  mensagem.textContent = `Agendamento confirmado! Cliente: ${nomeCliente}. Pet: ${nomePet}. Serviço: ${servico}. Método: ${metodo}. Data: ${data} às ${hora}.`;

  this.reset();
});
