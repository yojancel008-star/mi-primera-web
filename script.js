function contactar() {
  window.open("https://wa.me/18499187195?text=Hola,%20estoy%20interesado%20en%20el%20Bmw%20M340i%202024", "_blank");
}

const bmw = document.querySelectorAll(".bmw");
const honda = document.querySelectorAll(".honda");

function mostrarBMW() {

  bmw.forEach(card => {
    card.style.display = "block";
  });

  honda.forEach(card => {
    card.style.display = "none";
  });
}

function mostrarHonda() {

  honda.forEach(card => {
    card.style.display = "block";
  });

  bmw.forEach(card => {
    card.style.display = "none";
  });
}

function mostrarTodos() {

  honda.forEach(card => {
    card.style.display = "block";
  });

  bmw.forEach(card => {
    card.style.display = "block";
  });
}

function modoOscuro() {
  document.body.classList.toggle("oscuro");
}







const bmw = document.querySelectorAll(".bmw");
const honda = document.querySelectorAll(".honda");


function mostrarTodos() {
  bmw.forEach(carro => carro.style.display = "block");
  honda.forEach(carro => carro.style.display = "block");
}

function mostrarBMW() {
  bmw.forEach(carro => carro.style.display = "block");
  honda.forEach(carro => carro.style.display = "none");
}

function mostrarHonda() {
  honda.forEach(carro => carro.style.display = "block");
  bmw.forEach(carro => carro.style.display = "none");
}

function mostrarMercedes() {
  bmw.forEach(carro => carro.style.display = "none");
  honda.forEach(carro => carro.style.display = "none");
}


function abrirModal(src) {

  document.getElementById("modal").style.display = "flex";

  document.getElementById("imagenGrande").src = src;
}

function cerrarModal() {

  document.getElementById("modal").style.display = "none";
}