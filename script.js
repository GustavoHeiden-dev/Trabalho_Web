
let segundos = 0;
let intervalo = null;
let pausas = 0;

function atualizar() {
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let seg = segundos % 60;

    document.getElementById("visor").innerText =
        String(horas).padStart(2, "0") + ":" + String(minutos).padStart(2, "0") + ":" +
        String(seg).padStart(2, "0");
}

function iniciar() {
    if (intervalo === null) {
        intervalo = setInterval(function() {
            segundos++;
            atualizar();
        }, 1000);
    }
}

function parar(){
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    atualizar();
}

function pausar() {
            if (intervalo !== null) {
                clearInterval(intervalo);
                intervalo = null;

                pausas++;

            
            }
        }

 document.addEventListener("keydown", function(event) {
            if (event.key.toLowerCase() === "a") iniciar();
            if (event.key.toLowerCase() === "s") pausar();
            if (event.key.toLowerCase() === "d") parar();
        });
