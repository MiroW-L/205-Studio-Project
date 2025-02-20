// // 10:00 AM
// let currentHour = 9;

// let isMorning = currentHour < 12;
// if (isMorning) {
//   document.write('Good morning!');
// }

// let isAfternoon = currentHour > 12;
// if (isAfternoon) {
// document.write('Good afternoon!');
// }

// 2:00 PM
// let currentHour = 23;

// if (currentHour < 12) {
//   document.write('Good morning!');
// } else if (currentHour < 17) {
//   document.write('Good afternoon!');
// } else if (currentHour < 24){
//   document.write('Good evening!');
// }

let scene = 0;
let WAKE  = true;
let getUp = true;
let font1;
let img1;
let img2;

let (path1 = true);
let (path2 = false);

let stayInBed = path1;
if (path1 = true) {
    scene3;
} else if (path1 = false){
  scene !== 3;
  scene2;
}

let getOutBed = path2;
if (path2 = false){
  scene === 2;
  scene2;
} else if (path2 = true){
  scene !== 2;
  scene3;
}

function preload(){
  font1 = loadFont('CARAMELS PERSONAL USE DAFONT copy 2.otf');
  img1 = loadImage('BushmillerNancyBins.jpg');
  img2 = loadImage('');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  let WAKE = createButton('WAKE UP');
  
  WAKE.position(width/2, height/2);
  WAKE.mousePressed(() => {
    scene = 1;
  })
 
  pixelDensity();
// removeItem.WAKE();
// clearCanvas();
}

function draw() {
   
  if(scene>3) {
    scene=0;
  }
switch (scene){
  case 0:
    background (220);
    break;
  case 1:
    scene1();
    break;
  case 2:
    scene2();
    break;
  case 3:
    scene3();
    break;
  case 4:
    scene4();
    break;
  case 5:
    scene5();
    break;
  case 6:
    scene6;
    for (x=0; x<nipperSystem.length; x++){
      nipperSystem[x].move();
      nipperSystem[x].show();
      // nipperSystem[x].checkEdges();
      nipperSystem[x].step();

  }
  break;

    
}

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function scene1(){
  removeElements();
  background(215,0,64);
  
   // present getUp button
   // present stayIn button 
    if (scene1 = true||false){
       removeElements(WAKE); 
   }
let getUp = createButton('GET OUT OF BED');
getUp.position(width/3, height/4);
getUp.mouseClicked(() => {
      scene2();
    })
let stayIn = createButton('STAY IN BED');
    stayIn.position(width/3, height/2);
    stayIn.mouseClicked(() => {
          scene3();
        })
}

function scene2(){
  removeElements();
  background(60,179,116);
  
  let goKitchen = createButton('GO TO KITCHEN');
   goKitchen.position(width/5, height/3);
   noErase(goKitchen);
   goKitchen.mouseClicked(() => {
      scene4();
  })
  let goTown = createButton('GO TO TOWN');
  goTown.position(width-180, height/3);
    goTown.mouseClicked(() => {
      scene5();
})  
//   if (scene3=true||false){
//     noErase();
//      scene2BUTTONS();
    
// }
}

// function scene2BUTTONS(){
//   background('green');
//   if (scene2 = true||false){
//     removeElements("getUp");
//     removeElements("stayIn"); 
//     background.show();
//     show("goKitchen");
//     show("goTown");
    
// }

// }

function scene3(){
  removeElements();
  background(100,149,237);
  
// stay in  bed fork
let getUp2 = createButton('TIME TO GET OUT OF BED');
getUp2.position(width/5, height-90);
getUp2.mouseClicked(() => {
      scene2();
    })

let lieIn = createButton('LIE IN BED');
  lieIn.position(width-190, height-90);
   lieIn.mouseClicked(() => {
          scene6();
        })
  // present lieIn button
image(img2);
// img2.position(CENTER);
}

function scene4(){
  removeElements();
background('purple');
// kitchen \\ maybe add an image and make ending

}

function scene5(){
  removeElements();
background('pink');
// town ending \\make a possible car thing \\maybe image
}

function scene6(){
removeElements();
background('brown');
// sleep ending
let getUp3 = createButton('GET ON WITH THE DAY');
getUp3.position(width/5, 90);
getUp3.mouseClicked(() => {
      scene2();
    })

let lieIn2 = createButton('WAIT SOME MORE');
  lieIn2.position(width/3, height-90);
   lieIn2.mouseClicked(() => {
          scene7();
        })

}

function scene7(){
  removeElements();
  background('orange');
  // sleep ending
  let getUp4 = createButton('MOVE IT');
  getUp4.position(width/5,height/3);
  getUp4.mouseClicked(() => {
        scene2();
      })
  
  let lieIn3 = createButton('GO BACK TO SLEEP');
    lieIn3.position(width-190, 90);
     lieIn3.mouseClicked(() => {
            sceneBedhead();
          })
  
}

function sceneBedhead(){
  removeElements();
background(216,191,216);

let tryAgain = createButton('WAKE UP AGAIN?');
tryAgain.position(width/4, height-90);
tryAgain.mouseClicked(() => {
  removeElements();
  scene2();
    })
image(img1,25,40);
textFont(font1);
textSize(58);
text('YOU WENT BACK TO SLEEP.', width/5, height-104);
}