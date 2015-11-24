$.ajax({
    url: "test.html",
    context: document.body
}).done(function() {
    $( this ).addClass( "done" );
});


$(function () {
    $('.charts .node_3').highcharts({
        title: {
            text: '3 Node Comparison', //logic for 1,3,5,7 nodes
            x: -20 //center
        },
        subtitle: {
            text: 'Benchmark Comparison',
            x: -20
        },
        xAxis: {
            title: {
                text: 'Concurrent Users'
            }
        },
        yAxis: {
            title: {
                text: 'Performance (Seconds)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' Seconds'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Amazon EC2',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Google Compute',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }]
    });
});

$(function () {
    $('.charts .node_6').highcharts({
        title: {
            text: '6 Node Comparison', //logic for 1,3,5,7 nodes
            x: -20 //center
        },
        subtitle: {
            text: 'Benchmark Comparison',
            x: -20
        },
        xAxis: {
            title: {
                text: 'Concurrent Users'
            }
        },
        yAxis: {
            title: {
                text: 'Performance (Seconds)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' Seconds'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Amazon EC2',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Google Compute',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }]
    });
});

$(function () {
    $('.charts .node_9').highcharts({
        title: {
            text: '9 Node Comparison', //logic for 1,3,5,7 nodes
            x: -20 //center
        },
        subtitle: {
            text: 'Benchmark Comparison',
            x: -20
        },
        xAxis: {
            title: {
                text: 'Concurrent Users'
            }
        },
        yAxis: {
            title: {
                text: 'Performance (Seconds)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' Seconds'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Amazon EC2',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Google Compute',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }]
    });
});