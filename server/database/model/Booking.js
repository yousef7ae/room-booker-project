import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
  name: String,
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'users'
  },
  roomId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'rooms'
  },
  bookedDay: String,
})

const Booking = mongoose.model('bookings', bookingSchema);
export default Booking;
