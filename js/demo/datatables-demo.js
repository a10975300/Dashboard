$(document).ready(function () {

    $('#product-table1').DataTable({
        lengthMenu: [
            [5, 10, 20, -1],
            [5, 10, 20, 'All'],
        ],
    });
    p1();


var NPItable1 =  $('#NPI-table1').DataTable({
        searchPanes: {
            layout: 'columns-3',
            initCollapsed: true,
            cascadePanes: true
        },
        dom: 'Plfrtip',
        columnDefs: [
            {
                searchPanes: {
                    show: true

                },
                targets: [0,1,3]
            }
        ],
                lengthMenu: [
            [5, 10, 20, -1],
            [5, 10, 20, 'All'],
        ]
    });
    new $.fn.dataTable.SearchPanes(NPItable1, {});
    NPItable1.searchPanes.container().prependTo("#NPI-filter-panel1");
    NPItable1.searchPanes.resizePanes();
    a();

var NPItable2 =  $('#NPI-table2').DataTable({
        searchPanes: {
            layout: 'columns-2',
            initCollapsed: true,
            cascadePanes: true
        },
        dom: 'Plfrtip',
        columnDefs: [
            {
                searchPanes: {
                    show: true
                },
                targets: [0,1]
            }
        ],
                lengthMenu: [
            [5, 10, 20, -1],
            [5, 10, 20, 'All'],
        ]
    });
    new $.fn.dataTable.SearchPanes(NPItable2, {});
    NPItable2.searchPanes.container().prependTo("#NPI-filter-panel2");
    NPItable2.searchPanes.resizePanes();


        $('#no').DataTable({
        lengthMenu: [
            [5, 10, 20, -1],
            [5, 10, 20, 'All'],
        ],
    });


    var NPItable3 =  $('#NPI-table3').DataTable({
        searchPanes: {
            layout: 'columns-6',
            initCollapsed: true,
            cascadePanes: true
        },
        dom: 'Plfrtip',
         columnDefs: [
            {
                searchPanes: {
                    show: true
                },
                targets: [0,1,2,3,4,6]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [5]
            }
        ],
                lengthMenu: [
            [5, 10, 20, -1],
            [5, 10, 20, 'All'],
        ]
    });
    new $.fn.dataTable.SearchPanes(NPItable3, {});
    NPItable3.searchPanes.container().prependTo("#NPI-filter-panel3");
    NPItable3.searchPanes.resizePanes();
    a2();


var NPItable4 =  $('#NPI-table4').DataTable({
        searchPanes: {
            layout: 'columns-4',
            initCollapsed: true,
            cascadePanes: true
        },
        dom: 'Plfrtip',
         columnDefs: [
            {
                searchPanes: {
                    show: true
                },
                targets: [0,1,2,4]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [3]
            }
        ],
                lengthMenu: [
            [5, 10, 20, -1],
            [5, 10, 20, 'All'],
        ]
    });
    new $.fn.dataTable.SearchPanes(NPItable4, {});
    NPItable4.searchPanes.container().prependTo("#NPI-filter-panel4");
    NPItable4.searchPanes.resizePanes();
    NBl1();


var NPItable5 =  $('#NPI-table5').DataTable({
        searchPanes: {
            layout: 'columns-4',
            initCollapsed: true,
            cascadePanes: true
        },
        dom: 'Plfrtip',
         columnDefs: [
            {
                searchPanes: {
                    show: true
                },
                targets: [0,1,2,5]
            },
            {
                searchPanes: {
                    show: false
                },
                targets: [3,4]
            }
        ],
                lengthMenu: [
            [5, 10, 20, -1],
            [5, 10, 20, 'All'],
        ]
    });
    new $.fn.dataTable.SearchPanes(NPItable5, {});
    NPItable5.searchPanes.container().prependTo("#NPI-filter-panel5");
    NPItable5.searchPanes.resizePanes();
    NBl2();

});



//////////////////////redraw///////////////////////////////////

  $('#NPI-redraw1').on('click', function(){
   a();
} );

  $('#NPI-redraw2').on('click', function(){

} );

  $('#NPI-redraw3').on('click', function(){
   a2();
} );

  $('#NPI-redraw4').on('click', function(){
   NBl1();
} );

  $('#NPI-redraw5').on('click', function(){
   NBl2();
} );


////////////////////////////////////////////////////
var a_build = 0
var a2_build = 0
var p1_build = 0
var NBl1_build = 0
var NBl2_build = 0

function a(){

    var table2 = $('#NPI-table1').DataTable();
     table2.page.len(-1).draw();

    var table = document.getElementById("NPI-table1");
    var tableLen = table.rows.length;
    var data = {labels: [], population: [], area: [] };

for (var i = 1; i < tableLen; i++) {

    var l = table.rows[i].cells[0].innerText;
  var p = table.rows[i].cells[1].innerText;
  var a = table.rows[i].cells[2].innerText;


  if (data.population.indexOf(p) === -1) {
  data.labels.push(table.rows[i].cells[0].innerText);
  data.population.push(table.rows[i].cells[1].innerText);
  data.area.push(table.rows[i].cells[2].innerText);
}
else{

var new_a = Number(data.area[data.population.indexOf(p)])
data.area[data.population.indexOf(p)] = new_a+ Number(a)

}

}

    table2.page.len(5).draw();

        if(a_build===1){ //如果ctx1有宣告過了
    myPieChart2.destroy();

    }

a_build=1
var canvasP = document.getElementById("NPI-pie1")
var ctxP2 = canvasP.getContext('2d')
 myPieChart2 = new Chart(ctxP2, {
  type: 'pie',
  data: {
    labels: data.population,
    datasets: [{
      data: data.area
    }]
  },
  options: {
      maintainAspectRatio: false,
			responsive: true
  },
});


}

function a2(){

    var table2 = $('#NPI-table3').DataTable();
     table2.page.len(-1).draw();

    var table = document.getElementById("NPI-table3");
    var tableLen = table.rows.length;
    var data = {labels: [], population: [], area: [] };

for (var i = 1; i < tableLen; i++) {

    var l = table.rows[i].cells[4].innerText;
  var p = table.rows[i].cells[5].innerText;


  if (data.labels.indexOf(l) === -1) {
  data.labels.push(table.rows[i].cells[4].innerText);
  data.population.push(table.rows[i].cells[5].innerText);
}
else{

var new_a = Number(data.population[data.labels.indexOf(l)])
data.population[data.labels.indexOf(l)] = new_a+ Number(p)

}

}

    table2.page.len(5).draw();

    if(a2_build===1){ //如果ctx1有宣告過了
    myPieChart3.destroy();
    }


a2_build=1
var canvasP = document.getElementById("NPI-pie3")
var ctxP3 = canvasP.getContext('2d')
 myPieChart3 = new Chart(ctxP3, {
  type: 'pie',
  data: {
    labels: data.labels,
    datasets: [{
      data: data.population
    }]
  },
  options: {
      maintainAspectRatio: false,
			responsive: true
  },
});


}

function p1(){


    var table2 = $('#product-table1').DataTable();
     table2.page.len(-1).draw();

    var table = document.getElementById("product-table1");
    var tableLen = table.rows.length;
    var data = {labels: [], population: [], area: [] };

for (var i = 1; i < tableLen; i++) {

  var l = table.rows[i].cells[1].innerText;
  var a = table.rows[i].cells[7].innerText;


  if (data.labels.indexOf(l) === -1) {
  data.labels.push(table.rows[i].cells[1].innerText);
  data.area.push(table.rows[i].cells[7].innerText);
}
else{

var new_a = Number(data.area[data.labels.indexOf(l)])
data.area[data.labels.indexOf(l)] = new_a+ Number(a)

}

}

    table2.page.len(5).draw();


//product-pie1
p1_build=1
var ctx = document.getElementById( "product-pie1" );
 myPieChart = new Chart( ctx, {
    type: 'pie',
	    data: {
	    labels: data.labels,
			datasets: [ {
				data: data.area,
                            } ],

		},
  options: {
		    maintainAspectRatio: false,
			responsive: true,
        plugins: {
      labels: {
         fontColor: '#fff'
      }
    }
  }
});
}

function NBl1(){

    var table2 = $('#NPI-table4').DataTable();
     table2.page.len(-1).draw();

    var table = document.getElementById("NPI-table4");
    var tableLen = table.rows.length;
    var data = {labels: [], population: [], area: [] };

for (var i = 1; i < tableLen; i++) {

    var l = table.rows[i].cells[0].innerText;
  var p = table.rows[i].cells[1].innerText;
  var a = table.rows[i].cells[3].innerText;


  if (data.labels.indexOf(l) === -1) {
  data.labels.push(table.rows[i].cells[0].innerText);
  data.population.push(1);
  data.area.push(table.rows[i].cells[3].innerText);
}
else{

var new_p = Number(data.population[data.labels.indexOf(l)])
data.population[data.labels.indexOf(l)] = new_p+ 1

var new_a = Number(data.area[data.labels.indexOf(l)])
data.area[data.labels.indexOf(l)] = new_a+ Number(a)

}

}

    table2.page.len(5).draw();

    if(NBl1_build === 1){ //如果有建立過了
    myPieChart4.destroy();
    }



    //NPI-barline1
    NBl1_build=1
var ctx1 = document.getElementById("NPI-barline1");
 myPieChart4 = new Chart(ctx1, {
    type: 'bar',
   data: {
      labels: data.labels,
    datasets: [
          {
        label: 'Issue Qty',
        yAxisID: "y-axis-2",
        data: data.area,
        type: 'line',
        fill: false
      },
      {
        label: 'Product name',
        yAxisID: "y-axis-1",
        data: data.population
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

}

function NBl2(){


    var table2 = $('#NPI-table5').DataTable();
     table2.page.len(-1).draw();

    var table = document.getElementById("NPI-table5");
    var tableLen = table.rows.length;
    var data = {labels: [], population: [], area: [], rei: [] };

for (var i = 1; i < tableLen; i++) {

    var l = table.rows[i].cells[0].innerText;
  var a = table.rows[i].cells[3].innerText;
  var r = table.rows[i].cells[4].innerText;


  if (data.labels.indexOf(l) === -1) {
  data.labels.push(table.rows[i].cells[0].innerText);
  data.population.push(1);
  data.area.push(table.rows[i].cells[3].innerText);
  data.rei.push(table.rows[i].cells[4].innerText);
}
else{

var new_p = Number(data.population[data.labels.indexOf(l)])
data.population[data.labels.indexOf(l)] = new_p+ 1

var new_a = Number(data.area[data.labels.indexOf(l)])
data.area[data.labels.indexOf(l)] = new_a+ Number(a)

var new_r = Number(data.rei[data.labels.indexOf(l)])
data.rei[data.labels.indexOf(l)] = new_r+ Number(r)

}

}

    table2.page.len(5).draw();

    if(NBl2_build === 1){ //如果有建立過了
    myPieChart5.destroy();
    }


//NPI-barline2
NBl2_build=1
var ctx4 = document.getElementById("NPI-barline2");
 myPieChart5 = new Chart(ctx4, {
    type: 'bar',
   data: {
      labels: data.labels,
    datasets: [

          {
        label: 'Issue Qty',
        yAxisID: "y-axis-2",
        data: data.area,
        type: 'line',
        fill: false
      },
            {
        label: 'REIssue Qty',
        yAxisID: "y-axis-2",
        data: data.rei,
        type: 'line',
        fill: false
      },
      {
        label: 'Product name',
        yAxisID: "y-axis-1",
        data: data.population
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



}


//////////NPI-filter-button/////////////


  $('#NPI-filter-button1').on('click', function(){

  var x = document.getElementById("NPI-filter1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#NPI-filter-button2').on('click', function(){

     var x = document.getElementById("NPI-filter2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#NPI-filter-button3').on('click', function(){

     var x = document.getElementById("NPI-filter3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#NPI-filter-button4').on('click', function(){

     var x = document.getElementById("NPI-filter4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );

  $('#NPI-filter-button5').on('click', function(){

     var x = document.getElementById("NPI-filter5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} );


