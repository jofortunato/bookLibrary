let textBox = document.getElementById("test-key-event");
let currentKey = "";
let re = new RegExp("=");

document.addEventListener('keyup', (event) => {
    if (re.test(event.key)) {
        console.log(event.key);
        textBox.textContent = textBox.textContent + event.key;
    }
}, false);