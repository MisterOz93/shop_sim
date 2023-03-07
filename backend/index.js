const express = require('express')
const { PORT } = require('./utils/config')
const { connectToDb } = require('./utils/databaseHelper')

const app = express()

const start = async () => { 
    
    await connectToDb()

    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
    })
}

start()