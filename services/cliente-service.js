async function listaClientes() {
	try {
		const url = await fetch('http://localhost:3000/profile');
		let urlPara;
		if (url.status === 200) {
			urlPara = await url.json();
		}
		console.log(urlPara);
		return urlPara;
	} catch (e) {
		throw new Error('Falha na conexão');
	}
}

const ClienteService = {
	listaClientes,
};

export default ClienteService;
