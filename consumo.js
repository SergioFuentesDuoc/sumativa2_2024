$(document).ready(function(){
    // Realizar solicitud GET a la API de Mindicador
    $.getJSON('https://mindicador.cl/api', function(data) {
        // Obtener el valor de la UF desde la respuesta de la API
        var ufValue = data.uf.valor;

        // Mostrar el valor de la UF en el HTML
        $("#uf-value").html('<p>El valor actual de la UF es $' + ufValue + '</p>');
    }).fail(function() {
        // Manejar errores en la solicitud
        $("#uf-value").html('<p>Error al obtener el valor de la UF.</p>');
    });
});