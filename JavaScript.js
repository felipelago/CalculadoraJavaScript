class Calculadora {

    constructor() {
    }

    insert(num) {
        let numero = document.getElementById('resultado').innerHTML
        document.getElementById('resultado').innerHTML = numero + num;
    }
    clean() {
        document.getElementById('resultado').innerHTML = "";
    }
    back() {
        let backspace = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = backspace.substring(0, backspace.length - 1);
    }
    calcular() {
        let resultado = document.getElementById('resultado').innerHTML;
        if (resultado) {
            document.getElementById('resultado').innerHTML = eval(resultado);
        }
        else {
            document.getElementById('resultado').innerHTML = "Nada para calcular"
        }
    }
}
let calculadora = new Calculadora();