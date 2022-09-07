$(document).ready(function () {

    $('#product-table1').DataTable({
        lengthMenu: [
            [5, 10, 20, -1],
            [5, 10, 20, 'All'],
        ],
    });

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

});

/////////////////////////////////////////////////////////

  $('#NPI-redraw1').on('click', function(){

   b();


} );


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


var canvasP = document.getElementById("NPI-pie1")
var ctxP = canvasP.getContext('2d')
 myPieChart2 = new Chart(ctxP, {
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


function b(){

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


myPieChart2.destroy();

var canvasP = document.getElementById("NPI-pie1")
var ctxP = canvasP.getContext('2d')
 myPieChart2 = new Chart(ctxP, {
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



////////////////////////////////////////////////////

  $('#NPI-redraw3').on('click', function(){

   b2();


} );


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


var canvasP = document.getElementById("NPI-pie3")
var ctxP = canvasP.getContext('2d')
 myPieChart3 = new Chart(ctxP, {
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


function b2(){

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


myPieChart3.destroy();

var canvasP = document.getElementById("NPI-pie3")
var ctxP = canvasP.getContext('2d')
 myPieChart3 = new Chart(ctxP, {
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