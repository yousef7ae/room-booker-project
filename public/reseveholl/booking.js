const select = document.getElementById('days')
const filterBtn = document.getElementById('filter')
const rows = document.getElementById('rows')
const tbody = document.querySelector('tbody');

const createRow = (room, day) => {
  const newRow = tbody.insertRow()
  const roomName = newRow.insertCell()
  roomName.textContent = room.roomName;
  const buildingName = newRow.insertCell()
  buildingName.textContent = room.buildingName;
  const chairsCount = newRow.insertCell()
  chairsCount.textContent = room.chairsCount;
  const satStatus = newRow.insertCell()
  satStatus.textContent = room.days[day]
  const addBtn = document.createElement('a')
  addBtn.className = 'btn btn-danger' 
  addBtn.textContent = 'book';
  addBtn.id = room._id;
  const addBtnC = newRow.insertCell()
  addBtnC.appendChild(addBtn)
  addBtn.addEventListener('click', (b) => {
    fetch(`/room/book/${addBtn.id}`,{
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({day: select.value})
    })
    .then(data => data.json())
    .then((data) => {
      rows.textContent = '';
      console.log(data);
      data.forEach( element => createRow(element,select.value ) );
    }).catch(console.log);
  });

}


fetch(`/room/get/saturday`)
.then(data => data.json())
.then((data) => {
  rows.textContent = ''
  data.forEach(element => createRow(element, 'sunday') )
})
.catch(console.log)

filterBtn.addEventListener('click', () => {
  fetch(`/room/get/${select.value}`)
    .then(data => data.json())
    .then((data) => {
      rows.textContent = ''
      data.forEach(element => createRow(element,select.value ) )
    }).catch(console.log)
})