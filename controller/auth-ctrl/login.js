const genPassword = require('../../lib/genPassword');
module.exports = async (ctx) => {
	const mb_email = (ctx.request.body.mb_email || '').trim();
	const mb_password = (ctx.request.body.mb_password || '').trim();

	const user = await $DB.member.findOne({
		where: {
			mb_email,
			mb_password: genPassword(mb_password)
		}
	})

	if (!user) {
		throw new Error("일치하는 회원이 없습니다.")
	}

	return user;
}