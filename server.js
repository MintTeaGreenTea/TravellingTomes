const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const BookLending = require('./models/mongooseSchema.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://area_tomes:YlnFaKRIIWYwSpjy@bookdata.8dahtck.mongodb.net/?retryWrites=true&w=majority&appName=BookData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files

app.post('/submit', async (req, res) => {
    console.log('Form Data:', req.body);
    const { name, email, city, searchQuery, weeks, aboutYou } = req.body;
    const rules = [
        req.body.annotating ? 'annotating' : '',
        req.body.dogEaring ? 'dog-earing' : '',
        req.body.underlining ? 'underlining' : '',
        req.body.inscription ? 'inscription' : '',
        req.body.other ? 'other' : ''
    ].filter(Boolean);

    const newLending = new BookLending({
        name,
        email,
        city,
        bookTitle: searchQuery,
        rules,
        weeks,
        additionalInfo: aboutYou
    });

    try {
        await newLending.save();
        console.log('Data saved successfully');
        res.send('Form submitted successfully');
    } catch (err) {
        console.error('Error saving to database:', err);
        res.status(500).send('Error saving to database');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
