/* eslint-disable import/extensions */
/* eslint-disable no-undef */

import ClienteService from '../services/cliente-service.js';

const tabela = document.querySelector('[data-tabela]');

const criaNovaLinha = (nome, email) => {
	const linhaNovoCliente = document.createElement('tr');
	const conteudo = `
	<td class="td" data-td>${nome}</td>
	<td>${email}</td>
	<td>
			<ul class="tabela__botoes-controle">
					<li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
					<li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
			</ul>
	</td>
	`;

	linhaNovoCliente.innerHTML = conteudo;
	return linhaNovoCliente;
};

ClienteService.listaClientes().then((resposta) => {
	resposta.forEach((el) => {
		tabela.appendChild(criaNovaLinha(el.nome, el.email));
	});
});
