const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SchoolSchema = new Schema({

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
    city: {
        type: String,
        required: true,
        lowercase: true,
    },
    address: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: false
    },
    review: {
        type: String,
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