/* simular envio de formulario */
const form = document.getElementById('contatoForm');

function validarCampo(id, erroId, condicao) {
    const campo = document.getElementById(id);
    const erro  = document.getElementById(erroId);
    const valido = condicao(campo.value.trim());

      // Destaca a borda do campo conforme validade
    campo.style.borderColor = valido ? '' : '#f87171';
    erro.style.display      = valido ? 'none' : 'block';

    return valido;
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede o envio padrão do HTML

      /* Valida cada campo com sua respectiva regra */
    const nomeOk     = validarCampo('nome',     'erroNome',     v => v.length >= 2);
    const emailOk    = validarCampo('email',    'erroEmail',    v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
    const assuntoOk  = validarCampo('assunto',  'erroAssunto',  v => v.length >= 2);
    const mensagemOk = validarCampo('mensagem', 'erroMensagem', v => v.length >= 10);

      // Só prossegue se todos os campos forem válidos
    if (!nomeOk || !emailOk || !assuntoOk || !mensagemOk) return;

      /* Simula envio: esconde o formulário e exibe confirmação */
    form.style.display = 'none';
    document.getElementById('sucesso').style.display = 'block';
});

    /* Ao digitar, remove o erro do campo em tempo real */
['nome', 'email', 'assunto', 'mensagem'].forEach(id => {
    document.getElementById(id).addEventListener('input', function() {
        this.style.borderColor = '';
        const erroEl = document.getElementById('erro' + id.charAt(0).toUpperCase() + id.slice(1));
        if (erroEl) erroEl.style.display = 'none';
    });
});