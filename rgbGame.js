var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDis = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");


colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateRandomColors(6);
    //pick new random color from array
    pickedColor = pickColor();
    //change display to the new picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (i = 0; i < squares.length; i ++){
        squares[i].style.backgroundColor = colors [i];
    }
    h1.style.backgroundColor = "#232323"

});

for (i = 0; i<squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor){
            squares.backgroundColor === pickedColor;
            messageDis.textContent = "correct";
            colorChanger(pickedColor);
            h1.style.backgroundColor = pickedColor;
        }else{
            this.style.backgroundColor = "#232323";
            messageDis.textContent = "Incorrect";
        }
    });
}

//loops through squares changes color to match pickedColor. 
function colorChanger(color){
    for (i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

//chooses the color that is the winning color
function pickColor(){
   var random = Math.floor(Math.random() * colors.length)
   return colors[random];
}

function generateRandomColors(num){
    //make array
    var arr = [];
    //repeat "num" times
    for (i =0; i<num; i++){
        //get color and put it into array;
       arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
   //red green and blue all need 0 to 255
   var r = Math.floor(Math.random() * 256);

   var g = Math.floor(Math.random() * 256);

   var b = Math.floor(Math.random() * 256);

   return "rgb(" + r + ", " + g + ", " + b + ")";
}
//this is a simple change to for practice reinitilizing a repository