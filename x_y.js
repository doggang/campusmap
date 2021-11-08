function action_coords(event) {
    var x = event.offsetX; //offset(X,Y) : 현재 오브젝트 기준 위치
    var y = event.offsetY; 
   
    var coords = "offsetX: " + x + ", offsetY: " + y + "<br/>";
   document.getElementById("footer").innerHTML = coords;
}