
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;


document.getElementById("name-display").innerHTML = name;
document.getElementById("email-display").innerHTML = email;
document.getElementById("message-display").innerHTML = message;


var queryString = window.location.search;


var params = new URLSearchParams(queryString);


var name = params.get("name");
var email = params.get("email");


document.getElementById("name-display").innerHTML = name;
document.getElementById("email-display").innerHTML = email;




