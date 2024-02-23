const { default: mongoose } = require("mongoose");

const TodoSchema = new mongoose.Schema({
    task: String,
    CreatedAt: ({
        type: Date,
        default: ()=>Date.now()
    })
})

module.exports = mongoose.model('TodoList', TodoSchema);