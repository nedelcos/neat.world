//$(".menu-item").pin({padding: {top: 10, bottom: 10}});

$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        console.log('Scroll up');
        $("#neat").css('-webkit-transform', 'translate(0, 0)');
        $("#office").css('-webkit-transform', 'translate(0, 0)');
        $("#work").css('-webkit-transform', 'translate(0, 0)');
//        $(".menu-item").addClass('menu-item');

    }
    else {
        console.log('Scroll down');
        $("#neat").css('-webkit-transform', 'translate(0, calc(-50% + 12px))');
        $("#office").css('-webkit-transform', 'translate(0, calc(-150% + 12px))');
        $("#work").css('-webkit-transform', 'translate(0, calc(-250% + 12px))');
//        $(".menu-item").removeClass('menu-item');

    }
});
