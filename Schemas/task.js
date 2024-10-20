const mongoose = require('mongoose')
const Schema = mongoose.Schema



const taskSchema = new Schema({
  title: String,
  completed: Boolean
})

module.exports = mongoose.model("task", taskSchema)