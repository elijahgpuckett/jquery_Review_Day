$('body*').each(function() {
    var randomTop = (Math.random() * 500 + 'px');
    var randomLeft = (Math.random() * 500 + 'px');
    $(this).css({
        "postion": "absolute",
        "top": randomTop,
        "left": randomLeft,
    });
    console.log(randomTop);
    console.log(randomLeft);
})