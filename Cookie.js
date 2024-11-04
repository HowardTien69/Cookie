function clickfun() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("password").value;

    var textElement = document.getElementById("textToShow");
    textElement.style.display = "inline-block";
    
    if (username === "" && password === "") {
        textElement.innerHTML = "Incorrect, Try Again";
    } else {
        textElement.innerHTML = "User Accepted";

        setTimeout(function() {
            window.location.href = 'Cookie2.html';
        }, 1100);
    }
}
