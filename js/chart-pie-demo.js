// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';



//NPI-pie2
var ctx = document.getElementById("NPI-pie2");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["SI-1", "SI-2", "pv"],
    datasets: [{
      data: [55, 30, 15],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true
    },
    cutoutPercentage: 80,
  },
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
