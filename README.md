# WEB-project
This is a Finance App Backend built with Node.js, Express.js, and MongoDB. It provides user authentication (JWT-based) and transaction management (income/expenses tracking).

# 🚀 Features
✅ User Authentication (Register, Login)
✅ JWT-based Authorization
✅ Transaction Management (Add, View Transactions)
✅ MongoDB Database Integration
✅ RESTful API Structure
✅ Middleware for Secure Routes

# 📂 Folder Structure
Finance-App/
│── models/                # Database models
│   ├── User.js            # User model
│   ├── Transaction.js     # Transaction model
│── routes/                # API routes
│   ├── auth.js            # Authentication routes
│   ├── transactions.js    # Transaction routes
│── controllers/           # Business logic
│   ├── authController.js  # Handles user auth
│   ├── transactionController.js  # Handles transactions
│── middleware/            # Middlewares
│   ├── authMiddleware.js  # JWT authentication middleware
│── public/                # Static frontend files
│   ├── index.html         # Simple homepage
│── .env                   # Environment variables
│── server.js              # Main Express server
│── package.json           # Dependencies and scripts
│── README.md              # Documentation

# 🛠 Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Authentication: JWT, bcrypt.js
Security: CORS, dotenv
Frontend: Basic HTML

# 🚀 Installation & Setup
1️⃣ Clone the Repository: git clone https://github.com/yourusername/finance-app.git
cd finance-app
2️⃣ Install Dependencies: npm install
3️⃣ Setup Environment Variables
Create a .env file and add:
PORT=5000
MONGO_URI=mongodb+srv://satokazuma51:<eYu4sS5HVkgRUwzg>@cluster1.hf5sp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1
JWT_SECRET=eYu4sS5HVkgRUwzg
4️⃣ Start the Server: node server.js
Server runs on http://localhost:5000

# API 
🔹 Register User
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
🔹 Login user
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "securepassword"
}
response:
{
  "token": "jwt-token-here",
  "user": {
    "_id": "userId",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
🔹 Add Transaction (Authenticated)
POST /api/transactions/add
Headers: { "Authorization": "Bearer jwt-token-here" }
{
  "amount": 100,
  "type": "income",
  "description": "Freelance payment"
}
🔹 Get Transactions (Authenticated)
GET /api/transactions/
Headers: { "Authorization": "Bearer jwt-token-here" }


👨‍💻 Author: Zhunussov Nurbeket
