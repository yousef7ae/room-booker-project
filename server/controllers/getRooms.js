
import Room from '../database/model/Room.js'
const getRooms = (req, res) => {
  Room.where()
    .then((data) => {
      const {day} = req.params
      return data.filter(e => e.days[day] === false)
    })
    .then((data) => {
      res.json(data)
    }).catch(() => {
      res.status(500).json({
        error: true,
        message: 'Internal Server Error!'
      })
    })


//   const daysToFilter = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

// const filter = { 'availability': { '$elemMatch': {} } };

// for (let day of daysToFilter) {
//   filter.availability['$elemMatch'][day] = true;
// }

// const rooms = await Room.find(filter);


}

export default getRooms