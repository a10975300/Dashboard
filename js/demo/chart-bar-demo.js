// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


// NPI-stackbar1
var ctx = document.getElementById("NPI-stackbar1");
var myBar = new Chart(ctx, {
    type: 'bar',
        data: {
        labels: ['Design-BIOS','Design-EE','Design-ME'],
        datasets: [
        {
            label: 'Design',
            data: [12,55,77,32,45],
        },
        {
            label: 'Supplier',
            data: [56,88,22,88,40],
          },
             {
            label: 'Factory-Process',
            data: [56,88,22,88,40],
          }
    ],

    },
    options: {
       maintainAspectRatio: false,
        title: {
            display: true,
        },
        tooltips: {
            mode: 'label',
            callbacks: {
                label: function(tooltipItem, data) {
                    var corporation = data.datasets[tooltipItem.datasetIndex].label;
                    var valor = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    var total = 0;
                    for (var i = 0; i < data.datasets.length; i++)
                        total += data.datasets[i].data[tooltipItem.index];
                    if (tooltipItem.datasetIndex != data.datasets.length - 1) {
                        return corporation + " : " + valor.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
                    } else {
                        return [corporation + " : " + valor.toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'), "Total : " + total];
                    }
                }
            }
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});


	//NPI-Bar1
	var ctx = document.getElementById( "NPI-Bar1" );
	//    ctx.height = 200;
	var myChart = new Chart( ctx, {
		type: 'bar',
		data: {
			labels: [ "Design-bios", "Design-ME", "Design-EE"],
			datasets: [
				{
					label: "Design",
					data: [ 65, 59, 80],
					borderColor: "rgba(0, 123, 255, 0.9)",
					borderWidth: "0",
					backgroundColor: "rgba(0, 123, 255, 0.5)"
                            },
				{
					label: "Factory-Process",
					data: [ 28, 48, 40],
					borderColor: "rgba(0,0,0,0.09)",
					borderWidth: "0",
					backgroundColor: "red"
                            },
                            				{
					label: "Factory-Fixture",
					data: [ 65, 59, 80],
					borderColor: "rgba(0, 123, 255, 0.9)",
					borderWidth: "0",
					backgroundColor: "green"
                            },
                            {
					label: "Supplier",
					data: [ 28, 48, 40],
					borderColor: "rgba(0,0,0,0.09)",
					borderWidth: "0",
					backgroundColor: "yellow"
                            }
                        ]
		},
		options: {
		maintainAspectRatio: false,
			scales: {
				yAxes: [ {
					ticks: {
						beginAtZero: true
					}
                                } ]
			}
		}
	} );



// NPI-bar2 目前沒用保留
var ctx = document.getElementById("NPI-bar2");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["X360 G9", "Powderkeg", "Maldives","Rota"],
    datasets: [{
      label: "Issue qty",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [15, 12, 25,9],
    }],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,

    legend: {
      display: false
    },

  }
});


//NPI-barline1
var ctx = document.getElementById("NPI-barline1");
var myPieChart = new Chart(ctx, {
    type: 'bar',
   data: {
      labels: ["Inventec", "Compal", "Quanta"],
    datasets: [

          {
        label: 'Issue Qty',
        yAxisID: "y-axis-2",
        data: [14,15,16],
        type: 'line',
        fill: false
      },
            {
        label: 'REIssue Qty',
        yAxisID: "y-axis-2",
        data: [1,5,6],
        type: 'line',
        fill: false
      },
      {
        label: 'Product name',
        yAxisID: "y-axis-1",
        data: [13,21,13]
      },

    ]},
    options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: true
        },
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                type: "linear",
                stacked: true,
                display: true,
                position: "left",
                id: "y-axis-1",
                ticks: {
                    beginAtZero: true,
                    suggestedMin: 0,
                    suggestedMax: 10,
                    min: 0
                }
            }, {
                type: "linear",
                display: false,
                id: "y-axis-2",
                ticks: {
                    beginAtZero: true,
                    suggestedMin: 0,
                    suggestedMax: 10,
                    min: 0
                }
            }],
        }
    }
});

//NPI-barline2
var ctx = document.getElementById("NPI-barline2");
var myPieChart = new Chart(ctx, {
    type: 'bar',
   data: {
      labels: ["Inventec", "Compal", "Quanta"],
    datasets: [

          {
        label: 'Issue Qty',
        yAxisID: "y-axis-2",
        data: [14,15,16],
        type: 'line',
        fill: false
      },
            {
        label: 'REIssue Qty',
        yAxisID: "y-axis-2",
        data: [1,5,6],
        type: 'line',
        fill: false
      },
      {
        label: 'Product name',
        yAxisID: "y-axis-1",
        data: [13,21,13]
      },

    ]},
    options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: true
        },
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                type: "linear",
                stacked: true,
                display: true,
                position: "left",
                id: "y-axis-1",
                ticks: {
                    beginAtZero: true,
                    suggestedMin: 0,
                    suggestedMax: 10,
                    min: 0
                }
            }, {
                type: "linear",
                display: false,
                id: "y-axis-2",
                ticks: {
                    beginAtZero: true,
                    suggestedMin: 0,
                    suggestedMax: 10,
                    min: 0
                }
            }],
        }
    }
});