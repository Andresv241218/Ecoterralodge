/* =========================================
   WHATSAPP ECO TERRA LODGE
========================================= */

const whatsappNumber = "51968354919";


const mensajesWhatsApp = {

    contacto:
        "Hola, Eco Terra Lodge. 👋 " +
        "Me gustaría conocer más sobre su hospedaje, disponibilidad y servicios. " +
        "¿Podrían brindarme información, por favor?",

    reserva:
        "Hola, Eco Terra Lodge. 👋 " +
        "Me gustaría consultar disponibilidad para hospedarme. " +
        "¿Podrían ayudarme con información sobre las habitaciones y reservas?",

    hospedaje:
        "Hola, Eco Terra Lodge. 👋 " +
        "Estoy interesado en conocer sus habitaciones y quisiera consultar " +
        "disponibilidad y precios. ¿Me podrían ayudar?",

    actividad:
        "Hola, Eco Terra Lodge. 👋 " +
        "Me gustaría conocer más sobre las actividades de aventura " +
        "como Biking, Rafting y Zipline. ¿Podrían brindarme información?",

    cocalmayo:
        "Hola, Eco Terra Lodge. 👋 " +
        "Me gustaría conocer más sobre los Baños Termales de Cocalmayo " +
        "y las experiencias que puedo realizar durante mi estadía. " +
        "¿Podrían brindarme información?"
};

/* =========================================
   CONFIGURAR BOTONES DE WHATSAPP
========================================= */

const botonesWhatsApp = document.querySelectorAll(".whatsapp-link");


botonesWhatsApp.forEach(boton => {

    const tipoMensaje = boton.dataset.message;

    const mensaje = mensajesWhatsApp[tipoMensaje];

    if (!mensaje) {
        return;
    }

    const mensajeCodificado = encodeURIComponent(mensaje);

    boton.href =
        `https://wa.me/${whatsappNumber}?text=${mensajeCodificado}`;

});