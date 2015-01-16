/* Customized JavaScript functionality for the FORMakademisk journal hosted by journals.hioa.no on the OJS platform.
 *
 * Copyright (C) 2015 Eirik Hanssen, Oslo and Akershus University College of Applied Sciences
 *
 * This program written in JavaScript is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* Customized JavaScript functionality for all journals hosted by journals.hioa.no on the OJS platform.
 *
 * Copyright (C) 2015 Eirik Hanssen, Oslo and Akershus University College of Applied Sciences
 *
 * This program written in JavaScript is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// Add a "Search this article on Google Scholar" link after ReaderRefbacks title
// Runs when the DOM is ready, relies on jQuery for this
// Requested by Professions and Professionalisms
(function addGoogleScholarArticleSearchLinkAfterRefbacks() {
    $(document).ready(function() {
        articleTitleElement = document.getElementById('articleTitle');
        if (articleTitleElement) {
            var articleTitle = articleTitleElement.textContent.trim() || articleTitleElement.innerText.trim();
            var gsArticleTitle = encodeURIComponent(articleTitle).replace(/%20/g, '+');
            var refbacksTitle = document.getElementById('readerRefbacks');
            if (refbacksTitle) {
                var gsLink = document.createElement('a');
                gsLink.href = 'http://scholar.google.com/scholar?q=%22' + gsArticleTitle + '%22';
                gsLink.textContent = 'Search this article on GoogleScholar';
                refbacksTitle.parentNode.insertBefore(gsLink, refbacksTitle.nextSibling);
            } else {
                /*alert('no refbacksTitle id present.');*/
            }
        } else {
            /*alert ('no articleTitle id present.')*/
        }
    });
}());