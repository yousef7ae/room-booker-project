import mongoose from "mongoose";

// const daysSchema = mongoose.Schema({
//   Saturday: {
//     type: Boolean,
//     default: false
//   },
//   Sunday: {
//     type: Boolean,
//     default: false
//   },
//   Monday: {
//     type: Boolean,
//     default: false
//   },
//   Tuesday: {
//     type: Boolean,
//     default: false
//   },
//   Wednesday: {
//     type: Boolean,
//     default: false
//   },
//   Thursday: {
//     type: Boolean,
//     default: false
//   },
//   Friday: {
//     type: Boolean,
//     default: false
//   },
// })

const roomSchema = mongoose.Schema({
  roomName: {
    type: String,
    unique: true
  },
  buildingName: {
    type: String,
  },
  chairsCount: Number,
  days: {
    type: Object,
    default: {
      saturday: false,
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false
    }
  },
})

const Room = mongoose.model('rooms', roomSchema);
export default Room;
