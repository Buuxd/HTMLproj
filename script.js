



document.getElementById("html_box").addEventListener("input", update);
document.getElementById("css_box").addEventListener("input", update);

function input()
{
var html_entry = document.getElementById("html_box").value;
var css_entry = document.getElementById("css_box").value;
document.getElementById("main").innerHTML = "<style>" + css_entry + "</style>" + html_entry;
}


function update() {
  xp.html = html_box.value; // get updated user values
  xp.css = css_box.value;
  xp.input(); // render the new html area
}




