/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import ClienteService from '../services/cliente-service.js';

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (ev) => {
	ev.preventDefault();
	const nome = ev.target.querySelector('[data-nome]').value;
	const email = ev.target.querySelector('[data-email]').value;

	ClienteService.cadastrarCliente(nome, email).then(() => {
		window.location.href = '../telas/cadastro_concluido.html';
	});
});
