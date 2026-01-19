function repetirPalabra() {
    var palabra = document.getElementById("palabra").value;
    var veces = document.getElementById("veces").value;
    var resultado1 = document.getElementById("resultado1");
    
    var texto = "";
    for (var i = 0; i < veces; i++) {
        texto = texto + palabra + " ";
    }
    
    resultado1.innerHTML = texto;
}

function aplicarColor() {
    var color = document.getElementById("color").value;
    var resultado2 = document.getElementById("resultado2");
    
    resultado2.style.color = color;
}

function calcular() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var resultado3 = document.getElementById("resultado3");
    
    var suma = numero1 + numero2;
    var resta = numero1 - numero2;
    var multiplicacion = numero1 * numero2;
    var division = numero1 / numero2;
    
    var texto = "Suma: " + suma + "<br>";
    texto = texto + "Resta: " + resta + "<br>";
    texto = texto + "Multiplicacion: " + multiplicacion + "<br>";
    texto = texto + "Division: " + division;
    
    resultado3.innerHTML = texto;
}

function invertir() {
    var texto = document.getElementById("texto").value;
    var resultado4 = document.getElementById("resultado4");
    
    var invertido = "";
    for (var i = texto.length - 1; i >= 0; i--) {
        invertido = invertido + texto[i];
    }
    
    resultado4.innerHTML = invertido;
}
