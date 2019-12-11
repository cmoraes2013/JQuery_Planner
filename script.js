//First we need to display the current day/time.
function timer(){
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(timer, 1000);

//Hour by Hour variables.
var saveBtn = document.querySelector(".saveBtn");
var todo9 = document.querySelector("#toDoNine");
var todo10 = document.querySelector("#toDoTen");
var todo11 = document.querySelector("#todoEleven");
var todo12 = document.querySelector("#todoTwelve");
var todo13 = document.querySelector("#toDoThirteen");
var todo14 = document.querySelector("#toDoFourteen");
var todo15 = document.querySelector("#toDoFifteen");
var todo16 = document.querySelector("#toDoSixteen");
var todo17 = document.querySelector("#toDoSeventeen");

//Displays the To Do list into local storage.
function displayResults(){
    $("#toDoNine").text(localStorage.getItem("9"));
    $("#toDoTen").text(localStorage.getItem("10"));
    $("#toDoEleven").text(localStorage.getItem("11"));
    $("#toDoTwelve").text(localStorage.getItem("12"));
    $("#toDoThirteen").text(localStorage.getItem("13"));
    $("#toDoFourteen").text(localStorage.getItem("14"));
    $("#toDoFifteen").text(localStorage.getItem("15"));
    $("#toDoSixteen").text(localStorage.getItem("16"));
    $("#toDoSeventeen").text(localStorage.getItem("17"));
}
displayResults();
// We need to store the information in the To Do list when the save button is clicked to our local storage
// for user to refer back to on the screen.
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var buttonTime = $(this).val();
    var userToDo = $("textarea.text"+ buttonTime).val();
    console.log(buttonTime);
    console.log(userToDo);
    localStorage.setItem(buttonTime, userToDo);
      
    });

// Lastly, we need to color code the to-do items from the past, present, and future by
// comparing the current time to the time the to-do needs to be done.

$(".saveBtn").each(function(i, element){
    var currentTime = moment().hour();
    var dayTime = parseInt($(this).val());
    var index = i + 9;

     if(currentTime > dayTime){  
     $(".time"+index).addClass("past");


     } else if (currentTime < dayTime){
     $(".time"+index).addClass("future");

    } else{
     $(".time"+index).addClass("present");

    }

})

