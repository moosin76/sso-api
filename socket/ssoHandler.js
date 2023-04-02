module.exports = (io, socket) => {
	socket.on('sso:join', async(socketId)=>{
		socket.join(socketId);
	});
}