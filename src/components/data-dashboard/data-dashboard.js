/*
 * The AnVIL
 * https://www.anvilproject.org
 *
 * The AnVIL - data dashboard component.
 * Use of this component within markdown is possible.
 * Use the tag <data-dashboard></data-dashboard>.
 */

// Core dependencies
import React from "react";

// App dependencies
import DataSearch from "../data-search/data-search";
import DataSummary from "../data-summary/data-summary";
import DataWorkspaces from "../data-workspaces/data-workspaces";
import {DashboardWorkspaceStaticQuery} from "../../hooks/dashboard-workspace-query";
import ProviderDashboardFilter from "../provider-dashboard-filter/provider-dashboard-filter";
import * as DashboardSearchService from "../../utils/dashboard/dashboard-search.service";

// Template variables
const DASHBOARD_INDEX = "/dashboard-index-anvil.json";

function DataDashboard() {

    const lunrIndexRefField = "projectId";
    const workspacesQuery = DashboardWorkspaceStaticQuery();
    const searchFacets = DashboardSearchService.DashboardSearchFacetsAnVIL;
    const facetsByTerm = DashboardSearchService.getDashboardFacetsByTerm(workspacesQuery, searchFacets);
    const checkboxGroups = DashboardSearchService.buildDashboardCheckboxesByFacet(facetsByTerm, searchFacets);
    const setOfSearchGroups = DashboardSearchService.getDashboardSetOfSearchGroups(searchFacets);
    const setOfTerms = DashboardSearchService.getDashboardSetOfTerms(facetsByTerm);

    return (
        <ProviderDashboardFilter
            checkboxGroups={checkboxGroups}
            dashboardEntities={workspacesQuery}
            dashboardIndex={DASHBOARD_INDEX}
            facetsByTerm={facetsByTerm}
            resultKey={lunrIndexRefField}
            setOfSearchGroups={setOfSearchGroups}
            setOfTerms={setOfTerms}>
            <DataSearch/>
            <DataSummary/>
            <DataWorkspaces/>
        </ProviderDashboardFilter>
    )
}

export default DataDashboard;
