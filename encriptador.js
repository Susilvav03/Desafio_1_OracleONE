function encryptText() {
    const inputText = document.getElementById("inputText").value;
    if (inputText === "") {
        alert("Por favor, ingresa un texto.");
        return;
    }
    
    // Reglas de encriptación
    let encryptedText = inputText.replace(/e/g, "enter")
                                 .replace(/i/g, "imes")
                                 .replace(/a/g, "ai")
                                 .replace(/o/g, "ober")
                                 .replace(/u/g, "ufat");

    document.getElementById("outputMessage").textContent = encryptedText;

    // Ocultar imagen y párrafo
    document.getElementById("rImage").classList.add("hidden");
    document.getElementById("r_paragraph").classList.add("hidden");

    // Mostrar botón de copiar
    document.getElementById("copyButton").style.display = "block";
}

function decryptText() {
    const inputText = document.getElementById("inputText").value;
    if (inputText === "") {
        alert("Por favor, ingresa un texto.");
        return;
    }

    // Reglas de desencriptación
    let decryptedText = inputText.replace(/enter/g, "e")
                                 .replace(/imes/g, "i")
                                 .replace(/ai/g, "a")
                                 .replace(/ober/g, "o")
                                 .replace(/ufat/g, "u");

    document.getElementById("outputMessage").textContent = decryptedText;

    // Ocultar imagen y párrafo
    document.getElementById("rImage").classList.add("hidden");
    document.getElementById("r_paragraph").classList.add("hidden");

    // Mostrar botón de copiar
    document.getElementById("copyButton").style.display = "block";
}

function copyToClipboard() {
    const textToCopy = document.getElementById("outputMessage").textContent;

    // Crear un elemento de texto temporal para copiar
    const tempInput = document.createElement("textarea");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Texto copiado al portapapeles: " + textToCopy);
}