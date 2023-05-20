import Room from '../database/model/Room.js'

const getAllRooms = (req, res) => {
  Room.find().then((data) => {
    res.status(200).json({
      error: false,
      data: {
        rooms: data
      }
    })
  })
    .catch(() => {
      res.status(500).json({
        error: true,
        message: 'Internal Server Error!'
      })
    })

}

export default getAllRooms;