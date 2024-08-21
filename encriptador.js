//Llaves del encriptador:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


const d = document;
const textArea = d.querySelector(".form-input");
const imagenPersona = d.querySelector(".resultado-img");
const resultadoTitulo = d.querySelector(".resultado-title");
const resultadoText = d.querySelector(".resultado-texto");
const botonEncriptar = d.querySelector(".form-btn");
const botonDesencriptar = d.querySelector(".form-btn--sec");
const botonCopiar = d.querySelector(".result-btn");
const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];


//Función para encriptar el mensaje 

function encriptarmensaje (mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++ ) {
        let letra = mensaje [i];
        let encriptada = letra;
        for (let j = 0; j <llaves.length; j++){
            if (letra === llaves[j][0]){
                encriptada = llaves[j][1]; //Para reemplazar la letra por el equivalente de la encriptada
                break; //Termina el bucle
            }
        }
        mensajeEncriptado += encriptada
    }  
    return mensajeEncriptado;
}


//Función para desencriptar el mensaje

function desencriptarMensaje (mensaje) {
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i< llaves.length; i++){
        let regexp = new RegExp(llaves[i][1], "g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regexp, llaves[i][0]);  // Para reemplazar el texto encriptado por el equivalente inicial
    }
    return mensajeDesencriptado; // Para devolver el mensaje desencriptado
}


//Función para el botón de encriptado

botonEncriptar.addEventListener("click", (e) =>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:";
});


//Función para el botón de desencriptado

botonDesencriptar.addEventListener("click", (e) =>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoText.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:";
});

//Función para el botón copiar

botonCopiar.addEventListener('click', () =>{
    let textoCopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=> {
        imagenPersona.style.display = "block";        
        resultadoTitulo.textContent = "El texto se copió";
        botonCopiar.classList.add("hidden");
        resultadoText.textContent = ""
    })
});
