const http = new XMLHttpRequest();

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

http.open('GET', 'http://localhost:3000/profile');
http.send();

http.onload = () => {
	const data = JSON.parse(http.response);
	data.forEach((el) => tabela.appendChild(criaNovaLinha(el.nome, el.email)));
};

/*
fetch('http://localhost:3000/profile')
	.then((reponse) => {
		if (reponse.status === 200) {
			console.log('conexao estabelecida');
		}
		return reponse;
	})
	.then((el) =>
		el.forEach((element) => {
			console.log(element);
		})
	); */
