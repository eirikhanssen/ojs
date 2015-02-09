<?php

/**
 * @file plugins/themes/arkiv/arkivThemePlugin.inc.php
 *
 * Copyright (c) 2013-2014 Simon Fraser University Library
 * Copyright (c) 2003-2014 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class arkivThemePlugin
 * @ingroup plugins_themes_arkiv
 *
 * @brief "arkiv" theme plugin
 */

import('classes.plugins.ThemePlugin');

class arkivThemePlugin extends ThemePlugin {
	/**
	 * Get the name of this plugin. The name must be unique within
	 * its category.
	 * @return String name of plugin
	 */
	function getName() {
		return 'arkivThemePlugin';
	}

	function getDisplayName() {
		return 'Tidsskriftet Arkiv Theme';
	}

	function getDescription() {
		return 'Responsive theme for arkiv & Professionalisms, based on Classic brown theme';
	}

	function getStylesheetFilename() {
		return 'arkiv.css';
	}

	function getLocaleFilename($locale) {
		return null; // No locale data
	}
}

?>
