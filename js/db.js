var db = [];

    function db() {
    
    }

/* footerデータ */
var footerInfo = {
    copyrightInfo : {
    ID:"copyright",
        title : "Team Sun Stripe",
        URL : "http://sunstripe.main.jp",
        establishmentDate : "2011/11/11",
    },
    //メインメニュー
    main_menus :
    [
     {
     title:"HOME",
     URL:"http://sunstripe.main.jp/",
     },
     {
     title:"素敵曜日 - Design Lab",
     url:"index.html",
     },
     {
     title:"reference",
     url:"reference.html",
     },
     ],
    
    //サブメニュー
    
    sub_menus :
    [
     {
     title:"NEWS",
     url:"news.html",
     },
     ],
    
    //コンテンツメニュー
    
    contents_menus :
    [
     {
     title:"お問い合わせ",
     url:"contact.html",
     },
     {
     title:"プライバシーポリシー",
     url:"privacypolicy.html",
     },
     {
     title:"利用規約",
     url:"rules.html",
     },
     {
     title:"サイトマップ",
     url:"sitemap.html",
     },
     ],
    
};

/* newsData */

var newsData = [
                {
                "startdate":"2017/07/01 12:00:00",
                "update":"2017/07/01 12:00:00",
                "title":"サイトリニューアル　ー　index.html　を作成",
                "url":"./index.html",
                "subject":"デザインの資料\n<br />デザインについての資料などをまとめて行きます\n",
                },
                
                {
                "startdate":"2017/07/01 12:00:00",
                "update":"2017/07/01 12:00:00",
                "title":"ヘルプ作成　ー　help.html　を作成",
                "url":"./help.html",
                "subject":"デザインの資料\n<br />本サイトのヘルプをまとめて行きます\n",
                },
                
                {
                "startdate":"2017/07/01 12:00:00",
                "update":"2017/07/01 12:00:00",
                "title":"リファレンス作成　ー　reference.html　を作成",
                "url":"./reference.html",
                "subject":"デザインの資料\n<br />デザインについてのリファレンスをまとめて行きます\n",
                },
                
                {
                "startdate":"2017/09/01 12:00:00",
                "update":"2017/09/01 12:00:00",
                "title":"「フォーム」 - リファレンス作成　ー　form.html　を作成",
                "url":"./form.html",
                "subject":"デザインの資料\n<br />「フォーム」- リファレンスをまとめて行きます\n",
                },
                
                {
                "startdate":"2017/07/01 12:00:00",
                "update":"2017/07/01 12:00:00",
                "title":"マイページデザイン　ー　mypage.html　を作成",
                "url":"./mypage.html",
                "subject":"デザインの資料\n<br />マイページデザイン\n",
                },
                
                {
                "startdate":"2017/07/01 12:00:00",
                "update":"2017/07/01 12:00:00",
                "title":"求人用デザイン　ー　recruitment.html　を作成",
                "url":"./recruitment.html",
                "subject":"デザインの資料\n<br />求人のデザイン\n",
                },
                
                {
                "startdate":"2017/07/01 12:00:00",
                "update":"2017/07/01 12:00:00",
                "title":"アンケート用デザイン　ー　questionnaire.html　を作成",
                "url":"./questionnaire.html",
                "subject":"デザインの資料\n<br />アンケートのデザイン\n",
                },
                
                {
                "startdate":"2017/07/15 00:00:00",
                "update":"2017/07/15 12:00:00",
                "title":"虹色のデザイン　ー　nijiicon.html　を作成",
                "url":"./nijiicon.html",
                "subject":"デザインの資料\n<br />虹色のデザイン\n",
                },
                
                {
                "startdate":"2017/09/01 12:00:00",
                "update":"2017/10/04 17:45:36",
                "title":"フライヤーデザイン９",
                "url":"./flayer201709.html",
                "subject":"デザインの資料\n<br />９月は<a href='http://sunstripe.main.jp/nbiCafe/'>ネクストブレイクアイドルカフェ</a>のイベントで用いることになりました！！！\n",
                },
                
                {
                "startdate":"2017/09/01 12:00:00",
                "update":"2017/10/04 17:45:36",
                "title":"きゃらあげ素敵曜日チャンネルチラシデザイン９",
                "url":"./karry201709.html",
                "subject":"デザインの資料\n<br />９月は<a href='http://sunstripe.main.jp/'>きゃらあげ素敵曜日チャンネル</a>のイベントで用いることになりました！！！\n",
                },
                
                {
                "startdate":"2017/10/01 12:00:00",
                "update":"2017/10/04 17:45:36",
                "title":"フライヤーデザイン１０",
                "url":"./flayer201710.html",
                "subject":"デザインの資料\n<br />１０月は<a href='http://sunstripe.main.jp/'>きゃらあげ素敵曜日チャンネル</a>のイベントで配布用チラシを作成することになりました！！！\n",
                },
                {
                "startdate":"2017/10/04 12:00:00",
                "update":"2017/10/04 17:45:36",
                "title":"記事　ー　article.html　を作成",
                "url":"./article.html",
                "subject":"デザインの資料\n<br />記事を投稿していくように改良して行きたいと思います\n",
                },
                {
                "startdate":"2017/10/04 12:00:00",
                "update":"2017/10/04 17:45:36",
                "title":"デザイン　ー　design.html　を作成",
                "url":"./design.html",
                "subject":"デザインの資料\n<br />デザインの記事をまとめて行きたいと思います\n",
                },
                {
                "startdate":"2017/10/04 12:00:00",
                "update":"2017/10/04 17:45:36",
                "title":" ニュースページ作成　ー　news.html　を作成",
                "url":"./news.html",
                "subject":"デザインの資料\n<br />ニュース記事をまとめて行きたいと思います\n",
                },
                {
                "startdate":"----/--/-- --:--:--",
                "update":"----/--/-- --:--:--",
                "title":"NO DATA",
                "url":"",
                "subject":"データがありませんでした。",
                },
                
                ];

function displayNewsData( a ) {
    var html = "";
    
    html += "<div class='" + 'article_box' + "' onclick='openURL(\"" + newsData[ a ].url + "\")'>";
    html += "<h3>" + newsData[ a ].title + "</h3>";
    html += "<p>" + newsData[ a ].subject + "</p>";
    html += "<a href='" + newsData[ a ].url + "'>";
    html += "<h6 class='" + 'bottom0' + "'>" + "関連記事 : " + newsData[ a ].url  + "<h6 class='" + 'bottom0' + "'>" + newsData[ a ].startdate + "</h6>";
    html += "</a>";
    html += "</div>";

    return html;
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
