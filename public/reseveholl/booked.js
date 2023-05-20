// import createRow from "../room/createRow.js";
const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

const createRow = (room, day) => {
  const newRow = tbody.insertRow()
  const roomName = newRow.insertCell()
  roomName.textContent = room.roomName;
  const buildingName = newRow.insertCell()
  buildingName.textContent = room.buildingName;
  const chairsCount = newRow.insertCell()
  chairsCount.textContent = room.chairsCount;
  const dayState = newRow.insertCell()
  dayState.textContent = day
}

window.onload = () => {
  fetch('/booked')
    .then((res) => res.json())
    .then((data) => {
      data.data.rooms.forEach((room) => {
        const daysObj = room.days;
        for (const day in daysObj) {
          if (daysObj[day]) {
            createRow(room, day)
          }
        }
      });
    })
}

