# CRUD API with Node.js, Express, and MongoDB

# Project Description
This is a simple RESTful API for managing users, built using Node.js, Express, and MongoDB. It supports basic CRUD (Create, Read, Update, Delete) operations with proper validation, error handling, and structured code organization.

# Features
- Create a new user (name, email, age)
- Retrieve all users
- Retrieve a single user by ID
- Update user details
- Delete a user
- Input validation using Joi
- Centralized error handling
- Organized in MVC architecture
- Uses wrapAsync for cleaner error handling
- Uses dotenv for environment variable management

# Installation & Setup

# 1. Clone the Repository
git clone https://github.com/YOUR-USERNAME/CRUD-Node.git
cd CRUD-Node

# 2. Install Dependencies
npm install

# 3. Setup Environment Variables
Create a .env file in the root directory and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string

# 4. Start the Server
npm start
The API will run on http://localhost:5000 by default.

# 5. Project Structure
CRUD-Node/
│-- controllers/
│   ├── userController.js
│-- models/
│   ├── userModel.js
│-- routes/
│   ├── userRoutes.js
│-- middleware/
│   ├── wrapAsync.js
│-- config/
│   ├── db.js
│-- .env
│-- server.js
│-- package.json

# API Endpoints

# 1. Create a User
http POST /users
# Request Body (JSON):
{
        "name": "Alfiya Shaikh",
        "email": "alfiya@example.com",
        "age": 20,
        "__v": 0
    }
# Response:
{
        "_id": "67d2ab2243faa137824dbef1",
        "name": "Alfiya Shaikh",
        "email": "alfiya@example.com",
        "age": 20,
        "__v": 0
    }


# 2. Get All Users
http GET /users
# Response:
[
{
        "_id": "67d2ab2243faa137824dbef1",
        "name": "Alfiya Shaikh",
        "email": "alfiya@example.com",
        "age": 20
    },
    {
        "_id": "67d2acabb80058ca80cc8988",
        "name": "Ashad Shaikh",
        "email": "ashad@gmail.com",
        "age": 20
    },
    {
        "_id": "67d2acabb80058ca80cc8989",
        "name": "Sarfaraz Tamboli",
        "email": "sarfaraz@gmail.com",
        "age": 22
    },
    {
        "_id": "67d2acabb80058ca80cc898a",
        "name": "Amaan Shaikh",
        "email": "amaan@gmail.com",
        "age": 20
    }
]

# 3. Get a Single User
http GET /users/:id
# Response:
{
   "_id": "67d2acabb80058ca80cc898a",
        "name": "Amaan Shaikh",
        "email": "amaan@gmail.com",
        "age": 20
}

# 4. Update a User
http PUT /users/:id
# Request Body (JSON):
{
  "name": "Alfiya Aslam Shaikh",
  "email": "alfiya@example.com",
  "age": 20
}

# Response:
{
    "_id": "67d2ab2243faa137824dbef1",
    "name": "Alfiya Aslam Shaikh",
    "email": "alfiya@example.com",
    "age": 20,
    "__v": 0
}

# 5️. Delete a User
http DELETE /users/:id

# Response:
{
  "message": "User deleted successfully"
}

# Technologies Used
- Node.js
- Express.js
- MongoDB + Mongoose
- Joi (Input Validation)
- Dotenv (Environment Variables)
- MVC Folder Structure
- Async Error Handling with wrapAsync Middleware

# Author
Alfiya Shaikh (https://github.com/alfiashk)
