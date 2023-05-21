const router = new (require('@koa/router'))();
const authCtrl = require('../controller/auth-ctrl');

router.post('/join', authCtrl.join);
router.post('/login', authCtrl.login);

module.exports = router;