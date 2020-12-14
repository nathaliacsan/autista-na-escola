const reviewCollection = require('../models/reviewSchema')
const schoolCollection = require('../models/schoolSchema')


const addReview = async (request, response) => {

    try {

        const id = request.params.id
        const school = await schoolCollection.findById(id) 

            if (!school) {
                return response.status(404).send({ message: 'Escola não encontrada.' })
            } else {
                const review = await reviewCollection.create({ ...request.body, user: request.userId, school:request.params.id})

                return response.status(201).send({
                    message: 'Agradecemos por sua avaliação',
                    school,
                    review
                })
            }

    } catch (error) {
        return response.status(400).send({ message: 'A nota deve ser de 1 a 5.' })
    }

}

const getAll = async (request, response) => {

    try {
        
        const reviews = await reviewCollection.find()

        return response.status(200).send(reviews)

    } catch (error) {
        return response.status(400).send({ message: error.message })
    }
}


module.exports = { 
    addReview,
    getAll
 }