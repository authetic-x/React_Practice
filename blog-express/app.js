var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");
const RedisStore = require("connect-redis")(session);

const blogRouter = require("./routes/blog");
const userRouter = require("./routes/user");

var app = express();

// 日志
app.use(logger('dev'));
// 处理post上来的数据
app.use(express.json());
// 表单数据格式
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const {redisClient} = require("./db/redis");
const sessionStore = new RedisStore({
  client: redisClient
});
// 设置session
app.use(session({
  secret: "dheAb_216#",
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  store: sessionStore
}));

app.use('/api/blog', blogRouter);
app.use('/api/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
