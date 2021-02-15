const express = require('express');

const timeController = require('../controllers/timeController');

const router = express.Router();

router
  .route('/')
  .post(timeController.createSlots)
  .get(timeController.getAllSlots);

module.exports = router;
