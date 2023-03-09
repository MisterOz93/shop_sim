const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/databaseHelper')

class Product extends Model{}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cost: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quality: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0,
            max: 5
        }
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