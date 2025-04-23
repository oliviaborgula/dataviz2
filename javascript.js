var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [
            {
                data: [{x: 71.5, y: 3678}],
                label: "China",
                borderColor: "#3e95cd",
                backgroundColor: "rgba(62,149,205,0.1)",
                borderWidth: 2,
            },
            {
                data: [{x: 61.1, y: 2548}],
                label: "India",
                borderColor: "#3cba9f",
                backgroundColor: "rgba(60,186,159,0.1)",
                borderWidth: 2,
            },
            {
                data: [{x: 77.1, y: 45986}],
                label: "United States",
                borderColor: "#ffa500",
                backgroundColor: "rgba(255,165,0,0.1)",
                borderWidth: 2,
            },
            {
                data: [{x: 68.3, y: 5878}],
                label: "Indonesia",
                borderColor: "#e8c3b9",
                backgroundColor: "rgba(232,195,185,0.1)",
                borderWidth: 2,
            },
            {
                data: [{x: 71.9, y: 11461}],
                label: "Brazil",
                borderColor: "#c45850",
                backgroundColor: "rgba(196,88,80,0.1)",
                borderWidth: 2,
            },
            {
                data: [{x: 65.4, y: 13173}],
                label: "Russia",
                borderColor: "#8e5ea2",
                backgroundColor: "rgba(142,94,162,0.1)",
                borderWidth: 2,
            },
            {
                data: [{x: 62.6, y: 3366}],
                label: "Pakistan",
                borderColor: "#3e95cd",
                backgroundColor: "rgba(62,149,205,0.1)",
                borderWidth: 2,
            },
            {
                data: [{x: 65.8, y: 1632}],
                label: "Bangladesh",
                borderColor: "#3cba9f",
                backgroundColor: "rgba(60,186,159,0.1)",
                borderWidth: 2,
            },
            {
                data: [{x: 81.1, y: 32193}],
                label: "Japan",
                borderColor: "#ff6384",
                backgroundColor: "rgba(255,99,132,0.1)",
                borderWidth: 2,
            }
        ]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Life expectancy'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'GDP per capita (USD)'
                }
            }
        }
    }
});

var ctx = document.getElementById('radarChart').getContext('2d');

var radarChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: [
      "Paid Work", 
      "Education", 
      "Housework", 
      "Eating and drinking", 
      "Sports", 
      "Seeing Friends", 
      "TV and Radio"
    ],
    datasets: [
      {
        label: "United States",
        data: [251, 31, 100, 63, 18, 44, 148],
        backgroundColor: "rgba(255,165,0,0.2)",
        borderColor: "#ffa500",
        pointBackgroundColor: "#ffa500"
      },
      {
        label: "China",
        data: [315, 25, 103, 100, 23, 23, 127],
        backgroundColor: "rgba(62,149,205,0.2)",
        borderColor: "#3e95cd",
        pointBackgroundColor: "#3e95cd"
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 400,
        ticks: {
          stepSize: 100
        },
        pointLabels: {
          font: {
            size: 12
          }
        }
      }
    },
    plugins: {
      legend: { position: 'top' },
      title: {
        display: false
      }
    }
  }
});

