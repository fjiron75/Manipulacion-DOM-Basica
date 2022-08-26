const h1 = document.querySelector("h1");
const p = document.querySelector("p");
//const clase = document.querySelector(".clase");
const clase = document.getElementsByClassName("clase");
//const id = document.querySelector("#pid");
const id = document.getElementById("pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({h1, p, clase, id, input});

h1.innerHTML = "Fabian";
console.log(h1.getAttribute("elemento"));
//h1.setAttribute("class", "rojo");
h1.classList.add("rojo");
h1.classList.remove("azul")

let img = document.createElement("img");
img.setAttribute("src", 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
id.appendChild(img);

let form = document.querySelector("#submit")
let input1 = document.querySelector("#Calculo1");
let input2 = document.querySelector("#Calculo2");
let button = document.querySelector("#Calcular")

button.addEventListener("click", SumarValores);

function SumarValores(event) {
    //event.preventDefault();
    console.log(input1.value + input2.value);
    document.getElementById("result").innerHTML = Number(input1.value) + Number(input2.value);
}
