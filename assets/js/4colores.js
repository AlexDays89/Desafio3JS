const divs = document.querySelectorAll("div");

function pintar(cuadro, color) {
    cuadro.style.backgroundColor = color;
}

divs.forEach(function(div) {
    div.addEventListener("click", function() {
        pintar(div, 'black');
    });
});

