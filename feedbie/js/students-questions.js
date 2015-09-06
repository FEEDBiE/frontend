$(document).ready(function() {

    $.get('http://hackathon-dev.elasticbeanstalk.com/lessons/api/lessons/1/')
    .done(function(data) {
            $('#lessonName').text(data.title);
            var content = '';
            data.criterias.forEach(function(criteria) {
                content += questions(criteria.title, criteria.id);
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
        
        content += '<input id="criteria1" type="radio" name="' + id +  '" value="Achieved">';
        content += '<label for="criteria1">Achieved</label>';
        
        content += '<input id="criteria2" type="radio" name="' + id +  '" value="Not Yet">';
        content += '<label for="criteria2">Not Yet</label>';
        
        content += '</div>';
        content += '<p class="help-block text-danger"></p>';
        content += '</div>';

        return content;
    }
});


    
        
            
            
                
           
            
        

