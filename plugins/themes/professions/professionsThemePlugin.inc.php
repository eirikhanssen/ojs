<?php

/**
 * @file plugins/themes/professions/professionsThemePlugin.inc.php
 *
 * Copyright (c) 2013-2014 Simon Fraser University Library
 * Copyright (c) 2003-2014 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class professionsThemePlugin
 * @ingroup plugins_themes_professions
 *
 * @brief "professions" theme plugin
 */

import('classes.plugins.ThemePlugin');

class professionsThemePlugin extends ThemePlugin {
	/**
	 * Get the name of this plugin. The name must be unique within
	 * its category.
	 * @return String name of plugin
	 */
	function getName() {
		return 'professionsThemePlugin';
	}

	function getDisplayName() {
		return 'Professions Theme';
	}

	function getDescription() {
		return 'Responsive theme for Professions & Professionalisms, based on Classic brown theme';
	}

	function getStylesheetFilename() {
		return 'professions.css';
	}

	function getLocaleFilename($locale) {
		return null; // No locale data
	}
}

?>
