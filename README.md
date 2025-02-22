# Studio-Project
https://mirow-l.github.io/205-Studio-Project/

## 2/2/25
I was thinking that I could recycle my old work from creating buttons and mesh that with some of the writing interaction code I have to make some sort of text response code, a la Fallout 1. I do think that might be too hard so I might try use buttons instead to create a pick your own adventure type of work, I don't know what the theme of this story would be, it needs to be something interesting and relevant to me. I think for theme I want to do interactivity because I love the idea of a user interfacing with some sort of grand gesture of art. I'm to read some of the online reading on interactivity (I've now changed to the text on writing within digital art) and I'll browse the artists given to find one that will apply into my vision. What inspired this decision was seeing what other users had made in the Workshop 4 task, specifically my classmates [Alice Lee](https://github.com/glovving/workshop-task-4) and [Sienna](https://github.com/siennabienna/workshop_4) and how they had interactive, reactionary little worlds, that really captivated me.
## 3/2/25
I am feeling quite down after seeing my grade for the workshops assignment, I am feeling a lot of emotions. I know that what I submitted wasn't the best work I could do, however I am sad that it didn't do very well as I was proud of myself for finishing it. I am grateful for Leo's feedback and I will be taking what he said on board. It might be worth looking into support for students with ADHD so I can both meet deadlines and also give a great effort into my working. I want to do better than this, because I want my grades to reflect the effort I put into this work.

> "The level of engagement with documentation is not consistent throughout the workshop tasks (some are more complete than others),and at times there was scope to draw on the full range of resources available to you (e.g. using RiTa's documentation for workshop 6, as well as or instead of DeepSeek). While it's good to see that you're finding DeepSeek helpful in providing solutions, as outlined on the assignment brief and in class, you need to provide full details of your engagement with this tool, including what you've learnt from the answers you've received. The README files made good use of headings, lists, links, and images. For the studio project, make sure to explain what you've learnt from generative AI tools if you use them, and try to use in-links and code extracts with syntax highlighting (see the example workshop 2 repository on the course GitHub account)".

This is Leo's feedback which I will be using as guidance for what improvements I can make for my documentation of my coding work. It's going to be helpful because I know what is going to give me better odds at both getting a higher grade and making something that I feel proud of.

![image](https://github.com/user-attachments/assets/12233aa4-c41e-4439-9d1a-fe17ea01e4b9)
Remember to use [this](https://github.com/Elam-Fine-Arts-205/workshop-task-2-example) when I record code. Also use [Github Basic Writing](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#quoting-code) and [p5.js Tutorials](https://p5js.org/tutorials/)

### Moving On
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

## 4/2/25
- I have a trip I'm going on coming up from 7/2/25 to 9/2/25 so I need to make sure I do the work from week 4 and some of week 5 so I remain on target. That means I need to deside on and idea and a design for my code.
- I think I will do something like I saw [Alice Lee](https://github.com/glovving/workshop-task-4) and [Sienna](https://github.com/siennabienna/workshop_4) do, first I will try add a title screen, then I think I will try make some buttons and maybe pictures. 
- Ideally I'd like to have a narative like one of the [Olia Lialina]([https://pad.profolia.org/agatha) pieces I've researched, making things interesting and compelling for the viewer/user/participant. To do this I think first I will visit the code of Sienna and Alice Lee, then I will research for any guides on [p5.js Tutorials](https://p5js.org/tutorials/) or elsewhere before starting to make the skeleton of a code and then [writing a story for it](https://drive.google.com/file/d/1nKpUwACz7gpLEdnLRX5qaz6_VTwIxebP/view?usp=sharing). 
- First I am going to see how to make scenario tree for different events that happen so I need to make a story that gets enacted with each scenario all being coded in it. WIll do reseach for it on p5.js and if I need will search for it online.
- I asked Leo about forking someone elses code and he said we'd need to talk about it
<img width="575" alt="Screenshot 2025-02-04 at 6 27 06 PM" src="https://github.com/user-attachments/assets/19ff7bd9-502f-4606-9b8c-e1d98aae5490" />

### My intention would to be to either fork on of Alice Lee or Sienna's works to then figure out how to make scenarios, however I am worried that it will be mostly copying on my behalf so I will find an alternative before presenting what ideas I have to him.
- Other ideas I had included youtube videos to help generate scenarios that would help create some sort of story narrative, I will talk to Leo about this but I feel upon reflection in might be worth not forking work but instead finding the pieces I need in others code or guides and then making sure to appropriately code and reference the help I got. [This video](https://www.youtube.com/watch?v=cQNyYx2fZXw&list=PLCAMRz6LHBZ8zgbUgDWiW0hnxy6bbfQCA&index=9) was sort of the inspiration to grind out the code so that I understood it rather than trying to cut corners which I feel I have done previously.

## 5/2/25
- I have found this incredible [p5.js example](https://editor.p5js.org/mbardin/sketches/lSYhg5Xr) by [Matthew Bardin](https://editor.p5js.org/mbardin/sketches) of different game states which is incredible because it will help me make different scenarios without having to code too much with HTMl or CSS as I've seen with some other advice given online. I've made a duplicate to make sure I have not lost this information. I'll make sure to read through the instructions given rather than just ripping all the code for myself.
<img width="1121" alt="Week 4 Needs" src="https://github.com/user-attachments/assets/6946770e-7d7d-4962-96dd-b6ad579f0228" />
I've completed everything I needed to have for feedback on the 8th of February

## 11/2/25
- Okay so I am back from my trip away (albeit a little sunburnt) but I think I now have a much clearer goal in mind for my coding piece.
- I also have been heavily reflecting on [Leo's Feedback](https://drive.google.com/file/d/1UWcAKcd9FS4B2TqIFTxPKvO3co-EpmCh/view?usp=sharing) on the work I had then submitted for feedback.
- One of the things that I realized I must do is to have all my work in one place (and thus today I moved the information from another repository called [Studio Project Journal](https://github.com/MiroW-L/Studio-Project-Journal) onto this one) and that I will have to tidy up the overall work presented here. I'll email Leo for his thoughts on formatting the work I have here and what else he thinks I can do to improve my work.
- Finally I must create a functional code and story which I will be doing today so I can make progress on my code and final piece.



### Starting putting all the code together
- Thanks to that p5.js example I found by Matthew Bardin, I was able to start by making a sequence of three "states" which reacted to my button input which was great. Now I was to start personalising my story as well as adding more reactions.
- I am a little worried that this code isn't as robust as I'd like it to be so i might try look into alternatives, otherwise I will continue using this method. Also I haven't figured out how to make one button be the reaction that continues the story, although I might try pivoting to using buttons. I will ask Leo about this as well as researching it for myself.
<img width="1512" alt="Screenshot 2025-02-11 at 4 53 02 PM" src="https://github.com/user-attachments/assets/3ed28348-8825-47b0-8ee4-0e29587eb697" />
While I waited for Leo to reply I looked at the code of Alice Lee and Sienna to see if any of their code could solve my issues or create a new solution.
Upon reading Alice Lee's reflection at the bottom of her Workshop 4 repository, she said:

``
I ended up using so many if/else statements, each time callin and individual function, when I should have been calling functions within functions where possible. I want to improve on this aspect as I feel like my code is not as robust as it could be and overly long.
``

And that makes me think I should also pivot to using functions rather than layering if/else statements. Luckily I found something really helpful to help get me started in Sienna's work:
``` "javascript"
function homeScreen() {
  background(163, 232, 255);
  fill(0);
  textAlign(CENTER, CENTER);
  text("would you like to be under the sea?", 200, 100);
  buttonYes.show();
  buttonNo.show();

}

function tryAgainScreen() {
  background(0);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text("wrong", 200, 200);
  setTimeout(homeScreen, 2000)
  buttonNo.hide();
  buttonYes.hide();
}
```
And fantastically Leo emailed me back with an amazing example of summoning a scene by using functions in [this p5.js sketch](https://editor.p5js.org/leo_br/sketches/-GG4SpE69). Now I will use both of these to design my scenarios and then try add some more of my past work to make some sort of skeleton for my story to launch from.

## 12/2/25
- Learing about virtual exhibitions with Leo
- Figuring out what I need to get done
<img width="1080" alt="Week 5 Needs" src="https://github.com/user-attachments/assets/0b802594-eca8-4beb-a588-438c7ee40b54" />

### More Coding
- I was struggling to utilise Leo' feedback in my work so I looked for help online and I found [this p5.js tutorial](https://p5js.org/tutorials/organizing-code-with-functions/) which helped me make my code tidier and easier to work with.
  ![image](https://github.com/user-attachments/assets/425596ca-7a1a-4c7c-af40-9991cbc166f7)


### Making the Story
I used a normal google document and wrote down my ideas for what would my work be about and ended up using the drawing function to create a timeline like the one I saw on the website about Olia Lialina as well as in [Alice Lee's work](https://github.com/glovving/workshop-task-4/tree/main) so I ended up with a planning page which I turned into [this PDF file](https://drive.google.com/file/d/1tUpbsSdTRw33s3qyDoOSGGpivNpANEge/view?usp=sharing). I want to make it so I end up with multiple endings and even though the story hasn't finished I'll figure out appropriate endings depending on how much time I have left.

## 13/2/25
### More code
I watched [this video](https://www.youtube.com/watch?v=dHKhVQ7aQcw) which helped me add this code to my work
``` "javascript"
function showText(textToDisplay = "Default"){
 textFont(font1);
    textAlign(CENTER);
    textSize(40);
  // fill('green');
}
```
However I needed to keep looking because I needed help making my scenes work as I am struggling to utilise my functions.
![image](https://github.com/user-attachments/assets/0c44c5a2-7b41-499e-89b9-2c3c67e85999)

I saw yesterday on the class call that some other people had done interactive art and so I will check out their accounts on github and possible find some helpful code, I will also email Leo just in case to make sure I get as much help as possible. I found [this work](https://github.com/qzha880/Creative-Coding-and-Workbook/tree/main) by Wendy and I went through the sketch.js file on it and it shows how many functions there have been built to make the story of her work. I will be looking through this work and seeing if any pieces can be applied into my work while waiting to hear from Leo for feedback. I also asked the discord for help and this was the reply I got:

<img width="636" alt="Screenshot 2025-02-13 at 4 00 50 PM" src="https://github.com/user-attachments/assets/866a1426-266c-4db6-9647-e1754a8f9cae" />

So now I am researching Boolean variables to help with both buttons and messages popping up.
### Leo's Help
- this is what Leo sent me and it is really helpful because I will use it for the beginning 8 scenes that I will create and then I will see what I can accomplish from there.
<img width="1512" alt="Screenshot 2025-02-13 at 5 32 21 PM" src="https://github.com/user-attachments/assets/ebf4e784-f2d8-4899-afc2-c958743751d6" />

So now thnaks to Leo's help my work looks like this:
``` "javascript"
let font1;
let scene = 0;
let gameState = 'intro';


function preload(){
  font1 = loadFont('CARAMELS PERSONAL USE DAFONT.otf');
}

function setup() {
  createCanvas(400, 400);
  
}


function draw(){
  background(210,200,22);
 // function for the scenes; one for each individual scene;
 // function for buttons
// nextScene();
keyPressed();
showText();
if (scene > 8){
  scene = 0;
} else if (scene === 1){
  scene1();
} else if (scene === 2){
  scene2();
} else if (scene === 3){
  scene3(); 
} else if (scene === 4){
  scene4(); 
} else if (scene === 5){
  scene5(); 
} else if (scene === 6){
  scene6(); 
} else if (scene === 7){
  scene7(); 
} else if (scene === 8){
  scene8(); 
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

function scene2(){
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

function scene3(){
  //  if (scene === 3) {
text('SPACE BAR', width / 2, height / 2);
scene === 3
    // if (keyIsPressed === true && keyCode === 32){
    //  scene === 0; 
    // }
  // } 
}

function scene4(){
scene === 4
}

function scene5(){
scene === 5
}
function scene6(){
scene === 6
}
function scene7(){
scene === 7
}

function scene8(){
scene === 8
}

// function nextScene() {
// if (keyPressed,gameState = 'intro') {
// gameState === 'second'
// } else {
//   gameState === 'intro';
// }
```
Before I used Leo's help, my code was more relient on a gameState changing variable that was quite limited and made me frustrated because I wanted to create a lot of new scenes and so I felt like Leo's code would be able to do that. This is what the code previously had looked like:
``` "javascript"
let font1;
let gameState = 'intro';
function preload(){
font1 = loadFont('CARAMELS PERSONAL USE DAFONT.otf');
}
function setup() {
createCanvas(400, 400);
}
function draw(){
background(210,200,22);
// function for the scenes; one for each individual scene;
// function for buttons
keyPressed();
nextScene();
showText();
}
function keyPressed() {
if (keyCode === 32) {
nextScene();
}
}
function showText(textToDisplay = "Default"){
textFont(font1);
textAlign(CENTER);
textSize(40);
// fill('green');
}
function intro(){
if (gameState === 'intro') {
text('WAKE UP', width / 2, height / 2);
if (mouseIsPressed) {
gameState === 'second';
}
}
function second(){
if (gameState === 'second') {
text('YOU ARE IN A FAMILIAR PLACE', width/2, height/2);
textSize(20);
text('PRESS DOWN ARROW', width/2, height-50);
textSize(40);
if (keyIsPressed === true && keyCode === 40){
gameState = 'third';
}
}
}
function third(){
if (gameState === 'third') {
text('SPACE BAR', width / 2, height / 2);
if (keyIsPressed === true && keyCode === 32){
gameState = 'intro';
}
}
}
function nextScene() {
if (gameState = 'intro') {
} else {
gameState === 'intro';
}
}
}
```
While waiting for Leo's reply I began looking through other students work.
I found this in Alice Lee's work:
``` "javascript"
//initial yes and no buttons
let yes, no;

//continue flag
let continue_game = true;
let yes_no = false;
```
This is a boolean variable and what she had advised me on using on discord. To understand this further I did a bit of lookign online and found this great [website](https://happycoding.io/tutorials/javascript/if-statements) which helped inform me on quite a lot of things.

## 14/2/25
With Leo's advice I decided to restart my code, his reasoning was I was trying to do too much at once and not being able to make sure they work properly. I decided to keep my origional work recorded on this repository because it might be useful to reflect on. This is what Leo said in an email:

> "I recommend starting with the sketch I made for you that uses the if statements in the draw loop. Then gradually add things, one at a time. It seems the approach you're currently taking involves adding multiple new things without testing, which makes it hard for you to know what might be causing the problem."

I followed his advice and he had given me some helpful code to get started with, even sending a slightly updated version that accounted for my desire to use buttons. This was the code he gave:
``` "javascript"
let scene = 0;

function setup() {
  createCanvas(400, 400);
  let button = createButton('change scene');
  button.position(100, 100);
  button.mousePressed(() => {
      scene += 1;
  })
}

function draw() {
    if (scene > 3) {
    scene = 0;
  }

  switch (scene) {
    case 0:
      background(220);
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
  }
}

function scene1(){
  background(255, 0, 0);
}

function scene2(){
  background(0, 255, 0);
}

function scene3(){
  background(0, 0, 255);
}
```
I put this into VS Code and made it work, this felt good to have a foundation. I wanted to then try add a boolean variable, I would use some of the online resources I had plus some of the help I recieved from the Discord. Also I had offhandedly looked into using [HOWLER.JS](https://howlerjs.com) to put music in my work but for now I'm not going to do that because I don't want to get too carried away.

## 16/2/25
- I have successfully figured out how to use functions to make different scenarios which feels amazing. This is the work I have so far managed to get done, whch is incredible because I definately will be able to meet the deadline with all the plots filled out plus if I grind for it I could add images, sound, drawings, extra fiddly bits. Anyway here's the code:
``` "javascript"
let scene = 0;
let WAKE  = true;
let getUp = true;

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

function setup() {
    createCanvas(400, 400);
  let WAKE = createButton('WAKE UP');
  WAKE.position(width/2, height/2);
  WAKE.mousePressed(() => {
    scene = 1;
  })
  
  
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

    
}

}

function scene1(){
  background('red');
  
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
  background('green');
  
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
  background('blue');
// stay in  bed fork
  
  // present lieIn button
  // presnet getUp button
}

function scene4(){
  removeElements();
background('purple');
// kitchen

}

function scene5(){
  removeElements
background('pink');
// town ending make a possible car thing maybe image
}
```
I'm feeling super proud of what I managed to figure out by just experimenting with the different functions, tools on VS Code, and what information I've learnt so far.
I also added this extra bit of code to make the canvas adjust to be whatever size the window is so I can move the buttons placement around more:
``` "javascript"
function setup () {
createCanvas (windowWidth, windowHeight);

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
```
## 17/2/25
- Found this [RGB guide](https://htmlcolorcodes.com/color-names/) for different colours so making my backgrounds really pretty colours.
- Used and image from [this website](https://www.thebookbeat.com/backroom/2024/02/10/i-arrogantly-recommend-by-tom-bowden-46/) which I added for one of the endings.
- Found all of these videos which were all helpful, one by [The Coding Train](https://www.youtube.com/watch?v=zkc417YapfE), one by [Web Dev Simplified](https://www.youtube.com/watch?v=R1S_NhKkvGA), and a third one by [Drew Conley](https://www.youtube.com/watch?v=8i2K7uwh124). The first two were helpful because they offered guidance and insight in create multiple options/scenarios while the one by Drew Conley was helpful because it helped me learn speech bubbles in case I wanted to include, which I think I might for some of the endings in my scenarios.
- Been lookign at the work of other students such as [Andres](https://github.com/Andrefls/Studio_Project), [Alice Lee](https://github.com/glovving/studio-project), and [Sienna](https://github.com/siennabienna/studio_project) all of which are awesome and very inspiring.

## 18/2/25 the big day
- found a drawing of a broken down car on [this stock website](https://www.istockphoto.com/illustrations/drawing-of-broken-car)
- used other various pictures I had downloaded on my laptop or taken on my phone to add for a more detailed and engaging background for the scenes
- took some of [this code](https://editor.p5js.org/datagardenproject/sketches/kol7iMKIb) from [this video exemplar](https://youtu.be/LDKTs-1nwjI?feature=shared) by [The Data Garden Project](https://www.youtube.com/@datagardenproject) which I used to make a sort of glitchy first scene:
``` "javascript"
  if (mouseIsPressed) {
    r = random(255); // r is a random number between 0 - 255
    g = random(100, 200); // g is a random number betwen 100 - 200
    b = random(150); // b is a random number between 0 - 150
    fill(r, g, b);
  }
```
## 19/2/25 have to hand in soon
used [this p5.js website](https://p5js.org/reference/p5.Element/hide/) to make breakable buttons
``` "javascript"
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
```
I also used [this website](https://p5js.org/reference/p5/createA/) to add in links to my piece, used [internet archive](https://archive.org) to get PDF versions of books to use in my work, and [this exemplar](https://editor.p5js.org/dannyrozin/sketches/r1djoVow7) which I found of [this reddit thread](https://www.reddit.com/r/processing/comments/dylqr5/new_to_p5js_and_stuck_on_pdfsvg_exporting/) and it helped me incorporate the PDFs into my work which made me very happy. 
``` "javascript"
  }
  save("mySVG.svg"); // give file name
  print("saved svg");
  noLoop(); // we just want to export once
}
```
This is the code that I used which helped me out so much. So now this is what two of my ending scenes look like:
``` "javascript
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
```
This is the reading ending which has books in it which I think is so cool. This next one is the one which opens up music websites:
``` "javascript"
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
// book5.mouseClicked(() => {
//   save("picture books/Winnie_the_Pooh.pdf"); // give file name
//   print("picture books/Winnie_the_Pooh.pdf");
//   noLoop(); // we just want to export once
//   // book1.open();
// })
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
```

I also wanted to make a cool reaction with an input and so I found [this p5.js example](https://editor.p5js.org/tom.smith/sketches/fASj3inoc) which I think looks awesome. I borrowed this code from it:
``` "javascript"
function drawName() {
  background(100);
  textSize(30);
  var name = input.value();
  for (var i=0; i < 30; i++) {
    fill(random(255));
    text(name, random(width), random(height));
  }
}
```

## 20/2/25 the finish line
For some reason I am having trouble with the sketch and making a website, it leaves me at a blank screen rather than running my code.
![image](https://github.com/user-attachments/assets/6e20fa33-0502-4aac-b468-e9106d50cdb7)
Leo ended up helping me and that was fantastic. I did notice that my sketch work was a save behind so I need to upload my finished sketch file.

## Now my final file looks like this:
``` "javascript"
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
```
