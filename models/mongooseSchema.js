const mongoose = require('mongoose');

const bookLendingSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    city: { type: String },
    bookURL: { type: String },
    rules: [String],
    weeks: { type: String },
    aboutYou: { type: String }
});

module.exports = mongoose.model('BookLending', bookLendingSchema);
