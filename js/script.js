console.log("Portal Arius cargado correctamente");

function scrollToProperties(){

document
.getElementById("propiedades")
.scrollIntoView({
behavior:"smooth"
});

}

function filtrarPropiedades(){

const operacion =
document.getElementById("operacion").value;

const tipo =
document.getElementById("tipo").value;

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

const cardOperacion =
card.dataset.operacion;

const cardTipo =
card.dataset.tipo;

const coincideOperacion =
operacion === "todos" ||
operacion === cardOperacion;

const coincideTipo =
tipo === "todos" ||
tipo === cardTipo;

if(coincideOperacion && coincideTipo){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

}