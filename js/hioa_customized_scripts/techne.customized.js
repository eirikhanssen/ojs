/* Customized JavaScript functionality for the Nordisk Barnehageforskning journal hosted by journals.hioa.no on the OJS platform.
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

// Fix Techne header to add proper markup for styling
(function fixNBFHeaderHTML() {
	$(document).ready(function () {
		var headerTitle = document.getElementById("headerTitle");
		var newHeaderHTMLno = 'TECHNE <span>SERIEN</span> <span class="subheading">Forskning i slöydpedagogik och slöydvetenskap</span>';
		var newHeaderHTMLen = 'TECHNE <span>SERIES</span> <span class="subheading">Research in Sloyd Education and Craft Science</span>';
		var headerNoSearchPattern = /^techne serien/;
		var headerEnSearchPattern = /^techne series/;
		var headerTitleH1 = headerTitle.getElementsByTagName("h1")[0];
		if (headerTitleH1 !== undefined) {
			var oldHeader = headerTitleH1.textContent.trim().toLocaleLowerCase();
			var isHeaderNo = (headerNoSearchPattern.exec(oldHeader) !== null);
			var isHeaderEn = (headerEnSearchPattern.exec(oldHeader) !== null);
			if (isHeaderNo) {
				headerTitleH1.innerHTML = newHeaderHTMLno;
			} if (isHeaderEn) {
				headerTitleH1.innerHTML = newHeaderHTMLen;
			}
		}
	});
}());
