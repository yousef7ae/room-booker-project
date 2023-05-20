const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(form.room.value);
  console.log(form.building.value);
  console.log(form.chairs.value);
  fetch('/admin/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      roomName: form.room.value,
      buildingName: form.building.value,
      chairsCount: +form.chairs.value,
    })
  })
    .then((res) => res.json())
    .then(() => {
      window.location.href = '/'
    })
    .catch((err) => {
      console.log(err);
      alert('Adding Data Error')
    })

  form.reset();
})