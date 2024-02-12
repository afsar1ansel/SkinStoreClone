# Ecommerce Website Clone

This project is a clone of an ecommerce website built for learning purposes. It utilizes HTML, CSS, JavaScript, and React to recreate the frontend user experience of an ecommerce platform.

## Features

- Product browsing: Users can explore various products listed on the website.
- Product details: Detailed information about each product is displayed on its respective page.
- Cart functionality: Users can add products to their cart for future purchase.
- Authentication: To add products to the cart, users are required to login using their email address.
- OTP Verification: Upon entering the email address, users receive a One-Time Password (OTP) for verification.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- React

## How to Run

1. Clone the repository to your local machine:

git clone "The repo link"


2. Navigate into the project directory:


3. Install dependencies:


4. Run the development server:

 - npm run dev



## Usage

- Explore the different product categories and select a product to view its details.
- To add products to the cart, click on the "Add to Cart" button. You will be prompted to login.
- Enter your email address and click on "Login".
- Check your email inbox for the OTP.
- Enter the OTP received in your email to successfully login and add products to the cart.



## deploy link :- https://skin-store-clone-h1p8.vercel.app/


### backend 


# Ecommerce Website Backend

This project serves as the backend for the ecommerce website clone. It is responsible for handling user authentication, product exploration routes, implementing security measures, and managing OTP verification for user registration.

## Technologies Used

- Node.js
- Express.js
- MongoDB (or any other database of your choice)
- JWT (JSON Web Tokens) for authentication
- Nodemailer (or any other email sending library) for OTP verification via email

## Setup

1. Clone the repository to your local machine:

  git clone - "the repo link"


2. Navigate into the project directory:


3. Install dependencies:

 - npm install



4. Set up your environment variables. You'll likely need to configure:

- Database connection details
- JWT secret key
- SMTP server details for sending emails

5. Run the server:
  - npm run dev


## Routes

### Authentication

- `POST /api/register`: Register a new user. Requires email and password. Sends OTP for verification.
- `POST /api/login`: Login with existing credentials. Generates and returns a JWT token for authentication.

### Product Exploration

- `GET /api/product/`: Retrieve all products available on the website.

### Auth Security

- Middleware to verify JWT token for protected routes:
  - Add this middleware to routes that require authentication.

## OTP Verification

- Upon registering, users receive an OTP via email for verification.
- OTPs are generated and sent using Nodemailer (or similar library).
- OTPs are verified on the backend before completing the registration process.


## Deploy link :- https://skinstore.onrender.com/




