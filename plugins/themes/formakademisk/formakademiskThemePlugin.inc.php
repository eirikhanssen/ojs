<?php

/**
 * @file plugins/themes/formakademisk/formakademiskThemePlugin.inc.php
 *
 * Copyright (c) 2013-2014 Simon Fraser University Library
 * Copyright (c) 2003-2014 John Willinsky
 * Copyright (c) 2014 Eirik Hanssen, Oslo and Akershus University College of Applied Sciences
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class formakademiskThemePlugin
 * @ingroup plugins_themes_formakademisk
 *
 * @brief "formakademisk" theme plugin
 */

import('classes.plugins.ThemePlugin');

class formakademiskThemePlugin extends ThemePlugin {
	/**
	 * Get the name of this plugin. The name must be unique within
	 * its category.
	 * @return String name of plugin
	 */
	function getName() {
		return 'formakademiskThemePlugin';
	}

	function getDisplayName() {
		return 'Formakademisk Theme';
	}

	function getDescription() {
		return 'fluid layout for Formakademisk, based on uncommon theme';
	}

	function getStylesheetFilename() {
		return 'formakademisk.css';
	}
	function getLocaleFilename($locale) {
		return null; // No locale data
	}
}

?>
