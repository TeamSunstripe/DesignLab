
function init() {
    
}


//openURL
function openURL(url,target) {
    
    if( target )
    {
        window.open(url, target); // 新しいタブを開き、ページを表示
    }
    else if ( target === undefined || target == "" )
    {
        window.location.href = url; // 通常の遷移
    }
    else
    {
        window.open(url, '_blank'); // 新しいタブを開き、ページを表示
    }
}

function innerHTMLSettingElementById(element) {
    document.getElementById("display" + element).innerHTML = document.getElementById("target" + element).innerHTML;
    document.getElementById("displayStyle" + element).innerHTML = document.getElementById("style" + element).innerHTML;
}
