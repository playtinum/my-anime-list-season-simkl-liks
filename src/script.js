// ==UserScript==
// @name         add simkl links to MAL season page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds links to respective animes on MAL season page
// @author       Julian Schlotterbeck
// @match        https://myanimelist.net/anime/season
// @icon         https://www.google.com/s2/favicons?sz=64&domain=myanimelist.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const animeTitleElements = document.querySelectorAll('.h2_anime_title > a');

    animeTitleElements.forEach((element) => {
        const title = element.innerText.trim();

        const simklLinkElement = document.createElement('a');
        simklLinkElement.setAttribute('href', 'https://simkl.com/search/?type=anime&q=' + title);
        simklLinkElement.setAttribute('target', '_blank');
        simklLinkElement.innerText = 'to SIMKL'


        element.parentElement.parentElement.append(simklLinkElement);
    });

})();