var today = new Date();
var hour = today.getHours();
var good_blank;
var time_of_day;

if(hour > 18) {
    good_blank = "Good Evening!";
    time_of_day = "Have a great night";
}

else if(hour > 12) {
    good_blank = "Good Afternoon!";
    time_of_day = "Have a great afternoon";
}

else if(hour => 0) {
    good_blank = "Good Morning!";
    time_of_day = "Have a great day";
}

var elGood_Blank = document.getElementById("good_blank");
elGood_Blank.textContent = good_blank;

var elTime_Of_Day = document.getElementById("time_of_day");
elTime_Of_Day.textContent = time_of_day;