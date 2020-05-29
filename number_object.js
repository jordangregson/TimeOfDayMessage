var num = 99.5678;

var msg = "<p>The number is: " + num + "</p>";
msg += "<p>The number rounded is: " + num.toFixed(0) + "</p>";
msg += "<p>The whole number is: " + Math.floor(num) + "</p>";



var elMsg = document.getElementById("rounding_num");
elMsg.innerHTML = msg;