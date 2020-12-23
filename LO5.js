// Changing CSS styles
var title = document.getElementById("first");
console.log(title);

title.setAttribute("style", "position: relative");

title.style.backgroundColor = "yellow";

var title2 = document.getElementById("second");
console.log(title2);

title2.setAttribute("style", "left: 50px");
title2.style.backgroundColor = "red";

var title3 = document.getElementById("third");
console.log(title3);

title3.style.backgroundColor = "green";


// Adding new elemetns to the DOM

var newH1 = document.createElement("h1");
var menu = document.getElementById("first");

menu.appendChild(newH1);
newH1.innerHTML = "Newly added element";

var add = document.createElement("h2");
var here = document.getElementById("second");

here.appendChild(add);
add.innerHTML = "Newly added h2 tag";


// Removing elements to the DOM
var parent = document.getElementById("second");
console.log(parent);

var child = parent.getElementsByTagName("h2")[0];
console.log(child);

var removed = parent.removeChild(child);

// Introduction to JavaScript events

var click = document.getElementById("button");
click.onclick = function(){
    alert("You clicked me!");
};

var hover = document.getElementById("button2");
hover.onmouseover = function(){
    alert("You hovered over me!");
};

// On Click event

var sample = document.getElementById("sample");
 
sample.onclick = function(){

    if (sample.onclick) {
        sample.style.backgroundColor = "yellow"
        sample.innerHTML = "Change successful! Refresh to revert"}
};

// JavaScript Timers

var textChanger = document.getElementById("changer");
var text = ["See?", "Cool, right?", "Hehehe", "Watch me again"];
var counter = 0;

function magic(){
    if (counter >= text.length){
        counter = 0;
    }
    textChanger.innerHTML = text[counter];
    counter++;
};

setInterval(magic, 3000);


// Accessing Form Elements
var myForm = document.getElementById("my-Form");
var myName = document.getElementById("legit");

myName.onfocus = function(){
    myName.style.border = "4px solid yellow";
};

myName.onblur = function(){
    myName.style.border = "";
};

// Validating Forms

var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function(){

    if (myForm.value == ""){
    submit.innerHTML = "Please enter a name.";
    } else{
        message.innerHTML = "";
    }
};