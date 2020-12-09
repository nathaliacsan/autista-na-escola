const jwt = require('jsonwebtoken')
const SECRET_ADM = process.env.SECRET_ADM


const auth = (request, response, next) => {

    const authHeader = request.get('authorization')

    if (!authHeader)
        return response.status(401).send({ message: 'Token não localizado.' })

    const token = authHeader.split(' ')[1]

        // decoded if do usuario caso de certo
    jwt.verify(token, SECRET_ADM, (error, decoded) => {
        if(error) 
        return response.status(401).send({message: 'Token inválido.'})

        request.userId = decoded.id
        return next()
    })

}

module.exports = {auth}