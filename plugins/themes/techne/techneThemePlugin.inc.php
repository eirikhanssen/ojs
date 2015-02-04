<?php

/**
 * @file plugins/themes/techne/techneThemePlugin.inc.php
 *
 * Copyright (c) 2013-2014 Simon Fraser University Library
 * Copyright (c) 2003-2014 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class techneThemePlugin
 * @ingroup plugins_themes_techne
 *
 * @brief "techne" theme plugin
 */

import('classes.plugins.ThemePlugin');

class techneThemePlugin extends ThemePlugin {
	/**
	 * Get the name of this plugin. The name must be unique within
	 * its category.
	 * @return String name of plugin
	 */
	function getName() {
		return 'techneThemePlugin';
	}

	function getDisplayName() {
		return 'Techne Theme';
	}

	function getDescription() {
		return 'Responsive theme for Techne, based on Vanilla theme';
	}

	function getStylesheetFilename() {
		return 'techne.css';
	}

	function getLocaleFilename($locale) {
		return null; // No locale data
	}
}

?>
