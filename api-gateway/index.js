const http = require('http');
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const {
    PRODUCTS_SERVICE_URL,
    USERS_SERVICE_URL
} = require('./endpoints');

const productsServiceProxy = httpProxy(PRODUCTS_SERVICE_URL);
const usersServiceProxy = httpProxy(USERS_SERVICE_URL);

app.get('/users', (req, res, next) => {
    usersServiceProxy(req, res, next);
})
app.get('/products', (req, res, next) => {
  productsServiceProxy(req, res, next);
})


app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const server = http.createServer(app);
server.listen(3000);