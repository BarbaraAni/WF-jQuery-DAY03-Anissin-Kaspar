var fly = true

function setfalse() {
    fly = false
}


function showCoords(event) {
    var x = event.pageX;
    var y = event.pageY;
    console.log(x + " " + y)
    if (fly == true) {
        $("#moveme").animate({ "top": y - 256 / 2 + "px", "left": x - 256 / 2 + "px" }, 'slow', 'linear')
    } else {
        $("#moveme").animate({ "bottom": 0, "top": 500 + "px" }, 'slow', 'linear').fadeOut(500).fadeIn(500)
    }
}