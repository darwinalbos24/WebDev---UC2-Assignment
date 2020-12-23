// Math Operators
var num = 5
var num  = num + 5
var num = num - 10
var num = num * 2
var num = 10
num++
var num = num + 1
var num = num / 2

document.write (num);
console.log (num);

// Booleans

var iLikeMeat = true
var iLikeMeat = false
document.write (iLikeMeat);
console.log (iLikeMeat);

// If-Else Statements

    // Value is True
var youLikeMeat = true;

if (youLikeMeat)
{
    document.write("The value is accepted.");
}
else
{
    document.write("The value is not accepted.");
}

    // Value is False
var youLikeMeat = false;

if (youLikeMeat)
{
    document.write("The value is accepted.");
}
else
{
    document.write("The value is not accepted.");
}


    // Value is True
var num = 10;

if (num == 10)
{
    document.write("This number is accepted.");
}
else
{
    document.write("This number is not accepted.");
}
    // Value is False
var num = 10;

if (num < 8)
{
    document.write("This number is accepted.");
}
else
{
    document.write("This number is not accepted.");
}

// Else-If Statement

var myAge = 20;

if (myAge > 30) 
{
    document.write("Tito/Tita of Manila kana!");
}
else if (myAge > 20)
{
    document.write("Millennial pa!");
}
else if (myAge > 10)
{
    document.write("Generation Z ka!");
}
else
{
    document.write("May gatas kapa sa labi utoy!");
}

// Logical Operators

    // And
var edad = 54;

if (edad > 18 && edad < 60)
{
    document.write("Pwede lumabas");
}
else
{
    document.write("Bawal Lumabas!");
}

    // Or
var myAge = 30;

if (myAge < 18 || myAge < 25)
{
    document.write("Working");
}
else{
    document.write('Not working');
}

// While Loops

var age = 3;

while (age < 5)
{
    document.write("Continue the loops");
    age++;
}
    document.write("Stop");

// For Loops

for (age = 3; age < 5; age++)
{
    document.write("This is For Loop");
}
    document.write("Stop For Loop");




