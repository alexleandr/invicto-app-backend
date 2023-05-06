const mongoose = require('mongoose')
const { ObjectId } = require('mongodb')

// MODEL USUÁRIO:

const UserSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        unique: true,
        maxlength: 32 
    },
    password: { 
        type: String, 
        required: true, 
        maxlength: 128 
    },
    vices: [{
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new ObjectId()
        },
        title: { 
            type: String, 
            required: true, 
            maxlenght: 32 
        },
        start_abstinence: { 
            type: Date, 
            required: true 
        }
    }]
})

module.exports = mongoose.model('User', UserSchema)