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
document.getElementById("anio").textContent =
new Date().getFullYear();

// ======================================
// FORMULARIO PUBLICAR PROPIEDAD - ARIUS
// ======================================

const formularioPropietario = document.getElementById("formPropietario");

if (formularioPropietario) {

  formularioPropietario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const operacion = document.getElementById("operacion").value;
    const tipo = document.getElementById("tipo").value;
    const ubicacion = document.getElementById("ubicacion").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    const consulta = `
🏠 *NUEVA PROPIEDAD - ARIUS INMOBILIARIA*

👤 Nombre: ${nombre}
📞 Teléfono: ${telefono}
📋 Operación: ${operacion}
🏡 Tipo: ${tipo}
📍 Ubicación: ${ubicacion || "No especificada"}

📝 Información adicional:
${mensaje || "Sin información adicional"}

Consulta enviada desde agenciaarius.com.ar
    `;

    const numeroWhatsApp = "543794886390";

    const url = "https://wa.me/" + numeroWhatsApp +
                "?text=" + encodeURIComponent(consulta);

    window.open(url, "_blank");

  });

}