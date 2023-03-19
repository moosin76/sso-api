const config = require('./config')[process.env.NODE_ENV];
const http = require('http');
const Koa = require('koa');

const PORT = config.PORT;
const app = new Koa();
const webServer = http.createServer(app.callback());

// CORS
const cors = require('@koa/cors');
app.use(cors({
	origin: '*',
	credentials: true,
}))

// 바디파서
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// 소켓
global.$IO = require('./socket')(webServer);

// 디비
const connectSequlize = require('./plugins/connectSequelize');
global.$DB = connectSequlize(config.DB, __dirname + '/models', false);

// 라우터
const autoRouter = require('./plugins/autoRouter');
autoRouter(app, __dirname + '/routes', "/");

app.use(async (ctx) => {
	ctx.body = {
		success: false,
		data: "No matching router",
		config
	}
})

webServer.listen(PORT, () => {
	console.log(`http://ssoapi.bnb.com:${PORT}`);
});

