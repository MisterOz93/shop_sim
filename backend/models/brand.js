const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/databaseHelper')

class Brand extends Model{}

Brand.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    

}, {
    sequelize,
    underscored: true,
    timestamps: false, 
    modelName: 'brand'
})

module.exports = Brand