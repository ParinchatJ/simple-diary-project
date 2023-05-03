require('dotenv').config()

const config = {
    port : process.env.PORT || 3000,
    hostname : process.env.HOSTNAME || 'localhost',
    mongodb : {
        uri : process.env.MONGO_URI
    },
    clientPorts: [
        process.env.PORT,
        process.env.MONGODB_URI,
      ],
      isVercel: process.env.IS_VERCEL || false
}

module.exports = config
