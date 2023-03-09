const Product = require('./product')

Product.sync({alter: true})


module.exports = { Product }