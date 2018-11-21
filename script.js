"use strict";

console.log("script connected");
//window.addEventListener("keydown", init);
//window.addEventListener("click", graphDisplay);

//Defining veriables
let analyser,
  canvas,
  ctx,
  random = Math.random;
let continer_graph = document.getElementById("Continer_Waves");
let audiCont = new AudioContext();
let oscillator = audiCont.createOscillator();
//oscillator.type = "triangle";

//Piano

document.querySelector("#c").addEventListener("click", function() {
  oscillator = audiCont.createOscillator();
  oscillator.frequency.setValueAtTime(261.63, audiCont.currentTime);
  //oscillator.type = "square";
  // oscillator.type = "sawtooth";
  oscillator.type = "triangle";

  //connection
  oscillator.connect(audiCont.destination);
  oscillator.start(audiCont.currentTime);
  oscillator.stop(audiCont.currentTime + 0.5);
  oscillator.onended = function() {
    console.log("audio finished");
  };
});
document.querySelector("#cd").addEventListener("click", function() {
  let oscillator = audiCont.createOscillator();
  oscillator.frequency.setValueAtTime(277.18, audiCont.currentTime);
  //connection
  oscillator.connect(audiCont.destination);
  oscillator.start(audiCont.currentTime);
  oscillator.stop(audiCont.currentTime + 0.5);
  oscillator.onended = function() {
    console.log("audio finished");
  };
});
document.querySelector("#d").addEventListener("click", function() {
  let oscillator = audiCont.createOscillator();
  oscillator.frequency.setValueAtTime(293.67, audiCont.currentTime);
  //connection
  oscillator.connect(audiCont.destination);
  oscillator.start(audiCont.currentTime);
  oscillator.stop(audiCont.currentTime + 0.5);
  oscillator.onended = function() {
    console.log("audio finished");
  };
});
document.querySelector("#dd").addEventListener("click", function() {
  let oscillator = audiCont.createOscillator();
  oscillator.frequency.setValueAtTime(311.13, audiCont.currentTime);
  //connection
  oscillator.connect(audiCont.destination);
  oscillator.start(audiCont.currentTime);
  oscillator.stop(audiCont.currentTime + 0.5);
  oscillator.onended = function() {
    console.log("audio finished");
  };
});
document.querySelector("#e").addEventListener("click", function() {
  let oscillator = audiCont.createOscillator();
  oscillator.frequency.setValueAtTime(329.63, audiCont.currentTime);
  //connection
  oscillator.connect(audiCont.destination);
  oscillator.start(audiCont.currentTime);
  oscillator.stop(audiCont.currentTime + 0.5);
  oscillator.onended = function() {
    console.log("audio finished");
  };
});
document.querySelector("#f").addEventListener("click", function() {
  let oscillator = audiCont.createOscillator();
  oscillator.frequency.setValueAtTime(349.23, audiCont.currentTime);
  //connection
  oscillator.connect(audiCont.destination);
  oscillator.start(audiCont.currentTime);
  oscillator.stop(audiCont.currentTime + 0.5);
  oscillator.onended = function() {
    console.log("audio finished");
  };
});
document.querySelector("#g").addEventListener("click", function() {
  let oscillator = audiCont.createOscillator();
  oscillator.frequency.setValueAtTime(392.0, audiCont.currentTime);
  //connection
  oscillator.connect(audiCont.destination);
  oscillator.start(audiCont.currentTime);
  oscillator.stop(audiCont.currentTime + 0.5);
  oscillator.onended = function() {
    console.log("audio finished");
  };
});
document.querySelector("#a").addEventListener("click", function() {
  let oscillator = audiCont.createOscillator();
  oscillator.frequency.setValueAtTime(440, audiCont.currentTime);
  //connection
  oscillator.connect(audiCont.destination);
  oscillator.start(audiCont.currentTime);
  oscillator.stop(audiCont.currentTime + 0.5);
  oscillator.onended = function() {
    console.log("audio finished");
  };
});
document.querySelector("#b").addEventListener("click", function() {
  let oscillator = audiCont.createOscillator();
  oscillator.frequency.setValueAtTime(493.88, audiCont.currentTime);
  //connection
  oscillator.connect(audiCont.destination);
  oscillator.start(audiCont.currentTime);
  oscillator.stop(audiCont.currentTime + 0.5);
  oscillator.onended = function() {
    console.log("audio finished");
  };
});
document.querySelector("#cc").addEventListener("click", function() {
  let oscillator = audiCont.createOscillator();
  oscillator.frequency.setValueAtTime(523.25, audiCont.currentTime);
  //connection
  oscillator.connect(audiCont.destination);
  oscillator.start(audiCont.currentTime);
  oscillator.stop(audiCont.currentTime + 0.5);
  oscillator.onended = function() {
    console.log("audio finished");
  };
});
// Graphic visualization
document.querySelector("#button").addEventListener("click", function() {
  canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  continer_graph.insertBefore(canvas, continer_graph.childNodes[0]);

  ctx = canvas.getContext("2d");

  setupWebAudio();

  draw();
});

function setupWebAudio() {
  let audio = document.createElement("audio");
  audio.src = "music.mp3";
  audio.controls = "true";
  continer_graph.insertBefore(audio, continer_graph.childNodes[1]);
  //document.body.appendChild(audio);
  audio.style.width = window.innerWidth + "px";
  //Create audio contex
  let audioContext = new AudioContext();
  analyser = audioContext.createAnalyser();
  let source = audioContext.createMediaElementSource(audio);

  //conection
  source.connect(analyser);
  analyser.connect(audioContext.destination);
  audio.play();
}

function draw() {
  requestAnimationFrame(draw);
  let freqByteData = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(freqByteData);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 1; i < freqByteData.length; i += 10) {
    ctx.fillStyle =
      "rgb(" +
      getRandomColor() +
      "," +
      getRandomColor() +
      "," +
      getRandomColor() +
      ")";
    ctx.fillRect(
      i + 300,
      canvas.height - freqByteData[i] * 1.5,
      10,
      canvas.height
    );
    ctx.strokeRect(
      i + 300,
      canvas.height - freqByteData[i] * 1.5,
      10,
      canvas.height
    );
  }
}

function getRandomColor() {
  return (random() * 255) >> 0;
}

//conect

// pich notes
/*oscillator.frequency.setValueAtTime(440, audioContext.currentTime + 1);

  oscillator.detune.setValueAtTime(200, audioContext.currentTime + 2);
  oscillator.detune.setValueAtTime(300, audioContext.currentTime + 3);
  oscillator.detune.setValueAtTime(500, audioContext.currentTime + 4);
  oscillator.detune.setValueAtTime(700, audioContext.currentTime + 5);
  oscillator.detune.setValueAtTime(800, audioContext.currentTime + 6);
  oscillator.detune.setValueAtTime(1000, audioContext.currentTime + 7);
  oscillator.detune.setValueAtTime(1200, audioContext.currentTime + 8); */

//start stop sound

//scale in Major based in 2M
/*for (let i = 1; i < 7; i++) {
    console.log("pich");
    oscillator.detune.setValueAtTime(i * 200, audioContext.currentTime + i + 1);
  } */

//resume game
//document.querySelector("#resume").addEventListener("click", function() {
//audioContext.resume().then(() => {
//write code to ressume
// console.log("Playback resumed successfully");
// })

//drums

function sequencer() {
  const kick = new Tone.Player("./Drums/kick-electro01.wav").toMaster();
  const snare = new Tone.Player("./Drums/snare-lofi02.wav").toMaster();
  let index = 0;

  Tone.Transport.scheduleRepeat(repeat, "8n");
  Tone.Transport.start();
  function repeat() {
    let step = index % 8;
    let kickIpmuts = document.querySelector(
      `.kick input:nth-child(${step + 1})`
    );
    let snareIpmuts = document.querySelector(
      `.snare input:nth-child(${step + 1})`
    );
    if (kickIpmuts.checked) {
      kick.start();
    }
    if (snareIpmuts.checked) {
      snare.start();
    }
    index++;
  }
}
sequencer();
