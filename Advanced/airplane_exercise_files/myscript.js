var fly = true
const sound = $("#audio")[0]


function setfalse() {
    fly = false
    sound.play()
    click()
    $("img[src='airplane.png']").attr("src", "crash.png")
}

function showCoords(event) {
    if (fly == true) {
        $("#moveme").animate({ "top": event.pageY - 256 / 2, "left": event.pageX - 256 / 2 }, 0)
        //$("#moveme").offset({ "top": event.pageY - 256 / 2, "left": event.pageX - 256 / 2 })
    }
}

function click() {
    $("#moveme").animate({ "bottom": 0, "top": 500 + "px" }, 'slow', 'linear').fadeOut(500).fadeIn(500);

}

let rockets = document.getElementsByClassName("rocket")
console.log(rockets)
window.onload = function shoot() {
    for (i = 0; i < 9; i++) {
        x = Math.floor(Math.random() * 1500)
        y = Math.floor(Math.random() * 1500)
        $(rockets[i]).css({ "position": "absolute", "left": x + "px" }).animate({ "top": 0, "left": y + "px" }, 1000)
    }
}

for (i = 9; i < 18; i++) {
    x = Math.floor(Math.random() * 500)
    y = Math.floor(Math.random() * 500)
    $(rockets[i]).css({ "position": "absolute", "left": x + "px" }).animate({ "top": 0, "left": y + "px" }, 1000)
}