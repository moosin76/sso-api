const production = {
	PORT: 3000,
	DB: {
		host: "localhost",
		port: 3306,
		user: 'bnbsso',
		password: 'test1234',
		database: 'bnbssoapi'
	},
	REDIS : {
		host : 'localhost',
		port : 6379
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
	REDIS : {
		host : 'localhost',
		port : 6379
	}
}

module.exports = { production, development };