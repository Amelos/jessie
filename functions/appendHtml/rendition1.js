/*global html*/

/*
 Description:
 Relies on `el.insertAdjacentHTML
 */

/*
 Degrades:
 IE3, Firefox 7, Safari 3, Opera 7, IE6 `el.insertAdjacentHtml` does not work on table, tbody, thead, tr elements
 */

/*
 Author:
 Ben Chidgey
 */

var appendHtml;

if (html && isHostMethod(html, 'insertAdjacentHTML')) {
	appendHtml = function (el, html) {
		el.insertAdjacentHTML('beforeEnd', html);
	};
}