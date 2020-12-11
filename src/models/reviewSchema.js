const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({

    rate: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account',
        required: true
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'school',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{
    versionKey: false
})



const ReviewCollections = mongoose.model('review', ReviewSchema);

module.exports = ReviewCollections