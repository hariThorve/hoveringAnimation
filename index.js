var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")

main.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})

document.querySelector("#overlay").addEventListener("mousemove", function(dets){
    document.querySelector("#elem1 img").style.scale = 1
    document.querySelector("#elem1 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#elem1 img").style.left = (dets.x-270) + "px"
    document.querySelector("#elem1 img").style.top = (dets.y-250) + "px"

})
document.querySelector("#overlay").addEventListener("mouseleave", function(dets){
    document.querySelector("#elem1 img").style.scale = 0
    document.querySelector("#elem1 img").style.opacity = 0
    cursor.style.opacity = 1
})
document.querySelector("#overlay2").addEventListener("mousemove", function(dets){
    document.querySelector("#elem2 img").style.scale = 1
    document.querySelector("#elem2 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#elem2 img").style.left = (dets.x-600) + "px"
    document.querySelector("#elem2 img").style.top = (dets.y-250) + "px"

})
document.querySelector("#overlay2").addEventListener("mouseleave", function(dets){
    document.querySelector("#elem2 img").style.scale = 0
    document.querySelector("#elem2 img").style.opacity = 0
    cursor.style.opacity = 1
})
document.querySelector("#overlay3").addEventListener("mousemove", function(dets){
    document.querySelector("#elem3 img").style.scale = 1
    document.querySelector("#elem3 img").style.opacity = 1
    cursor.style.opacity = 0
    document.querySelector("#elem3 img").style.left = (dets.x-950) + "px"
    document.querySelector("#elem3 img").style.top = (dets.y-250) + "px"
})
document.querySelector("#overlay3").addEventListener("mouseleave", function(dets){
    document.querySelector("#elem3 img").style.scale = 0
    document.querySelector("#elem3 img").style.opacity = 0
    cursor.style.opacity = 1
})