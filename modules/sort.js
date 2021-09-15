function ordenandoPrioridade(lista) {
	let listaOrdenada = lista.sort((item1, item2) => {
		return item1.prioridade > item2.prioridade ? -1 : 1;
	});
	return listaOrdenada;
}

module.exports = { ordenandoPrioridade };
