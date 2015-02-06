This folder contains javascripts that enhance web-pages of the OJS installation journals.hioa.no

It contains scripts used site-wide and scripts intended for specific journals.

All these customized scripts are located in 
ojs-dir/js/hioa_customized_scripts/

Most of the scripts that are intended for specific journals alter the html markup inside 
the h1 element decendant of the #headerTitle element.

This is done because the goal is to make every journal's page layout responsive to adapt to smaller
screen sizes as found on tablets and smartphones, and having a big header static image breaks 
a responsive layout.

My (hack) is to include only the name of the journal in the (Title text) field.

Then I have a unique script on a per journal basis that will change the html-markup of the <h1> 
element decendant of the #headerTitle element to allow fancy CSS styling of the page header using
only text and html markup to recreate the banner in a responsive matter.


Site-wide script: journals.hioa.no.customized.js 

This script contains enhancements intended to be used on all journals.hioa.no's pages.

- It wraps the header/banner in a homelink 
  FIXME: (however this would better be implemented in header.tpl files)

- It indicates what page you are on by adding a currentPage class to the navbar list item 
  that corresponds to the page you are viewing.

It is inserted in a <script> element in the <head> element and referenced from:
ojs-dir/lib/pkp/common/header.tpl
ojs-dir/templates/article/header.tpl


Journal Specific Scripts

Below are javascript files that need to be referenced from each journal in a <script> element.
A good place to do this can be in the footer for consistency.

How to use:
- Log in as a journal manager or site administrator and go to:
- Setup > Step 5 The Look > Journal Page Footer
- Use the HTML edit mode of the editor and add the required code at the end.
- Save!


Professions & Professionalisms

FIXME: should a script to insert html markup to be used in narrow layout instead of 
abusing CSS ::after and ::before pseudo class to generate text with content: "";

This script was initially requested by the Professions & Professionalisms journal.
It adds a "Search ths article on Google Scholar" link after Refbacks on the abstract page.
This script can be used by the other journals as well.

Copy this code inside the footer (HTML edit mode):

<!-- Add a "Search this article on Google Scholar" link after the Refbacks heading on the article abstract page -->
<script type="text/javascript" src="/js/hioa_customized_scripts/search-this-article-on-google-scholar.js"></script>



FORMakademisk
- Fix html markup of the page header to allow only 'akademisk' in FORMakademisk be styled with italics.

Copy this code inside the footer (HTML edit mode):

<!-- Customized JavaScript for FORMakademisk: fix header styling markup -->
<script type="text/javascript" src="/js/hioa_customized_scripts/formakademisk.customized.js"></script>


Nordisk Barnehageforskning
- Fix html-markup of the page header to recreate the banner with norwegian title above and english title below.

Copy this code inside the footer (HTML edit mode):

<!-- Customized JavaScript for Nordisk Barnehageforskning: fix header styling markup -->
<script type="text/javascript" src="/js/hioa_customized_scripts/nbf.customized.js"></script>
 

InFormation
- Fix html-markup of the page header

Copy this code inside the footer (HTML edit mode):

<!-- Customized JavaScript for InFormation: fix header styling markup -->
<script type="text/javascript" src="/js/hioa_customized_scripts/information.customized.js"></script>


RERM
- Fix html-markup of the page header

Copy this code inside the footer (HTML edit mode):

<!-- Customized JavaScript for RERM: fix header styling markup -->
<script type="text/javascript" src="/js/hioa_customized_scripts/rerm.customized.js"></script>


TechneA
- Fix html-markup of the page header
- Different header for norwegian(swedish) and english, depending on the original title

Copy this code inside the footer (HTML edit mode):

<!-- Customized JavaScript for TECHNE: fix header styling markup -->
<script type="text/javascript" src="/js/hioa_customized_scripts/techne.customized.js"></script>


FLEKS
Not ideal, but a compromise with the old banner
- Fix html-markup of the page header
- Hide for sighted users (text is in background image), but not for screen reader users
- For ultra narrow layout, show 'FLEX' and remove background (done with CSS)

Copy this code inside the footer (HTML edit mode):

<!-- Customized JavaScript for FLEKS: fix header styling markup -->
<script type="text/javascript" src="/js/hioa_customized_scripts/fleks.customized.js"></script>

