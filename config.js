const production = {
	PORT: 3000,
	DB: {
		host: "localhost",
		port: 3306,
		user: 'bnbsso',
		password: 'test1234',
		database: 'bnbssoapi'
	},
	REDIS: {
		host: 'localhost',
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

const development = {
	PORT: 20200,
	DB: {
		host: "localhost",
		port: 3306,
		user: 'bnbsso',
		password: 'test1234',
		database: 'bnbssoapi'
	},
	REDIS: {
		host: 'localhost',
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

module.exports = process.env.NODE_ENV !== 'production' ? development : production;