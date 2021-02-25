// ==UserScript==
// @name         Youtube Recommendation Bar Remover
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Removes the recommendation/suggestion bar.
// @author       John Park
// @match        https://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener("load", function () {
        var divElement = document.querySelector("#secondary-inner")
        divElement.remove();

    }, false)
})();
