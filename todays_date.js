var today = new Date();
var month = today.getMonth()+1;
var date = today.getDate();
var year = today.getFullYear();

var month_display;


if(month == 1) {
    month_display = "January";
}

else if(month == 2) {
    month_display = "February";
}

else if(month == 3) {
    month_display = "March";
}

else if(month == 4) {
    month_display = "April";
}

else if(month == 5) {
    month_display = "May";
}

else if(month == 6) {
    month_display = "June";
}

else if(month == 7) {
    month_display = "July";
}

else if(month == 8) {
    month_display = "August";
}

else if(month == 9) {
    month_display = "September";
}

else if(month == 10) {
    month_display = "October";
}

else if(month == 11) {
    month_display = "November";
}

else if(month == 12) {
    month_display = "December";
}

var elMonth = document.getElementById("todays_date");
elMonth.textContent = "Today is: " + month_display + " " + date + ", " + year; 

console.log(month_display);