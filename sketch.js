let scene = 0;
let WAKE  = true;
let getUp = true;
let font1;
let font2;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let buying1;
let buying2;
let buying3;
let buying4;
let buying5;
let book1;
let book2;
let book3;
let book4;
let book5;
let myButton;
let myInput;
let myText;
let stuff;


var pdf1 = 'animalfarm-E.pdf';
var pdf2 = 'picture books/GreenEggs Ham.pdf';
var pdf3 ='picture books/Oh, the Places You`ll Go! by Dr. Seuss.pdf';
var pdf4 = 'picture books/Winnie_the_Pooh.pdf';


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
  font2 = loadFont('F25_Bank_Printer.otf');
  img1 = loadImage('online images/BushmillerNancyBins.jpg');
   img2 = loadImage('real life photos/wigglytrees.JPG');
   img3 = loadImage('real life photos/IMG_0729 copy.jpeg');
   img4 = loadImage('online images/BrokenDownCar.jpg');
   img5 = loadImage('online images/herzog copy.jpg');
  img6 = loadImage('online images/Atlas Lion.webp');
  img7 = loadImage('online images/sawsuj.jpeg');
  img8 = loadImage('online images/jerma.png');
  img9=loadImage('online images/bobDylan.png');
  img10=loadImage('real life photos/IMG_0930 copy.jpeg');
  img11=loadImage('real life photos/IMG_0931 copy.jpeg');
  img12=loadImage('real life photos/IMG_0733 copy.jpeg');
  img13=loadImage('real life photos/microwave.jpg');
  img14=loadImage('real life photos/supermarket.jpg');
  img15=loadImage('real life photos/DollarStore.jpeg');
  img16=loadImage('real life photos/drink.jpg');
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
  
   noStroke();

// rect.position(width/2, height/2);

  if(scene>3) {
    scene=0;
  }
switch (scene){
  case 0:
    background (img3);
    
    text("WAKE UP",width/5,height/3,width,height/2);
    text("WAKE UP",width/2,height/7,width,height/2);
    text("WAKE UP",width/3,height/2,width,height/2);
    text("WAKE UP",width/4,height-30,width,height/2);
    text("WAKE UP",width/5,height/3,width,height/2);
    text("WAKE UP",width/6,height/5,width,height/2);
    text("WAKE UP",width/7,height-240,width,height/5);
    text("WAKE UP",width/9,height-310,width,height/2);
    text("WAKE UP",width/8,height/5,width,height/2);
    text("WAKE UP",width/6,height-240,width,height/5);
    text("WAKE UP",width/1,height-30,width,height/2);
    
     textFont(font1);
    textSize(200);
    if (noCanvas) {
      r = random(150); // r is a random number between 0 - 255
      g = random(170, 140); // g is a random number betwen 100 - 200
      b = random(260); // b is a random number between 0 - 150
      fill(r, g, b);
      (100,100);

  //     for (let x = 20; x < 100; x += 20) {
  //   xCoordinates.push(x);
  // }
    }
    
    break;
  case 1:
    scene1();
    rect(200,100,400);
    rect(610,100,60,200);
    rect(610,307,60,193);
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
  break;

    
}
// 

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

}

function scene1(){
  
  removeElements();
  background(215,0,64);
  // background(img5);
  
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
img2.resize(windowWidth-30,windowHeight-30);
image(img2,15,15);
}


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

  img10.resize(windowWidth-30,windowHeight-30);
  image(img10,15,15);

}

function scene4(){
  removeElements();
background('purple');

// kitchen ending \\ maybe add an image and make ending
let getDrink = createButton('GRAB A DRINK');
getDrink.position(width/5, height-90);
getDrink.mouseClicked(() => {
      drinkitUp();
    })
let getFood = createButton('GRAB SOME FOOD');
getFood.position(200, 90);
getFood.mouseClicked(() => {
      eatitUp();
    })
    img13.resize(windowWidth-50,windowHeight-50);
    image(img13,25,25);

}

function scene5(){
  removeElements();
background('pink');
// town ending \\make a possible car thing \\maybe image

rect(90,90,632,612);
image(img4,100,100);

let goBargain = createButton('GO TO THE DOLLAR STORE');
goBargain.position(width/5, height-90);
goBargain.mouseClicked(() => {
      atDollarStore();
    })
let goFoodStore = createButton('GO TO THE SUPERMARKET');
goFoodStore.position(200, 90);
goFoodStore.mouseClicked(() => {
      atSupermarket();
    })


}

function scene6(){
removeElements();
background('red');
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
        img11.resize(windowWidth-30,windowHeight-30);
        image(img11,15,15);
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
  img12.resize(windowWidth-30,windowHeight-30);
  image(img12,15,15);

}

function sceneBedhead(){
  removeElements();
background(216,191,216);
// nothing ever happens ending
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

function drinkitUp(){
removeElements();
background('yellow');
img16.resize(windowWidth/2,windowHeight-30);
image(img16,700,15);
img16.resize(windowWidth/2,windowHeight-30);
image(img16,-400,15);
// drink ending
textSize(45);
text('YOU FIND AN RTD AND DECIDE WHY NOT',width/6, height/6,400,600);
text('IT IS SWEET AND WARM',width/6, height/3,400,600);
text('NOW YOU FEEL TIRED',width/6, height/2,400,600);
text('BACK TO BED I GUESS',width/6, height-120,400,600);
let lieIn4 = createButton('BACK TO SLEEP');
lieIn4.position(width-400, height-250);
 lieIn4.mouseClicked(() => {
        sceneBedhead();
      })
      
}

function eatitUp(){
removeElements();
background('orange');
  image(img7,width/3,height/4,400,400);
  image(img7,width/5,height/2,400,400);
  image(img7,width/24,height/4,400,400);
  image(img7,width/8,height/9,400,400);
// food ending
textSize(150);text('YOU ATE LEFTOVERS',width/5, height/8, 600, 450);

// do something else
let getUp2 = createButton('DO SOMETHING ELSE');
getUp2.position(width/3, height/2);
getUp2.mouseClicked(() => {
      eatitUp2();
    })


}

function atSupermarket(){
removeElements();
background(152,250,152);
// supermarket ending
img14.resize(windowWidth-30,windowHeight-30);
image(img14,15,15);

buying1 = createButton('BUY ME');
buying1.position(width-300, height/2);
buying1.mouseClicked(() => {
buying1.hide();
    })

buying2 = createButton('BUY ME');
buying2.position(width-300, height/3);
buying2.mouseClicked(() => {
buying2.hide();
    })

let buying3 = createButton('BUY ME');
    buying3.position(width-300, height/4);
    buying3.mouseClicked(() => {
      buying3.hide();
        })
    
let buying4 = createButton('BUY ME');
    buying4.position(width-300, height*9/20);
    buying4.mouseClicked(() => {
          buying4.hide();
        })
        let buying5 = createButton('BUY ME');
        buying5.position(width-300, height/5);
        buying5.mouseClicked(() => {
              buying5.hide();
            })

        let lunch1 = createButton('LUNCH TIME');
        lunch1.position(width-300, height-320);
        lunch1.mouseClicked(() => {
              lunchTime();
            })
} 

function atDollarStore(){
  removeElements();
  background(255,205,0);
  // dollar store ending
  img15.resize(windowWidth-30,windowHeight-30);
image(img15,15,15);
textSize(150);text('MASTERFUL BARGAIN HUNTING',width/7, height/8, 600, 450);
textSize(150);text('IT WAS WORTH IT',width/8, height/2, 600, 450);

let homeNow = createButton('HOME TIME');
homeNow.position(width-250, height-250);
homeNow.mouseClicked(() => {
      scene4();
    })
}

function readPath(){
  removeElements();
  background(152,250,152);
  // read ending
  img6.resize(windowWidth-20,windowHeight-20);
  image(img6,10,10);
 
  let book1 = createA('https://archive.org/details/animalfarm-E/page/103/mode/2up', 'animal farm', '_blank');
  book1.position(100,100);
  book1.mouseClicked(() => {
    save("animalfarm-E.pdf"); // give file name
    print("animalfarm-E.pdf");
    noLoop(); // we just want to export once
    // book1.open();
 })
  
  let book2 = createA('https://archive.org/details/winnie-the-pooh_202201/mode/2up', 'green eggs & ham', '_blank');
  book2.position(100,200);
  book2.mouseClicked(() => {
    save("picture books/GreenEggs Ham.pdf"); // give file name
    print("picture books/GreenEggs Ham.pdf");
    noLoop(); // we just want to export once
    // book1.open();
 })
  let book3 = createA('https://drive.google.com/file/d/1FEUkG4rMG2a00qQMWS9JO0hIkDzZ_BNB/view?usp=sharing', 'oh, the places you`ll go', '_blank');
  book3.position(100,300);
  book3.mouseClicked(() => {
    save("picture books/Oh, the Places You`ll Go! by Dr. Seuss.pdf"); // give file name
    print("picture books/Oh, the Places You`ll Go! by Dr. Seuss.pdf");
    noLoop(); // we just want to export once
    // book1.open();
 })
  let book5 = createA('https://drive.google.com/file/d/1w9okDg5b1WJp_lbflt8YAI_RJywvA763/view?usp=sharing', 'winnie the pooh', '_blank');
  book5.position(100,400);
  book5.mouseClicked(() => {
    save("picture books/Winnie_the_Pooh.pdf"); // give file name
    print("picture books/Winnie_the_Pooh.pdf");
    noLoop(); // we just want to export once
    // book1.open();
 })



  let lieIn4 = createButton('I AM GETTING TIRED');
lieIn4.position(width-400, height-250);
 lieIn4.mouseClicked(() => {
        sceneBedhead();
      })
  }


  
  function musicPath(){
    removeElements();
    background(255,205,0);
    // music ending
    let listenToMusic2 = createButton('LISTEN TO MY FAVOURITE SONG');
    listenToMusic2.position(width/2, height/4);
     listenToMusic2.mouseClicked(() => {
            favouriteSong();
          })
          let listenToMusic3 = createButton('LISTEN TO A SONG THAT REMINDS ME OF AN OLD FREIND');
  listenToMusic3.position(width/6, height/2);
   listenToMusic3.mouseClicked(() => {
          friendSong();
        })
        img9.resize(windowWidth-20,windowHeight-20);
        image(img9,10,10);
  }

  function eatitUp2(){
    removeElements();
    background('orange');
    // read path
let getUp2 = createButton('I WANT TO READ');
getUp2.position(width/5, height/5);
getUp2.mouseClicked(() => {
      readPath();
    })

  

// listen to music path
let listenToMusic = createButton('LISTEN TO SOME MUSIC');
  listenToMusic.position(width/2, height/2);
   listenToMusic.mouseClicked(() => {
          musicPath();
        })
        img5.resize(windowWidth-20,windowHeight-20);
        image(img5,10,10);
  }

  function lunchTime(){
    removeElements();
    background('orange');
    // supermarket path
    textSize(140);text('YOU ATE LUNCH NOW WHAT TO DO?',width/5, height/3, 600, 900);
    
    let getUp2 = createButton('I WANT TO READ');
    getUp2.position(width-250, height/5);
    getUp2.mouseClicked(() => {
          readPath();
        })
    
      
    
    // listen to music path
    let listenToMusic = createButton('LISTEN TO SOME MUSIC');
      listenToMusic.position(width-250, height/3);
       listenToMusic.mouseClicked(() => {
              musicPath();
            })
  
            let getUp3 = createButton('MAYBE A NAP');
            getUp3.position(width-250, height/2);
            getUp3.mouseClicked(() => {
                  sceneBedhead();
                })
   }

function favouriteSong(){
    removeElements();
    background(255,205,0);
    // listen to music path

    let spotifyButton = createButton('SPOTIFY');
spotifyButton.position(width/4, height/5);
spotifyButton.mouseClicked(() => {
  open(music1);
})

let amazonButton = createButton('AMAZON MUSIC');
amazonButton.position(width/4, height/3);
amazonButton.mouseClicked(() => {
  open(music2);
})

let youtubeButton = createButton('YOUTUBE MUSIC');
youtubeButton.position(width/4, height/2);
youtubeButton.mouseClicked(() => {
  open(music3);
})
    let music1 = createA('https://open.spotify.com', spotifyButton, '_blank');
  // music1.position(200,height/6);

let music2 = createA('https://music.amazon.com', amazonButton, '_blank');
// music2.position(200,height/3);

let music3 = createA('https://music.youtube.com', youtubeButton, '_blank');
// music3.position(200,height/2);



let getUp3 = createButton('I`M ALRIGHT THANKS THO');
            getUp3.position(width-250, height/2);
            getUp3.mouseClicked(() => {
                  sceneBedhead();
                })
  }

  function friendSong(){
    removeElements();
    background(255,205,0);
    // listen to music path
    let listenToMusic = createButton('I FEEL REMORSE');
      listenToMusic.position(width/3, height-500);
       listenToMusic.mouseClicked(() => {
              friendEnd();
            })
            let listenToMusic2 = createButton('I FEEL UNCOMFORTABLE');
      listenToMusic2.position(width/4, height-400);
       listenToMusic2.mouseClicked(() => {
              friendEnd();
            })
            let listenToMusic3 = createButton('I FEEL REGRET');
      listenToMusic3.position(width/3, height-300);
       listenToMusic3.mouseClicked(() => {
              friendEnd();
            })
            let listenToMusic4 = createButton('NOT ANY OF THOSE');
      listenToMusic4.position(width/4, height-200);
       listenToMusic4.mouseClicked(() => {
              friendEnd();
            })
  }

function friendEnd(){
    removeElements();


myInput=createInput();
myInput.position(width/8,height/8);
myButton = createButton('fess up');
myButton.position(myInput.position + 130,height/8);
myButton.mouseClicked(drawName);
noStroke();
textFont(font2);
let getUp3 = createButton('NEVER MIND');
            getUp3.position(width-250, height/2);
            getUp3.mouseClicked(() => {
                  sceneBedhead();
                })

}

function drawName() {
  background(100);
  textSize(130);
  var name = myInput.value();
  for (var i=0; i < 30; i++) {
    fill(random(255));
    text(name, random(width), random(height));
  }
}