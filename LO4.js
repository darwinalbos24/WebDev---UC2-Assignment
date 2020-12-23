// Objects
var myString = new String();
myString = "hello";
console.log(myString);

    // Shorthand ver
var myString2 = "hi there";
console.log(myString2);

// Creating New Objects
var myCar = new Object();
myCar.maxSpeed = 50 + " is the max speed.";
myCar.driver = "Darwin is the driver";
myCar.velocity = function(speed, time) {console.log(speed * time + " is the velocity of this car.");};

console.log(myCar.driver);
console.log(myCar.maxSpeed);
myCar.velocity(50, 5);

    // Shorthand
var myCar2 =
{
    maxSpeed: 70, 
    driver: "Mando", 
    speed: function(speed, time) 
    {
        console.log(speed * time);
    }
};

console.log(myCar2.maxSpeed + " is the max speed of car 2");
console.log(myCar2.driver + " is the driver of car 2");
myCar2.speed(70, 3);

// THIS keyword
var myCar2 =
{
    maxSpeed: 70, 
    driver: "Mando", 
    speed: function(speed, time) 
    {
        console.log(speed * time);
    },
    test: function()
    {
        console.log(this);
    },
};

myCar2.test();

var myShip = 
{
    driver: "Fennec",
    maxSpeed: 100,
    test: function()
    {
        console.log (this.driver + " is the driver of this ship.")
    },
    whole: function()
    {
        console.log(this);
    }
}

myShip.test();
myShip.whole();

// Constructor Function

var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.velocity = function(speed, time){
        console.log(speed * time + " is the velocity.");
    };
    this.logDriver = function(){
        console.log(this.driver + " is the name of the driver.");
    };
}

var myCar = new Car (50, "Shaun");
var myCar2 = new Car (70, "Grogu");
var myCar3 = new Car (90, "Mando");
var myCar4 = new Car (120, "Darwin");

myCar4.logDriver();
myCar.velocity(70, 5);
console.log(myCar2.maxSpeed + " is the max speed of this car.");

// Date Objects
var birthday = new Date(2000, 4, 24, 7, 30, 45);
var birthday2 = new Date(2000, 4, 24, 7, 30, 45);


console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getFullYear());
console.log(birthday.getHours());
console.log(birthday.getTime());

if (birthday === birthday2) {
    console.log("Birthdays are equal.");
} else {
    console.log("Birthdays are NOT equal.");
}

if (birthday.getTime === birthday2.getTime) {
    console.log("Birthdays are equal.");
} else {
    console.log("Birthdays are NOT equal.");
}

// DOM - Changing page content

    // Getting elements by ID
var myID = document.getElementById("first");
console.log(myID);

var myID2 = document.getElementById("second");
console.log(myID2);

var myClass = document.getElementsByClassName("amber");
console.log(myClass);

    // Changing text content
console.log(myID.textContent);
myID.textContent = console.log("Changed the content using textContent property");

// DOM - Changing element attributes

var text = document.getElementById("second");
text.getAttribute("class");
text.setAttribute("class", "white");
console.log(text);


