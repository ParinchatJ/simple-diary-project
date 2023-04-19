require('dotenv').config()

const config = {
    port : process.env.PORT || 3000,
    hostname : process.env.HOSTNAME || 'localhost',
    mongodb : {
        uri : process.env.MONGO_URI
    }
}

module.exports = config
