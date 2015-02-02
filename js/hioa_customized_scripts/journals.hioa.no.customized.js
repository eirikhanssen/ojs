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
		//alert("in wrapHeaderInHomePageLink() function!"); //debug
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
		// alert("in indicateCurrentPageInNavbarList() function!"); // debug
		var body = document.getElementsByTagName("body")[0];
		var navbar = document.getElementById('navbar');
		var navlinks = navbar.getElementsByClassName('menu')[0];

		var addClass = function (node, classname) {
			// Make sure we're deling with a node and a string here
			// alert("in addClass() func!"); // debug

			if (node.nodeType === 1 && typeof classname === "string") {
				// alert("Adding class '" + classname + "' to " + node.nodeName + "#" + node.getAttribute("id")); // debug
				node.className = node.className.trim() + " " + classname.trim();
				node.className = node.className.trim();
			}
		};

		var checkMenuLinks = (function (node) {
			var currentMenuLink = "";
			var location = document.location;
			var indexHomePagePattern = /\.[A-Za-z][A-Za-z]+\/$/;
			var indexHomePagePattern2 = /\/index$/;
			var indexHomePagePattern3 = /\/index.php$/;
			var journalHomePagePattern = /\.[A-Za-z][a-zA-Z]+\/index\.php\/[^/]+\/?$/;
			var isIndexHomePage = (indexHomePagePattern.exec(location) !== null);
			var isIndexHomePage2 = (indexHomePagePattern2.exec(location) !== null);
			var isIndexHomePage3 = (indexHomePagePattern3.exec(location) !== null);
			var isJournalHomePage = (journalHomePagePattern.exec(location) !== null);
			var userHomePagePattern = /\.[A-Za-z][a-zA-Z]+\/index\.php\/[^/]+\/user\/?$/;
			var isUserHomePage = (userHomePagePattern.exec(location) !== null);
			var isHome = isIndexHomePage || isIndexHomePage2 || isIndexHomePage3 || isJournalHomePage;

			var checkLink = function (node) {
				var nodeId = node.getAttribute("id");
				// alert("in checkMenuLinks() function!" + "\n" + "isIndexHomePage (matches first pattern): " + isIndexHomePage + "\nisIndexHomePage2 (matches 2nd pattern): " + isIndexHomePage2 + "\nisJournalHomePage: " + isJournalHomePage + "\nisUserHomePage: "  + isUserHomePage + "\nisHome: " + isHome); //debug
				currentMenuLink = node.firstElementChild.getAttribute("href");
				var isNavItemHomeElement = (nodeId === "home");
				var isNavItemUserHomeElement = (nodeId === "userHome");
				if (
					(currentMenuLink == location) ||
					(isNavItemHomeElement && isHome)
				) {
					// alert("ok, let's call addClass func"); // debug
					// Add class to navitem to indicate page
					addClass(node, "currentPage");
					// Add class to body element to indicate page
					addClass(body, nodeId);
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