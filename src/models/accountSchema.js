const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const AccountSchema = new Schema({

    name: { 
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: { 
        type: String,
        unique: true,
        required: true,
        lowercase: true
     },
    password: { 
        type: String,
        required: true,
        select: false
     },
     createdAt: {
         type: Date,
         default: Date.now
     }
},{
    versionKey: false
});

AccountSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

const AccountCollections = mongoose.model('account', AccountSchema);

module.exports = AccountCollections