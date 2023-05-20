const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

const createRow = (room) => {
  const newRow = tbody.insertRow()
  const roomId = newRow.insertCell()
  roomId.textContent = room._id;
  const roomName = newRow.insertCell()
  roomName.textContent = room.roomName;
  const buildingName = newRow.insertCell()
  buildingName.textContent = room.buildingName;
  const chairsCount = newRow.insertCell()
  chairsCount.textContent = room.chairsCount;
  const satStatus = newRow.insertCell()
  satStatus.textContent = room.days['saturday']
  const sunStatus = newRow.insertCell()
  sunStatus.textContent = room.days['sunday']
  const monStatus = newRow.insertCell()
  monStatus.textContent = room.days['monday']
  const tusStatus = newRow.insertCell()
  tusStatus.textContent = room.days['tuesday']
  const wedStatus = newRow.insertCell()
  wedStatus.textContent = room.days['wednesday']
  const thurStatus = newRow.insertCell()
  thurStatus.textContent = room.days['thursday']
  const friStatus = newRow.insertCell()
  friStatus.textContent = room.days['friday']
  
}
export default createRow;