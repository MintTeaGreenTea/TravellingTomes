// testData.js
const mongoose = require('mongoose');
const BookLending = require('./models/mongooseSchema');

mongoose.connect('mongodb+srv://area_tomes:YlnFaKRIIWYwSpjy@bookdata.8dahtck.mongodb.net/?retryWrites=true&w=majority&appName=BookData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

const testLending = new BookLending({
    name: 'Test Name',
    email: 'test@example.com',
    city: 'Test City',
    bookTitle: 'Test Book',
    rules: ['annotating', 'dog-earing'],
    weeks: '2 weeks',
    additionalInfo: 'Test info'
});

testLending.save().then(() => {
    console.log('Test data saved successfully');
    mongoose.connection.close();
}).catch(err => {
    console.error('Error saving test data:', err);
    mongoose.connection.close();
});
