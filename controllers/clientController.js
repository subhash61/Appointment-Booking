const Client = require('../models/clientModel');
const catchAsync = require('../utils/catchAsync');

exports.createClient = catchAsync(async (req, res, next) => {
  const client = await Client.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      client,
    },
  });
});

exports.getAllClient = catchAsync(async (req, res, next) => {
  let clients = Client.findById(req.body._id);
  clients.sort('-timestamp');
  clients = await clients;
  res.status(200).json({
    status: 'success',
    data: {
      clients,
    },
  });
});
