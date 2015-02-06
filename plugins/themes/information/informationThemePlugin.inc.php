<?php

/**
 * @file plugins/themes/information/informationThemePlugin.inc.php
 *
 * Copyright (c) 2013-2014 Simon Fraser University Library
 * Copyright (c) 2003-2014 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class informationThemePlugin
 * @ingroup plugins_themes_information
 *
 * @brief "information" theme plugin
 */

import('classes.plugins.ThemePlugin');

class informationThemePlugin extends ThemePlugin {
	/**
	 * Get the name of this plugin. The name must be unique within
	 * its category.
	 * @return String name of plugin
	 */
	function getName() {
		return 'informationThemePlugin';
	}

	function getDisplayName() {
		return 'InFormation Theme';
	}

	function getDescription() {
		return 'Responsive theme for InFormation, based on Redbar theme';
	}

	function getStylesheetFilename() {
		return 'information.css';
	}

	function getLocaleFilename($locale) {
		return null; // No locale data
	}
}

?>
