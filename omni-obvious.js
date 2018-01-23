// ==UserScript==
// @name           Omni Obvious Sponsors
// @namespace      johantiden
// @description    Makes sponsored content more obvious but changing the style.
// @include        http://omni.se*
// @include        https://omni.se*
// @version 0.0.1
// ==/UserScript==

var link = window.document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'data:text/css,' +
            '.article--sponsored { display: none;';
document.getElementsByTagName("HEAD")[0].appendChild(link);