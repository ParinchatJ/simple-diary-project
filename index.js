const mongoose = require("mongoose");
const app = require('./config/api')
const config = require('./config/config')

const startApp = async () => {
    try {
        // connect mongoose
        await mongoose.connect(config.mongodb.uri, 
        {
            useNewUrlParser: true
        }).then(() => {
            console.log('Connect successfull')
        }).catch((error) => {
            console.log(`Mongodb is ERROR! = ${error}`)
        })
        
        // connect port
        await app.listen(config.port, (err) => {
            if (err) {
                return console.log('ERROR! = ', err)
            }
            console.log(`Listening on http://localhost:${config.port}`)
        })
    } catch (error) {
        throw error
    }
}

startApp()