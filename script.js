let video = document.getElementById("video");
let canvas = document.appendChild(document.createElement("canvas"));
let ctx = canvas.getContext("2d");

let width = 1280;
let height = 720;

const startStream = () => {
    navigator.mediaDevices.getUserMedia({
        video:{width,height},
        audio : false
    }).then((stream) => {video.srcObject = stream});
}

startStream();