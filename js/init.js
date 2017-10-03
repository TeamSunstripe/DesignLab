
function init() {
    
}

function innerHTMLSettingElementById(element) {
    document.getElementById("display" + element).innerHTML = document.getElementById("target" + element).innerHTML;
    document.getElementById("displayStyle" + element).innerHTML = document.getElementById("style" + element).innerHTML;
}
