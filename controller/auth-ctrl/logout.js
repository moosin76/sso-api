module.exports = async (ctx) => {
	const {socketId} = ctx.request.body;
	if(!socketId) {
		throw new Error("socket ID 없음");
	}

	const row = await $DB.token.destroy({where:{socketId}})
	return row == 1;
}