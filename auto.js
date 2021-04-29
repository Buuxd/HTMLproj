// JavaScript Document

function checkKeypress(elem, evt) {
    var txtBef = elem.value.slice(0, elem.selectionEnd);
    var txtAft = elem.value.slice(elem.selectionEnd, elem.value.lenth);
    var lastString = txtBef
        .replace(/\s+/g, " ") 
        .split(" ");
    lastString = lastString[lastString.length - 1];
    
    if(evt.key == ">"){
        if(lastString.includes("<")){
            var addClose = lastString.replace(/[< >]/g, ""); 
            elem.value = txtBef+"  </"+addClose+">"+txtAft; 
            elem.selectionEnd = txtBef.length + 1; 
		}
	}
}