const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
   id:{type: Number, required: true},
    name: { type: String, required: true },
    age: { type: Number, required: true }
});

module.exports = mongoose.model('Student', studentSchema);
