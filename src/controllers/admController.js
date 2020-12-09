const accountCollections = require('../models/accountSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_ADM = process.env.SECRET_ADM
const ADM_PASSWORD = process.env.ADM_PASSWORD


const generateToken = (params = {}) => {
    return jwt.sign(params, SECRET_ADM, { expiresIn: 86400, })
}

const createUser = async (request, response) => {

        const {email} = request.body
        const password = request.body.password

    try {

        if (await accountCollections.findOne({email}))
            return response.status(400).send({ message: 'Usuário já existe.' })

        if (password !== ADM_PASSWORD)
            return response.status(400).send({ message: 'Você não possui acesso de admnistrador.' })
        
        const user = await accountCollections.create(request.body)
        
        user.password = undefined

        return response.status(201).send({
            user,
            token: generateToken({ id: user.id })
        })

    } catch (error) {
        response.status(500).send({ message: error.message })
    }

}

const login = async (request, response) => {
    const { email, password } = request.body

    const user = await accountCollections.findOne({ email }).select('+password')

    if (!user)
        return response.status(400).send({ message: 'Usuário não encontrado.' })

    if (!await bcrypt.compare(password, user.password))
        return response.status(400).send({ message: 'Senha inválida.' })

    user.password = undefined

    return response.status(201).send({
        user,
        token: generateToken({ id: user.id })
    })

}


module.exports = {
    createUser,
    login
}