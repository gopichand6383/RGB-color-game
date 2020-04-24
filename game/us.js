var numofsqrs=6;
var colors= RandomColors(numofsqrs);
var squares =document.querySelectorAll(".square");
var pickedColor = pickColor();
var colordisplay =document.querySelector("#colordisplay");
var display = document.querySelector("#statement");
var h1 =document.querySelector("h1");
var easybtn =document.querySelector(".easybtn");
var hardbtn =document.querySelector("#hardbtn");
var resetbtn =document.querySelector("#resetbtn");
easybtn.addEventListener("click" , function()
	{
numofsqrs=3;
colors= RandomColors(numofsqrs);
pickedColor = pickColor();
easybtn.classList.add("selected");
hardbtn.classList.remove("selected");


  		display.textContent="";

 for( var i=0; i<squares.length; i++)
 {
 if(colors[i]){
 	squares[i].style.backgroundColor =colors[i];
 }
 else
{
	squares[i].style.display="none";
}
}	

h1.style.backgroundColor="steelblue";
});


hardbtn.addEventListener("click" , function()
	{
		numofsqrs=6;
colors=RandomColors(numofsqrs);
pickedColor = pickColor();
hardbtn.classList.add("selected");
easybtn.classList.remove("selected");
 		display.textContent="";


for( var i=0; i<squares.length; i++)
 {
 
 	squares[i].style.backgroundColor =colors[i];
	squares[i].style.display="block";

}	
	});

resetbtn.addEventListener("click" , function(){
 colors= RandomColors(numofsqrs);
numofsqrs=3;  
 pickedColor = pickColor(); 
colordisplay.textContent=pickedColor;
resetbtn.textContent="Newcolors";
display.textContent="";

for( var i=0; i<squares.length; i++)
 {
 	squares[i].style.backgroundColor =colors[i];
}
h1.style.backgroundColor="steelblue";
}); 

colordisplay.textContent=pickedColor;

 for( var i=0; i<squares.length; i++)
 {
 	squares[i].style.backgroundColor =colors[i];

 squares[i].addEventListener("click" , function()
{
 
 var clickedcolor = this.style.backgroundColor;

 if(clickedcolor === pickedColor){
changecolors(clickedcolor);
 	//alert("correct");
 
 	display.textContent="correct!"
 		resetbtn.textContent="playagain"
 		display.textContent="";

 	h1.style.backgroundColor=clickedcolor;
 }
else
{
	//alert("wrong  dccolor");

	this.style.backgroundColor= "steelblue";
	display.textContent= "try again!"
}
});
}


function changecolors(color){


	for(var i=0; i<squares.length; i++)

		squares[i].style.backgroundColor=color;
}



//function pickcolor(){
//	var random =Math.floor(Math.random() * colors.length);
//	return colors[random];
//}

var colors= RandomColors(6);
 
 var squares =document.querySelectorAll(".square");

var pickedColor = pickColor();
var colordisplay =document.querySelector("#colordisplay");
 
 var display = document.querySelector("#statement");

colordisplay.textContent=pickedColor;

 for( var i=0; i<squares.length; i++)
 {
 	squares[i].style.backgroundColor =colors[i];

 squares[i].addEventListener("click" , function()
{
 
 var clickedcolor = this.style.backgroundColor;

 if(clickedcolor === pickedColor){
changecolors(clickedcolor);
 	//alert("correct");
 	display.textContent="correct!"
 }
else
{
	//alert("wrong  dccolor");

	this.style.backgroundColor= "#232323";
	display.textContent= "wrong!"
}
});
}


function changecolors(color){


	for(var i=0; i<squares.length; i++)

		squares[i].style.backgroundColor=color;
}



//function pickcolor(){
//	var random =Math.floor(Math.random() * colors.length);
//	return colors[random];
//}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];

}

function RandomColors(num){

  var arr = [];

	for(var i=0; i<num; i++)
	{

		 arr.push(rgbgrid());
}
return arr;
}

function rgbgrid()
{

	var r =Math.floor(Math.random()*256);
	var g =Math.floor(Math.random()*256);
	var b =Math.floor(Math.random()*256);
return "rgb(" + r + ", " + g + ", " + b + ")";

}