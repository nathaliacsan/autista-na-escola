const authMiddleware = require('../middlewares/authAdm')
const schoolCollection = require('../models/schoolSchema')

const getAllValidated = async (request, response) => {

    try {
        const schools = await schoolCollection.find({validated: true}).populate('user').sort({name:1})
        return response.status(200).send(schools)

    } catch (error) {
        return response.status(400).send({ message: 'Erro ao carregar escolas.' })
    }
}

const toValidate = async (request, response) => {
    try {
        const schools = await schoolCollection.find({validated: false}).populate('user').sort({name:1})
        return response.status(200).send(schools)

    } catch (error) {
        return response.status(400).send({ message: 'Erro ao carregar escolas.' })
    }
}

const addSchool = async (request, response) => {

    try {
        const category = request.body.category
        if (category === 'pública' || category === 'Pública')
            return response.status(406).send({ message: 'Não deve conter caracter especial.' })

        const school = await schoolCollection.create({...request.body, user: request.userId})
        return response.status(201).send(school)

    } catch (error) {
        return response.status(400).send({ message: error.message })
    }
}

const findById = async (request, response) => {

    try {
        const param = request.params.id

        const school = await schoolCollection.findById(param)

        return response.status(200).send(school)
    } catch (error) {
        return response.status(400).send({ message: error.message })
    }
}

const update = async (request, response) => {

    try {
        const param = request.params.id
        const body = request.body
        const update = {new: true}

        const school = await schoolCollection.findByIdAndUpdate(param, body, update).populate('user')

        return response.status(200).send(school)
    } catch (error) {
        return response.status(400).send({ message: error.message })
    }
}


const deleteSchool = async (request, response) => {

    try {
        const param = request.params.id

        const school = await schoolCollection.findByIdAndRemove(param)

        return response.status(200).send({
            message: 'Deletado com sucesso', 
            school})

    } catch (error) {
        return response.status(400).send({ message: error.message })
    }
}


module.exports = {
    getAllValidated,
    toValidate,
    addSchool,
    findById,
    deleteSchool,
    update
}