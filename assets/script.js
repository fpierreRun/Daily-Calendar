

$(document).ready(function(){


    $(".btn").on("click", function(){
        var eventVal = $(this).siblings(".eventVal").val();
        var time = $(this).parent().attr("id");
        console.log (click)

         // save in localStorage
    localStorage.setItem(time, eventVal);
        
    });

    function hourUpdater() {
        // get current number of hours
        var currentHour = moment().hours();

// loop over time blocks
$(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Audit if time has passed
    if (blockHour < currentHour) {
        $(this).addClass(".bg-warning");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("bg-secondary");
        $(this).addClass("bg-success");
      } 
      else {
        $(this).removeClass("bg-secondary");
        $(this).removeClass("bg-success");
        $(this).addClass("bg-light");
      }
 // load any saved data from localStorage
 
 $("#hour-9 .description").val(localStorage.getItem("hour-9"));
 $("#hour-10 .description").val(localStorage.getItem("hour-10"));
 $("#hour-11 .description").val(localStorage.getItem("hour-11"));
 $("#hour-12 .description").val(localStorage.getItem("hour-12"));
 $("#hour-13 .description").val(localStorage.getItem("hour-13"));
 $("#hour-14 .description").val(localStorage.getItem("hour-14"));
 $("#hour-15 .description").val(localStorage.getItem("hour-15"));
 $("#hour-16 .description").val(localStorage.getItem("hour-16"));
      
    });
}


hourUpdater();


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