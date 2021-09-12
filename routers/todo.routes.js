const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', async (req, res) => {
	await Todo.find({})
		.then((task) => {
			res.status(200).send(task);
		})
		.catch((err) => {
			res.status(400).send('there is something wrong with your task');
			console.log(err);
		});
});

router.get('/taskID/:id', async (req, res) => {
	await Todo.findOne({ _id: req.params.id })
		.then((task) => {
			res.status(200).send(task);
		})
		.catch((err) => {
			res.status(400).send('there is something wrong with your task');
			console.log(err);
		});
});

router.put('/update/:id', async (req, res) => {
	await Todo.updateOne({ _id: req.params.id }, req.body)
		.then(() => {
			res.status(200).send('Updated sucessfully');
		})
		.catch((err) => {
			res.status(400).send('there is something wrong with your task');
			console.log(err);
		});
});

router.post('/new', async (req, res) => {
	await Todo.create(req.body)
		.then(() => {
			res.status(200).send('task added successfully');
		})
		.catch((err) => {
			res.status(400).send('there is something wrong with your task');
			console.log(err);
		});
});

router.delete('/delete/:id', async (req, res) => {
	await Todo.deleteOne({ _id: req.params.id })
		.then(() => {
			res.status(200).send('Deleted sucessfully');
		})
		.catch((err) => {
			res.status(400).send('there is something wrong with your task');
			console.log(err);
		});
});

module.exports = router;
