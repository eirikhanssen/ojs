<?php

/**
 * @file plugins/themes/radopen/radopenThemePlugin.inc.php
 *
 * Copyright (c) 2013-2014 Simon Fraser University Library
 * Copyright (c) 2003-2014 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class radopenThemePlugin
 * @ingroup plugins_themes_radopen
 *
 * @brief "radopen" theme plugin
 */

import('classes.plugins.ThemePlugin');

class radopenThemePlugin extends ThemePlugin {
	/**
	 * Get the name of this plugin. The name must be unique within
	 * its category.
	 * @return String name of plugin
	 */
	function getName() {
		return 'radopenThemePlugin';
	}

	function getDisplayName() {
		return 'Radiography Open Theme';
	}

	function getDescription() {
		return 'Responsive theme for Radiography Open, based on Vanilla theme';
	}

	function getStylesheetFilename() {
		return 'radopen.css';
	}

	function getLocaleFilename($locale) {
		return null; // No locale data
	}
}

?>
