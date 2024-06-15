const mongoose = require('mongoose');

const taskSchema = {
    title: String,
    description: String,
    subtaks: [String],
    status: String,
    toDate: Date,
    fromDate: Date
  };
  
const task = mongoose.model('Character', taskSchema);

module.exports = task;