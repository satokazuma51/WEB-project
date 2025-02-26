const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
  
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
  
    if (err.isJoi) {
      statusCode = 400;
      message = err.details[0].message;
    }
  
    if (err.name === 'JsonWebTokenError') {
      statusCode = 401;
      message = 'Invalid token. Please log in again.';
    }
  
    if (err.name === 'TokenExpiredError') {
      statusCode = 401;
      message = 'Token expired. Please log in again.';
    }
  
    res.status(statusCode).json({ message });
  };
  
  module.exports = errorHandler;
  