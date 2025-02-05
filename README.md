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

## 4/2/25
- I have a trip I'm going on coming up from 7/2/25 to 9/2/25 so I need to make sure I do the work from week 4 and some of week 5 so I remain on target. That means I need to deside on and idea and a design for my code.
- I think I will do something like I saw [Alice Lee](https://github.com/glovving/workshop-task-4) and [Sienna](https://github.com/siennabienna/workshop_4) do, first I will try add a title screen, then I think I will try make some buttons and maybe pictures. 
- Ideally I'd like to have a narative like one of the [Olia Lialina]([https://pad.profolia.org/agatha) pieces I've researched, making things interesting and compelling for the viewer/user/participant. To do this I think first I will visit the code of Sienna and Alice Lee, then I will research for any guides on [p5.js Tutorials](https://p5js.org/tutorials/) or elsewhere before starting to make the skeleton of a code and then [writing a story for it](https://watermark.silverchair.com/002409404772827987.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAA00wggNJBgkqhkiG9w0BBwagggM6MIIDNgIBADCCAy8GCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMAo65lef9MyYhFynVAgEQgIIDAMn28VuRFUdJ104M1icZEHw86MOrKU67AguThLlih9JEhh7oyVcqiGAyHJTO_Y2ZtQ1XetaePD24d11o8krajFK9vzvJ9q0FQdJZsIgBMEw6l663oTcfdU64zYDOmpmjR8NE8kBnGARPid709kbAyUTRWUX5JxoiECdcMAC9_3ZLL-HqZprQ-nthuqh58JiLUfBXuYVeTrIPKDxubVM1u7BDX9Id-Cprbw05NE3Q9NrVs_uuRr350TxPjFnQr5G4CRWPIR6qdGahSftybIXsWEgPkdf13gCIsYg5Str_MigFOrYCvB99uVKZvlFP6ydqCJYZV1SO4t4g0KfuQOUfOgtmJ3iu9oepABmBSATs6bZAnleD5-fyrYLk1t946PAKD-xBfCrkGIbArAi_UvW-l-1ZNe2tXT2nPDBcIkziYd4lFJVLdL7YJvmqOblFMI7ucBxI30YWgO-dezDO4fIj4OT4ohk0hMp2psWYaIz6J3AEndWTNT6KUBue3-3shdflEvN65EPuKLLMcvM6FjdIZEFz0I2wrSaQY-KxUQoFyoC54ud4epSH6zPU9LW-TH9cRB1fryKFa1Z5YGbxIFdcZrXy1KpaVguzttqPFLlpN8e1zD983ontjFSmKhZBfmgY9TD8uA7MPSuhA_wjhOnXRuhmc8WtM0v4EEWKLTsdQOmuJIR04QbpSL_ijdij43adVXcN2aH-lKzzUpaJjMhUj6Y-7PB2vr5MKQc3Rk0LDWI7hN56d9ohKjP--USzn0WZ5tyyB87UiIqzABb2DBVD04xUlnW7YV4Gl9Yj0JRI8LirfDmmcQ9ETHexaxeTIrBlBgHIyxa_yJ7YQMHjJghlFCO-MiijJ55UUxsVZ2o762GFIf-HC6QsuOon8YGfD0bBjtu4AjHY7oeTJ_dUv697H7ZtsE_AMl34zbNV1ynDT8iW9hJJLR_9E1la1j5SPXP4Ib3WIMwUEWVZFNG4GrH4wRdld3K9AH09FFb5HIGTBFdo23mPUILibRxqZmCGl-OxUA). 
- First I am going to see how to make scenario tree for different events that happen so I need to make a story that gets enacted with each scenario all being coded in it. WIll do reseach for it on p5.js and if I need will search for it online.
- I asked Leo about forking someone elses code and he said we'd need to talk about it
<img width="575" alt="Screenshot 2025-02-04 at 6 27 06 PM" src="https://github.com/user-attachments/assets/19ff7bd9-502f-4606-9b8c-e1d98aae5490" />

### My intention would to be to either fork on of Alice Lee or Sienna's works to then figure out how to make scenarios, however I am worried that it will be mostly copying on my behalf so I will find an alternative before presenting what ideas I have to him.
- Other ideas I had included youtube videos to help generate scenarios that would help create some sort of story narrative, I will talk to Leo about this but I feel upon reflection in might be worth not forking work but instead finding the pieces I need in others code or guides and then making sure to appropriately code and reference the help I got. [This video](https://www.youtube.com/watch?v=cQNyYx2fZXw&list=PLCAMRz6LHBZ8zgbUgDWiW0hnxy6bbfQCA&index=9) was sort of the inspiration to grind out the code so that I understood it rather than trying to cut corners which I feel I have done previously.

## 5/2/25
- I have found this incredible [p5.js example](https://editor.p5js.org/mbardin/sketches/lSYhg5Xr) of different game states which is incredible because it will help me make different scenarios without havning to code too much with HTMl or CSS as I've seen with some other advice given online.
