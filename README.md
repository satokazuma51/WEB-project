# WEB-project
This is a Finance App Backend built with Node.js, Express.js, and MongoDB. It provides user authentication (JWT-based) and transaction management (income/expenses tracking).

🚀 Features
✅ User Authentication (Register, Login)
✅ JWT-based Authorization
✅ Transaction Management (Add, View Transactions)
✅ MongoDB Database Integration
✅ RESTful API Structure
✅ Middleware for Secure Routes

📂 Folder Structure
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

🛠 Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
Authentication: JWT, bcrypt.js
Security: CORS, dotenv
Frontend: Basic HTML
