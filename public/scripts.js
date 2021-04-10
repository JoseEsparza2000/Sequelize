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


    const meals_responce = await fetch('/api/meals/');
    const meals = await meals_responce.json();


    const macros_responce = await fetch('/api/macros/');
    const macros = await macros_responce.json();

    console.log(meals);
    console.log(macros);

    var arr = [];
    while(arr.length < 10){
      var r = Math.floor(Math.random() * meals.length);
      if(arr.indexOf(r) === -1) arr.push(r);
    }
    var calories_arr = [];
    var carbs_arr = [];
    var cholesterol_arr = [];
    var fat_arr = [];
    var sodium_arr = [];
    var protein_arr = [];
    var meals_arr = [];

    arr.forEach((i) => {
      calories_arr.push({ y: macros[i].calories, label: meals[i].meal_name});
      carbs_arr.push({ y: macros[i].carbs, label: meals[i].meal_name});
      cholesterol_arr.push({ y: macros[i].cholesterol, label: meals[i].meal_name});
      fat_arr.push({ y: macros[i].fat, label: meals[i].meal_name});
      sodium_arr.push({ y: macros[i].sodium, label: meals[i].meal_name});
      protein_arr.push({ y: macros[i].protein, label: meals[i].meal_name});
    });

    console.log(arr);
    console.log(calories_arr);


    var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title:{
    text: "Meals macro"
    },
    toolTip: {
    shared: true
    },
    legend:{
    cursor: "pointer",
    itemclick: toggleDataSeries
    },
    data: [{
    type: "stackedBar",
    name: "calories",
    showInLegend: "true",
    dataPoints: calories_arr
    },
    {
    type: "stackedBar",
    name: "carbs",
    showInLegend: "true",
    dataPoints: carbs_arr
    },
    {
    type: "stackedBar",
    name: "cholesterol",
    showInLegend: "true",
    dataPoints: cholesterol_arr
    },
    {
    type: "stackedBar",
    name: "fat",
    showInLegend: "true",
    dataPoints: fat_arr
    },
      {
        type: "stackedBar",
        name: "sodium",
        showInLegend: "true",
        dataPoints: sodium_arr
      },
    {
        type: "stackedBar",
    name: "protein",
    showInLegend: "true",
    dataPoints: protein_arr
    }]
    });
    chart.render();

    function toggleDataSeries(e) {
    if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
    e.dataSeries.visible = false;
    }
    else {
    e.dataSeries.visible = true;
    }
    chart.render();
    }
  }
  window.onload= fetch_data();

  window.onload= fetch_data(); 