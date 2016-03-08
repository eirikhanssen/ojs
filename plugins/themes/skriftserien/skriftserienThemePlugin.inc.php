<?php

/**
 * @file plugins/themes/skriftserien/skriftserienThemePlugin.inc.php
 *
 * Copyright (c) 2013-2014 Simon Fraser University Library
 * Copyright (c) 2003-2014 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class skriftserienThemePlugin
 * @ingroup plugins_themes_skriftserien
 *
 * @brief "skriftserien" theme plugin
 */

import('classes.plugins.ThemePlugin');

class skriftserienThemePlugin extends ThemePlugin {
	/**
	 * Get the name of this plugin. The name must be unique within
	 * its category.
	 * @return String name of plugin
	 */
	function getName() {
		return 'skriftserienThemePlugin';
	}

	function getDisplayName() {
		return 'Skriftserien Theme';
	}

	function getDescription() {
		return 'Responsive theme for Skriftserien';
	}

	function getStylesheetFilename() {
		return 'skriftserien.css';
	}

	function getLocaleFilename($locale) {
		return null; // No locale data
	}
}

?>
