const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
	titulo: { type: String, required: true },
	descricao: { type: String, required: true },
	status: { type: String, default: 'fazer' },
	prioridade: { type: Number, default: 1 },
	prazo: { type: String },
	dataCriacao: {
		type: Date,
		default: Date.now,
	},
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
