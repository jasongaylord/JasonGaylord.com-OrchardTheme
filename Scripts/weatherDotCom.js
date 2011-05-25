$('#weatherBlock').mouseenter(function () {
    $('#weatherSpot').fadeIn('slow', function () {
        // Nothing happens when animation completes
    });
}).mouseleave(function () {
    $('#weatherSpot').fadeOut('slow', function () {
        // Nothing happens when animation completes
    });
});

$('#weatherSpot').mouseenter(function () {
    $('#weatherDetails').fadeIn('slow', function () {
        // Nothing happens when animation completes
    });
}).mouseleave(function () {
    $('#weatherDetails').fadeOut('slow', function () {
        // Nothing happens when animation completes
    });
});

$(document).ready(function () {
    /* Randomize Divs */
    var ranHeight = Math.ceil(Math.random() * 115) + 5; /* Always 85 less than height */
    var ranIndent = Math.ceil(Math.random() * 120) + 5; /* Always 180 less than height */

    /* Get the Divs */
    var spot = $('#weatherSpot');
    var details = $('#weatherDetails');

    /* Add the new positions */
    spot.css("top", ranHeight + "px");
    details.css("top", ranHeight + "px");
    spot.css("right", ranIndent + 155 + "px");
    details.css("right", ranIndent + "px");
});