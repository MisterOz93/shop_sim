const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/databaseHelper')

class Product extends Model{}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brandId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'brand', key: 'id'}
    },
    onSale: {
        type:DataTypes.BOOLEAN,
        defaultValue: false
    },

}, {
    sequelize,
    underscored: true,
    timestamps: false, 
    modelName: 'product'
})

module.exports = Product