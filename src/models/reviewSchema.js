const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({

    review: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account',
        required: true
    },
    validated: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
},
{
    versionKey: false
})

const ReviewCollection = mongoose.model('review', ReviewSchema)

module.exports = ReviewCollection