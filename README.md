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
