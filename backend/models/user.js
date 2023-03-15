const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../utils/databaseHelper')

class User extends Model{}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING, //temporary
        allowNull: false
    },
    favouriteBrand: {
        type: DataTypes.INTEGER
    }

}, {
    sequelize,
    underscored: true,
    timestamps: false, 
    modelName: 'user'
})

module.exports = User