var desktopBtn = $("#desktop");
var mobileBtn = $("#mobile");
var body = $('body');

desktopBtn.on('click', function() {
  body.addClass('large-screen');
  togglePrimaryButtonStyle($(this));
})

mobileBtn.on('click', function() {
  body.removeClass('large-screen');
  togglePrimaryButtonStyle($(this));
})

$(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() <= 1024) {
            // if larger or equal
          body.removeClass('large-screen');
  togglePrimaryButtonStyle($(this));
        } else {
            // if smaller
           body.addClass('large-screen');
  togglePrimaryButtonStyle($(this));
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
});

function togglePrimaryButtonStyle(el) {
  var sibling = el.parent('.btn-group').siblings('.btn-group').find('.btn');
  el.addClass('btn-primary');
  sibling.removeClass('btn-primary').addClass('btn-default');
}