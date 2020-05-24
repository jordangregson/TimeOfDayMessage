var num = 99.5678;

var msg = "<p>The number is: " + num + "</p>";
msg += "<p>The number rounded is: " + num.toFixed(0) + "</p>";



var elMsg = document.getElementById("rounding_num");
elMsg.innerHTML = msg;