const express = require('express');

const clientController = require('../controllers/clientController');

const router = express.Router();

router
  .route('/')
  .post(clientController.createClient)
  .get(clientController.getAllClient);

module.exports = router;
