<?php

/**
 * @file plugins/themes/hioaSiteIndex/hioaSiteIndexThemePlugin.inc.php
 *
 * Copyright (c) 2013-2014 Simon Fraser University Library
 * Copyright (c) 2003-2014 John Willinsky
 * Copyright (c) 2024 Eirik Hanssen, Oslo and Akershus University College of Applied Sciences
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class hioaSiteIndexThemePlugin
 * @ingroup plugins_themes_hioaSiteIndex
 *
 * @brief "hioaSiteIndex" theme plugin
 */

import('classes.plugins.ThemePlugin');

class hioaSiteIndexThemePlugin extends ThemePlugin {
	/**
	 * Get the name of this plugin. The name must be unique within
	 * its category.
	 * @return String name of plugin
	 */
	function getName() {
		return 'hioaSiteIndexThemePlugin';
	}

	function getDisplayName() {
		return 'hioaSiteIndex Theme';
	}

	function getDescription() {
		return 'Responsive and minimalistic with HiOA branding';
	}

	function getStylesheetFilename() {
		return 'hioaSiteIndex.css';
	}

	function getLocaleFilename($locale) {
		return null; // No locale data
	}
}

?>
