module.exports = (sequelize, DataTypes) => {
	const member = sequelize.define('member', {
		mb_id: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		mb_password: {
			type: DataTypes.STRING,
			defaultValue: '',
			allowNull: false,
		},
		mb_name: {
			type: DataTypes.STRING,
			defaultValue: '',
			allowNull: false,
		},
		mb_email: {
			type: DataTypes.STRING,
			defaultValue: '',
			validate: {
				isEmail: true,
			}
		},
		mb_hp: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: '',
		}
	}, {
		freezeTableName: true,
	});
	member.associate = function (models) {
		// associations can be defined here
	};
	return member;
};