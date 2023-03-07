const { Sequelize } = require('sequelize')
const { DATABASE_URL } = require('./config')

const sequelize = new Sequelize(DATABASE_URL)

const connectToDb = async () => {
    try {
        await sequelize.authenticate()
        console.log('connected to db')
    } catch (err) {
        console.log('db connection failed'),
        console.log('db connection error:', err)
        return process.exit(1)
    }
}

module.exports = { connectToDb }