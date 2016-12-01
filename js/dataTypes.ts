var myName: string = "Sanyam";
var myAge: number = 12;
var canVote: boolean = true;
var anything: any = "dog";
anything = 123;

document.getElementById("key").innerHTML = "My name is " + myName;

document.write("canVote is a " + typeof (canVote) + "<br />");
document.write("myName is a " + typeof (myName) + "<br />");
document.write("anything is a " + typeof (anything) + "<br />");

var strToNum: number = parseInt("5");
var numToStr: number = 5;
document.write("numToStr is a " + typeof (numToStr.toString()) + "<br />");

const PI = Math.PI;
