let font1;
let scene = 0;
let x = 0;
let gameState = 'intro';


function preload(){
  font1 = loadFont('CARAMELS PERSONAL USE DAFONT.otf');
}

function setup() {
  createCanvas(400, 400);
  
}


function draw(){
  background(210,200,22);
  text('SPACE BAR TO START');
 // function for the scenes; one for each individual scene;
 // function for buttons
// nextScene();
keyPressed();
showText();
if (scene > 1){
  scene = 0;
} else if (scene === 1){
  scene0();
} 
}



function keyPressed() {
  if (keyCode === 32) {
   scene += 1;
  }
}

function showText(textToDisplay = "Default"){
 textFont(font1);
    textAlign(CENTER);
    textSize(40);
  // fill('green');
}

function scene1(){
// if (scene === 1) {
  text('WAKE UP', width / 2, height / 2); 
  scene === 1
// }
  
}

function sceneA(){
// if (scene === 2) {
    text('YOU ARE IN A FAMILIAR PLACE', width/2, height/2);
    scene === 2
    // textSize(20);
    // text('PRESS DOWN ARROW', width/2, height-50);
    // textSize(40);
    // if (keyIsPressed === true && keyCode === 40){
    //     scene === 3;
    //     }
      // }
}

function sceneB(){
  //  if (scene === 3) {
text('SPACE BAR', width / 2, height / 2);
scene === 3
    // if (keyIsPressed === true && keyCode === 32){
    //  scene === 0; 
    // }
  // } 
}

// function scene4(){
// scene === 4
// }

// function scene5(){
// scene === 5
// }
// function scene6(){
// scene === 6
// }
// function scene7(){
// scene === 7
// }

// function scene8(){
// scene === 8
// }

// function nextScene() {
// if (keyPressed,gameState = 'intro') {
// gameState === 'second'
// } else {
//   gameState === 'intro';
// }
