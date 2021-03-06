<?php

/**
 * @file controllers/grid/issues/IssueGridHandler.inc.php
 *
 * Copyright (c) 2014 Simon Fraser University Library
 * Copyright (c) 2000-2014 John Willinsky
 * Distributed under the GNU GPL v2. For full terms see the file docs/COPYING.
 *
 * @class ExportableIssuesListGridHandler
 * @ingroup controllers_grid_issues
 *
 * @brief Handle exportable issues grid requests.
 */

import('classes.controllers.grid.issues.IssueGridHandler');

class ExportableIssuesListGridHandler extends IssueGridHandler {
	/**
	 * Constructor
	 */
	function ExportableIssuesListGridHandler() {
		parent::IssueGridHandler();
	}


	//
	// Implement template methods from PKPHandler
	//
	/**
	 * @copydoc PKPHandler::initialize()
	 */
	function initialize($request, $args) {
		parent::initialize($request, $args);
	}


	//
	// Implemented methods from GridHandler.
	//
	/**
	 * @copydoc GridHandler::isDataElementSelected()
	 */
	function isDataElementSelected($gridDataElement) {
		return false; // Nothing is selected by default
	}

	/**
	 * @copydoc GridHandler::getSelectName()
	 */
	function getSelectName() {
		return 'selectedIssues';
	}

	/**
	 * @copydoc GridHandler::loadData()
	 */
	function loadData($request, $filter) {
		$journal = $request->getJournal();
		$issueDao = DAORegistry::getDAO('IssueDAO');
		return $issueDao->getIssues($journal->getId(), $this->getGridRangeInfo($request, $this->getId()));
	}

	/**
	 * @copydoc GridHandler::initFeatures()
	 */
	function initFeatures($request, $args) {
		import('lib.pkp.classes.controllers.grid.feature.selectableItems.SelectableItemsFeature');
		return array(new SelectableItemsFeature());
	}

	/**
	 * Get the row handler - override the parent row handler. We do not need grid row actions.
	 * @return GridRow
	 */
	function getRowInstance() {
		return new GridRow();
	}
}

?>
