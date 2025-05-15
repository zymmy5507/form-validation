# Form Validation Example with Express and EJS

This project demonstrates a simple form validation workflow using **Express.js**, **express-validator**, and **EJS** templating. The form collects user information and validates it on the server side before processing.

## Features

- Server-side validation for username, email, and age fields
- User-friendly error messages displayed above the form
- Clean, responsive UI with Bootstrap 5
- EJS template rendering for dynamic error display

## Technologies Used

- Node.js
- Express.js
- express-validator
- EJS
- Bootstrap 5

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/form-validation-1.git
    cd form-validation-1
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

### Running the App

Start the server:
```bash
node app.js
```
Visit [http://localhost:3000/myform](http://localhost:3000/myform) in your browser.

## Usage

- Fill out the form fields and submit.
- If validation fails, errors will be shown above the form.
- On success, the submitted data will be displayed.

## Validation Rules

- **Username**: Required, minimum 3 characters
- **Email**: Must be a valid email address
- **Age**: Must be a number, minimum 18

## Project Structure

```
form-validation-1/
├── app.js
├── views/
│   └── myform.ejs
├── package.json
└── readme.md
```

## License

This project is licensed under the MIT License.
