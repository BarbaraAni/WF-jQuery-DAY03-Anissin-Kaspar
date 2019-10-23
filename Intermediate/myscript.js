let shit = document.getElementsByTagName("span")
for (i = 1; i < shit.length; i = i + 4) {
    if (shit[i].innerText == "PC") {
        $(shit[i].parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild).css("background-color", "red")
    } else if (shit[i].innerText == "Mobilephone") {
        $(shit[i].parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild).css("background-color", "green")
    } else {
        $(shit[i].parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild).css("background-color", "blue")
    }
}

let filter = document.getElementsByTagName("span")

var val=""
document.getElementById("opt1").onclick = function(){
	val = $("#opt1 :selected").text()
	select()
}

function select() {
    for (i = 1; i < filter.length; i = i + 4) {
        if (filter[i].innerText == val) {
        	console.log(val)
            $(filter[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement).show()
        } else if (val == "all"){
        	$(filter[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement).show()
        }	else {
        	$(filter[i].parentElement.parentElement.parentElement.parentElement.parentElement.parentElement).hide()
        } 
    }
}