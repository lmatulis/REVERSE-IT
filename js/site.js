

//Get values from the screen and display
function getValues() {
    let inputMessage = document.getElementById("message").value;
    let alertMessage = document.getElementById("alertBox");
    let reversedMessage = reverse(inputMessage);

    alertMessage.innerHTML = displayMessage(inputMessage, reversedMessage);
}

function reverse(inputMessage) {
let reversedMessage = "";
    for(let i = inputMessage.length-1; i >= 0; i--) {
        reversedMessage += inputMessage[i];
    }
    return reversedMessage;
}

function displayMessage(inputMessage, reversedMessage) {

    let alertElement = document.getElementById("alertBox");

    //alertElement.classList.remove("d-none");
    alertElement.style.opacity = 1;

    let message = `<div>The message, <strong>${inputMessage}</strong> in reverse is: <strong>${reversedMessage}</strong></div>`;
    return message;
}