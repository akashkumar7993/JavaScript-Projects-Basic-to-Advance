var main = document.querySelector("#main")
var cusu = document.querySelector(".cursor")

main.addEventListener("mousemove", function(dets){
    cusu.style.left = dets.x+"px"
    cusu.style.top = dets.y+"px"
    console.log();
})