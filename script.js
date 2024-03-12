function cambiarMensaje() {
    var mensajes = [
        "Eres la luz que ilumina mi vida.",
        "Amo el brillo de tus ojos y el profundo rizo de tu cabello (^^).",
        "Dentro del mar de incertidumbre, lo unico claro es lo que sient por ti :3",
        "Te amo, no importa el cuando, el como ni el donde."
    ];

    var mensajeActual = document.getElementById('mensaje').innerHTML;
    var nuevoMensaje = mensajes[Math.floor(Math.random() * mensajes.length)];

    while (nuevoMensaje === mensajeActual) {
        nuevoMensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    }

    document.getElementById('mensaje').innerHTML = nuevoMensaje;
}
