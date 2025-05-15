const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');

const validationRegistration = [
    body('username')
        .notEmpty().withMessage('Username is required.')
        .isLength({ min: 3 }).withMessage('Username must be at least 3 characters long')
        .trim(),
    body('useremail')
        .isEmail().withMessage('Email is not valid')
        .normalizeEmail(),
    body('userage')
        .isNumeric().withMessage('Age must be a number')
        .isInt({ min: 18 }).withMessage('Age must be at least 18'),
];

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/myform', (req, res) => {
    res.render('myform', { errors: 0 }); // Render the form with an empty errors array
});

app.post('/saveform', validationRegistration, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.send(errors.array()); // Return validation errors
    }
    res.send(req.body); // Return form data if no errors
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
