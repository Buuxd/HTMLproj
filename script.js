function input()
{
var html_entry = document.getElementById("html_box").value;
		var css_entry = document.getElementById("css_box").value;
			document.getElementById("main").innerHTML = "<style>" + css_entry + "</style>" + html_entry;
			localStorage.setItem("html", html_entry);
		localStorage.setItem("css", css_entry);
window.addEventListener("load", recoverPreviousPage)
function onload(){
	var relthml = localStorage.getItem("html");
	var relcss = localStorage.getItem("css");
	document.getElementById("html_box").value = relthml;
	document.getElementById("css_box").value = relcss;
	
	
	
	}
}


