module.exports = {
	PORT: 3000,
	DB: {
		host: "db",
		port: 3306,
		user: 'ssouser',
		password: 'test1234',
		database: 'sso'
	},
	REDIS: {
		host: 'redis',
		port: 6379
	},
	JWT: {
		option: {
			algorithm: 'HS256',
			issuer: "ezcode",
		},
		SECRET: 'b9d3a576-2c8a-4850-ae5d-c11474f72acb'
	}
}