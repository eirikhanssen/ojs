{**
 * templates/common/footer.tpl
 *
 * Copyright (c) 2013-2014 Simon Fraser University Library
 * Copyright (c) 2003-2014 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * Common site footer.
 *
 *}
{strip}
{literal}
<script type="text/javascript">
//<!--

// wrap the header in a link that points back to the journal's homepage
// Do this when the DOM is ready to be manipulated
// Eirik Hanssen, Oslo and Akershus University College of Applied Sciences (2014)
(function wrapHeaderInHomePageLink() {
    $(document).ready(function () {
        //alert("wrapHeaderInHomePageLink function");
        var headerTitle = document.getElementById("headerTitle"); //Title");
        if (headerTitle) {
            var navbarhomelink = document.getElementById("home").getElementsByTagName("a")[0].getAttribute("href");
            var homelink = document.createElement("a");
            homelink.style.padding = "0";
            homelink.href = navbarhomelink;
            homelink.title = "Go back to the journal's homepage";
            homelink.appendChild(headerTitle.firstElementChild);
            headerTitle.appendChild(homelink);
        }
    });
}());

// Indicate current page in the navbar
// Adds class "currentPage" to navbar li with link that matches the current page.
// Special rules are needed for the homepage
// To take advantage of this class, a CSS rule (for instance to change background-color and color)
// must me made to match the following CSS selector: #navbar li.currentPage a
// Eirik Hanssen, Oslo and Akershus University College of Applied Sciences (2014)
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
//-->
</script>
{/literal}
{if $pageFooter==''}
	{if $currentJournal && $currentJournal->getSetting('onlineIssn')}
		{assign var=issn value=$currentJournal->getSetting('onlineIssn')}
	{elseif $currentJournal && $currentJournal->getSetting('printIssn')}
		{assign var=issn value=$currentJournal->getSetting('printIssn')}
	{/if}
	{if $issn}
		{translate|assign:"issnText" key="journal.issn"}
		{assign var=pageFooter value="$issnText: $issn"}
	{/if}
{/if}
{include file="core:common/footer.tpl"}
{/strip}
