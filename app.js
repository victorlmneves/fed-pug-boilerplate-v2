const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const sassMiddleware = require('node-sass-middleware')

const indexRouter = require('./routes/index')
const aboutRouter = require('./routes/movies')
const usersRouter = require('./routes/users')

const myApp = express()

// view engine setup
myApp.set('views', path.join(__dirname, 'views'))
myApp.set('view engine', 'pug')

myApp.use(logger('dev'))
myApp.use(express.json())
myApp.use(express.urlencoded({ extended: false }))
myApp.use(cookieParser())
myApp.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}))
myApp.use(express.static(path.join(__dirname, 'public')))

myApp.use('/', indexRouter)
myApp.use('/movies', aboutRouter)
myApp.use('/users', usersRouter)

// catch 404 and forward to error handler
myApp.use(function(req, res, next) {
  next(createError(404))
});

// error handler
myApp.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.myApp.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = myApp
