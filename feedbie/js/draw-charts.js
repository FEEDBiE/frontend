google.load("visualization", "1", {packages: ["corechart"]});
google.setOnLoadCallback(drawAllCharts);

function drawAllCharts() {
    $.get('http://hackathon-dev.elasticbeanstalk.com/responses/api/response/?lesson_id=1')
        .done(function (data) {
            var q1Achieved = 0;
            var q2Achieved = 0;
            var q3Achieved = 0;

            data.forEach(function (row) {

                row.responses[0].achieved ? q1Achieved++ : q1Achieved;
                row.responses[1].achieved ? q2Achieved++ : q2Achieved;
                row.responses[2].achieved ? q3Achieved++ : q3Achieved;

            });

            drawChart1([q1Achieved, data.length - q1Achieved]);
            drawChart2([q2Achieved, data.length - q2Achieved]);
            drawChart3([q3Achieved, data.length - q3Achieved]);

        }).fail(function (err) {
            console.log("OoopSS!!!, An error happened:", err);
        }).complete(function() {
            setTimeout(drawAllCharts, 2000);
        });
}

function drawChart1(results) {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Students'],
        ['Achieved',     results[0]],
        ['Not Yet',     results[1]],
    ]);

    var options = {
        title: 'Q1: We have a design',
        is3D: true,
        legend: 'none',
        colors: ['#53AD79', '#f39c12'],
        animation:{
            duration: 1000,
            easing: 'out'
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_1'));
    chart.draw(data, options);
}
function drawChart2(results) {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Students'],
        ['Achieved',     results[0]],
        ['Not Yet',     results[1]],
    ]);

    var options = {
        title: 'Q2: We have scalable backend architecture utilising AWS infrastructure',
        is3D: true,
        legend: 'none',
        colors: ['#53AD79', '#f39c12']
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_2'));
    chart.draw(data, options);
}
function drawChart3(results) {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Students'],
        ['Achieved',     results[0]],
        ['Not Yet',     results[1]],
    ]);

    var options = {
        title: 'Q3: We are able to successfully demo our product to customers',
        is3D: true,
        legend: 'none',
        colors: ['#53AD79', '#f39c12']
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3'));
    chart.draw(data, options);
}
