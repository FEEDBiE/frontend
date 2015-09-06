$(document).ready(updateContent);

function updateContent() {
    $.get('http://hackathon-dev.elasticbeanstalk.com/responses/api/response/?lesson_id=1')
        .done(function(data) {

            var content = '<table class="table table-striped">';
            content += '<thead><tr>';
            content += '<th>Student</th>';
            content += '<th>Q1</th>';
            content += '<th>Q2</th>';
            content += '<th>Q3</th>';
            content += '</tr></thead>';
            content += '<tbody>';

            data.forEach(function(student) {
                var achieved = [];
                student.responses.forEach(function(response) {
                    achieved.push(response.achieved)
                });
                content += results(student.student_name, achieved);
            });
            content += '</tbody></table>';

            $('#results').html(content);

        }).fail(function(err) {
            console.log("OoopSS!!!, An error happened:", err);

        }).complete(function() {
            setTimeout(updateContent, 2000);
        });

    var results = function(student, achieved) {
        var content = '<tr>';
        content += '<td>' + student + '</td>';
        content += '<td>' + (achieved[0] === true ? trueCircle() : falseCircle()) + '</td>';
        content += '<td>' + (achieved[1] === true ? trueCircle() : falseCircle()) + '</td>';
        content += '<td>' + (achieved[2] === true ? trueCircle() : falseCircle()) + '</td>';
        content += '</tr>';
        return content;
    }
}
var trueCircle = function() {
    return '<div class="green"></div>';  
};

var falseCircle = function() {
    return '<div class="yellow"></div>';
};

