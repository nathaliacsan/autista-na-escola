const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SchoolSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId, // tipo de dado dentro do Mongoose, de Id
        auto: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 2,
        maxlength: 2
    },
    address: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: false
    },
    category: {
        type: String,
        lowercase: true,
        required: true
    },
    validated: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},{
    versionKey: false
})



const SchoolCollections = mongoose.model('school', SchoolSchema);

module.exports = SchoolCollections