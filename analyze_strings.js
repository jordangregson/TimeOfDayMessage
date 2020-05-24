var name = "Jordan Gregson";
var msg = "<p>Word: " + name + "</p>";
msg += "<p>Length: " + name.length + "</p>";
msg += "<p>UPPER CASE: " + name.toUpperCase() + "</p>";
msg += "<p>lower case: " + name.toLowerCase() + "</p>";

var elMsg = document.getElementById("analyze_strings");
elMsg.innerHTML = msg;