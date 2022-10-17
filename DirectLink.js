// ==UserScript==
// @name direct-link
// @namespace direct-link // @include https://taste-mix.blogspot.com/*
// @version 1
// @grant none
// ==/UserScript==
(function() {
var l =
document.getElementsByTagName("a");
var i = l.length;
while (i--) {
l[i].href = l[i].href.replace("https://academyenrage.com/skfskxgx0h?key=1ddf2338ccf08cfaf5974d7d9581d505/", "");
}
})();