import Room from "../database/model/Room.js";

const bookedRooms = async (req, res) => {
  try {
    // const rooms = await Room.find({'days.monday': false})
    // console.log(rooms);
    // console.log('booked rooms');

    // const daysToFilter = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    // const filter = { 'availability': { 'days': {} } };
    // for (let day of daysToFilter) {
    //   filter.availability['days'][day] = false;

    // }
    // const rooms = await Room.find();

    // let roomDays;
    // rooms.forEach( async (room) => {
    //   const sat = await Room.find({ 'days.saturday': false });
    //   const sun = await Room.find({ 'days.sunday': false });
    //   const mon = await Room.find({ 'days.monday': false });
    //   const tues = await Room.find({ 'days.tuesday': false });
    //   const wed = await Room.find({ 'days.wednesday': false });
    //   const thur = await Room.find({ 'days.thursday': false });
    //   const fri = await Room.find({ 'days.friday': false });

    //   roomDays = [sat, sun, mon, tues, wed, thur, fri]
    //   console.log(roomDays);
    // })

    const rooms = await Room.find({
      $or: [
        { "days.saturday": true },
        { "days.sunday": true },
        { "days.monday": true },
        { "days.tuesday": true },
        { "days.wednesday": true },
        { "days.thursday": true },
        { "days.friday": true }
      ]
    });
    
    res.status(200).json({
      error: false,
      data: {
        rooms
      }
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: 'Internal Server Error!'
    })
  }
};

export default bookedRooms;