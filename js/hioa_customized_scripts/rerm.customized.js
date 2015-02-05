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

// Fix RERM header to add proper markup for styling
(function fixRERMHeaderHTML() {
	$(document).ready(function () {
		var headerTitle = document.getElementById("headerTitle");
		var newHeaderHTMLen = '\
<span class="headerInitial">R</span><span class="headerWord">econceptualizing</span> \
<span class="headerInitial">E</span><span class="headerWord">ducational</span> \
<span class="headerInitial">R</span><span class="headerWord">esearch</span> \
<span class="headerInitial">M</span><span class="headerWord">ethodology</span>';
		var headerEnSearchPattern = /^reconceptualizing/;
		var headerTitleH1 = headerTitle.getElementsByTagName("h1")[0];
		if (headerTitleH1 !== undefined) {
			var oldHeader = headerTitleH1.textContent.trim().toLocaleLowerCase();
			var isHeaderEn = (headerEnSearchPattern.exec(oldHeader) !== null);
            if (isHeaderEn) {
				headerTitleH1.innerHTML = newHeaderHTMLen;
			}
		}
	});
}());
