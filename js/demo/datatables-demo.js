$(document).ready(function () {

  /////////////table///////////

    $('#product-table1').DataTable({
        lengthMenu: [
            [5, 10, 20, -1],
            [5, 10, 20, 'All'],
        ],
    });
    producttable1_init();


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
    NPItable1_init();

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
    NPItable2_init();


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
    NPItable3_init();


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
    NPItable4_init();


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
    NPItable5_init();

});


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


//////////////////////redraw///////////////////////////////////

  $('#NPI-redraw1').on('click', function(){
   NPItable1_init();
} );

  $('#NPI-redraw2').on('click', function(){
    NPItable2_init();
} );

  $('#NPI-redraw3').on('click', function(){
   NPItable3_init();
} );

  $('#NPI-redraw4').on('click', function(){
   NPItable4_init();
} );

  $('#NPI-redraw5').on('click', function(){
   NPItable5_init();
} );


/////////////////////chart init function///////////////////////////////

var product_pie1_build = 0
var NPI_pie1_build = 0
var NPI_stackbar1_build = 0
var NPI_pie3_build = 0
var NPI_pie4_build = 0
var NPI_stacklinebar1_build = 0
var NPI_pie5_build = 0
var NPI_stacklinebar2_build = 0



function producttable1_init(){

    var table_init = $('#product-table1').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("product-table1");
    var tableLen = table.rows.length;
    var data = {col1: [], col7: [] };

  for (var i = 1; i < tableLen; i++) {

    var coltext1 = table.rows[i].cells[1].innerText;
    var coltext7 = Number(table.rows[i].cells[7].innerText);

    if (data.col1.indexOf(coltext1) === -1) {
    data.col1.push(coltext1);
    data.col7.push(coltext7);
    }
    else{
    var coltext7_old = Number(data.col7[data.col1.indexOf(coltext1)])
    data.col7[data.col1.indexOf(coltext1)] = coltext7_old+ Number(coltext7)
    }
  }

    table_init.page.len(5).draw();


//product-pie1
product_pie1_build=1
var ctx = document.getElementById( "product-pie1" );
 product_pie1 = new Chart( ctx, {
    type: 'pie',
      data: {
      labels: data.col1,
      datasets: [ {
        data: data.col7,
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

function NPItable1_init(){

    var table_init = $('#NPI-table1').DataTable();
    table_init.page.len(-1).draw();

    var table = document.getElementById("NPI-table1");
    var tableLen = table.rows.length;
    var data = {col0: [], col1: [], col2: [] ,D: [], FF: [], FP: [] ,S: [] };

for (var i = 1; i < tableLen; i++) {

    var coltext0 = table.rows[i].cells[0].innerText;
    var coltext1 = table.rows[i].cells[1].innerText;
    var coltext2 = Number(table.rows[i].cells[2].innerText);


  if (data.col1.indexOf(coltext1) === -1) {
  
  data.col1.push(coltext1);
  data.col2.push(coltext2);
}
else{

var coltext2_old = Number(data.col2[data.col1.indexOf(coltext1)])
data.col2[data.col1.indexOf(coltext1)] = coltext2_old+ Number(coltext2)

}


 if (data.col0.indexOf(coltext0) === -1 && coltext1=== "Design") {
  data.col0.push(coltext0);
  data.D.push(coltext2);
  data.FF.push(0);
  data.FP.push(0);
  data.S.push(0);

}

  else if (data.col0.indexOf(coltext0) === -1 && coltext1=== "Factory-Fixture") {
  data.col0.push(coltext0);
  data.D.push(0);
  data.FF.push(coltext2);
  data.FP.push(0);
  data.S.push(0);

}

  else if (data.col0.indexOf(coltext0) === -1 && coltext1=== "Factory-Process") {
  data.col0.push(coltext0);
  data.D.push(0);
  data.FF.push(0);
  data.FP.push(coltext2);
  data.S.push(0);

}

  else if (data.col0.indexOf(coltext0) === -1 && coltext1=== "Supplier") {
  data.col0.push(coltext0);
  data.D.push(0);
  data.FF.push(0);
  data.FP.push(0);
  data.S.push(coltext2);

}

 else if (data.col0.indexOf(coltext0) !== -1 && coltext1=== "Design") {
var coltext2_D_old = Number(data.D[data.col0.indexOf(coltext0)])
data.D[data.col0.indexOf(coltext0)] = coltext2_D_old+ Number(coltext2)

}

  else if (data.col0.indexOf(coltext0) !== -1 && coltext1=== "Factory-Fixture") {
var coltext2_FF_old = Number(data.FF[data.col0.indexOf(coltext0)])
data.FF[data.col0.indexOf(coltext0)] = coltext2_FF_old+ Number(coltext2)

}

  else if (data.col0.indexOf(coltext0) !== -1 && coltext1=== "Factory-Process") {
var coltext2_FP_old = Number(data.FP[data.col0.indexOf(coltext0)])
data.FP[data.col0.indexOf(coltext0)] = coltext2_FP_old+ Number(coltext2)

}

  else if (data.col0.indexOf(coltext0) !== -1 && coltext1=== "Supplier") {
var coltext2_S_old = Number(data.FP[data.col0.indexOf(coltext0)])
data.S[data.col0.indexOf(coltext0)] = coltext2_S_old+ Number(coltext2)

}


}

    table_init.page.len(5).draw();

        if(NPI_pie1_build===1){ 
            NPI_pie1.destroy();
    }

// NPI-pie1
NPI_pie1_build=1
var canvasP = document.getElementById("NPI-pie1")
var ctxP2 = canvasP.getContext('2d')
 NPI_pie1 = new Chart(ctxP2, {
  type: 'pie',
  data: {
    labels: data.col1,
    datasets: [{
      data: data.col2
    }]
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

        if(NPI_stackbar1_build===1){ 
    NPI_stackbar1.destroy();

    }


// NPI-stackbar1
NPI_stackbar1_build=1
var ctx = document.getElementById("NPI-stackbar1");
 NPI_stackbar1 = new Chart(ctx, {
    type: 'bar',
        data: {
        labels: data.col0,
    datasets:  [
    {
      label:"Design" ,
      data: data.D
    },
        {
      label:"Factory-Fixture" ,
      data: data.FF
    },
            {
      label:"Factory-Process" ,
      data: data.FP
    },
                {
      label:"Supplier" ,
      data: data.S
    },

    ]

    },
    options: {
       maintainAspectRatio: false,
        title: {
            display: true,
        },
    tooltips: {
      mode: 'label',
      callbacks: {
        footer: (tooltipItems, data) => {
          let total = tooltipItems.reduce((a, e) => a + parseInt(e.yLabel), 0);
          return 'Total: ' + total;
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


}


function NPItable2_init(){


}


function NPItable3_init(){

    var table_init = $('#NPI-table3').DataTable();
     table_init.page.len(-1).draw();

    var table = document.getElementById("NPI-table3");
    var tableLen = table.rows.length;
    var data = {col4: [], col5: []};

  for (var i = 1; i < tableLen; i++) {

    var coltext4 = table.rows[i].cells[4].innerText;
    var coltext5 = Number(table.rows[i].cells[5].innerText);

  if (data.col4.indexOf(coltext4) === -1) {
  data.col4.push(coltext4);
  data.col5.push(coltext5);
}
else{

var coltext5_old = Number(data.col5[data.col4.indexOf(coltext4)])
data.col5[data.col4.indexOf(coltext4)] = coltext5_old+ Number(coltext5)

}

}

    table_init.page.len(5).draw();

    if(NPI_pie3_build===1){ 
    NPI_pie3.destroy();
    }


NPI_pie3_build=1
var canvasP = document.getElementById("NPI-pie3")
var ctxP = canvasP.getContext('2d')
 NPI_pie3 = new Chart(ctxP, {
  type: 'pie',
  data: {
    labels: data.col4,
    datasets: [{
      data: data.col5
    }]
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



function NPItable4_init(){

    var table_init = $('#NPI-table4').DataTable();
     table_init.page.len(-1).draw();

    var table = document.getElementById("NPI-table4");
    var tableLen = table.rows.length;
    var data = {col0: [], col1: [], col3: [],col11: [], col33: [] };

for (var i = 1; i < tableLen; i++) {

    var coltext0 = table.rows[i].cells[0].innerText;
    var coltext1 = table.rows[i].cells[1].innerText;
    var coltext3 = Number(table.rows[i].cells[3].innerText);


//pie
  if (data.col11.indexOf(coltext1) === -1) {
  data.col11.push(coltext1);
  data.col33.push(coltext3);
}
else{


var coltext3_old = Number(data.col33[data.col11.indexOf(coltext1)])
data.col3[data.col11.indexOf(coltext0)] = coltext3_old+ Number(coltext3)

}

//bar
  if (data.col0.indexOf(coltext0) === -1) {
  data.col0.push(coltext0);
  data.col1.push(1);
  data.col3.push(coltext3);
}
else{

var coltext1_old = Number(data.col1[data.col0.indexOf(coltext0)])
data.col1[data.col0.indexOf(coltext0)] = coltext1_old+ 1

var coltext3_old = Number(data.col3[data.col0.indexOf(coltext0)])
data.col3[data.col0.indexOf(coltext0)] = coltext3_old+ Number(coltext3)

}



}

    table_init.page.len(5).draw();


        if(NPI_pie4_build===1){ 
          NPI_pie4.destroy();
    }


NPI_pie4_build=1
var canvasP = document.getElementById("NPI-pie4")
var ctxP = canvasP.getContext('2d')
 NPI_pie4 = new Chart(ctxP, {
  type: 'pie',
  data: {
    labels: data.col11,
    datasets: [{
      data: data.col33
    }]
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


    if(NPI_stacklinebar1_build === 1){ //如果有建立過了
    NPI_stacklinebar1.destroy();
    }


    //NPI-stacklinebar1
    NPI_stacklinebar1_build=1
var ctx1 = document.getElementById("NPI-stacklinebar1");
 NPI_stacklinebar1 = new Chart(ctx1, {
    type: 'bar',
   data: {
      labels: data.col0,
    datasets: [
          {
        label: 'Issue Qty',
        yAxisID: "y-axis-2",
        data: data.col3,
        type: 'line',
        fill: false
      },
      {
        label: 'Product name',
        yAxisID: "y-axis-1",
        data: data.col1
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


function NPItable5_init(){


    var table_init = $('#NPI-table5').DataTable();
     table_init.page.len(-1).draw();

    var table = document.getElementById("NPI-table5");
    var tableLen = table.rows.length;
    var data = {col0: [], col1: [], col3: [], col4: [],col11: [], col44: [] };

for (var i = 1; i < tableLen; i++) {

    var coltext0 = table.rows[i].cells[0].innerText;
    var coltext1 = table.rows[i].cells[1].innerText;
    var coltext3 = Number(table.rows[i].cells[3].innerText);
    var coltext4 = Number(table.rows[i].cells[4].innerText);

//pie
  if (data.col11.indexOf(coltext1) === -1) {
  data.col11.push(coltext1);
  data.col44.push(coltext4);
}
else{


var coltext4_old = Number(data.col4[data.col11.indexOf(coltext1)])
data.col4[data.col11.indexOf(coltext0)] = coltext4_old+ Number(coltext4)

}


//bar
  if (data.col0.indexOf(coltext0) === -1) {
  data.col0.push(coltext0);
  data.col1.push(1);
  data.col3.push(coltext3);
  data.col4.push(coltext4);
}
else{

var coltext1_old = Number(data.col1[data.col0.indexOf(coltext0)])
data.col1[data.col0.indexOf(coltext0)] = coltext1_old+ 1

var coltext3_old = Number(data.col3[data.col0.indexOf(coltext0)])
data.col3[data.col0.indexOf(coltext0)] = coltext3_old+ Number(coltext3)

var coltext4_old = Number(data.col4[data.col0.indexOf(coltext0)])
data.col4[data.col0.indexOf(coltext0)] = coltext4_old+ Number(coltext4)

}

}

    table_init.page.len(5).draw();


        if(NPI_pie5_build===1){ 
          NPI_pie5.destroy();
    }


NPI_pie5_build=1
var canvasP = document.getElementById("NPI-pie5")
var ctxP = canvasP.getContext('2d')
 NPI_pie5 = new Chart(ctxP, {
  type: 'pie',
  data: {
    labels: data.col11,
    datasets: [{
      data: data.col44
    }]
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





    if(NPI_stacklinebar2_build === 1){ //如果有建立過了
    NPI_stacklinebar2.destroy();
    }


//NPI-barline2
NPI_stacklinebar2_build=1
var ctx = document.getElementById("NPI-stacklinebar2");
 NPI_stacklinebar2 = new Chart(ctx, {
    type: 'bar',
   data: {
      labels: data.col0,
    datasets: [

          {
        label: 'Issue Qty',
        yAxisID: "y-axis-2",
        data: data.col3,
        type: 'line',
        fill: false
      },
            {
        label: 'REIssue Qty',
        yAxisID: "y-axis-2",
        data: data.col4,
        type: 'line',
        fill: false
      },
      {
        label: 'Product name',
        yAxisID: "y-axis-1",
        data: data.col1
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





