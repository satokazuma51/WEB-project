const express = require('express');
const {
  createTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction
} = require('../controllers/transactionController');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');
const { transactionValidation } = require('../validators/transactionValidator');
const validate = require('../middleware/validateMiddleware');

const router = express.Router();

router.post('/', protect, validate(transactionValidation), createTransaction);
router.put('/:id', protect, validate(transactionValidation), updateTransaction);

module.exports = router;


