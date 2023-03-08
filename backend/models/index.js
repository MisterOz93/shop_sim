const Product = require('./product')
const Brand = require('./brand')

Brand.hasMany(Product)
Product.belongsTo(Brand)

Brand.sync({alter: true})
Product.sync({alter: true})


module.exports = { Product, Brand }