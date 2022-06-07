// Display the current date using moment.js
var date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date);

// Function to color code the time blocks
function colorCodeTimeBlocks() {
  // getting the current hour
  let currentHour = parseInt(moment().format("H"));

  // for each text area, we check the time block and the current time to add the class that sets the background color
  $("textarea").each(function(){
    let textareaTime = parseInt($(this).attr("id"));
    
    if (textareaTime < currentHour) {
      $(this).addClass("past");
    } else if (textareaTime === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");        
    }      
  });
}

// when the save icon is clicked, we store the taak and the id in local storage
$(".fas").click(function(e) {   
  let taskId = $(this).parent().parent().attr("id");
  let task = $(this).parent().prev().val().trim();
    
  if (task) {
    localStorage.setItem(taskId,task);
    // Display success message
    $(".message").removeClass("d-none");
    $(".message").addClass("d-block");

    // Remove the message after 2 seconds
    setTimeout(() => {
      $(".message").removeClass("d-block");
      $(".message").addClass("d-none");      
    }, "2000")   
  }  
})

// when the page is opened or refreshed, we get the tasks stored in local storage and display them in their corresponding time blocks
function displayTasks() {
   
  $("textarea[id='8']").val(localStorage.getItem("8"));
  $("textarea[id='9']").val(localStorage.getItem("9"));
  $("textarea[id='10']").val(localStorage.getItem("10"));
  $("textarea[id='11']").val(localStorage.getItem("11"));
  $("textarea[id='12']").val(localStorage.getItem("12"));
  $("textarea[id='13']").val(localStorage.getItem("1"));
  $("textarea[id='14']").val(localStorage.getItem("2"));
  $("textarea[id='15']").val(localStorage.getItem("3"));
  $("textarea[id='16']").val(localStorage.getItem("4"));
  $("textarea[id='17']").val(localStorage.getItem("5"));
  $("textarea[id='18']").val(localStorage.getItem("6"));
  
}

// calling the colorCodeTimeBlocks and the displayTasks functions
colorCodeTimeBlocks();
displayTasks();