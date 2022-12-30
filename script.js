function encriptar() {
    var text = document.getElementById("text-input").value.toLowerCase();
    var encryptedText = text.replace(/a/igm, "■┬");
    var encryptedText = encryptedText.replace(/e/igm, "╙■");
    var encryptedText = encryptedText.replace(/i/igm, "╜║");
    var encryptedText = encryptedText.replace(/o/igm, "ÜÖ");
    var encryptedText = encryptedText.replace(/u/igm, "¥ü~");
    document.getElementById("result-image").style.display = "none";
    document.getElementById("text-error").style.display = "none";
    document.getElementById("text-encrypt").innerHTML = encryptedText;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function desencriptar() {
    var text = document.getElementById("text-input").value.toLowerCase();
    var encryptedText = text.replace(/enter/igm, "e");
    var encryptedText = encryptedText.replace(/ober/igm, "o");
    var encryptedText = encryptedText.replace(/imes/igm, "i");
    var encryptedText = encryptedText.replace(/ai/igm, "a");
    var encryptedText = encryptedText.replace(/ufat/igm, "u");
    document.getElementById("result-image").style.display = "none";
    document.getElementById("text-error").style.display = "none";
    document.getElementById("text-encrypt").innerHTML = encryptedText;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}
