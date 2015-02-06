<?php

/**
 * @file plugins/themes/fleks/fleksThemePlugin.inc.php
 *
 * Copyright (c) 2013-2014 Simon Fraser University Library
 * Copyright (c) 2003-2014 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class fleksThemePlugin
 * @ingroup plugins_themes_fleks
 *
 * @brief "fleks" theme plugin
 */

import('classes.plugins.ThemePlugin');

class fleksThemePlugin extends ThemePlugin {
	/**
	 * Get the name of this plugin. The name must be unique within
	 * its category.
	 * @return String name of plugin
	 */
	function getName() {
		return 'fleksThemePlugin';
	}

	function getDisplayName() {
		return 'FLEKS Theme';
	}

	function getDescription() {
		return 'Responsive theme for FLEKS: Scandinavian Journal of Intercultural Theory and Practice';
	}

	function getStylesheetFilename() {
		return 'fleks.css';
	}

	function getLocaleFilename($locale) {
		return null; // No locale data
	}
}

?>
