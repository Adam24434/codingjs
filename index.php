<!DOCTYPE html>
<html>
<head>
<title>cubaan untuk power js</title>
</head>
<body>

<h1 id="tajuk" onmouseover="change(that)" onmouseout="normal(that)">Cuba Hover</h1>
<button onclick="myFunction()" id="btn" onmouseover="change(this)" onmouseout="normal(this)">Cuba Try Test</button>
<br>
<img id="gambar" src="Screenshot (305).png" width="180" height="102" onmouseover="setNewImage()" onmouseout="setOldImage()">

<script>

    //funtion button
    function change(x) {
  x.style.background="yellow";
  x.style.color="";
  
}

function normal(x) {
  x.style.background="";
  x.style.color="";
}

//funtion gamabr
function setNewImage() {
    document.getElementById("gambar").src="gamba rudy.jpg";
  //document.getelementById("letak variable kau, img ke, apa ke").src="gamba yang kau nak dia tukar";  
  
}

function setOldImage() {
    document.getElementById("gambar").src="Screenshot (305).png";
 //document.getelementById("letak variable kau, img ke, apa ke").src="gamba yang kau nak dia tukar"; 
}

//funtion header
document.getElementById("tajuk").onmouseover = function() {mouseOver()};
document.getElementById("tajuk").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("tajuk").style.color = "blue";
}

function mouseOut() {
  document.getElementById("tajuk").style.color = "black";
}
</script>
</body>
</html>


