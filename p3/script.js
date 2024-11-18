var mdiv = document.querySelector(".mdiv")
var cursor = document.querySelector(".cursor")

mdiv.addEventListener("mousemove",function(dets){
      cursor.style.left = dets.x + "px"
      cursor.style.top = dets.y+"px"
})