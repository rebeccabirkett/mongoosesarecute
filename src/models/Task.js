const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String
    },
    complete: {
        type: Boolean
    },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = {
    Task,
};