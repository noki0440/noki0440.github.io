$(document).ready(function(){
$('.js--section-learn').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '100px;'
    });
    
    