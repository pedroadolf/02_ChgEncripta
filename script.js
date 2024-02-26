function encriptar() {
  // Obtain the entrance text
  let textoPlano = document.getElementById("texto").value;

  // Obtain dom element that will be updated
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  // CapHar the text
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

  // If the text is not empty to show the text
  if (textoPlano.length != 0) {
    // Update the entrance field with the encrypted text
    document.getElementById("texto").value = textoCifrado;

    // Show the successful message
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "05_img/encriptado.png";

    // Show success alert
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
        // record message in console
        console.log("¡Alerta cerrada! El usuario reconoció el cifrado exitoso.");
      });
  } else {
    // Sample warning message
    muñeco.src = "05_img/laptop.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    // Show warning alert
    swal
      .fire({
        title: "¡Tsss!",
        text: "Debes ingresar un texto para poder encriptarlo.",
        icon: "warning",
        button: "Aceptar",
      })
      .then(() => {
        // record message in console
        console.log("¡Alerta cerrada! El usuario reconoció el cifrado exitoso.");
      });
  }
}

// Disconceptions a text
function desencriptar() {
  // Obtain the entrance text
  let texto = document.getElementById("texto").value;

  // Obtain dom element that will be updated
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  // Disappoints the text
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

  // If the text is not empty to show the text
  if (texto.length != 0) {
    // Update the entrance field with the deciphered text
    document.getElementById("texto").value = textoCifrado;

    // Show the successful message
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "05_img/success.png";

    // Show success alert
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
        // record message in console
        console.log("¡Alerta cerrada! El usuario reconoció el cifrado exitoso.");
      });
  } else {
    // Sample warning message
    muñeco.src = "05_img/laptop.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";

    // Show warning alert
    swal
      .fire({
        title: "¡Tsss!",
        text: "Debes ingresar un texto para poder desencriptarlo.",
        icon: "warning",
        button: "Aceptar",
      })
      .then(() => {
        // record message in console
        console.log("¡Alerta cerrada! El usuario reconoció el cifrado exitoso.");
      });
  }
}
