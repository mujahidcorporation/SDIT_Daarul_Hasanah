function bukaWeb(url){

  document.getElementById("menu").style.display = "none";

  document.getElementById("viewer").style.display = "block";

  document.getElementById("frame").src = url;
}

function kembaliMenu(){

  document.getElementById("menu").style.display = "flex";

  document.getElementById("viewer").style.display = "none";

  document.getElementById("frame").src = "";
}