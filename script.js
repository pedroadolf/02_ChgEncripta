
function encriptar() {
  // TODO obtener el texto de entrada
  let textoPlano = document.getElementById("texto").value;

  // TODO  obtener elemento DOM que se actualizaran
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  // TODO  Cifrar el texto
  let textoCifrado = textoPlano
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")
    .replace(/á/gi, "ái")
    .replace(/é/gi, "éi")
    .replace(/í/gi, "íi")
    .replace(/ó/gi, "ói")
    .replace(/ú/gi, "úi");

  // TODO  Si el texto no es vacío mostrar el texto
  if (textoPlano.length != 0) {
    // TODO  Actualizar el campo de entrada con el texto cifrado
    document.getElementById("texto").value = textoCifrado;

    // TODO  Mostrar el mensaje de exito
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "05_img/encriptado.png";

    // TODO  Mostrar alerta de exito
    swal
      .fire({
        title: "¡Encriptado con éxito!",
        text: "Tu mensaje ha sido encriptado correctamente.",
        icon: "success",
        button: "Copiar",
        preConfirm: () => {
          return navigator.clipboard.writeText(textoCifrado);
        },
      })
      .then(() => {
        // TODO  Registra mensaje en conslola
        console.log("¡Alerta cerrada! El usuario reconoció el cifrado exitoso.");
      });
  } else {
    // TODO  Muestra mensaje de advertencia
    muñeco.src = "05_img/laptop.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    // TODO  Mostrar alerta de advertencia
    swal
      .fire({
        title: "¡Tsss!",
        text: "Debes ingresar un texto para poder encriptarlo.",
        icon: "warning",
        button: "Aceptar",
      })
      .then(() => {
        // TODO  Registra mensaje en conslola
        console.log("¡Alerta cerrada! El usuario reconoció el cifrado exitoso.");
      });
  }
}

// TODO  Desencripta un texto
function desencriptar() {
  // TODO obtener el texto de entrada
  let texto = document.getElementById("texto").value;

  // TODO  obtener elemento DOM que se actualizaran
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  // TODO  desencripta el texto
  let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")
    .replace(/ái/gi, "á")
    .replace(/éi/gi, "é")
    .replace(/íi/gi, "í")
    .replace(/ói/gi, "ó")
    .replace(/úi/gi, "ú");

  // TODO  Si el texto no es vacío mostrar el texto
  if (texto.length != 0) {
    // TODO  Actualizar el campo de entrada con el texto descifrado
    document.getElementById("texto").value = textoCifrado;

    // TODO  Mostrar el mensaje de exito
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "05_img/success.png";

    // TODO  Mostrar alerta de exito
    swal
      .fire({
        title: "¡Desencriptado con إexito!",
        text: "Tu mensaje ha sido desencriptado correctamente.",
        icon: "success",
        button: "Copiar",
        preConfirm: () => {
          return navigator.clipboard.writeText(textoCifrado);
        },
      })
      .then(() => {
        // TODO  Registra mensaje en conslola
        console.log("¡Alerta cerrada! El usuario reconoció el cifrado exitoso.");
      });
  } else {
    // TODO  Muestra mensaje de advertencia
    muñeco.src = "05_img/laptop.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";

    // TODO  Mostrar alerta de advertencia
    swal
      .fire({
        title: "¡Tsss!",
        text: "Debes ingresar un texto para poder desencriptarlo.",
        icon: "warning",
        button: "Aceptar",
      })
      .then(() => {
        // TODO  Registra mensaje en conslola
        console.log("¡Alerta cerrada! El usuario reconoció el cifrado exitoso.");
      });
  }
}
