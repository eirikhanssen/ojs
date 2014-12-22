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
(function () {
    // Eirik Hanssen, Oslo and Akershus University College of Applied Sciences (2014)
    // JavaScript that will indicate what page you are on by adding the class currentPage
    // to the list item in navbar that contains a link that matches the url in the location bar
    // A special rule also to match the homepage.
    // To take advantage of this class, a CSS rule (for instance to change background-color and color)
    // must me made to match the following CSS selector: #navbar li.currentPage a

    var menu = document.getElementsByTagName("body")[0];
    var addClass = "currentPage";
    var elementClass = "";
    var navbar = document.getElementById('navbar');
    var navlinks = navbar.getElementsByClassName('menu')[0];

    var checkMenuLinks = (function (node) {
        var currentMenuLink = "";
        var location = document.location;
        var indexHomePagePattern = /\.[A-Za-z][A-Za-z]+\/$/;
        var journalHomePagePattern = /\.[A-Za-z][a-zA-Z]+\/index\.php\/[^/]+\/?$/;
        var isIndexHomePage = (indexHomePagePattern.exec(location) !== null);
        var isJournalHomePage = (journalHomePagePattern.exec(location) !== null);
        var userHomePagePattern = /\.[A-Za-z][a-zA-Z]+\/index\.php\/[^/]+\/user\/?$/;
        var isUserHomePage = (userHomePagePattern.exec(location) !== null);
        //alert("isIndexHomePage: " + isIndexHomePage + "\nisJournalHomePage: " + isJournalHomePage + "\nisUserHomePagePage: "  + isUserHomePage); //debug

        var checkLink = function (node) {
            currentMenuLink = node.firstElementChild.getAttribute("href");
            var isNavItemHomeElement = (node.getAttribute("id") === "navItem-home");
            var isNavItemUserHomeElement = (node.getAttribute("id") === "navItem-userHome");
            if ((currentMenuLink == location) || (isNavItemHomeElement && (isIndexHomePage || isJournalHomePage)) || (isNavItemUserHomeElement && isUserHomePage)) {
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
