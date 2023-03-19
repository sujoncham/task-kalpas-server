const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        unique: true
    },
    description : {
        type: String,
        required: true,
    },
    img : {
        type: String,
        required: true,
    },
    author:{
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    dated : {
        type: Date,
        default: Date.now,
    },
})

const NewsBlog = new mongoose.model("news", newsSchema)
module.exports = NewsBlog;