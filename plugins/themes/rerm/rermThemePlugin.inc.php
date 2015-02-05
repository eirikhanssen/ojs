<?php

/**
 * @file plugins/themes/rerm/rermThemePlugin.inc.php
 *
 * Copyright (c) 2013-2014 Simon Fraser University Library
 * Copyright (c) 2003-2014 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class rermThemePlugin
 * @ingroup plugins_themes_rerm
 *
 * @brief "rerm" theme plugin
 */

import('classes.plugins.ThemePlugin');

class rermThemePlugin extends ThemePlugin {
	/**
	 * Get the name of this plugin. The name must be unique within
	 * its category.
	 * @return String name of plugin
	 */
	function getName() {
		return 'rermThemePlugin';
	}

	function getDisplayName() {
		return 'RERM Theme';
	}

	function getDescription() {
		return 'Responsive theme for RERM, based on Redbar theme';
	}

	function getStylesheetFilename() {
		return 'rerm.css';
	}

	function getLocaleFilename($locale) {
		return null; // No locale data
	}
}

?>
