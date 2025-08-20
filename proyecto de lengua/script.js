// Pines fáciles para cada botón. Puedes cambiarlos aquí.
const pins = {
    1: "1111",
    2: "2222",
    3: "3333",
    4: "4444",
    5: "5555",
    6: "6666",
    7: "7777"
};

let activeContent = null;

function checkPin(buttonNumber) {
    const pin = prompt("Por favor, introduce el PIN para acceder:");
    if (pin === pins[buttonNumber]) {
        showContent(buttonNumber);
    } else if (pin !== null) {
        alert("PIN incorrecto. Inténtalo de nuevo.");
    }
}

function showContent(buttonNumber) {
    // Si ya hay un contenido abierto, lo cierro
    if (activeContent) {
        activeContent.style.display = 'none';
    }

    const content = document.getElementById(`content-${buttonNumber}`);
    content.style.display = 'block';
    activeContent = content;
}

function closeContent(buttonNumber) {
    const content = document.getElementById(`content-${buttonNumber}`);
    content.style.display = 'none';
    activeContent = null;
}