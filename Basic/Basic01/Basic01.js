//After refreshing the page it appears slowly, stays in the same state for five seconds and than slowly disappears.

window.onload = $("#animate").hide()

$("#animate").show("slow")
$("#animate").delay(5000)
$("#animate").hide("slow")