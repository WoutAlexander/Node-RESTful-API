const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Orders were fetched'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Orders was created'
  });
});

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Order details',
    OrderId: req.params.orderId,
  });
});

router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Order deleted',
    OrderId: req.params.orderId,
  });
});

module.exports = router;
