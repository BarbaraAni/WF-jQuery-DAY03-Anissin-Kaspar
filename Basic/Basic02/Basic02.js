window.onload = shitshit

let add = document.querySelector("button")
add.addEventListener("click", newtodo)



function newtodo() {
    let text = document.querySelector("input").value
    let test = document.querySelector("ul")
    let newitem = document.createElement("li")
    newitem.innerText = text
    $(newitem).hide().fadeIn(1000).appendTo(test)
    shitshit()
}



function shitshit() {
    $(document).ready(function () {
        $('li').on('click', function () {
            $(this).animate({
                opacity: 0.0,
                paddingLeft: '+=80'
            }, 500, function () {
                $(this).remove();
            });
        });
    });
}