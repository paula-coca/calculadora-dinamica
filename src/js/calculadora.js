let operacionElegida = "";

function calcular() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const result = document.getElementById('result');
    result.style.display = "block";
    
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        let resultado = 0;
        switch (operacionElegida) {
            case "sumar":
                resultado = num1 + num2;
                break;
            case "restar":
                resultado = num1 - num2;
                break;
            case "multiplicar":
                resultado = num1 * num2;
                break;
            case "dividir":
                resultado = num1 / num2;
                break;
            default:
                console.log("No hay opción seleccionada");
                result.textContent = "No hay opción seleccionada.";
                result.style.color = "red";
                return;
        }

        if (resultado < 0) {
            result.style.color = "red";
        } else {
            result.style.color = "green";
        }
        result.textContent = "Resultado = " + resultado;

    } else {
        console.log("No ha introducido dos números enteros.");
        result.textContent = "No ha introducido dos números enteros.";
        result.style.color = "red";
        return;
    }
}

function elegirOperacion(id) {
    const button = document.getElementById(id);

    /*const botones = document.getElementsByClassName("button"); // [+,-,*,/]

    for (let i = 0; i < botones.length; i++) {
        botones[i].style.backgroundColor = "lightgray";
    }

    button.style.backgroundColor = "gray";*/
    
    let activo = document.querySelector('.activo');

    if (activo && activo.id === id) {
        activo.classList.remove('activo');
        operacionElegida = ""; // Se deselecciona la operación
    } else {
        if (activo) {
            activo.classList.remove('activo');
        }
    }
    
    button.classList.add('activo');
    operacionElegida = id; // Guardar la operación seleccionada
}
