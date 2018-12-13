function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');

    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;

    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
    }

    socket.on('display message', handleMessage);
}

window.onload = main;


// var value = 0;
// function setup(){
//     createCanvas(1900,1000);
// }
// function draw() {
//     fill(value);
// }
// function mouseDragged() {
//     ellipse(mouseX, mouseY, 30, 30);
//     return false;
//   }
