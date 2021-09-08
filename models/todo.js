const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
	titulo: { type: String, required: true },
	descricao: { type: String, required: true },
	status: {
		fazer: { type: Boolean, default: true },
		fazendo: { type: Boolean, default: false },
		feito: { type: Boolean, default: false },
	},
	prioridade: {
		baixa: { type: Number, default: 1 },
		media: { type: Number, default: 2 },
		alta: { type: Number, default: 3 },
	},
	prazo: { type: String },
	dataCriacao: { type: String, default: Date.now() },
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
