const Product = require('./product')
const User = require('./user')

Product.sync({alter: true})


module.exports = { Product, User }