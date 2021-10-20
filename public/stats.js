// get all workout data from back-end

fetch("/api/workouts/range")
  .then(response => {
    return response.json();
  })
  .then(data => {
    populateChart(data);
  });


API.getWorkoutsInRange()

  function generatePalette() {
    const arr = [
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "ffa600",
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "ffa600"
  ]

  return arr;
  }
function populateChart(data) {
  let durationsLine = durationLine(data);
  let durationsPie = durationPie(data);
  let poundsBar = calculateTotalWeightBar(data);
  let poundsDonut = calculateTotalWeightDonut(data);
  let workouts = workoutNames(data);
  const colors = generatePalette();

  let line = document.querySelector("#canvas").getContext("2d");
  let bar = document.querySelector("#canvas2").getContext("2d");
  let pie = document.querySelector("#canvas3").getContext("2d");
  let pie2 = document.querySelector("#canvas4").getContext("2d");

  let lineChart = new Chart(line, {
    type: "line",
    data: {
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      datasets: [
        {
          label: "Workout Duration In Minutes",
          backgroundColor: "red",
          borderColor: "red",
          data: durationsLine,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ]
      }
    }
  });

  let barChart = new Chart(bar, {
    type: "bar",
    data: {
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      datasets: [
        {
          label: "Pounds",
          data: poundsBar,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Pounds Lifted"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });

  let pieChart = new Chart(pie, {
    type: "pie",
    data: {
      labels: workouts,
      datasets: [
        {
          label: "Excercises Performed",
          backgroundColor: colors,
          data: durationsPie
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Excercises Performed"
      }
    }
  });

  let donutChart = new Chart(pie2, {
    type: "doughnut",
    data: {
      labels: workouts,
      datasets: [
        {
          label: "Excercises Performed",
          backgroundColor: colors,
          data: poundsDonut
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Excercises Performed"
      }
    }
  });
}

function durationPie(data) {
  let durations = [];
  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      durations.push(exercise.duration);
    });
  });
  return durations;
}
function calculateTotalWeightDonut(data) {
  let total = [];

  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      total.push(exercise.weight);
    });
  });

  return total;
}
//Added function for correct bar graph info
function calculateTotalWeightBar(data) {
  let total = [0, 0, 0, 0, 0, 0, 0];
  console.log(data);
  data.forEach(workout => {
    if(workout.day === 0){
      workout.exercises.forEach(exercise => {
        if(exercise.weight){
        total[0] += exercise.weight;
        }
      })
    }
    else if(workout.day === 1){
      workout.exercises.forEach(exercise => {
        if(exercise.weight){
        total[1] += exercise.weight;
        }
      })
    }
    else if(workout.day === 2){
      workout.exercises.forEach(exercise => {
        if(exercise.weight){
        total[2] += exercise.weight;
        }
      })
    }
    else if(workout.day === 3){
      workout.exercises.forEach(exercise => {
        if(exercise.weight){
        total[3] += exercise.weight;
        }
      })
    }
    else if(workout.day === 4){
      workout.exercises.forEach(exercise => {
        if(exercise.weight){
        total[4] += exercise.weight;
        }
      })
    }
    else if(workout.day === 5){
      workout.exercises.forEach(exercise => {
        if(exercise.weight){
        total[5] += exercise.weight;
        }
      })
    }
    else if(workout.day === 6){
     workout.exercises.forEach(exercise => {
      if(exercise.weight){
       total[6] += exercise.weight;
      }
     })
    }
  });

  return total;
}
//Added function for correct line graph info
function durationLine(data) {
  let total = [0, 0, 0, 0, 0, 0, 0];
  console.log(data);
  data.forEach(workout => {
    if(workout.day === 0){
     total[0] += workout.totalDuration;
    }
    else if(workout.day === 1){
      total[1] += workout.totalDuration; 
    }
    else if(workout.day === 2){
      total[2] += workout.totalDuration;
    }
    else if(workout.day === 3){
      total[3] += workout.totalDuration; 
    }
    else if(workout.day === 4){
      total[4] += workout.totalDuration; 
    }
    else if(workout.day === 5){
      total[5] += workout.totalDuration; 
        }
    else if(workout.day === 6){
      total[6] += workout.totalDuration; 
    }
  });

  return total;
}

function workoutNames(data) {
  let workouts = [];
  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      workouts.push(exercise.name);
    });
  }); 
  return workouts;
}
