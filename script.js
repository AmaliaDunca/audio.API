"use strict";
let audioContext;
console.log("script connected");
document.querySelector("#button").addEventListener("click", function() {
  audioContext = new AudioContext();
  let oscillator = audioContext.createOscillator();

  //conect
  oscillator.connect(audioContext.destination);

  // pich notes
  oscillator.frequency.setValueAtTime(440, audioContext.currentTime + 1);
  oscillator.detune.setValueAtTime(200, audioContext.currentTime + 2);
  oscillator.detune.setValueAtTime(300, audioContext.currentTime + 3);
  oscillator.detune.setValueAtTime(500, audioContext.currentTime + 4);
  oscillator.detune.setValueAtTime(700, audioContext.currentTime + 5);
  oscillator.detune.setValueAtTime(800, audioContext.currentTime + 6);
  oscillator.detune.setValueAtTime(1000, audioContext.currentTime + 7);
  oscillator.detune.setValueAtTime(1200, audioContext.currentTime + 8);

  //start stop sound
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 8);

  //scale in Major based in 2M
  /*for (let i = 1; i < 7; i++) {
    console.log("pich");
    oscillator.detune.setValueAtTime(i * 200, audioContext.currentTime + i + 1);
  } */
});

//resume game
/*document.querySelector("#resume").addEventListener("click", function() {
  audioContext.resume().then(() => {
    //write code to ressume
    console.log("Playback resumed successfully");
  });
})

*/
