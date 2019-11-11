// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/jEwAMgcCgOA

var song;
var amp;
var button;

var volhistory = [];

function toggleSong(song) {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  ghera = loadSound('audio/G-HERA - ZeoN ft Lezw.mp4');

}

function setup() {
  console.log('setup')
  musicCanvas = createCanvas(205, 65);
  musicCanvas.parent('musicCanvas');
  musicCanvas.touchStarted(toggleSong);
 

  amp = new p5.Amplitude();
}

function draw() {
  background(0);
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();
  let g= color('#0bb60b');
  stroke(g);
 
  push();
  beginShape();
  for (var i = 0; i < volhistory.length; i++) {
    var y = map(volhistory[i], 0, 1, height / 2, 0);
    vertex(i, y);
  }
  endShape();
  pop();
  if (volhistory.length > width) {
    volhistory.splice(0, 1);
  }


}
