
// A 
function absolutePath(path)
{
    var e = document.createElement('span');
    e.innerHTML = '<a href="' + path + '" />';
    return e.firstChild.href;
}



function init() {
    
}

//CopyRight
function displayCopyRightInfo()
{
    var copyrightHTML = "";
    var element = document.createElement("div");
    html = "";
    element.id = footerInfo.copyrightInfo.ID;
    var establishmentDate = new Date(footerInfo.copyrightInfo.establishmentDate);
    html += '&copy; Copyright ';
    html += '<a href="' + footerInfo.copyrightInfo.URL + '">';
    html += establishmentDate.getFullYear();
    html += ' - ';
    //年・月・日・曜日を取得する
    html += new Date().getFullYear();
    html += ' ';
    html += footerInfo.copyrightInfo.title + '</a>';
    html += ' ';
    html += 'All rights reserved.';
    element.innerHTML = html;
    
    // DEBUG
    //alert(JSON.stringify( footerInfo.copyrightInfo ));
    copyrightHTML = element.outerHTML;
    //alert(copyrightHTML);
    return copyrightHTML;
}

// Footer
function displayFooterInfo()
{
    var footerHTML = "";
    
    // パンくず
    var mainMenusHTML = makeHTMLLinks( footerInfo.main_menus ,{ title:' > ' , type : "pan" } );
    footerHTML += mainMenusHTML;
    
    footerHTML += '<br />';
    
    // パンくず
    var subMenusHTML = makeHTMLLinks( footerInfo.sub_menus ,{ title:' > ' , type : "pan" } );
    footerHTML += subMenusHTML;
    footerHTML += '<footer>';
    
    var contentsMenusHTML = makeHTMLLinks( footerInfo.contents_menus ,{ title:'' , type : "list_first" } );
    footerHTML += contentsMenusHTML;
    footerHTML += '<hr class="nonline clearBoth">';
    footerHTML += displayCopyRightInfo();
    footerHTML += '</footer>';
    return footerHTML;
}

function makeHTMLLinks( menus , decoration)
{
    var html = "";
    for (var num in menus) {
        var menu = menus[num];
        
        if (decoration) {
            if (decoration.type == "list_first")
            {
                html += '<ul>';
                html += '<li>';
                html += decoration.title;
            }
        }
        
        html += '<a class="main_menu" href="';
        if (menu.URL)
        {
            html += menu.URL;
        }
        else if (menu.url)
        {
            html += absolutePath( menu.url );
        }
        html += '">';
        html += menu.title;
        html += '</a>';
        if (decoration) {
            if (decoration.type == "pan") {
                //最後の > 飾り文字つけない
                if (num < menus.length - 1)
                {
                    html += decoration.title;
                }
            }
            if (decoration.type == "list_first")
            {
                html += '</li>';
                html += '</ul>';
            }
        }
    }
    return html;
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
