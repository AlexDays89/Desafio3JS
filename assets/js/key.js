const asd = document.getElementById("key");
const main = document.querySelector("main");

const createdDivs = {
    q: false,
    w: false,
    e: false
};

function pintar(cuadro, color) {
    cuadro.style.backgroundColor = color;
};

document.addEventListener('keydown', function (event) {
    let color;

    if (event.key === 'a') {
    color = 'pink';
    } else if (event.key === 's') {
    color = 'orange';
    } else if (event.key === 'd') {
    color = 'skyblue';
    } 
    if (color && (event.key === 'a' || event.key === 's' || event.key === 'd')) {
        pintar(asd, color);
    }
    else if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
        let qwe = document.getElementById("key2")
            if (!qwe) {
                const newDiv = document.createElement("div");
                newDiv.id = "key2";
                main.appendChild(newDiv);
                qwe = newDiv;
            }
            if (event.key === 'q') {
            color = 'purple';
            } else if (event.key === 'w') {
            color = 'gray';
            } else if (event.key === 'e') {
            color = 'brown';
            }
            pintar(qwe, color);
    }
    });

   