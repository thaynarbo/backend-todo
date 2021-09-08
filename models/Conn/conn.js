const mongoose = require('mongoose');
const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

function Conn(user, pass, db, url) {
	mongoose
		.connect(`${url}/${db}`, {
			user: user,
			pass: pass,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log('Connected to DB'))
		.catch(console.error);
}

module.exports = { Conn, db_url, db_user, db_pass, db_data };
