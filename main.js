var enlaces = ["https://www.mediafire.com/download/2g3khsd90b6jfiu", 
               "https://www.mediafire.com/download/fzmqnuvi6s6nd3k", 
               "https://www.mediafire.com/download/4zx3dxy2sx7lz36", 
               "https://www.mediafire.com/download/xo2yly11cifo23x", 
               "https://www.mediafire.com/download/20iax82qggm9pjz", 
               "https://www.mediafire.com/download/o4ujuo5qwu1vycm", 
               "https://www.mediafire.com/download/voxnkl1f8r6wcuz", 
               "https://www.mediafire.com/download/oktf2jzmd170btx", 
               "https://www.mediafire.com/download/964qqazdmobgpgm", 
               "https://www.mediafire.com/download/b3mqsp17ic6xktu", 
               "https://www.mediafire.com/download/hm61ltpna1v0pli", 
               "https://www.mediafire.com/download/vvwrcr6q8ucqqr5", 
               "https://www.mediafire.com/download/ebnpadimr0ovns7", 
               "https://www.mediafire.com/download/1e5mbytavbinj0b", 
               "https://www.mediafire.com/download/e0rbvz9kfgovugo", 
               "https://www.mediafire.com/download/l0wqb97rh2ztonf", 
               "https://www.mediafire.com/download/79spchlkd6qhz7z", 
               "https://www.mediafire.com/download/9xsjz0bravbl5yu"];
               
               
function descargar(p) {
  window.open(enlaces[p-1], "_blank");
}





//Fecha y hora
var fecha = document.querySelector(".fecha");
var hora = document.querySelector(".hora");

click();
setInterval(click, 1000);
function click() {
  var date = new Date();
  
  var output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
  
  var a = "AM";
  var h = 0;
  if (date.getHours()<12) {
    a="AM";
    h = date.getHours();
  }
  else {
    a="PM";
    for (var i=12; i<date.getHours(); i++) {
      h+=1;
    }
    if (date.getHours()==12) {
      h=date.getHours();
    }
  }
  
  var horaa = h + ':' + date.getMinutes() + ':' + date.getSeconds() + " "+a;
  
  fecha.innerHTML = output;
  hora.innerHTML = horaa;
}
