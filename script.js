//First we need to display the current day/time
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
//Hour by Hour variables
var saveBtn = document.querySelector(".saveBtn");
var todo9 = document.querySelector("#toDoNine");
var todo10 = document.querySelector("#toDoTen");
var todo11 = document.querySelector("#todoEleven");
var todo12 = document.querySelector("#todoTwelve");
var todo1 = document.querySelector("#toDoOne");
var todo2 = document.querySelector("#toDoTwo");
var todo3 = document.querySelector("#toDoThree");
var todo4 = document.querySelector("#toDoFour");
var todo5 = document.querySelector("#toDoFive");
//Empty arrays for user input by hour
var userNine = [];
var userTen = [];
var userEleven = [];
var userTwelve = [];
var userOne = [];
var userTwo = [];
var userThree = [];
var userFour = [];
var userFive = [];
//


// Next, we need to color code the to-do items from the past, present, and future
// by putting all the hourly to-do's into an array


// //We need to store the information in the To Do list when the save button is clicked
// $(".saveBtn").on("click", function()){

// }



// function saveToDo(){
//     localStorage.setItem("userNine");
// }