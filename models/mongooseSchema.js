const mongoose = require('mongoose');

const bookLendingSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    city: { type: String },
    bookTitle: { type: String },
    rules: [String],
    weeks: { type: String },
    additionalInfo: { type: String }
});

module.exports = mongoose.model('BookLending', bookLendingSchema);
