$(document).ready(function () {
  //current date and time using Day.js
  var currentDate = dayjs().format("dddd, MMMM D");
  var currentTime = dayjs().format("h:mm A");

  //current date and time
  $("#currentDay").text(currentDate);
  $("#currentTime").text(currentTime);

  // Looping for time block
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Compareing the block's hour to the current hour
    if (blockHour < dayjs().hour()) {
      // Past hour
      $(this).removeClass("present future").addClass("past");
    } else if (blockHour === dayjs().hour()) {
      // Present hour
      $(this).removeClass("past future").addClass("present");
    } else {
    }
  });

  //Save button click event
  $(".saveBtn").click(function () {
    var block = $(this).parent();
    var blockHour = block.attr("id").split("-")[1];
    var eventDescription = block.find(".description").val();

    //Save to local storage
    localStorage.setItem("event-" + blockHour, eventDescription);
  });

  //local storage
  $(".time-block").each(function () {
    var blockHour = $(this).attr("id").split("-")[1];
    var eventDescription = localStorage.getItem("event-" + blockHour);

    if (eventDescription !== null) {
      $(this).find(".description").val(eventDescription);
    }
  });
});
