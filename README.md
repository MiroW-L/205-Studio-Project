# Studio-Project-Code

## 2/2/25
I was thinking that I could recycle my old work from creating buttons and mesh that with some of the writing interaction code I have to make some sort of text response code, a la Fallout 1. I do think that might be too hard so I might try use buttons instead to create a pick your own adventure type of work, I don't know what the theme of this story would be, it needs to be something interesting and relevant to me.
## 3/2/25
Starting off I'm going to use my code from my buttons interactive work, then I will look through the rest of my work and see if it can be added to my work.
``` 'javascript'
let theInput;
let img;
let photos = [];
let p1, p2, p3;
let checkbox;
let x = 0;
let y = 0;

function preload(){
  img = loadImage("images/Minutemen.png");
}

function setup () {
createCanvas (windowWidth, windowHeight);  
theInput = createInput();
theInput.position(x+200,y+200)

let checkbox1 = createCheckbox();
  checkbox1.position(x+400, y+400);
  let span = createSpan('evil');
 span.position(377,400);
  checkbox1.mouseClicked(() => {
    if(checkbox1.checked()) {
      background(125,0,70);
    } else {
      background(220);
    }
  });
  
  let checkbox2 = createCheckbox();
  checkbox2.position(x+400, y+420);
  let pan = createSpan('good');
   pan.position(370,420);
  checkbox2.mouseClicked(() => {
    if(checkbox2.checked()) {
      background(70,0,125);
    } else {
      background(220);
    }
  });
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

 function draw(){
background (212);
let words = theInput.value();
text(words, 20, 50);

}
```
### Actually this isn't the correct code I wanted to use, the code I needed I found in [Workshop 4](https://github.com/MiroW-L/Workshop-4) that Ghen helped me with
``` 'javascript'
let theInput;
let font1;
let checkbox;
let x = 0;
let y = 0;
let userLine;

let writing = [];

let backgroundR = 220;
let backgroundG = 220;
let backgroundB = 220;

function preload(){
font1 = loadFont('ledlight/LEDLIGHT.otf')
}

function setup () {
createCanvas (windowWidth, windowHeight);  
textFont(font1);
textSize(54);
theInput = createInput();
theInput.position(x+200,y+200)
button = createButton('enter');
button.position(x + 348,y + 200);
button.mousePressed(newLine);


let checkbox1 = createCheckbox();
  checkbox1.position(x+400, y+400);
  let span = createSpan('doom');
 span.position(366,400);
  checkbox1.mouseClicked(() => {
    if(checkbox1.checked()) {
      backgroundR=0;
    } else {
      background(220);
    }
  });
  
let checkbox2 = createCheckbox();
  checkbox2.position(x+400, y+420);
  let pan = createSpan('gloom');
   pan.position(361,420);
  checkbox2.mouseClicked(() => {
    if(checkbox2.checked()) {
      backgroundG=125;
    } else {
      background(220);
    }
  });

let checkbox3 = createCheckbox();
  checkbox3.position(x+400, y+440);
  let lpan = createSpan('crab rangoon');
   lpan.position(319,440);
  checkbox3.mousePressed(() => {
    if(checkbox3.checked()) {
      backgroundB=70;
    } else {
      background(220);
    }
    if(checkbox3.unchecked()){
      backgroundB=220;
    }
  });
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

 function draw(){
background(backgroundR, backgroundG, backgroundB);
let words = theInput.value();
text(words, 50, 100);
writeThings();

 }

 function newLine(){
userLine = theInput.value();
theInput.value('');
writing.push(userLine);
 }

 function writeThings(){
  for(x = 0; x < writing.length; x++){
    text(writing[x], 40, 180 + x * 40);
  }
 }
```
### Forming Something
- In the first edition of this buttons code, I have to images used which I want to return to and used so I'm going to check if I have and code using images that can help me use images in this piece.
