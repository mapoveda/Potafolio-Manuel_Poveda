function contActive(){
    var selector = document.getElementById("cont-color");
    var selector2 = document.getElementById("btn-elemento");
    selector.classList.toggle("active");
    selector2.classList.toggle("active");
}

function bgBlue(){
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("blue");
}

function bgGris(){
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("gris");
}

function bgVerde(){
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("verde");
}

function bgVino(){
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("vino");
}

function bgBeich(){
    var selector = document.getElementById("body");
    selector.className = "";
    selector.classList.toggle("beich");
}






AOS.init();

