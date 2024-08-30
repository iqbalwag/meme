let container1 = document.querySelector(".container1");
let container2 = document.querySelector(".container2");
let audioM = document.createElement("audio");
let audioT = document.createElement("audio");
audioM.src = "../sfx/mager.mp3";
audioT.src = "../sfx/turu.mp3";
document.body.appendChild(audioM);
document.body.appendChild(audioT);

container1.onmouseover = () => {
    audioM.play();
}
container1.onmouseout = () => {
    audioM.pause();
    audioM.currentTime = 0;
}

container2.onmouseover = () => {
    audioT.play();
}

container2.onmouseout = () => {
    audioT.pause();
    audioT.currentTime = 0;
}