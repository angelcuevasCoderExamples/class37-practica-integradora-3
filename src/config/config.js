const dotenv = require('dotenv');

//dotenv.config({path:`${__dirname}/.nombreDeArchivo`}) <---si el ".env" tuviera otro nombre
dotenv.config()

module.exports = {
    port: process.env.PORT,
    mongo: {
        URL: process.env.MONGO_URL   
    }
}