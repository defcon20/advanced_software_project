$('#infoSubmit').click(function(){
    var budget = $('#budget');
    var concurrent_users = $('#concurrent_users');
    var errors = $('#errors');
    var isValidString = isValid(concurrent_users.val().toString());

    if(errors.val().length >1){
        $('#errors').html('');
        $('#errors').removeClass('alert alert-danger');
    }

    if(concurrent_users.val().length < 1){
        $('#errors').html('Please make sure all fields are entered.');
        $('#errors').addClass('alert alert-danger');
        return false;
    }

    if(!isValidString){
        $('#errors').html('Please make sure your input is correct.');
        $('#errors').addClass('alert alert-danger');
        return false;
    }

$.ajax({
    url: "http://localhost:8080/analyzer/analyzer?user="+concurrent_users.val().toString(), //"api/data/" + budget + '/' + concurrent_users,
    type: 'GET',
    dataType: 'json',
    context: document.body
}).done(function(result) {

    var suggestion = {
        provider: result.suggestion.best_provider,
        instance: result.suggestion.optimal_instance,
        performance: result.suggestion.throughput,
        cost_servers: result.suggestion.cost
    };

    var nodes = {
        AWS: {
            n3: result.AWS.Node_3.users_throughput,
            n6: result.AWS.Node_6.users_throughput,
            n9: result.AWS.Node_9.users_throughput
        },
        Google: {
            n3: result.Google.Node_3.users_throughput,
            n6: result.Google.Node_6.users_throughput,
            n9: result.Google.Node_9.users_throughput
        }
    };

    display_suggestion(suggestion);
    display_amazon(nodes);
    display_google(nodes);
    display_node_3_comparison(nodes);
    display_node_6_comparison(nodes);
    display_node_9_comparison(nodes);
})

});

function isValid(str){
//  return !/[return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
    return !/[a-zA-Z~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}

//function isNumeric(str){
//    return !/([A-Z])\w+/g.test(str);
//    console.log("executing isNumeric");
//}

function display_suggestion(suggestion){
    $('.suggestion .provider').html('');
    $('.suggestion .instance').html('');
    $('.suggestion .performance').html('');
    $('.suggestion .cost').html('');

    $('.suggestion .provider').append(suggestion.provider);
    $('.suggestion .instance').append(suggestion.instance);
    $('.suggestion .performance').append(suggestion.performance);
    $('.suggestion .cost').append(suggestion.cost_servers);
}

function display_amazon(nodes){
    $('.charts .amazon').highcharts({
        title: {
            text: 'Amazon Comparison', //logic for 1,3,5,7 nodes
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
                text: 'Performance (Operations/Second)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' Ops/Sec'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '3 Node',
            data: nodes.AWS.n3
        }, {
            name: '6 Node',
            data: nodes.AWS.n6
        },{
            name: '9 Node',
            data: nodes.AWS.n9
        }]
    });
};


function display_google(nodes){
    $('.charts .google').highcharts({
        title: {
            text: 'Google Comparison', //logic for 1,3,5,7 nodes
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
                text: 'Performance (Operations/Second)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' Ops/Sec'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '3 Node',
            data: nodes.Google.n3
        }, {
            name: '6 Node',
            data: nodes.Google.n6
        },{
            name: '9 Node',
            data: nodes.Google.n9
        }]
    });
};


function display_node_3_comparison(nodes){
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
                text: 'Performance (Operations/Second)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' Ops/Sec'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Amazon EC2',
            data: nodes.AWS.n3
        }, {
            name: 'Google Compute',
            data: nodes.Google.n3
        }]
    });
};

function display_node_6_comparison(nodes){
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
                text: 'Performance (Operations/Second)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' Ops/Sec'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Amazon EC2',
            data: nodes.AWS.n6
        }, {
            name: 'Google Compute',
            data: nodes.Google.n6
        }]
    });
};

function display_node_9_comparison(nodes){
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
                text: 'Performance (Operations/Second)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' Ops/Sec'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Amazon EC2',
            data: nodes.AWS.n9
        }, {
            name: 'Google Compute',
            data: nodes.Google.n9
        }]
    });
};
