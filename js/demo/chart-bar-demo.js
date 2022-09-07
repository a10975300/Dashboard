// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


// NPI-stackbar1
var ctx = document.getElementById("NPI-stackbar1");
var myBar = new Chart(ctx, {
    type: 'bar',
        data: {
        labels: ['Org1','Org2','Org3','Org4','Org5'],
        datasets: [
        {
            label: 'Packed',
            data: [12,55,77,32,45],
        },
        {
            label: 'Unpacked',
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



// NPI-bar2
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

// NPI-bar3
var ctx = document.getElementById("NPI-bar3");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["X360 G9", "Powderkeg", "Maldives","Rota"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: [15, 12, 25,12],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          maxTicksLimit: 5,
          padding: 10,

        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10
    },
  }
});

