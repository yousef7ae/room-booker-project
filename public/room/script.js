import createRow from "./createRow.js";

window.onload = () => {
  fetch('/admin')
    .then((res) => res.json())
    .then((data) => {
      data.data.rooms.forEach((room) => {
        createRow(room)
      });
    })
    .catch(() => alert('Getting Data Error'))
}
