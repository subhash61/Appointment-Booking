const Slots = require('../models/timeModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createSlots = catchAsync(async (req, res, next) => {
  const slots = await Slots.create(req.body);
  if (!slots) {
    return next(new AppError('slot not created', 400));
  }
  res.status(201).json({
    status: 'success',
    data: {
      slots,
    },
  });
});

exports.getAllSlots = catchAsync(async (req, res, next) => {
  const slots = await Slots.find({
    currentDate: req.body.currentDate,
  });
  res.status(200).json({
    status: 'success',
    data: {
      slots,
    },
  });
});
