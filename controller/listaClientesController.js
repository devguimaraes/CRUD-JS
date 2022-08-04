/* eslint-disable import/extensions */
/* eslint-disable no-undef */

import ClienteService from '../services/cliente-service.js';

const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', (ev) => {
	const btnExcluir =
		ev.target.className === 'botao-simples botao-simples--excluir';

	if (btnExcluir) {
		const linhaCliente = ev.target.closest('[data-id]');
		const { id } = linhaCliente.dataset;
		ClienteService.excluirCliente(id).then(() => {
			linhaCliente.remove();
		});
	}
});

const criaNovaLinha = (nome, email, id) => {
	const linhaNovoCliente = document.createElement('tr');
	linhaNovoCliente.dataset.id = id;
	const conteudo = `
	<td class="td" data-td>${nome}</td>
	<td>${email}</td>
	<td>
			<ul class="tabela__botoes-controle">
					<li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
					<li><button class="botao-simples botao-simples--excluir" data-excluir type="button">Excluir</button></li>
			</ul>
	</td>
	`;

	linhaNovoCliente.innerHTML = conteudo;
	return linhaNovoCliente;
};

ClienteService.listaClientes().then((resposta) => {
	resposta.forEach((el) => {
		tabela.appendChild(criaNovaLinha(el.nome, el.email, el.id));
	});
});
