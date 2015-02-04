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

// Fix header of NBF to include english name also
(function fixNBFHeaderHTML() {
    $(document).ready(function () {
        var headerTitle = document.getElementById("headerTitle");
        var newHeaderHTML = 'Nordisk Barnehageforskning<span class="enTitle">Nordic Early Childhood Education Research</span>';
        var headerTitleH1 = headerTitle.getElementsByTagName("h1")[0];
        if (headerTitleH1 !== undefined) {
            var oldHeader = headerTitleH1.textContent.trim().toLocaleLowerCase();
            if (oldHeader === 'nordisk barnehageforskning') {
                headerTitleH1.innerHTML = newHeaderHTML;
            }
        }
    });
}());
