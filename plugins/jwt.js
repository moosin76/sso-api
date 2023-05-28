const jwt = require('jsonwebtoken');
const config = require('../config').JWT;

const getToken = (user, expiresIn = '8h') => {
	const payload = {
		id: user.id
	}
	return jwt.sign(payload, config.SECRET, { ...config.option, expiresIn });
}

const verify = (token) => {
	return jwt.verify(token, config.SECRET);
}

module.exports = { getToken, verify };