/* eslint-disable no-undef */
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

async function listaClientes() {
	const url = await fetch('http://localhost:3000/profile');
	const urlPara = await url.json();
	return urlPara;
}

listaClientes().then((resposta) => {
	resposta.forEach((el) => {
		tabela.appendChild(criaNovaLinha(el.nome, el.email));
	});
});
