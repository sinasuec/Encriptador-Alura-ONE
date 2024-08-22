//Llaves del encriptador:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


const d = document; //Sirve para guardar la referencia al documento HTML en una variable de nombre "d", es como decir que es todo el contenido de la página
const textArea = d.querySelector(".form-input"); //Sirve para encontrar y guardar el area donde se escribe el mensaje o area de texto usando la clase .fom-input
const imagenPersona = d.querySelector(".resultado-img");
const resultadoTitulo = d.querySelector(".resultado-title");
const resultadoText = d.querySelector(".resultado-texto");
const botonEncriptar = d.querySelector(".form-btn");
const botonDesencriptar = d.querySelector(".form-btn--sec");
const botonCopiar = d.querySelector(".result-btn");
const llaves = [   //En esta se incluyen las reglas de encriptación 
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];


//Función para encriptar el mensaje 

function encriptarmensaje (mensaje) { //Se define una función "encriptarmensaje" que toma el mensaje y lo encripta
    let mensajeEncriptado = "";   // Crear la variable vacía "mensajeencriptado" para almacenar el mensaje que vamos a encriptar
    for (let i = 0; i < mensaje.length; i++ ) {  //Esto hace parte del bucle, en donde se va a recorrer cada letra del mensaje
        let letra = mensaje [i]; //Toma la letra que se va  a encriptar en el mensaje
        let encriptada = letra; // la variable "encriptada" inicia con el valor de la letra actual
        for (let j = 0; j <llaves.length; j++){ //Inicia el segundo bucle que va a las llaves y las revisa 
            if (letra === llaves[j][0]){ //verifica si la letra actual coincide con las letras de las llaves
                encriptada = llaves[j][1]; // En el caso que haya coincidencia reemplazar la letra por el equivalente de la encriptada
                break; //Termina el bucle de las llaves cuando encuentra la letra
            }
        }
        mensajeEncriptado += encriptada  // b agrega la letra encriptada o no al resultado final
    }  
    return mensajeEncriptado; //Devuelve el mensaje encriptado al final
}


//Función para desencriptar el mensaje

function desencriptarMensaje (mensaje) { //Se define una función "DesencriptarMensaje" que toma el mensaje y lo encripta
    let mensajeDesencriptado = mensaje; //Crear la variable vacía "mensajeDesencriptado" para almacenar el mensaje que vamos a desencriptar
    for (let i = 0; i< llaves.length; i++){ //Esto hace parte del bucle, en donde se va a recorrer cada letra del mensaje
        let regexp = new RegExp(llaves[i][1], "g"); //Cramos una expresion regular para buscar la seciencia encriptada en el texto. Se aplica el modificador "g" para que la expresion regular busue globalmente todas las coincidencias en el texto
        mensajeDesencriptado = mensajeDesencriptado.replace(regexp, llaves[i][0]);  // Usa la expresión regular "regexp" para encontrar todas las coincidencias en la cadena "mensajeDesencriptado", después reemplaza cada coincidencia con los valores de las llaves y asigna el resultado a "mensajeDesenccriptado" Sirve para reemplazar el texto encriptado por el equivalente inicial
    }
    return mensajeDesencriptado; // Sirve para devolver el mensaje desencriptado
}


//Función para el botón de encriptado

botonEncriptar.addEventListener("click", (e) =>{ // Sirve para añadir una acción que se va a ejecutar cuando se haga clic en el botonEncriptar
    e.preventDefault(); // Evita acciones predeterminadas del boton como por ejemplo enviar 
    let mensaje = textArea.value.toLowerCase(); // Obtiene el area del texto y lo convierte en minúsuculas
    let mensajeEncriptado = encriptarmensaje(mensaje); // Encripta el mensaje
    resultadoText.textContent = mensajeEncriptado; // Muestra el mensaje encriptado en el area de resultados
    botonCopiar.classList.remove("hidden"); // Hace visible el botón copiar
    resultadoTitulo.textContent = "El resultado es:"; // Muestra el título "El resultado es"
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

botonCopiar.addEventListener('click', () =>{ // Añade la acción que se cejecuta al hacer clic en el botón copiar
    let textoCopiado = resultadoText.textContent; // Obtiene el texto que se muestra en el área de resultados
    navigator.clipboard.writeText(textoCopiado).then(()=> { // copia el texto al portapapeles y el then ejecuta el códifo dentro de then una vez que el texto ha sido copiado
        imagenPersona.style.display = "block"; //  Muestra la imagen de confirmación (la imagen de la persona con la lupa)     
        resultadoTitulo.textContent = "El texto se copió"; // Cambia el texto del titulo para mostrar que el texto ha sido copiado
        botonCopiar.classList.add("hidden"); // Oculta el botón copoar después de hacer clic
        resultadoText.textContent = "" // Borra el texto en el area de resultados
    })
});

