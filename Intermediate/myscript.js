let shit = document.getElementsByTagName("span")
for (i = 1; i < shit.length; i = i + 4) {
    if (shit[i].innerText == "PC") {
        $(shit[i].parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild).css("background-color", "red")
    }
    else if (shit[i].innerText == "Mobilephone") {
        $(shit[i].parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild).css("background-color", "green")
    }
    else {
        $(shit[i].parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild).css("background-color", "blue")
    }
}