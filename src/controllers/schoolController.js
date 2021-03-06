const schoolCollection = require('../models/schoolSchema')

const getAllValidated = async (request, response) => {

    try {
        const schools = await schoolCollection.find({validated: true}).populate('user').sort({name:1})
        return response.status(200).send(schools)

    } catch (error) {
        return response.status(400).send({ message: error.message })
    }
}

const toValidate = async (request, response) => {
    try {
        
        const schools = await schoolCollection.find({validated: false}).populate('user').sort({name:1})

        return response.status(200).send(schools)

    } catch (error) {
        return response.status(400).send({ message: error.message })
    }
}

const addSchool = async (request, response) => {

    try {
        const school = await schoolCollection.create({...request.body, user: request.userId})
        return response.status(201).send(school)

    } catch (error) {
        return response.status(400).send({ message: 'Todos os campos obrigatórios devem ser preenchidos.' })
    }
}

const findByState = async (request, response) => {

    try {

        const query = request.query

        await schoolCollection.find(query, (error, state) => {

            if (state == '') {
                return response.status(404).send({
                    message: "Ainda não existem escolas cadastradas nesse estado."
                })
            } else {
                return response.status(200).send({
                    message: "Escola encontrada.",
                    state
                })
        }
        })

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
        return response.status(400).send({ message: 'Id não encontrado.' })
    }
}


const deleteSchool = async (request, response) => {

    try {
        const param = request.params.id

        const school = await schoolCollection.findByIdAndRemove(param)
        
        return response.status(200).send({
            message: 'Deletado com sucesso.', 
            school})

    } catch (error) {
        return response.status(400).send({ message: 'Erro ao deletar.' })
    }
}


module.exports = {
    getAllValidated,
    toValidate,
    addSchool,
    findByState,
    deleteSchool,
    update
}