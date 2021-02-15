const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
  timeslots: {
    type: ['String'],
  },

  currentDate: {
    type: String,
  },
});

timeSchema.pre('save', function (next) {
  this.timeslots = this.timeslots.map((el) => {
    // if(this.timeslots > )
    const hrMin = el.split(':');

    el = Number(hrMin[0] * 60 * 60 * 1000 + hrMin[1] * 60 * 1000);
    const d = new Date(this.currentDate).getTime();
    el = d + el;
    return el;
  });
  // const myDate = String(this.currentDate.toLocaleDateString()).split('/');
  // const newDate = new Date(
  //   Number(myDate[2]),
  //   Number(myDate[1]) - 1,
  //   Number(myDate[0])
  // );
  // console.log(myDate, newDate);
  // this.currentDate = newDate.getTime();
  // console.log(newDate.getTime());

  next();
});

const Slots = mongoose.model('Slots', timeSchema);

module.exports = Slots;
