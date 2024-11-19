let contador = 0;

const respuestasCorrectas = {
    q1: "d",
    q2: "a",
    q3: "a",
    q4: "d",
    q5: "b",
    q6: "d",
    q7: "c",
    q8: "c",
    q9: "d",
    q10: "a",
    q11: "c",
    q12: "c",
    q13: "d",
    q14: "a",
    q15: "a",
    q16: "a",
    q17: "b",
    q18: "b",
    q19: "b",
    q20: "a",
    q21: "d",
    q22: "c",
    q23: "a",
    q24: "c",
    q25: "b",
    q26: "d",
    q27: "b",
    q28: "c",
    q29: "c",
    q30: "d",
    q31: "a",
    q32: "b",
    q33: "b",
    q34: "c",
    q35: "a",
    q36: "b",
    q37: "a"
};

function calificar() {
    // Recorriendo las preguntas y comparando las respuestas
    for (let i = 1; i <= 37; i++) {
        const pregunta = document.getElementsByName("q" + i);
        let respuestaSeleccionada = null;
        
        // Verificando cuál de los radio buttons está seleccionado
        for (let j = 0; j < pregunta.length; j++) {
            if (pregunta[j].checked) {
                respuestaSeleccionada = pregunta[j].value;
                break;
            }
        }

        // Si se seleccionó una respuesta, la comparamos
        if (respuestaSeleccionada) {
            console.log(respuestaSeleccionada + " === " + respuestasCorrectas["q" + i]);
            if (respuestaSeleccionada === respuestasCorrectas["q" + i]) {
                contador++;
                document.getElementById("resultado" + i).innerText = "¡Correcto!";
                document.getElementById("resultado" + i).style.color = "green";
            } else {
                document.getElementById("resultado" + i).innerText = "Incorrecto";
                document.getElementById("resultado" + i).style.color = "red";
            }
        }
    }

    // Mostrar el puntaje total
    alert("Tu puntuación es: " + contador + " de 37.");
}
