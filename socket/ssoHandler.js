const jwt = require('../plugins/jwt');

module.exports = (io, socket) => {
	socket.on('sso:join', async (socketId) => {
		socket.join(socketId);
	});

	socket.on('sso:login', async (socketId, token) => {
		try {
			const encode = jwt.verify(token);
			if (encode && encode.id) {
				const [_ , member] = await Promise.all([
					$DB.token.upsert({ socketId, token }, { where: socketId }),
					$DB.member.findByPk(encode.id),
				])
				socket.to(socketId).emit('sso:login', { token, member })
			}
		} catch (e) {
			console.error(e)
		}
	});

	socket.on('sso:logout', async(socketId)=> {	
		socket.to(socketId).emit('sso:logout');
	})
}