function input()
{
var html_entry = document.getElementById("html_box").value;
var css_entry = document.getElementById("css_box").value;
document.getElementById("main").innerHTML = "<style>" + css_entry + "</style>" + html_entry;
localStorage.setItem("GRADE", html_entry);
localStorage.setItem("BPLZ", css_entry);


}