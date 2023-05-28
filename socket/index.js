const config = require('../config');
const { Server } = require('socket.io');
const redisAdapter = require('socket.io-redis');
const { instrument } = require("@socket.io/admin-ui");

const roomHandler = require('./roomHandler');
const ssoHandler = require('./ssoHandler');

module.exports = function (webServer) {
	const io = new Server(webServer, {
		cors: {
			origin: ['https://admin.socket.io', '*'],
			credentials: true
		}
	});
	const redisClient = redisAdapter(config.REDIS);
	io.adapter(redisClient);

	instrument(io, {
		namespaceName : '/admin',
		auth: {
			type: 'basic',
			username: "ezcode",
			password: "$2a$12$uh9PltlGa6pruWId7IFP7.g0iHtcCYV94XWX9bxSAWGlUC4dU7g2m", // abcd1234
		},
	})

	io.on('connection', socket => {
		roomHandler(io, socket);
		ssoHandler(io, socket);
		
		console.log('Connected =>', socket.id);
		socket.on('disconnect', () => {
			console.log('Disconnect =>', socket.id);
		});

		if (process.env.NODE_ENV == 'development') {
			socket.onAny((event, ...args) => {
				console.log("Socket", event, ...args);
			})
		}
	})

	return io;
}