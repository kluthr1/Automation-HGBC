var widgetCSS = "" +
    ".timeline-Widget{border-top-left-radius: 10px; border-top-right-radius: 10px; outline: #dee2e6; border: solid 1px #dee2e6; margin: auto;}" +
    ".timeline-Header{background-color: rgba(0, 0, 0, 0.9); border-top-left-radius: 10px; border-top-right-radius: 10px;}" +
    ".timeline-Header-title{color: #000000;}" +
    ".timeline-Tweet-text{color: rgba(0, 0, 0, 0.8); font-family: 'PT Sans',Arial,serif; font-weight: 300; font-size: 16px !important; line-height: 1.4 !important; margin-bottom: 0px;}" +
    ".timeline-tweetList-tweet, .timeline-LoadMore, .timeline-Footer{background-color: rgba(255, 255, 255, 0.8);}" +
    ".timeline-Tweet {transition: 0.3s all ease-out; }" +
    ".timeline-Tweet:hover {background-color: rgba(188, 43, 12, 0.2); transition: 0.3s all ease-out; }" +
    ".timeline-Tweet a{color: #8c2009;}" +
    ".timeline-Tweet a:hover{color: rgb(188, 43, 12);}" +
    ".TweetAuthor-name{color:#000000;}";

function paint() {

    var w = document.getElementById("twitter-widget-0").contentDocument;
    var w2 = document.getElementById("twitter-wjs").contentDocument;

    var s = document.createElement("style");
    s.innerHTML = widgetCSS;
    s.type = "text/css";
    w.head.appendChild(s);

    var s = document.createElement("style");

    w2.head.appendChild(s);
};
window.onload = paint();
