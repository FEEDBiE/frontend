function getQuestions() {
    $.get('http://hackathon-dev.elasticbeanstalk.com/lessons/api/lessons/1/')
        .done(function(data) {
            return data;
        }).fail(function(err) {
            console.log("OoopSS!!!, An error happened:", err);
            return null;
        });
}
