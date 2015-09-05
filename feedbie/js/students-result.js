$(document).ready(function() {

    $.get('feedbie/js/results.js').done(function(data) {
        console.log("data>>>", data);
    }).fail(function(err) {
        console.log("fail>>>", err);
    });
//    $.get('feedbie/js/results.js', function(data, status) {
//        console.log("hereee");
//        alert(status);
//        console.log("hereee", status);
//        var resultsObject = $.parseJSON(data);
//        console.log(">>>", resultsObject);
//        $('#results').text("Hello world!");
//    });
});
