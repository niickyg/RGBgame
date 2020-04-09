var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDis = document.querySelector("#message")
colorDisplay.textContent = pickedColor;

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
            colorChanger();
        }else{
            this.style.backgroundColor = "#232323";
            messageDis.textContent = "Incorrect";
        }
    });
}

//loops through squares changes color to match pickedColor. 
function colorChanger(){
    for (i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = pickedColor;
    }
}

//chooses the color that is the winning color
function pickColor(){
   var random = Math.floor(Math.random() * colors.length)
   return colors[random];
}