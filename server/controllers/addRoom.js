import Room from '../database/model/Room.js'

const addRoom = async (req, res) => {
  try {
    const { roomName, buildingName, chairsCount } = req.body
    const newRoom = await Room.create({ roomName, buildingName, chairsCount })
    
    res.status(201).json({
      error: false,
      data: {
        room: newRoom
      }
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: 'Internal Server Error!'
    })
  }
}

export default addRoom;