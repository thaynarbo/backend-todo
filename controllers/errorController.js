module.exports = (err, req, res, next) => {
	try {
		console.log('congrats you hit the error middleware');
		if (err.name === 'ValidationError')
			return (err = handleValidationError(err, res));
	} catch (err) {
		res.status(500).send('An unknown error occurred.');
	}
};

const handleValidationError = (err, res) => {
	let errors = Object.values(err.errors).map((el) => el.message);
	let fields = Object.values(err.errors).map((el) => el.path);
	let code = 400;
	if (errors.length > 1) {
		const formattedErrors = errors.join(' ');
		res.status(code).send({ messages: formattedErrors, fields: fields });
	} else {
		res.status(code).send({ messages: errors, fields: fields });
	}
};
