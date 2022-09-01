$(document).ready(function(){

//event listener
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".eventVal").val();
        var time = $(this).parent().attr("id");
        
         // save in localStorage
    localStorage.setItem( time, value);
        
    });

    function hourUpdater() {
        // get current number of hours
        var currentHour = moment().hours();

// loop over time blocks
$(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Audit if time has passed
    if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
        
    });
}


    hourUpdater();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, (1000*60)*30);

    // load any saved data from localStorage
    $("#hour-8 .eventVal").val(localStorage.getItem("hour-8")); 
    $("#hour-9 .eventVal").val(localStorage.getItem("hour-9"));
    $("#hour-10 .eventVal").val(localStorage.getItem("hour-10"));
    $("#hour-11 .eventVal").val(localStorage.getItem("hour-11"));
    $("#hour-12 .eventVal").val(localStorage.getItem("hour-12"));
    $("#hour-13 .eventVal").val(localStorage.getItem("hour-13"));
    $("#hour-14 .eventVal").val(localStorage.getItem("hour-14"));
    $("#hour-15 .eventVal").val(localStorage.getItem("hour-15"));
    $("#hour-16 .eventVal").val(localStorage.getItem("hour-16"));

    //cuurent day
    $("#currentDay").text(moment().format("dddd, MMMM Do"));


});



    // var auditTask = function(taskEl) {
    //     // get date from task element
    //     var date = $(taskEl).find("span").text().trim();
      
    //     // convert to moment object at 5:00pm
    //     var time = moment(date, "L").set("hour", 17);
      
    //     // remove any old classes from element
    //     $(taskEl).removeClass("list-group-item-warning list-group-item-danger");
      
    //     // apply new class if task is near/over due date
    //     if (moment().isAfter(time)) {
    //       $(taskEl).addClass("list-group-item-danger");
    //     }
    //   };

//       // apply new class if task is near/over due date
//   if (moment().isAfter(time)) {
//     $(taskEl).addClass("list-group-item-danger");
//   } 
//   else if (Math.abs(moment().diff(time, "days")) <= 2) {
//     $(taskEl).addClass("list-group-item-warning");
//   }
    // current day on page displayed