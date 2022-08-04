async function listaClientes() {
	const url = await fetch('http://localhost:3000/profile');
	const urlPara = await url.json();
	return urlPara;
}

const ClienteService = {
	listaClientes,
};

export default ClienteService;
