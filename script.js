var userName = prompt("Enter Your UserName");
var passWord = prompt("Enter Your password");


if (userName == "imam" && passWord == "25august") {
    window.location.href = "start.html";
} else {
    alert("invalid details");
    window.location.href = "index.html";
}