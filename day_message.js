var today = new Date();
var day = today.getDay();
var day_message;

if(day == 1) {
    day_message = "Ugh, it's Monday";
}

else if(day == 2) {
    day_message = "T..t..t..t..Tuesday";
}

else if(day == 3) {
    day_message = "HUMP DAY. It's Wednesday";
}

else if(day == 4) {
    day_message = "We're almost there, it's Thursday";
}

else if(day == 5) {
    day_message = "Yipee!! FRIDAY!!";
}

else if(day == 6) {
    day_message = "Aaah.. Saturday";
}

else if(day == 7) {
    day_message = "Sunday Funday";
}

var elDay = document.getElementById("day_message");
elDay.textContent = day_message;

console.log(day_message);