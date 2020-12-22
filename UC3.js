// Break and Continue
for (i = 0; i <= 10; i++)
{
    if (i === 3 || i === 5)
    {
        continue;
    }

    if (i === 10)
    {
        break;
    }
    
    console.log(i);
    
}
 console.log("Stop the loop");

//  Practical Example of Loop

var links = document.getElementsByTagName ("a");
{
    for (i = 0; i < links.length; i++)
    {
        links[i].className = "link-" + i;
    }
}

// Functions

function getAverage (a,b)
{
    var average = (a + b) / 2;  //Local variable (inside a function)
    console.log("The average is " + average);
    return average;
}

var myResult = getAverage (12,2); //Global Variable (outside a function)

// Math and Numbers

var a = 5;
var b = 10;

console.log(a + b);
console.log(Math.round (7.8));
console.log(Math.round (7.2));
console.log(Math.PI);

// Checking for NaN (Not a Number)

var a = "5";
var b = 5;

if (isNaN(a))
{
    console.log("The value inside is not a number");
}
else
{
    console.log("It is a number");  
}

// Strings

var myString = 'I\'m a "fun" string'

console.log(myString.length + " is the length of myString");

var myString = 'I\'m a "fun" string'

console.log(myString.indexOf("fun"));

var myString = 'I\'m a "fun" string'

console.log(myString.toUpperCase(""));

// Slice and Split Strings

    // Slice
var str = "hello, world!";
var str2 = str.slice(2, 9);
console.log(str2);

    // Split
var meats = "ham, pork, steak";
var meatsArray = meats.split(",");
console.log(meatsArray);

// Arrays

var myArray = [10, 20, 30, "word", true];
console.log(myArray);

var myArray2 = [2];
console.log(myArray2);

var myArray3 = [3];
console.log(myArray3);

var myArray4 = [4, 5, 6];
console.log(myArray4.length + " is the length of myArray4");





