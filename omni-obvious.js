// ==UserScript==
// @name           Omni Obvious Sponsors
// @namespace      johantiden
// @description    Makes sponsored content more obvious but changing the style.
// @include        http://omni.se*
// @include        https://omni.se*
// @version 0.0.1
// ==/UserScript==

var elements = document.querySelectorAll('.article--sponsored');
for(var i=0; i<elements.length; i++){
	var e = elements[i]; 
	var container = e.parentNode;
    container.parentNode.removeChild(container);
}
