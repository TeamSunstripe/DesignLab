var db = [];

    function db() {
    
    }

/* adData */

var adData = [
              {
              "image":"./images/ad50.png",
              "url":"./images/ad50.png",
              "title":"sample",
              "type":"ad50",
              },
              {
              "image":"./images/ad50.png",
              "url":"./images/ad50.png",
              "title":"sample",
              "type":"ad50",
              },
              {
              "image":"./images/ad50.png",
              "url":"./images/ad50.png",
              "title":"sample",
              "type":"ad50",
              },
              {
              "image":"./images/ad50.png",
              "url":"./images/ad50.png",
              "title":"sample",
              "type":"ad50",
              },
              {
              "image":"http://suumo.jp/edit/rewrite/help/img/logo_suumo_l.gif",
              "url":"http://suumo.jp/",
              "title":"sample",
              "alt":"リクルートの不動産・住宅サイト SUUMO(スーモ)",
              "type":"ad100",
              },
              {
              "image":"./images/ad50.png",
              "url":"./images/ad50.png",
              "title":"sample",
              "type":"ad50",
              },
              {
              "image":"./images/ad50.png",
              "url":"./images/ad50.png",
              "title":"sample",
              "type":"ad50",
              },
              {
              "image":"./images/ad50.png",
              "url":"./images/ad50.png",
              "title":"sample",
              "type":"ad50",
              },
              {
              "image":"./images/ad50.png",
              "url":"./images/ad50.png",
              "title":"sample",
              "type":"ad50",
              },
              {
              "image":"./images/ad50.png",
              "url":"./images/ad50.png",
              "title":"sample",
              "type":"ad50",
              },
              {
              "image":"./images/ad50.png",
              "url":"./images/ad50.png",
              "title":"sample",
              "type":"ad50",
              },
              {
              "image":"./images/ad100.png",
              "url":"./images/ad100.png",
              "title":"sample",
              "type":"ad100",
              },
              ];
function displayAdData() {
    var html = "";
    for (var i = 0;i < adData.length; i++) {
        html += "<a href='" + adData[i].url + "' target='_brank'>";
        html += "<div class='" + adData[i].type + "'>";
        html += "<img src='" + adData[i].image + "' alt='" + adData[i].alt + "' style='width:100%;'/>";
        html += "</div>";
        html += "</a>";
    }
    return html;
}

/* entryData */

var entryData = [
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 {
                 "url":"./images/ad50.png",
                 "title":"sample",
                 "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                 },
                 ];
function displayEntryData() {
    var html = "";
    for (var i = 0;i < entryData.length; i++) {
        html += "<a href='" + entryData[i].url + "' target='_brank'>";
        html += "<div style='padding-left:5px;'>";
        html += "<h4>" + entryData[i].title + "</h4>";
        html += "<p class='entry'>" + entryData[i].subject + "</p>";
        html += "</div>";
        html += "</a>";
        html += "<hr />";
        
    }
    return html;
}

/* pickUpData */
var pickUpData = [
                  {
                  "url":"./images/ad50.png",
                  "title":"sample",
                  "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                  },
                  {
                  "url":"./images/ad50.png",
                  "title":"sample",
                  "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                  },
                  {
                  "url":"./images/ad50.png",
                  "title":"sample",
                  "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                  },
                  {
                  "url":"./images/ad50.png",
                  "title":"sample",
                  "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                  },
                  {
                  "url":"./images/ad50.png",
                  "title":"sample",
                  "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                  },
                  {
                  "url":"./images/ad50.png",
                  "title":"sample",
                  "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                  },
                  {
                  "url":"./images/ad50.png",
                  "title":"sample",
                  "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                  },
                  {
                  "url":"./images/ad50.png",
                  "title":"sample",
                  "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                  },
                  {
                  "url":"./images/ad50.png",
                  "title":"sample",
                  "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                  },
                  {
                  "url":"./images/ad50.png",
                  "title":"sample",
                  "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                  },
                  {
                  "url":"./images/ad50.png",
                  "title":"sample",
                  "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                  },
                  {
                  "url":"./images/ad50.png",
                  "title":"sample",
                  "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                  },
                  {
                  "url":"./images/ad50.png",
                  "title":"sample",
                  "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                  },
                  ];
function displayPickUpData() {
    var html = "";
    for (var i = 0;i < pickUpData.length; i++) {
        html += "<a href='" + pickUpData[i].url + "' target='_brank'>";
        html += "<div style='padding-left:5px;'>";
        html += "<h4>" + pickUpData[i].title + "</h4>";
        html += "<p class='pickUp'>" + pickUpData[i].subject + "</p>";
        html += "</div>";
        html += "</a>";
        html += "<hr />";
        
    }
    return html;
}

/* recommendData */
var recommendData = [
                     {
                     "image":"./images/ad100.png",
                     "url":"./images/ad100.png",
                     "title":"sample",
                     "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                     "type":"recommend",
                     },
                     {
                     "image":"./images/ad100.png",
                     "url":"./images/ad100.png",
                     "title":"sample",
                     "subject":"サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル",
                     "type":"recommend",
                     },
                     ];

function displayRecommendData() {
    var html = "";
    for (var i = 0;i < recommendData.length; i++) {
        html += "<a href='" + recommendData[i].url + "' target='_brank'>";
        html += "<div class='" + recommendData[i].type + "'>";
        html += "<img src='" + recommendData[i].image + "' style='width:100%;'/>";
        html += "<h4>" + recommendData[i].title + "</h4>";
        html += "<p class='recommend'>" + recommendData[i].subject + "</p>";
        html += "</div>";
        html += "</a>";
    }
    return html;
}

/* links */

var linksData = [
                 {
                 "image":"./images/ad100.png",
                 "url":"./images/ad100.png",
                 "title":"ホームページ作成",
                 "type":"links",
                 },
                 {
                 "image":"./images/ad100.png",
                 "url":"./images/ad100.png",
                 "title":"ホームページ作成 - sample",
                 "type":"links",
                 },
                 ];

function displayLinksData() {
    var html = "";
    for (var i = 0;i < linksData.length; i++) {
        html += "<a href='" + linksData[i].url + "' target='_brank'>";
        html += "<div class='" + linksData[i].type + "'>";
        html += "<img src='" + linksData[i].image + "' style='width:100%;'/>";
        html += "<h4>" + linksData[i].title + "</h4>";
        html += "</div>";
        html += "</a>";
    }
    return html;
}
