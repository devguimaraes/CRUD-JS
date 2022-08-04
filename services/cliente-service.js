async function listaClientes() {
	try {
		const url = await fetch('http://localhost:3000/profile');
		let urlPara;
		if (url.status === 200) {
			urlPara = await url.json();
		}
		return urlPara;
	} catch (e) {
		throw new Error('Falha na conexão');
	}
}

async function cadastrarCliente(nome, email) {
	const resposta = await fetch('http://localhost:3000/profile', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			nome,
			email,
		}),
	});
	return resposta.body;
}

async function excluirCliente(params) {
	const resposta = await fetch(`http://localhost:3000/profile/${params}`, {
		method: 'DELETE',
	});

	return resposta;
}

const ClienteService = {
	listaClientes,
	cadastrarCliente,
	excluirCliente,
};

export default ClienteService;
