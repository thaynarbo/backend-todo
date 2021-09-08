if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const {
	Conn,
	db_pass,
	db_data,
	db_url,
	db_user,
} = require('./models/Conn/conn');
const app = express();

const port = 3000;
app.use(express.json());
app.use(cors());

Conn(db_user, db_pass, db_data, db_url);
const todoRouter = require('./routers/todo.routes');
app.use('/todo', todoRouter);
app.listen(process.env.PORT || port, () =>
	console.log(`Server is running on port ${port}`)
);
