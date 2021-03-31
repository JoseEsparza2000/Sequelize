async function fetch_data() {
    const response = await fetch('/api/dining/');
    const dining_halls = await response.json();
    const myTable = document.querySelector('#myTable');
    console.log(dining_halls);
    const data = dining_halls.data;
  
    data.forEach((item) => {
      const row = data.map(item => {
      return `
          <tr>
            <th>${item.hall_id}</th>
            <th>${item.hall_name}</th>
            <th>${item.hall_address}</th>
          </tr>
          `;
      }).join('');
  
      myTable.innerHTML = row;
    })
  }
  window.onload= fetch_data();