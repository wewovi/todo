const mongoose = require('mongoose');


const todoSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    todoBody: {
        type: String,
        required: true
    },
    startDate:{
        type: Date,
        default: Date.now()
    },
    endDate:{
        type: Date,
        required: true
    },
    status:{
        type:Boolean,
        default: false
    }
});

module.exports = mongoose.model('todoModel', todoSchema);