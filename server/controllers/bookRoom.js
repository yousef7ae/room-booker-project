import Room from '../database/model/Room.js'

const bookRoom = (req, res, next) => {
  const {roomId} = req.params;
  const {day} = req.body
  Room.updateOne({ _id: roomId }, { $set: { [`days.${day}`]: true } })

    .then((data) =>{
      if(data.acknowledged){
        return Room.where()
      }else {
        next('error')
      }
    }).then((data) => {
      return data.filter(e => e.days[day] === false)
    })
    .then((data) => {
      res.json(data)
    }).catch((error) => {
      console.log(error);
      res.status(500).json({
        error: true,
        message: 'Internal Server Error!'
      })
    })
}

export default bookRoom;