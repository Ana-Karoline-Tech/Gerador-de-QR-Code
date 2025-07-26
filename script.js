function GerarQRCode() {
    var texto = document.querySelector(".textarea").value;
    var qrCodeImage = document.getElementById("QRCodeImage");

    if (texto) {
        qrCodeImage.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(texto) + "&size=200x200";
    } else {
        alert("Por favor, digite um texto para gerar o QR Code.");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var textarea = document.querySelector(".textarea");
    textarea.addEventListener("input", function() {
        if (textarea.value.length > 280) {
            textarea.value = textarea.value.slice(0, 280);
        }
    });
});