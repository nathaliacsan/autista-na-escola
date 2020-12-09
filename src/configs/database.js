
const mongoose = require('mongoose')

const mongoUri = process.env.MONGODB_URL //mongodb://localhost:27017/mapaQueer

const connect = () => {
    mongoose.connect(mongoUri, {useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true, 
        useFindAndModify: false}) 

        .then(() => console.log('Conectamos no Mongo.'))
        .catch((err) => console.log(err))
    // const connection = mongoose.connection

    // connection.on('error', () => console.error('Erro ao se conectar.'))
    // connection.once('open', () => console.log('Conectamos no Mongo.'))
}

module.exports = {connect}