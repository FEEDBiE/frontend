$(document).ready(function() {
    $.get('http://hackathon-dev.elasticbeanstalk.com/lessons/api/lessons/1/')
    .done(function(data) {
           var datas = [
               ['man', true, false, false],
               ['to', true, false, false],
               ['oo', true, false, false],
               ['ma', true, false, false],
               ['shoma', true, false, false]
           ];
            
            var content = '<table class="table table-striped">';
                content += '<thead><tr>';
                content += '<th>Student</th>';
                content += '<th>Q1</th>';
                content += '<th>Q2</th>';
                content += '<th>Q3</th>';
                content += '</tr></thead>';
                content += '<tbody>';
            
            datas.forEach(function(data) {
                content += results(data[0], data[1], data[2], data[3]);
            });
            content += '</tbody></table>';
            
            console.log(content);
            $('#results').html(content);

        }).fail(function(err) {
        console.log("OoopSS!!!, An error happened:", err);

    });
    
    var results = function(student, a1, a2, a3) {
        var content = '<tr>';
            content += '<td>' + student + '</td>';
            content += '<td>' + (a1 === true ? trueCircle() : falseCircle()) + '</td>';
            content += '<td>' + (a2 === true ? trueCircle() : falseCircle()) + '</td>';
            content += '<td>' + (a3 === true ? trueCircle() : falseCircle()) + '</td>';
            content += '</tr>';
        return content;
    }
});


var trueCircle = function() {
    return '<div class="green"></div>';  
};

var falseCircle = function() {
    return '<div class="yellow"></div>';
};

