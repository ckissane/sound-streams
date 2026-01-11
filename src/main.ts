import Stats from "stats-js";
import { initSPH } from "./scripts";

var container, stats;
var camera, scene, renderer;
var mouseX = 0,
  mouseY = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var BOUNDS = 800,
  BOUNDS_HALF = BOUNDS / 2;

var last = performance.now();
let tSize = 256;
export const getTSize = () => tSize;
var gpuCompute;
var velocityVariable;
var positionVariable;
var colorVariable;
var positionUniforms;
var velocityUniforms;
var colorUniforms;
var birdUniforms;
var micc = true;
var calibrationCountdown = 1000;
var freqCount = 32;
function getRMS(spectrum) {
  var rms = 0;
  for (var i = 0; i < spectrum.length; i++) {
    rms += spectrum[i] * spectrum[i];
  }
  rms /= spectrum.length;
  rms = Math.sqrt(rms);
  return rms;
}
function Microphone(_fft) {
  var FFT_SIZE = _fft || 1024;
  this.spectrum = new Uint8Array(FFT_SIZE / 2);
  this.volume = this.vol = 0;
  this.peak_volume = 0;
  var self = this;
  var stream = null;
  var context = null;

  this.getRMS = function (spectrum) {
    var rms = 0;
    for (var i = 0; i < spectrum.length; i++) {
      rms += spectrum[i] * spectrum[i];
    }
    rms /= spectrum.length;
    rms = Math.sqrt(rms);
    return rms;
  };

  async function init() {
    var micMessage = document.getElementById("mic-message");
    try {
      context = new AudioContext();
      await startMic(context);
      if (micMessage) {
        micMessage.classList.add("granted");
      }
    } catch (e) {
      console.error(e);
      if (micMessage) {
        micMessage.classList.add("denied");
        if (e.name === "NotAllowedError") {
          micMessage.textContent =
            "Microphone access denied. Please refresh and allow access.";
        } else if (e.name === "NotFoundError") {
          micMessage.textContent =
            "No microphone found. Please connect a microphone and refresh.";
        } else {
          micMessage.textContent = "Could not access microphone: " + e.message;
        }
      }
    }
  }

  async function startMic(context) {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    var analyser = context.createAnalyser();
    analyser.smoothingTimeConstant = 0.2;
    analyser.fftSize = FFT_SIZE;

    self.spectrum = new Uint8Array(analyser.frequencyBinCount);

    var node = context.createScriptProcessor(2048, 1, 1);
    node.onaudioprocess = function () {
      analyser.getByteFrequencyData(self.spectrum);
      self.vol = self.getRMS(self.spectrum);
      if (self.vol > self.peak_volume) self.peak_volume = self.vol;
      self.volume = self.vol;
    };

    var input = context.createMediaStreamSource(stream);
    input.connect(analyser);
    analyser.connect(node);
    node.connect(context.destination);
  }

  this.init = init;
  this.stop = function () {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      stream = null;
    }
    if (context) {
      context.close();
      context = null;
    }
  };

  return this;
}
window.Microphone = Microphone;

var effectiveF = 16;
var trailSteps = 20;
var fastestTurnFreq = 10;
var q = 0;
var M = 4;
var scales = Math.log2(freqCount);
function logNt(v) {
  return (
    Math.log(v + 1) / Math.log(2) / (Math.log(freqCount + 1) / Math.log(2))
  );
}

var Mic;
var bpm = 240;

var hM = 100;
var historyLength = Math.floor((60 * 1000) / bpm / (1000 / 60)) * hM;
let musica = [];
let musicmxl = [];
for (var i = 0; i < freqCount; i++) {
  musica.push(0);
  musicmxl.push(0);
}
let musicave = musica.slice();
var musics = [];
for (var i = 0; i < historyLength; i++) {
  var music2 = new Uint8Array(freqCount);
  musics.push(music2);
}
var ll = 0;
let music = new Uint8Array(freqCount).fill(0);
function main() {
  calibrationCountdown -= 1000 / 60;
  ll++;
  if (Mic && Mic.spectrum && Mic.spectrum.length >= freqCount) {
    music = new Uint8Array(Mic.spectrum.slice(0, freqCount));
  }
  for (var i = 0; i < 0; i++) {
    music = music.map((x, i) => {
      var l = [x];
      if (i < freqCount - 1) {
        l.push(music[i + 1]);
      }
      if (i > 0) {
        l.push(music[i - 1]);
      }
      return Math.max(...l);
    });
  }
  musics.unshift(music.slice());
  musics.pop();
  musicave = [];
  for (var i = 0; i < freqCount; i++) {
    musica[i] = 0;
    musicmxl[i] = 0;
    musicave[i] = 0;
    for (var j = 0; j < historyLength; j++) {
      musicmxl[i] = Math.max(musics[j][i], musicmxl[i]); ///historyLength;
    }
    musica[i] = (musics[0][i] / musicmxl[i]) * 256; ///historyLength;
    for (var j = 0; j < historyLength / hM; j++) {
      musicave[i] +=
        (((musics[j][i] / historyLength) * hM) / musicmxl[i]) * 256;
    }
  }
}

function startMicD() {
  if (!Mic) {
    Mic = new Microphone(freqCount * 2);
    Mic.init();
  }
}
let mus = [0];
const getMus = () => mus;
startMicD();
init();
animate();

function init() {
  container = document.createElement("div");
  document.body.appendChild(container);

  // camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 3000);
  // camera.position.z = 500;

  // scene = new THREE.Scene();
  // scene.background = new THREE.Color(0x000000);
  // scene.fog = new THREE.Fog(0x000000, 100, 1000);

  // renderer = new THREE.WebGLRenderer();
  // renderer.setPixelRatio(window.devicePixelRatio);
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // container.appendChild(renderer.domElement);

  initComputeRenderer();

  stats = new Stats();
  // container.appendChild( stats.dom );

  // document.addEventListener('mousemove', onDocumentMouseMove, false);
  // document.addEventListener('touchstart', onDocumentTouchStart, false);
  // document.addEventListener('touchmove', onDocumentTouchMove, false);

  //

  window.addEventListener("resize", onWindowResize, false);

  // var gui = new GUI();

  var effectController = {
    separation: 20.0,
    alignment: 20.0,
    cohesion: 20.0,
    freedom: 0.75,
  };

  // gui.add( effectController, "separation", 0.0, 100.0, 1.0 ).onChange( valuesChanger );
  // gui.add( effectController, "alignment", 0.0, 100, 0.001 ).onChange( valuesChanger );
  // gui.add( effectController, "cohesion", 0.0, 100, 0.025 ).onChange( valuesChanger );
  // gui.close();

  initBirds();
}

function initComputeRenderer() {}

function initBirds() {
  initSPH(getMus);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
}

function animate() {
  requestAnimationFrame(animate);
  main();
  render();
  stats.update();
}

function render() {
  var now = performance.now();
  var delta = (now - last) / 1000;

  if (delta > 1) delta = 1; // safety cap on large deltas
  last = now;
  let mO = [...music].map((a, b) => [musicave[b] + music[b], b]);
  mO.sort((a, b) => b[0] - a[0]);
  mO = mO.map((x) => {
    let now = music[x[1]];
    let before = musicave[x[1]];
    return [
      Math.max(0, (now - before + 0.0001) / (now / 2 + before / 2 + 0.0001)) *
        256 *
        2,
      x[1],
    ];
  });
  mO.sort((a, b) => b[0] - a[0]);
  const lmusic = mO
    .slice(0, 32)
    .sort((a, b) => a[1] - b[1])
    .map((x) => [music[x[1]] - musicave[x[1]], x[1]])
    .concat(mO.slice(32).map((x) => [music[x[1]] - musicave[x[1]], x[1]]));
  mus = lmusic.map((x) => x[0] / 64).slice(0, 16);
  // positionUniforms["time"].value = now;
  // positionUniforms["delta"].value = delta;
  // velocityUniforms["time"].value = now;
  // velocityUniforms["delta"].value = delta;
  // colorUniforms["time"].value = now;
  // colorUniforms["delta"].value = delta;
  // colorUniforms["music"].value=musica;
  // velocityUniforms["music"].value=musica;
  // velocityUniforms["lmusic"].value=lmusic;
  // colorUniforms["lmusic"].value=lmusic;

  // birdUniforms["time"].value = now;
  // birdUniforms["delta"].value = delta;
  // birdUniforms["music"].value=musica;

  // birdUniforms["lmusic"].value=lmusic;
  // velocityUniforms["predator"].value.set(0.5 * mouseX / windowHalfX, - 0.5 * mouseY / windowHalfY, 0);

  // mouseX = 10000;
  // mouseY = 10000;

  // gpuCompute.compute();

  // birdUniforms["texturePosition"].value = gpuCompute.getCurrentRenderTarget(positionVariable).texture;
  // birdUniforms["textureVelocity"].value = gpuCompute.getCurrentRenderTarget(velocityVariable).texture;
  // birdUniforms["textureColor"].value = gpuCompute.getCurrentRenderTarget(colorVariable).texture;

  // renderer.render(scene, camera);
}
