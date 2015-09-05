$(document).ready(function() {

    $.get('http://hackathon-dev.elasticbeanstalk.com/lessons/api/lessons/1/?format=json')
    .done(function(data) {
            $('#lessonName').text(data.title);
            var content = '';
            data.criterias.forEach(function(criteria) {
                content += questions(criteria.title);
            });
            $('#questions').html(content);
            
    }).fail(function(err) {
        console.log("OoopSS!!!, An error happened:", err);

    });
    
    var questions = function(question, id) {
        var content = '';

        content += '<div class="form-group col-xs-12 floating-label-form-group controls">';
        content += '<span>' + question + '</span>';
        content += '<div class="achieved col-lg-12 text-center">';
        
        content += '<input id="designed1" type="radio" name="designed" value="Achieved">';
        content += '<label for="designed1">Achieved</label>';
        
        content += '<input id="designed2" type="radio" name="designed" value="Not Yet">';
        content += '<label for="designed2">Not Yet</label>';
        
        content += '</div>';
        content += '<p class="help-block text-danger"></p>';
        content += '</div>';

        return content;
    }
});


    
        
            
            
                
           
            
        

