const reviewCollection = require('../models/reviewSchema')
const schoolColletion = require('../models/schoolSchema')

const findById = (param1) => {

    const param = param1.params.id
    const school = schoolColletion.findById(param)

    if (school)
        return true

    return false

}
const addReview = async (request, response) => {

    try {

        const temid = findById(request)

        if (temid) {
            const rate = (await reviewCollection.create({ ...request.body, user: request.userId }))
            return response.status(201).send({
                message:
                    'Agradecemos por sua avaliação',
                rate
            })
        }

        return response.status(404).send({ message: 'Escola não encontrada.' })

    } catch (error) {
        return response.status(400).send({ message: error.message })
    }
}






module.exports = {
    addReview
}