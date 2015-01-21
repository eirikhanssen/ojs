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

// Wrap the header in a link that points back to the journal's homepage
// Runs when the DOM is ready (relies on jQuery)
(function wrapHeaderInHomePageLink() {
    $(document).ready(function () {
        //alert("wrapHeaderInHomePageLink function");
        var headerTitle = document.getElementById("headerTitle"); //Title");
        if (headerTitle) {
            var navbarhomelink = document.getElementById("home").getElementsByTagName("a")[0].getAttribute("href");
            var homelink = document.createElement("a");
            homelink.href = navbarhomelink;
            homelink.title = "Go back to the journal's homepage";
            homelink.appendChild(headerTitle.firstElementChild);
            headerTitle.appendChild(homelink);
        }
    });
}());

// Indicate current page in the navbar by adding the class "currentPage" to navbar li with link that matches the current page.
// Special rules are needed for the homepage
// To take advantage of this class, a CSS rule (for instance to change background-color and color)
// must me made to match the following CSS selector: #navbar li.currentPage a
// Runs when the DOM is ready (relies on jQuery)
(function indicateCurrentPageInNavbarList() {
    $(document).ready(function () {
        //alert("indicateCurrentPageInNavbarList function");
        var menu = document.getElementsByTagName("body")[0];
        var addClass = "currentPage";
        var elementClass = "";
        var navbar = document.getElementById('navbar');
        var navlinks = navbar.getElementsByClassName('menu')[0];

        var checkMenuLinks = (function (node) {
            //alert("checkMenuLinks function");
            var currentMenuLink = "";
            var location = document.location;
            var indexHomePagePattern = /\.[A-Za-z][A-Za-z]+\/$/;
            var journalHomePagePattern = /\.[A-Za-z][a-zA-Z]+\/index\.php\/[^/]+\/?$/;
            var isIndexHomePage = (indexHomePagePattern.exec(location) !== null);
            var isJournalHomePage = (journalHomePagePattern.exec(location) !== null);
            var userHomePagePattern = /\.[A-Za-z][a-zA-Z]+\/index\.php\/[^/]+\/user\/?$/;
            var isUserHomePage = (userHomePagePattern.exec(location) !== null);
            //alert("isIndexHomePage: " + isIndexHomePage + "\nisJournalHomePage: " + isJournalHomePage + "\nisUserHomePage: "  + isUserHomePage); //debug

            var checkLink = function (node) {
                //alert("checkLink function");
                currentMenuLink = node.firstElementChild.getAttribute("href");
                //alert(currentMenuLink);
                var isNavItemHomeElement = (node.getAttribute("id") === "home");
                var isNavItemUserHomeElement = (node.getAttribute("id") === "userHome");
                if (
                    (currentMenuLink == location) || 
                    (isNavItemHomeElement && (isIndexHomePage || isJournalHomePage)) || 
                    (isNavItemUserHomeElement && isUserHomePage)
                   ) {
                    //alert("add: " + addClass);
                    elementClass = node.className + addClass;
                    node.className = elementClass.trim();
                }
                if (node.nextElementSibling !== null) {
                    checkLink(node.nextElementSibling);
                }
            };
            return checkLink;
        }());
        checkMenuLinks(navlinks.firstElementChild);
    });
}());
