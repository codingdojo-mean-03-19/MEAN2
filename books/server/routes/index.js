const catchAllRouter = require('./catch-all.routes');
const authRouter = require('./auth.routes');
const bookRouter = require('./book.routes');
const router = require('express').Router();
const apiRouter = require('express').Router();

router.use('/auth', authRouter).use('/books', bookRouter);

module.exports = apiRouter.use('/api', router).use(catchAllRouter);
