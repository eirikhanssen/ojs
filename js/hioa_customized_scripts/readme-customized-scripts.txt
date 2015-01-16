journals.hioa.no.customized.js 
This script contains enhancements intended to be used on all journals.hioa.no's pages.
- It wraps the header/banner in a homelink
- It indicates what page you are on by adding a currentPage class to the navbar list item 
  that corresponds to the page you are viewing.

It is referenced from ojs-dir/lib/pkp/common/header.tpl and will appear in a <script> tag in the <head> element

Below are javascript files that need to be referenced from each journal in a <script> element.
A good place to do this can be in the footer for consistency.

How to use:
- Log in to the journal and go to:
- Setup > The Look > Journal Page Footer
- Use the HTML edit mode of the editor and add the required code at the end.
- Save!



FORMakademisk
- formakademisk.customized.js

This script contains enhancements to be used for the FORMakademisk journal
It changes <h1>FORMakademisk</h1> to <h1>FORM<em>akademisk</em></h1>

Copy this code inside the footer (HTML edit mode):

<!-- Customized JavaScript for FORMakademisk: fix header styling markup -->
<script type="text/javascript" src="/js/hioa_customized_scripts/formakademisk.customized.js"></script>



Professions & Professionalisms
- search-this-article-on-google-scholar.js

This script was initially requested by the Professions & Professionalisms journal.
It adds a "Search ths article on Google Scholar" link after Refbacks on the abstract page.
This script can be used by other journals as well.

Copy this code inside the footer (HTML edit mode):

<!-- Add a "Search this article on Google Scholar" link after the Refbacks heading on the article abstract page -->
<script type="text/javascript" src="/js/hioa_customized_scripts/search-this-article-on-google-scholar.js"></script>
