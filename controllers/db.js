const { default: mongoose } = require("mongoose");

const TodoSchema = new mongoose.Schema({
    task: String,
})

module.exports = mongoose.model('TodoList', TodoSchema);