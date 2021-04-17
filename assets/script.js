
//      Psuedo Code
//Set up Variables 
//-JQuery select DOM elements
//1.Display Current Date in header
$('#currentDay').text(dayjs().format('MMMM Do, YYYY'));
//  Get current Date
var currentTime= dayjs();
currentTime = currentTime.startOf("hour");
var beforeTime = dayjs().startOf('day').add(9,"hours");
//2. Render Time Blocks
//    *Read any commitments from localstorage
//    * create input filed
//    * Create "SAVE" button
//      Add CSS Classes for style
            //Determine if timeblock is 'past', 'present' or 'future'
//      Add text/value from localstorage
//      Append to DOM
//      Add to local variable 
 //3. Event Handler for "SAVE"
//      When a user enters text into field then user clicks *Matching* save button save the related input field into local storage
//      Display notification/toast when the save is complete

/// Save Entry to local storage

function timeBlockColor(){
    var hour = dayjs().hours();
    $(".form-control").each(function(){
        var currentHour = parseInt($(this).attr("id"));
        if (currentHour> hour){
            $(this).addclass("future");
        } else if (currentHour === hour){
            $(this).addclass("present");
        } else{
            $(this).addclass("past");
        }
    })
    console.log(timeBlockColor)
}
$('.saveBtn').click(function(){
    event.preventDefault();
    var formValue = $(this).siblings(".form-control").val();
    console.log("Form Value");
    var listItem= $(this).parent().data('time')
    localStorage.setItem(listItem, formValue)
    console.log("timeValue")
})
